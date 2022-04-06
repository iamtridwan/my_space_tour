import {
  Box,
  VStack,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerBody,
  DrawerCloseButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box w="100%" position="relative" color="light">
        <Drawer isOpen={isOpen} onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent
            bgGradient="linear(dark, light)"
            w="100%"
            color="light"
            fontSize="18px"
          >
            <DrawerCloseButton />
            <DrawerBody mt={10}>
              <VStack spacing={6}>
                <NavLink
                  to="/"
                  onClick={onClose}
                  style={({ isActive }) => ({
                    padding: isActive ? "1rem 0" : "1rem 0",
                    borderBottom: isActive ? "2px solid light" : "none",
                    display: isActive ? "flex" : "flex",
                  })}
                >
                  <Text fontWeight="bolder" mr={2}>
                    00
                  </Text>
                  Home
                </NavLink>
                <NavLink
                  to="destination"
                  onClick={onClose}
                  style={({ isActive }) => ({
                    padding: isActive ? "1rem 0" : "1rem 0",
                    borderBottom: isActive ? "2px solid light" : "none",
                    display: isActive ? "flex" : "flex",
                  })}
                >
                  <Text fontWeight="bolder" mr={2}>
                    01
                  </Text>
                  Destination
                </NavLink>
                <NavLink
                  to="crew"
                  onClick={onClose}
                  style={({ isActive }) => ({
                    padding: isActive ? "1rem 0" : "1rem 0",
                    borderBottom: isActive ? "2px solid light" : "none",
                    display: isActive ? "flex" : "flex",
                  })}
                >
                  <Text fontWeight="bolder" mr={2}>
                    02
                  </Text>
                  Crew
                </NavLink>
                <NavLink
                  to="technology"
                  onClick={onClose}
                  style={({ isActive }) => ({
                    padding: isActive ? "1rem 0" : "1rem 0",
                    borderBottom: isActive ? "2px solid light" : "none",
                    display: isActive ? "flex" : "flex",
                  })}
                >
                  <Text fontWeight="bolder" mr={2}>
                    03
                  </Text>
                  Technology
                </NavLink>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <NavBar onOpen={onOpen} />
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
