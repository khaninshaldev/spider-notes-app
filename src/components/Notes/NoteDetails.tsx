import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import moment from "moment";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { notesState } from "../../atoms/notesState";
import { Note } from "../../types";

const NoteDetails = () => {
  const [editMode, setEditMode] = useState(false);
  const [notes, setNotes] = useRecoilState(notesState);
  const { noteId } = useParams();
  const currentNote: Note = notes.filter((note) => note.id === noteId)[0];
  const currentNoteIndex = notes.findIndex((note) => note === currentNote);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  useEffect(() => {
    onOpen();
  }, []);

  const time = moment(currentNote?.createdAt).format("hh:mm A");
  const date = moment(currentNote?.createdAt).format("dddd, DD-MMM-YYYY");

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const handleSave = () => {
    const updatedNote: Note = {
      id: currentNote?.id,
      createdAt: currentNote?.createdAt,
      content: textareaRef.current!.value,
    };

    const updatedNotesList: Note[] = [
      ...notes.slice(0, currentNoteIndex),
      updatedNote,
      ...notes.slice(currentNoteIndex + 1),
    ];

    setNotes(updatedNotesList);
    setEditMode(false);
  };

  const handleDelete = () => {
    const updatedNotesList: Note[] = [
      ...notes.slice(0, currentNoteIndex),
      ...notes.slice(currentNoteIndex + 1),
    ];

    setNotes(updatedNotesList);
    setEditMode(false);
    navigate("/");
  };
  return (
    <>
      <Drawer
        closeOnOverlayClick={false}
        onClose={() => {
          onClose();
          navigate("/");
        }}
        isOpen={isOpen}
        size="lg">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            Added at {time} on {date}.
          </DrawerHeader>
          <DrawerBody>
            <Flex flexDir="column" minH="100%">
              {editMode ? (
                <Textarea
                  ref={textareaRef}
                  defaultValue={currentNote?.content}></Textarea>
              ) : (
                <Text>{currentNote?.content}</Text>
              )}

              <Box mt="auto" alignSelf="flex-end" mb={4}>
                {editMode ? (
                  <Button onClick={handleSave} colorScheme="blue">
                    Save
                  </Button>
                ) : (
                  <Button onClick={() => setEditMode(true)} colorScheme="blue">
                    Edit
                  </Button>
                )}
                <Button onClick={handleDelete} ml={4} colorScheme="red">
                  Delete
                </Button>
              </Box>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default NoteDetails;
