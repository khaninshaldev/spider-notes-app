import { GridItem, Heading, Text, useDisclosure } from "@chakra-ui/react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { Note } from "../../types";
import NoteDetails from "./NoteDetails";

const NoteItem = ({ id, content, createdAt }: Note) => {
  const navigate = useNavigate();

  const date = moment(createdAt).fromNow();

  return (
    <>
      <GridItem
        onClick={() => navigate(`/${id}`)}
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
    </>
  );
};

export default NoteItem;
