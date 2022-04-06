import { Box, Avatar, HStack, IconButton, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import logo from "../assets/spacelogo.svg";
import { ImMenu } from "react-icons/im";
import React from "react";

type Props = {
  onOpen: () => void;
};

const NavBar = (props: Props) => {
  return (
    <Box
      h="50px"
      w="100%"
      display="flex"
      bgColor="transparent"
      py={8}
      px={[4, 4, 0]}
      pl={[4, 4, 4]}
      alignItems="center"
      justifyContent="space-between"
      zIndex={5}
      position="fixed"
    >
      <Avatar name="logo" src={logo} size="md" />
      <Box
        w="36%"
        h="2px"
        bgColor="accent"
        position="absolute"
        left={36}
        display={["none", "none", "none", "block"]}
      ></Box>
      <HStack
        spacing={4}
        display={["none", "none", "flex"]}
        w={["0", "0", "70%", "55%"]}
        align="center"
        justify="space-between"
        bgColor="dark"
        px={4}
        h="inherit"
        fontSize="18px"
      >
        <NavLink
          to="/"
          style={({ isActive }) => ({
            borderBottom: isActive ? "2px solid white" : "none",
            padding: isActive ? "8px" : "4px",
            display: isActive ? "flex" : "flex",
          })}
        >
          <Text fontWeight="bolder" mr={2}>
            00
          </Text>
          Home
        </NavLink>
        <NavLink
          to="/destination"
          style={({ isActive }) => ({
            borderBottom: isActive ? "2px solid white" : "none",
            padding: isActive ? "8px" : "4px",
            display: isActive ? "flex" : "flex",
          })}
        >
          <Text fontWeight="bolder" mr={2}>
            01
          </Text>
          Destination
        </NavLink>
        <NavLink
          to="/crew"
          style={({ isActive }) => ({
            borderBottom: isActive ? "2px solid white" : "none",
            padding: isActive ? "8px" : "4px",
            display: isActive ? "flex" : "flex",
          })}
        >
          <Text fontWeight="bolder" mr={2}>
            02
          </Text>
          Crew
        </NavLink>
        <NavLink
          to="/technology"
          style={({ isActive }) => ({
            borderBottom: isActive ? "2px solid white" : "none",
            padding: isActive ? "8px" : "4px",
            display: isActive ? "flex" : "flex",
          })}
        >
          <Text fontWeight="bolder" mr={2}>
            03
          </Text>
          Technology
        </NavLink>
      </HStack>
      <IconButton
        aria-label="hamburger"
        icon={<ImMenu />}
        colorScheme="white"
        fontSize={28}
        display={["block", "block", "none"]}
        onClick={props.onOpen}
      />
    </Box>
  );
};

export default NavBar;
