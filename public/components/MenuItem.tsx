import {
  Box,
  ExtendButtonBase,
  Hidden,
  IconButton,
  IconButtonTypeMap,
  SvgIconTypeMap,
  Typography,
} from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import Link from "next/link";

export default function MenuItem({
  title,
  address,
  Iconb,
}: {
  title: string;
  address: string;
  Iconb: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
}) {
  return (
    <Link href={address}>
      <IconButton
        sx={{
          p: 1,
          fontsize: 16,
          display: { xs: "block", sm: "block", md: "none" },
        }}
      >
        <Iconb />
      </IconButton>
      <Typography
        sx={{
          textTransform: "uppercase",
          display: { xs: "none", sm: "none", md: "block" },
        }}
      >
        {title}
      </Typography>
    </Link>
  );
}
