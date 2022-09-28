import { Flex, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { useRecoilValue } from "recoil";
import { notesState } from "../../atoms/notesState";
import NoteItem from "./NoteItem";

const NotesList = () => {
  const notes = useRecoilValue(notesState);

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      {notes.length != 0 ? (
        <>
          {notes.map((note) => {
            return (
              <NoteItem
                key={note.id}
                id={note.id}
                content={note.content}
                createdAt={note.createdAt}
              />
            );
          })}
        </>
      ) : (
        <p>Oh shit, you have no notes! :(</p>
      )}
    </Grid>
  );
};

export default NotesList;
