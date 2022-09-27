import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import NewBtn from "../Notes/NewBtn";

const Navbar: React.FC = () => {
  return (
    <Flex
      border="1px"
      borderTop="0"
      borderColor="gray.300"
      bgColor="white"
      mb={6}
      p={6}
      rounded="lg"
      as="header"
      position="sticky"
      top={0}>
      <Flex as="nav" w="full" justify="space-between" align="center">
        <Heading fontSize="lg">Spider-Notes</Heading>

        <NewBtn />
      </Flex>
    </Flex>
  );
};

export default Navbar;
