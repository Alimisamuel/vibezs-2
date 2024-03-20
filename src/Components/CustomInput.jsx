import {
  InputAdornment,
  TextField,
  useMediaQuery,
  useTheme,
  Box,
  LinearProgress,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import { waitlist } from "../assets/img/api";
import CustomButtonGradient from "./CustomButtonGradient";

const CustomInput = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(800));
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const validateEmail = (email) => {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    setError(!validateEmail(value)); // Set error if email is not valid
  };

  const handleWaitlist = async () => {
    setSuccess(false);
    setIsLoading(true);
    await waitlist(email)
      .then((res) => {
        setIsLoading(false);
        setSuccess(true);
        console.log(res);
      })
      .catch((err) => {
        setIsLoading(false);
        setSuccess(false);
        console.log(err);
      });
  };

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess(false);
        setEmail("");
      }, 3000);
    }
  }, [success]);
  return (
    <>
      {isMobile ? (
        <>
          <TextField
            placeholder="Enter your email address"
            fullWidth
            value={email}
            onChange={handleInputChange}
            InputProps={{
              style: {
                border: "0.6px solid #F489FD",
                borderRadius: "7px",
                color: "#8f8f8f",
                height: "54px",
                fontFamily: "outfit",
                background: "transparent",
              },
            }}
          />
          <Box sx={{ width: "70%", margin: "0 auto", mt: 1 }}>
            {error ? (
              <CustomButtonGradient disabled sx={{ mt: 1, width: "70%" }}>
                Not a valid email
              </CustomButtonGradient>
            ) : isLoading ? (
              <CustomButtonGradient disabled sx={{ mt: 1, width: "70%" }}>
                <LinearProgress sx={{ width: "60px" }} />
              </CustomButtonGradient>
            ) : (
              <CustomButtonGradient onClick={handleWaitlist}>
                {success ? "Thanks 🤍" : "Join the waitlist"}
              </CustomButtonGradient>
            )}
          </Box>
        </>
      ) : (
        <TextField
          fullWidth
          placeholder="Enter your email address"
          value={email}
          onChange={handleInputChange}
          InputProps={{
            style: {
              border: "1px solid #75007E",
              borderRadius: "12px",
              color: "#8f8f8f",
              fontFamily: "outfit",
              height: "60px",
              background: "transparent",
            },
            endAdornment: (
              <InputAdornment position="end" sx={{ mr: -1 }}>
                {error ? (
                  <CustomButtonGradient
                    disabled
                    sx={{ "&:disabled": { color: "#fff" } }}
                  >
                    Not a valid email
                  </CustomButtonGradient>
                ) : isLoading ? (
                  <CustomButtonGradient disabled>
                    {" "}
                    <LinearProgress sx={{ width: "60px" }} />{" "}
                  </CustomButtonGradient>
                ) : (
                  <CustomButtonGradient onClick={handleWaitlist}>
                    {success ? "Thanks 🤍" : "Join the waitlist"}{" "}
                  </CustomButtonGradient>
                )}
              </InputAdornment>
            ),
          }}
        />
      )}
    </>
  );
};

export default CustomInput;
