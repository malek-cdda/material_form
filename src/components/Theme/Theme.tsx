"use client";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import React from "react";
const themes = [
  createTheme({
    palette: {
      type: "light",
      primary: {
        main: "#f44336",
      },
    },
  }),
  createTheme({
    palette: {
      type: "light",
      primary: {
        main: "#2196f3",
      },
      secondary: {
        main: "#ff9800",
      },
    },
  }),
  createTheme({
    palette: {
      type: "light",
      primary: {
        main: "#9c27b0",
      },
    },
  }),
];
const Theme = ({ children }: any) => {
  return (
    <ThemeProvider theme={themes[1]}>
      {/* Your components go here */}
      {children}
    </ThemeProvider>
  );
};

export default Theme;
