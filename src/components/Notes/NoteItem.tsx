import { GridItem, Heading, Text, useDisclosure } from "@chakra-ui/react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { Note } from "../../types";
import NoteDetails from "./NoteDetails";

const NoteItem = ({ id, content, createdAt }: Note) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const date = moment(createdAt).fromNow();
  const navigate = useNavigate();

  return (
    <>
      <GridItem
        onClick={onOpen}
        p={6}
        bgColor="blue.600"
        color="white"
        cursor="pointer"
        rounded="lg"
        transition="all ease 250ms"
        _hover={{
          bgColor: "blue.500",
        }}>
        <Heading fontSize="xl">{content}</Heading>
        <Text>Added: {date}</Text>
      </GridItem>

      <NoteDetails
        content={content}
        createdAt={createdAt}
        onOpen={onOpen}
        onClose={onClose}
        isOpen={isOpen}
      />
    </>
  );
};

export default NoteItem;
