import React from "react";
import { Flex, Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      h="100vh"
      bgColor="dark"
      w="100%"
    >
      <Spinner
        thickness="10px"
        speed="0.75s"
        emptyColor="gray.50"
        color="purple"
        size="xl"
      />
    </Flex>
  );
};

export default Loading;
