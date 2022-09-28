import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import NoteDetails from "./components/Notes/NoteDetails";
import Home from "./containers/Home";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/:noteId" element={<NoteDetails />} />
          </Route>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default App;
