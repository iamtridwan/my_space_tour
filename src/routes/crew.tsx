import React from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Tab,
  Circle,
  Image,
  VStack,
  Divider,
} from "@chakra-ui/react";
import "../components/styles/style.css";
import { getCrewData } from "../data/crewData";

const Crew = () => {
  const crew = getCrewData();
  return (
    <Box
      d="flex"
      alignItems={["center", "center", "center", "flex-start"]}
      flexDirection="column"
      position="relative"
      pt="6rem"
      px={["2", "2", "4", "8"]}
      className="crew"
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
          02
        </Text>
        <Text
          color="light"
          fontSize={["16px", "16px", "24px", "28px"]}
          fontWeight={400}
          textTransform="uppercase"
        >
          Meet your crew
        </Text>
      </Flex>

      <Tabs
        mt={[2, 2, 2, 4]}
        isFitted
        variant="soft-rounded"
        w={["90%", "90%", "70%", "100%"]}
        mx="auto"
        display="flex"
        flexDirection={["column", "column", "column", "row"]}
        alignItems="center"
        justifyContent={["center", "center", "center", "space-between"]}
      >
        <VStack
          spacing={4}
          alignItems={["center", "center", "center", "flex-start"]}
          justifyContent={["center", "center", "center", "flex-start"]}
          order={[1, 1, 0]}
        >
          <Divider display={["block", "block", "none"]} />
          <TabPanels order={[1, 1, 0]} w={["100%", "100%", "100%", "90%"]}>
            {crew.map((c) => {
              return (
                <TabPanel key={c.id}>
                  <Heading
                    as="h5"
                    fontWeight={400}
                    color="accent"
                    fontSize={["16px", "16px", "24px", "32px"]}
                    textAlign={["center", "center", "center", "left"]}
                    mb={2}
                  >
                    {c.job_title.toUpperCase()}
                  </Heading>
                  <Heading
                    fontWeight={400}
                    fontSize={["24px", "24px", "40px", "56px"]}
                    textAlign={["center", "center", "center", "left"]}
                  >
                    {c.full_name.toUpperCase()}
                  </Heading>
                  <Text
                    fontSize={["15px", "15px", "16px", "18px"]}
                    my={2}
                    textAlign={["center", "center", "center", "left"]}
                    w={["100%", "100%", "100%", "70%"]}
                    lineHeight={["22px", "25px", "32px"]}
                  >
                    {c.history}
                  </Text>
                </TabPanel>
              );
            })}
          </TabPanels>
          <TabList>
            {crew.map((c) => {
              return (
                <Tab key={c.id} alignItems={["center", "center", "center", "flex-start"]} _selected ={{ bgColor: "light"}}>
                  <Circle bgColor="light" size="4" m={0} />
                </Tab>
              );
            })}
          </TabList>
        </VStack>
        <TabPanels order={[0, 0, 1]}>
          {crew.map((c) => {
            return (
              <TabPanel key={c.id}>
                <Image
                  src={c.img}
                  alt={c.full_name}
                  fit="contain"
                  w={["100%", "100%", "80%", "50%"]}
                  h={["100%", "100%", "80%", "50%"]}
                  mx="auto"
                />
              </TabPanel>
            );
          })}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Crew;
