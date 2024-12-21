"use client";

import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../styles/theme";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body>
        <ThemeProvider  theme={theme}>
         {/* Normalize CSS and apply baseline styles */}
         <CssBaseline />
          {/* Render the rest of the app */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
