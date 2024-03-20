import { AppBar, Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo/logo2.svg";
import CustomButton from "../CustomButton";
import buildIcon from "../../assets/img/vectors/building.svg";

const Navbar = () => {
  return (
    <>
      <AppBar sx={{ background: "#fff", boxShadow: "none" }}>
        <Box
          sx={{
            p: 3,
            width: { md: "75%", xs: "90%" },
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link to="/">
            <img src={logo} width={50} />
          </Link>
          <CustomButton>
            <img src={buildIcon} style={{ marginRight: "8px" }} width={15} />
            <Typography
              sx={{
                color: "#fff",
                fontSize: { md: "14px", xs: "10px" },
                fontWeight: 500,
              }}
            >
              For Vendors
            </Typography>
          </CustomButton>
        </Box>
      </AppBar>
    </>
  );
};

export default Navbar;
