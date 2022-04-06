import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  TabList,
  Tabs,
  Text,
  Tab,
  TabPanels,
  TabPanel,
  Stack,
  Circle,
  Image,
} from "@chakra-ui/react";
import { getTechData } from "../data/techData";

const Tech = () => {
  const techDatas = getTechData();
  const [screen, setScreen] = useState(window.innerWidth);
  // let style: string | Object = "none";
  // const handleBgChange = (id: number) => {
  //   if (id === 1 || id === 2 || id === 3) {
  //     style = { bgColor: "light", color: "dark" };
  //     return style;
  //   }
  // };
  const checkSize = () => {
    let size = window.innerWidth;
    setScreen(size);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);

    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, [screen]);

  return (
    <Box
      d="flex"
      alignItems={["center", "center", "center", "flex-start"]}
      flexDirection="column"
      position="relative"
      pt="6rem"
      px={["2", "2", "4", "8"]}
      className="tech"
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
          03
        </Text>
        <Text
          color="light"
          fontSize={["16px", "16px", "24px", "28px"]}
          fontWeight={400}
          textTransform="uppercase"
        >
          space launch 101
        </Text>
      </Flex>
      <Tabs
        isFitted
        variant="unstyled"
        mt={8}
        display="flex"
        flexDirection={["column", "column", "column", "row"]}
        alignItems="center"
        justifyContent={["center", "center", "center", "space-between"]}
      >
        <Stack
          spacing={4}
          direction={["column", "column", "column", "row"]}
          order={[1, 1, 1, 0]}
          mt={[2, 2, 2, 0]}
        >
          <TabList
            display="flex"
            flexDirection={["row", "row", "row", "column"]}
            w={["20%", "20%", "40%", "20%"]}
            h={["20%", "20%", "40%", "40%"]}
            mx="auto"
            
          >
            {techDatas.map((data) => {
              return (
                <Tab
                  key={data.id}
                  sx={{
                    borderRadius: "100%",
                    borderWidth: "1px",
                    borderColor: "accent",
                    color: "light",
                    fontSize: "24px",
                    fontFamily: "heading",
                    fontWeight: 400,
                  }}
                  _selected={{
                    color: "dark",
                    bgColor: "light",
                  }}
                >
                  {data.id}
                </Tab>
              );
            })}
          </TabList>
          <TabPanels>
            {techDatas.map((data) => {
              return (
                <TabPanel key={data.id}>
                  <Heading
                    as="h4"
                    fontFamily="body"
                    fontWeight="light"
                    color="accent"
                    fontSize={["14px", "16px"]}
                    textAlign={["center", "center", "center", "left"]}
                  >
                    THE TERMINOLOGY…
                  </Heading>
                  <Heading
                    fontWeight={400}
                    fontSize={["24px", "24px", "40px", "56px"]}
                    textAlign={["center", "center", "center", "left"]}
                  >
                    {data.heading}
                  </Heading>
                  <Text
                    textAlign={["center", "center", "center", "left"]}
                    fontSize={["15px", "16px", "16px", "18px"]}
                    lineHeight={["22px", "25px", "32px"]}
                  >
                    {data.body}
                  </Text>
                </TabPanel>
              );
            })}
          </TabPanels>
        </Stack>
        <TabPanels>
          {techDatas.map((data) => {
            return (
              <TabPanel>
                <Image
                  src={screen <= 768 ? data.imgMobile : data.imgDesktop}
                  alt={data.heading}
                  w={["100%", "100%", "80%"]}
                  h={["100%", "100%", "80%"]}
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

export default Tech;
