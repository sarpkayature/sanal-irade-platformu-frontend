"use client";
import "./globals.css";
import { ReactNode } from "react";
import { Theme } from "./common/config/theme/themes";

import { ThemeProvider, CssBaseline } from "@mui/material";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}
