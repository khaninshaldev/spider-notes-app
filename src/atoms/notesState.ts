import { atom } from "recoil";
import { Note } from "../types";

export const notesState = atom<Note[]>({
  key: "NotesState",
  default: [],
});
