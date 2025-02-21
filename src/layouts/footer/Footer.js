import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
const Footer = () => {
  return (
    <Box sx={{ p: 3, textAlign: "center" }}>
      <Typography>
        © 2024 All rights reserved by{" "}
        <Link href="https://www.github.com/PRAKALP-PANDE" target="_blank">
          Nittya Groups
        </Link>{" "}
      </Typography>
    </Box>
  );
};

export default Footer;
