import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Layout/Navbar";
import NotesList from "../components/Notes/NotesList";

const Home = () => {
  return (
    <>
      <Box as="main" mx="auto" px={6} width="90%" maxW="1440px">
        <Navbar />
        <NotesList />
      </Box>
      <Outlet />
    </>
  );
};

export default Home;
