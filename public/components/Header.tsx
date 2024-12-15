import React from "react";
import MenuItem from "./MenuItem";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Link from "next/link";
import { Box } from "@mui/material";
import { amber } from "@mui/material/colors";

const Header = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      p={3}
      mx={"auto"}
      maxWidth={"1152px"}
    >
      <Box display={"flex"} gap={4}>
        <MenuItem title="home" address="/" Iconb={HomeOutlinedIcon} />
        <MenuItem title="Likes" address="/likes" Iconb={HomeOutlinedIcon} />
      </Box>
      <Box display={"flex"} gap={4} alignItems={"center"}>
        {/* <DarkModeSwitch /> */}
        <Box display={"flex"} alignItems={"center"} gap={1}>
          <Link href={"/"}>
            <Box
              fontSize={25}
              fontWeight={"bold"}
              py={1}
              px={2}
              borderRadius={"8px"}
            >
              NinjaFlix
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
