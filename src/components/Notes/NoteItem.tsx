import { GridItem, Heading, Text, useDisclosure } from "@chakra-ui/react";
import moment from "moment";
import { Note } from "../../types";
import NoteDetails from "./NoteDetails";

const NoteItem = ({ id, content, createdAt }: Note) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const date = moment(createdAt).fromNow();

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
        id={id}
        content={content}
        createdAt={createdAt}
        onClose={onClose}
        isOpen={isOpen}
      />
    </>
  );
};

export default NoteItem;
