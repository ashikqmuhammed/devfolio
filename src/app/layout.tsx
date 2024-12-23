"use client";

import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import  { darkTheme, lightTheme } from "../styles/theme";
import BottomAppBar from "@/components/BottomAppBar";
import { useMemo } from "react";
import { useMediaQuery } from "@mui/material";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(() => (prefersDarkMode ? darkTheme : lightTheme), [
    prefersDarkMode,
  ]);
  return (
    <html lang="en">

      <body>
        <ThemeProvider  theme={theme}>
         <CssBaseline />
       
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <main style={{ flex: 1 }}>{children}</main>
          
          <BottomAppBar />
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}


