import React from "react";
import { Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

type Props = {};

const NotFound = (props: Props) => {
  let navigate = useNavigate();
  return (
    <>
      <Text>Hello you are at a wrong destination</Text>
      <Button
        p="2"
        bgColor="dark"
        color="light"
        fontSize="lg"
        onClick={() => navigate("/")}
      >
        Back to Home
      </Button>
    </>
  );
};

export default NotFound;
