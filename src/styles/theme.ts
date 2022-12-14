import { extendTheme } from "@chakra-ui/react";

const colors = {
  background: "#454545",
  gray: {
    100: "#F2F2F2",
    200: "#D9D9D9",
    300: "#808080",
    400: "#333333",
    500: "#262626",
    600: "#1A1A1A",
    700: "#0D0D0D",
  },
  purple: "#8284FA",
  purpleDark: "#5E60CE",
  blue: "#4EA8DE",
  blueDark: "#1E6F9F",
  danger: "#E25858",
};

const components = {
  Divider: {
    baseStyle: {
      borderColor: "gray.400",
      borderWidth: "1px",
    },
  },
};

export const theme = extendTheme({ colors, components });
