import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import bg from "../assets/img/vectors/btn_tree.svg";

// Define the custom styled button with the gradient fill
const GradientButton = styled(Button)({
  backgroundImage: `url('${bg}')`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPositionY: "50px",
  backgroundColor: "#75007E",
  border: "0.5px solid #75007E",
  borderRadius: 3,
  color: "white",
  height: 42,
  padding: "0 30px",
  borderRadius: "6px",
  fontFamily: "outfit",
  fontWeight: 700,
  textTransform: "initial",
  transition: "0.4s all ease-in",
  "&:hover": {
    backgroundColor: "#75007E",
    backgroundPositionY: "bottom",
  },
  //   boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
});

// Your component where you use the custom styled button
function CustomButton({ children, ...props }) {
  return <GradientButton {...props}>{children}</GradientButton>;
}

export default CustomButton;
