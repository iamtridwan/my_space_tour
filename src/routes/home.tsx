import React, { useState } from "react";
import { Box, Heading, Text, Flex, Button, Circle } from "@chakra-ui/react";
import "../components/styles/style.css";
import { useNavigate } from "react-router-dom";
// import NavBar from "../components/NavBar";
type Props = {};

const Home = (props: Props) => {
  const [circle, setCircle] = useState(false);
  let navigate = useNavigate();
  return (
    <>
      {/* <NavBar /> */}
      <Flex
        w="100%"
        h="100vh"
        position="absolute"
        top="0"
        left={0}
        className="home"
        align={["center", "center", "center", "center"]}
        justify={["center", "center", "center", "space-between"]}
        direction={["column", "column", "column", "row"]}
        pt={20}
        px={[6, 6, 10, 12, 24]}
      >
        <Box w={["90%", "90%", "80%", "48%"]}>
          <Text
            fontSize={["16px", "16px", "24px", "28px"]}
            color="accent"
            mb={4}
            textAlign={["center", "center", "center", "left"]}
          >
            SO, YOU WANT TO TRAVEL TO
          </Text>
          <Heading
            color="light"
            fontSize={["80px", "80px", "150px"]}
            fontWeight={400}
            textAlign={["center", "center", "center", "left"]}
          >
            SPACE
          </Heading>
          <Text
            color="accent"
            textAlign={["center", "center", "center", "left"]}
            w={["100%", "100%", "100%", "80%"]}
            fontSize={["16px", "16px", "16px", "18px"]}
            lineHeight={["22px", "25px", "32px"]}
          >
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </Text>
        </Box>
        <Box
          position="relative"
          w={["150px", "190px", "284px", "294px"]}
          h={["150px", "190px", "284px", "294px"]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          mt={[4, 4, 6, 0]}
        >
          {circle && (
            <Circle
              size={["150px", "190px", "284px", "294px"]}
              bgColor="accent"
              position="absolute"
              top={0}
              left={0}
              opacity={0.5}
            ></Circle>
          )}
          <Button
            w={["120px", "150px", "242px", "247px"]}
            h={["120px", "150px", "242px", "247px"]}
            bgColor="light"
            color="dark"
            rounded="full"
            fontSize={["20px", "20px", "32px"]}
            d="block"
            fontFamily="heading"
            fontWeight={400}
            onClick={() => {
              setCircle(!circle);
              setTimeout(() => {
                navigate("/destination");
              }, 500);
            }}
          >
            EXPLORE
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default Home;
