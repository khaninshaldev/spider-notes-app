import { Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import NewNoteModal from "./NewNoteModal";

const NewBtn: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>New</Button>

      <NewNoteModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default NewBtn;
