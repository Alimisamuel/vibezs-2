import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import bg from "../assets/img/vectors/btn_tree.svg";

// Define the custom styled button with the gradient fill
const GradientButton = styled(Button)({
  background:
    " linear-gradient(90deg, #00DAFF 0%, #31BAFD 16%, #7190FA 38%, #A46EF7 59%, #C856F5 76%, #DF47F4 91%, #E742F4 100%)",
  border: "0.5px solid #75007E",
  color: "white",
  height: "46px",
  padding: "0 30px",
  borderRadius: "12px",
  fontFamily: "outfit",
  fontWeight: 700,
  textTransform: "initial",
  "&:disabled": {
    color: "#fff",
  },
  //   boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
});

// Your component where you use the custom styled button
function CustomButtonGradient({ children, ...props }) {
  return (
    <GradientButton
      fullWidth
      {...props}
      sx={{ "&:disabled": { color: "#fff" } }}
    >
      {children}
    </GradientButton>
  );
}

export default CustomButtonGradient;
