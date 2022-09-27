import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from "@chakra-ui/react";
import React, { ChangeEvent, FormEventHandler, useRef } from "react";
import { useSetRecoilState } from "recoil";
import { notesState } from "../../atoms/notesState";
import { nanoid } from "nanoid";

interface IProps {
  onClose: () => void;
  isOpen: boolean;
}

const NewNoteModal = ({ isOpen, onClose }: IProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const setNotes = useSetRecoilState(notesState);

  const handleSaveNote: FormEventHandler = (e: ChangeEvent) => {
    e.preventDefault();
    const content = textareaRef.current!.value;
    setNotes((notes) => [
      ...notes,
      { id: nanoid(), content, createdAt: new Date() },
    ]);

    onClose();
  };

  return (
    <Modal
      size="xl"
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInBottom"
      isCentered>
      <form onSubmit={handleSaveNote}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a new Spider-Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Content:</FormLabel>
              <Textarea ref={textareaRef} resize="none" required></Textarea>
              <FormHelperText>
                Your notes are only saved on your device.
              </FormHelperText>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button type="submit" variant="solid" colorScheme="blue">
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
};

export default NewNoteModal;
