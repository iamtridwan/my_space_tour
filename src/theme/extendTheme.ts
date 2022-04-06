import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    dark: "#0B0D17",
    light: "#FFFFFF",
    accent: "#D0D6F9",
  },
  fonts: {
    heading: "Bellefair, serif",
    body: "Barlow Condensed,  san-serif",
  },
});

export default theme;
