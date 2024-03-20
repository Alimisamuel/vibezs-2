import React from "react";
import bg from "../../assets/img/vectors/bg.svg";
import bg2 from "../../assets/img/vectors/bg-m.svg";
import launchImg from "../../assets/img/vectors/launch.png";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import CustomInput from "../CustomInput";
import playstore from "../../assets/img/vectors/googlestore.svg";
import applestore from "../../assets/img/vectors/appstore.svg";
const Banner = () => {
  const theme = useTheme();
  const isTab = useMediaQuery(theme.breakpoints.down("1271"));
  const isSM = useMediaQuery(theme.breakpoints.down("1131"));
  return (
    <>
      {isSM ? (
        <>
          <Box
            sx={{
              height: "fit-content",
              boxSizing: "border-box",
              width: "100%",
              background: `url('${bg2}')`,
              backgroundSize: "contain",
              backgroundPositionY: { md: "100px", lg: "40px", xs: "100px" },
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
                width: "90%",
                margin: "0 auto",
                mt: 10,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",

                py: 7,
              }}
            >
              <img src={launchImg} width={150} />
              <Typography
                sx={{
                  color: "#151515",
                  fontWeight: 800,
                  fontSize: { lg: "48px", md: "40px", xs: "32px" },
                  lineHeight: "45px",
                  textAlign: "center",
                  mt: 3,
                }}
              >
                Book & Reserve the most <span className="text_2">e</span>
                xclusive Tables at the
                <span className="text_3">
                  <span className="text"> Elitist Spots </span>
                </span>
                in your City🌴
              </Typography>
              <Typography
                sx={{
                  color: "#000000b7",
                  fontWeight: 600,
                  mt: 3,
                  fontSize: { md: "22px", sm: "18px" },
                }}
              >
                Use VibezsUp to Find your Happy Place
              </Typography>

              <Box sx={{ mt: 3, width: "100%" }}>
                <CustomInput />
              </Box>
              <Box
                sx={{
                  mt: 3,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  columnGap: 3,
                }}
              >
                <img src={applestore} />
                <img src={playstore} />
              </Box>
            </Box>
          </Box>
        </>
      ) : (
        <>
          <Box
            sx={{
              height: "fit-content",
              boxSizing: "border-box",
              width: "100%",
              background: `url('${bg}')`,
              backgroundSize: { md: "auto 1400px", sm: " auto 1300px" },
              backgroundPositionY: { md: "100px", lg: "40px", sm: "100px" },
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
                py: 17,
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
                Book & Reserve the most <span className="text_2">e</span>
                xclusive <br /> Tables at the
                <span className="text_3">
                  <span className="text"> Elitist Spots </span>
                </span>
                in your City🌴
              </Typography>
              <Typography
                sx={{
                  color: "#000000b7",
                  fontWeight: 600,
                  mt: 5,
                  fontSize: { md: "22px", sm: "18px" },
                }}
              >
                Use VibezsUp to Find your Happy Place
              </Typography>

              <Box sx={{ mt: 10, width: { md: "50%", sm: "70%" } }}>
                <CustomInput />
              </Box>
              <Box
                sx={{
                  mt: 5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  columnGap: 3,
                }}
              >
                <img src={applestore} />
                <img src={playstore} />
              </Box>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default Banner;
