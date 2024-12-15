"use client";
import React from "react";
import { useMode } from "@/public/components/useMode";
import Topbar from "@/public/global/Topbar";
import { ColorModeContext } from "@/public/components/ColorModeContext";
import { CssBaseline, ThemeProvider } from "@mui/material";
import SideBar from "../global/SideBar";

const InitializeTheme = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Topbar />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default InitializeTheme;
