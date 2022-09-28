import { atom } from "recoil";
import { Note } from "../types";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const notesState = atom<Note[]>({
  key: "NotesState",
  default: [],
  effects: [persistAtom],
});
