import type { Metadata } from "next";
import "./globals.css";
import Header from "@/public/components/Header";
import { Box } from "@mui/material";

export const metadata: Metadata = {
  title: "NinjaFlix",
  description: "MOVIE DATABASE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <Box sx={{ backgroundColor: "#10141f" }}> */}
        <Header />
        {children}
        {/* </Box> */}
      </body>
    </html>
  );
}
