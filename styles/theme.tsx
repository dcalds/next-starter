import { ThemeProvider } from "styled-components";

const theme = {
  fonts: {
    primary: "PT Sans",
  },
  colors: {
    c0: "#A8E0FF",
    c1: "#249ADD",
    c2: "#025A8B",
    c3: "#0f425f",
    ice: "#fafafa",
    white: "#fff",
    black: "#000",
    gray: "#777",
  },
};
export type ThemeType = typeof theme;

export const Theme: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
