import React from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Divider,
  Stack,
} from "@chakra-ui/react";
import "../components/styles/style.css";
import { getDestinationData } from "../data/destinationData";

const Destination = () => {
  const data = getDestinationData();

  return (
    <Box
      d="flex"
      alignItems={["center", "center", "center", "flex-start"]}
      flexDirection="column"
      position="relative"
      pt="6rem"
      px={["2", "2", "4", "8"]}
      className="destination"
      minH="100vh"
    >
      <Flex>
        <Text
          color="accent"
          mr={2}
          fontSize={["16px", "16px", "24px", "28px"]}
          fontWeight={700}
          opacity={0.6}
        >
          01
        </Text>
        <Text
          color="light"
          fontSize={["16px", "16px", "24px", "28px"]}
          fontWeight={400}
          textTransform="uppercase"
        >
          Pick your destination
        </Text>
      </Flex>

      <Tabs
        mt={[2, 2, 2, 4]}
        isFitted
        variant="soft-rounded"
        w={["80%", "80%", "60%", "80%"]}
        mx={["auto", "auto", "auto", "0"]}
        display="flex"
        flexDirection={["column", "column", "column", "row"]}
        alignItems="center"
        justifyContent={["center", "center", "center", "space-between"]}
      >
        <TabPanels my={[2, 2, 2, 0]}>
          {data.map((d) => {
            return (
              <TabPanel key={d.id}>
                <Image
                  src={d.img}
                  alt={d.title}
                  fit="contain"
                  w={["100%", "100%", "80%", "70%"]}
                  h={["100%", "100%", "80%", "70%"]}
                  mx="auto"
                />
              </TabPanel>
            );
          })}
        </TabPanels>
        <Box w={["100%", "100%", "100%", "70%"]}>
          <TabList>
            {data.map((d) => {
              return (
                <Tab key={d.id} _selected={{ color: "accent" }} fontSize="1rem">
                  {d.title}
                </Tab>
              );
            })}
          </TabList>
          <TabPanels>
            {data.map((d) => {
              return (
                <TabPanel key={d.id}>
                  <Heading
                    fontSize={["56px", "56px", "80px", "100px"]}
                    fontFamily="heading"
                    fontWeight="400"
                    textAlign={["center", "center", "center", "left"]}
                  >
                    {d.title}
                  </Heading>
                  <Text
                    color="accent"
                    fontSize={["15px", "15px", "16px", "18px"]}
                    my={4}
                    textAlign={["center", "center", "center", "left"]}
                    lineHeight={["22px", "25px", "32px"]}
                  >
                    {d.description}
                  </Text>
                  <Divider />
                  <Stack
                    direction={["column", "column", "row"]}
                    mt={4}
                    align="center"
                    spacing={4}
                    justify={["center", "center", "space-between"]}
                  >
                    <Box>
                      <Text
                        fontSize="14px"
                        color="accent"
                        textAlign={["center", "center", "center", "left"]}
                      >
                        AVG. DISTANCE
                      </Text>
                      <Heading
                        as="h3"
                        fontSize="28px"
                        fontWeight={400}
                        textTransform="uppercase"
                        textAlign={["center", "center", "center", "left"]}
                      >
                        {d.distance}
                      </Heading>
                    </Box>
                    <Box>
                      <Text
                        textTransform="uppercase"
                        fontSize="14px"
                        color="accent"
                        textAlign={["center", "center", "center", "left"]}
                      >
                        Est. travel time
                      </Text>
                      <Heading
                        as="h3"
                        fontSize={["22px", "22px", "28px"]}
                        fontWeight={400}
                        textTransform="uppercase"
                        textAlign={["center", "center", "center", "left"]}
                      >
                        {d.time}
                      </Heading>
                    </Box>
                  </Stack>
                </TabPanel>
              );
            })}
          </TabPanels>
        </Box>
      </Tabs>
    </Box>
  );
};

export default Destination;
