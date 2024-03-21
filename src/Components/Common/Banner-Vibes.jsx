import React from "react";
import bg from "../../assets/img/vectors/vibes.svg";
import bg2 from "../../assets/img/vectors/bg-m.svg";
import launchImg from "../../assets/img/vectors/launch.png";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import CustomInput from "../CustomInput";
import playstore from "../../assets/img/vectors/googlestore.svg";
import applestore from "../../assets/img/vectors/appstore.svg";
import mock from "../../assets/img/vectors/laptop.png";
const BannerVibes = () => {
  const theme = useTheme();
  const isTab = useMediaQuery(theme.breakpoints.down("1271"));
  const isSM = useMediaQuery(theme.breakpoints.down("700"));
  return (
    <>
      {isSM ? (
        <>
          <Box
            sx={{
              height: "fit-content",
              boxSizing: "border-box",
              width: "100%",
              background: `url('${bg}')`,
              backgroundSize: "contain",
              backgroundPositionY: { md: "50px", lg: "20px", xs: "100px" },
              backgroundPositionX: "center",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed ",
              transition: "0.2s all linear",
            }}
          >
            <Box
              sx={{
                width: "90%",
                margin: "0 auto",
                mt: 10,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",

                pt: 7,
              }}
            >
              <img src={launchImg} width={150} />
              <Typography
                className="     text_3_m"
                sx={{
                  color: "#151515",
                  fontWeight: 800,
                  fontSize: { lg: "48px", md: "40px", xs: "32px" },
                  lineHeight: "45px",
                  textAlign: "center",
                  mt: 3,
                }}
              >
                A{" "}
                <span className="text">
                  P<span className="text_2_m">o</span>werful Dashboard{" "}
                </span>
                to Manage, Generate and Review Boo
                <span className="">king Leads. </span>
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              height: "230px",
              width: "100%",
              mt: 5,
              background: `url('${mock}')`,
              backgroundSize: "1200px",
              backgroundPositionY: "-50px",
              backgroundPositionX: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></Box>
        </>
      ) : (
        <>
          <Box
            sx={{
              height: "fit-content",
              boxSizing: "border-box",
              width: "100%",
              background: `url('${bg}')`,
              backgroundSize: "contain",
              backgroundPositionY: { md: "100px", lg: "120px", sm: "100px" },
              backgroundPositionX: "center",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed ",
              transition: "0.2s all linear",
              border: {
                // lg: "5px solid",
                // md: "15px solid red",
                // sm: "10px  solid",
                // xs: "20px solid",
              },
            }}
          >
            <Box
              sx={{
                width: "70%",
                margin: "0 auto",
                mt: 15,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                pt: 9,
                // py: 17,
              }}
            >
              <img src={launchImg} width={150} />
              <Typography
                sx={{
                  color: "#151515",
                  fontWeight: 800,
                  fontSize: { lg: "48px", md: "40px", sm: "26px" },
                  lineHeight: "60px",
                  textAlign: "center",
                  mt: 3,
                }}
              >
                A{" "}
                <span className="text">
                  P<span className="text_2">o</span>werful Dashboard{" "}
                </span>
                to Manage, <br />
                Generate and Review Boo
                <span className="text_3">king Leads. </span>
              </Typography>

              <Box
                sx={{
                  height: "400px",
                  width: "100%",
                  mt: 5,
                  background: `url('${mock}')`,
                  backgroundSize: "1700px",
                  backgroundPositionY: "-50px",
                  backgroundPositionX: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></Box>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default BannerVibes;
