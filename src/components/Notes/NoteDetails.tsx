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
} from "@chakra-ui/react";
import moment from "moment";
import { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { notesState } from "../../atoms/notesState";

const NoteDetails = ({
  id,
  content,
  createdAt,
  onClose,
  isOpen,
}: {
  id: string;
  content: string;
  createdAt: Date;
  onClose: () => void;
  isOpen: boolean;
}) => {
  const [editMode, setEditMode] = useState(false);
  const [notes, setNotes] = useRecoilState(notesState);

  const currentNote = notes.filter((note) => note.id === id)[0];
  const currentNoteIndex = notes.findIndex((note) => note === currentNote);

  const time = moment(createdAt).format("hh:mm A");
  const date = moment(createdAt).format("dddd, DD-MMM-YYYY");

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const handleSave = () => {
    const updatedNote = { ...currentNote, content: textareaRef.current!.value };

    const updatedNotesList = [
      ...notes.slice(0, currentNoteIndex),
      updatedNote,
      ...notes.slice(currentNoteIndex + 1),
    ];

    setNotes(updatedNotesList);
    setEditMode(false);
  };

  const handleDelete = () => {
    const updatedNotesList = [
      ...notes.slice(0, currentNoteIndex),
      ...notes.slice(currentNoteIndex + 1),
    ];

    setNotes(updatedNotesList);
    setEditMode(false);
  };
  return (
    <>
      <Drawer onClose={onClose} isOpen={isOpen} size="lg">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            Added at {time} on {date}.
          </DrawerHeader>
          <DrawerBody>
            <Flex flexDir="column" minH="100%">
              {editMode ? (
                <Textarea ref={textareaRef} defaultValue={content}></Textarea>
              ) : (
                <Text>{content}</Text>
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
