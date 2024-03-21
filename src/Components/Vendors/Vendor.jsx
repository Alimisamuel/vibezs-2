import React from "react";
import Navbar from "../Common/Navbar";
import BannerVibes from "../Common/Banner-Vibes";
import { Box, Typography, Grid, useMediaQuery, useTheme } from "@mui/material";
import bg from "../../assets/img/vectors/bg2.svg";
import img1 from "../../assets/img/brand/4.png";
import img2 from "../../assets/img/brand/8.png";
import img3 from "../../assets/img/brand/3.png";
import img4 from "../../assets/img/brand/11.png";
import img5 from "../../assets/img/brand/12.png";
import mock1 from "../../assets/img/vectors/m-mock1.png";
import mock2 from "../../assets/img/vectors/m-mock2.png";
import mock3 from "../../assets/img/vectors/m-mock3.png";
import line from "../../assets/img/vectors/line.svg";
import { AnimeConfig } from "../../assets/img/anime/AnimeConfig";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FooterVendor from "../Common/FooterVendor";

const Vendor = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const settings = {
    dots: false,
    Infinite: true,
    arrows: false,
    slidesToShow: isMobile ? 8 : 15,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  const settings2 = {
    dots: false,
    Infinite: true,
    arrows: false,
    slidesToShow: isMobile ? 8 : 15,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    rtl: true,
  };
  return (
    <>
      <Navbar isVendor={true} />
      <BannerVibes />
      {isMobile ? (
        <>
          <Box sx={{ bgcolor: "#151515" }}>
            <Box
              sx={{
                width: "90%",
                margin: "0 auto",
                height: "100%",
              }}
            >
              <Typography
                sx={{
                  pt: 5,
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "16px",
                  textAlign: "center",
                }}
              >
                Trusted By Top Upscale Fine-Dining <br />& Exoctic Lounges
              </Typography>
              <Box
                sx={{
                  mt: 3,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <img src={img1} width={60} />
                <img src={img2} width={50} />
                <img src={img3} width={50} />
              </Box>
              <Box
                sx={{
                  mt: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <img src={img4} width={50} />
                <img src={img5} width={50} />
              </Box>
            </Box>
          </Box>
        </>
      ) : (
        <>
          <Box sx={{ height: "200px", bgcolor: "#151515" }}>
            <Box
              sx={{
                width: "75%",
                margin: "0 auto",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "16px",
                  width: "40%",
                }}
              >
                Trusted By Top Upscale Fine-Dining <br />& Exoctic Lounges
              </Typography>
              <Box
                sx={{
                  width: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <img src={img1} width={60} />
                <img src={img2} width={50} />
                <img src={img3} width={50} />
                <img src={img4} width={50} />
                <img src={img5} width={50} />
              </Box>
            </Box>
          </Box>
        </>
      )}
      <Box
        sx={{
          bgcolor: "#151515",
          backgroundImage: `url('${bg}')`,
          boxSizing: "border-box",
          backgroundSize: { md: "contain", xs: "cover" },
        }}
      >
        <Box
          sx={{
            width: { md: "75%", xs: "80%" },

            margin: "0 auto",
            // height: "600px",
            pt: 12,
          }}
        >
          <Grid container spacing={8} sx={{ pb: 7 }}>
            <Grid
              item
              md={6}
              sm={6}
              sx={{
                display: "flex",
                // alignItems: "center",
                flexDirection: "column",
                alignItems: "end",
              }}
            >
              <Box
                sx={{
                  background: `url('${mock1}')`,
                  width: { lg: "430px", md: "380px" },
                  height: { md: "420px", xs: "350px" },
                  borderRadius: "24px",
                  backgroundRepeat: "no-repeat",
                  backgroundPositionY: "100px",
                  backgroundPositionX: "-40px",
                  backgroundColor: "#04011533",
                  backgroundSize: "cover",
                  border: "7px solid #2d2e2f",
                  outline: "1px solid #cccccc33",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "butler",
                    color: "#dedede",
                    fontSize: { md: "22px", xs: "16px" },
                    textAlign: "center",
                    width: { md: "60%", xs: "80%" },
                    margin: "0 auto",
                    pt: 4,
                    lineHeight: { md: "28px", xs: "20px" },
                  }}
                >
                  Manage your Reservation Bookings from a Dashboard
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              md={6}
              sm={6}
              sx={{
                display: "flex",
                alignItems: "start",

                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  background: `url('${mock2}')`,
                  width: { lg: "430px", md: "380px" },
                  height: { md: "420px", xs: "300px" },
                  borderRadius: "24px",
                  backgroundRepeat: "no-repeat",
                  backgroundPositionY: "100px",
                  backgroundPositionX: "-10px",
                  backgroundSize: "cover",
                  backgroundColor: "#04011533",
                  border: "7px solid #2d2e2f",
                  outline: "1px solid #cccccc33",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "butler",
                    color: "#dedede",
                    fontSize: { md: "22px", xs: "16px" },
                    textAlign: "center",
                    width: { md: "60%", xs: "80%" },
                    margin: "0 auto",
                    pt: 4,
                    lineHeight: { md: "28px", xs: "20px" },
                  }}
                >
                  Enjoy Instant Fund settlements on all reservations
                </Typography>
              </Box>
            </Grid>
      {
        isMobile ? (
          <>
                <Grid
              item
              md={12}
              sm={12}
              sx={{
                display: "flex",
                alignItems: "center",

                flexDirection: "column",
              }}
            >
              <Box
                align="right"
                sx={{
                  background: `url('${mock3}')`,
                  width: { lg: "950px", md: "380px" },
                  height: { md: "420px", xs: "320px" },
                  borderRadius: "24px",
                  backgroundRepeat: "no-repeat",
                  backgroundPositionY: "90px",
                  backgroundPositionX: "-110px",
                  backgroundSize: "600px",
                  backgroundColor: "#04011533",
                  border: "7px solid #2d2e2f",
                  outline: "1px solid #cccccc33",
                }}
              >
             
                  <Typography
                    sx={{
                      fontFamily: "butler",
                      color: "#dedede",
                      fontSize: { md: "22px", xs: "16px" },
                      textAlign: "center",
                      width: { md: "60%", xs: "80%" },
                      margin: "0 auto",
                      pt: 4,
                      lineHeight: { md: "28px", xs: "20px" },
                    }}
                  >
                    Explore a robust and detailed Analytical Dashboard
                    showcasing essential metrics for you and your team.
                  </Typography>
                
              </Box>
            </Grid>
          </>
        ):(
          <>
                <Grid
              item
              md={12}
              sm={12}
              sx={{
                display: "flex",
                alignItems: "center",

                flexDirection: "column",
              }}
            >
              <Box
                align="right"
                sx={{
                  background: `url('${mock3}')`,
                  width: { lg: "950px", md: "380px" },
                  height: { md: "420px", xs: "300px" },
                  borderRadius: "24px",
                  backgroundRepeat: "no-repeat",
                  backgroundPositionY: "90px",
                  backgroundPositionX: "-110px",
                  backgroundSize: "600px",
                  backgroundColor: "#04011533",
                  border: "7px solid #2d2e2f",
                  outline: "1px solid #cccccc33",
                }}
              >
                <Box
                  sx={{
                    height: "100%",
                    width: "40%",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "butler",
                      color: "#dedede",
                      fontSize: { md: "22px", xs: "16px" },
                      textAlign: "center",
                      width: { md: "60%", xs: "80%" },
                      margin: "0 auto",
                      pt: 4,
                      lineHeight: { md: "28px", xs: "20px" },
                    }}
                  >
                    Explore a robust and detailed Analytical Dashboard
                    showcasing essential metrics for you and your team.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </>
        )
      }
          </Grid>
        </Box>
      </Box>
      <div className="anime">
        <Box
          sx={{
            height: { md: "400px", xs: "200px" },
            // overflow: "hidden",
            mt: 12,
          }}
        >
          <Box
            sx={{
              // height: "100px",
              position: "relative",
              boxSizing: "border-box",
              top: 60,
              bgcolor: "#FFF2E5",
              border: "2px dashed #C56000",
              transform: "rotate(-10deg)",
              mx: -15,
              // display: "flex",
              // alignItems: "center",
            }}
          >
            <Slider {...settings} style={{ height: "100%" }}>
              {AnimeConfig.map((img, idex) => (
                <Box
                  sx={{
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",

                    height: "80px",
                  }}
                >
                  {" "}
                  <Box sx={{ mt: 2.4 }}>
                    <img src={img} width={50} />
                  </Box>
                </Box>
              ))}
            </Slider>
          </Box>
          <Box
            sx={{
              height: "95px",
              position: "relative",
              boxSizing: "border-box",
              bgcolor: "#FFF2E5",
              border: "2px dashed #C56000",
              transform: "rotate(10deg)",
              mx: -15,
            }}
          >
            <Box sx={{ height: "100%" }}>
              <Slider {...settings2} style={{ height: "100%" }}>
                {AnimeConfig.map((img, idex) => (
                  <Box
                    sx={{
                      display: "flex",
                      alignContent: "center",
                      justifyContent: "center",

                      height: "80px",
                    }}
                  >
                    {" "}
                    <Box sx={{ mt: 2.4 }}>
                      <img src={img} width={50} />
                    </Box>
                  </Box>
                ))}
              </Slider>
            </Box>
          </Box>
        </Box>
      </div>
      <Box
        sx={{
          width: "70%",
          margin: "0 auto",
          background: `url('${line}')`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          py: { md: 5, xs: 0 },
        }}
      />
      <FooterVendor />
    </>
  );
};

export default Vendor;
