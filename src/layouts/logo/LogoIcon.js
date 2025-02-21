import React from "react";
import { Link } from "@mui/material";
import Image from "next/image";
import logo from "../../../public/logo.png"

const LogoIcon = () => {
  return (
    <Link href="/">
      <Image src={logo} alt="admin" />
      {/* InstaShop Admin */}
    </Link>
  );
};

export default LogoIcon;
