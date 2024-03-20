import {
  Box,
  Button,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Common/Navbar";
import Banner from "../../Components/Common/Banner";
import bg from "../../assets/img/vectors/bg2.svg";
import mock1 from "../../assets/img/vectors/mock1.png";
import mock2 from "../../assets/img/vectors/mock2.png";
import mock3 from "../../assets/img/vectors/mock3.png";
import mock4 from "../../assets/img/vectors/mock4.png";
import star from "../../assets/img/vectors/star.svg";
import { BrandConfig } from "../../assets/img/brand/BrandConfig";
import line from "../../assets/img/vectors/line.svg";
import Footer from "../../Components/Common/Footer";
import imgBox from "../../assets/img/vectors/box.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logos from "../../assets/img/vectors/logos.svg";

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const settings = {
    dots: false,
    Infinite: true,
    arrows: false,
    slidesToShow: 2,
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
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    rtl: true,
  };
  const settings3 = {
    dots: false,
    Infinite: true,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    rtl: true,
  };
  const settings5 = {
    dots: false,
    Infinite: true,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    rtl: true,
  };
  const settings4 = {
    dots: false,
    Infinite: true,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    // rtl: true,
  };

  return (
    <>
      <Navbar />
      <Banner />
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
          <Grid container spacing={8} sx={{ pb: 7,  }}>
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
              {/* <Box
                sx={{
                  bgcolor: "#1e1e1e",
                  p: 1,
                  borderRadius: "24px",
                  boxSizing: "border-box",
                  width: { lg: "430px", md: "380px" },
                  height: "520px",
                }}
              > */}
              <Box
                sx={{
                  background: `url('${mock1}')`,
                  width: { lg: "430px", md: "380px" },
                  height: "520px",
                  borderRadius: "24px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "bottom",
                  backgroundColor: "#04011533",
                  backgroundSize: "contain",
                  border: "7px solid #2d2e2f",
                  outline: "1px solid #cccccc33",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "butler",
                    color: "#dedede",
                    fontSize: "22px",
                    textAlign: "center",
                    width: { md: "60%", xs: "80%" },
                    margin: "0 auto",
                    pt: 4,
                    lineHeight: "28px",
                  }}
                >
                  Secure Exclusive Tables at Premier Upscale Dining Spots and
                  lounges in your city.
                </Typography>
              </Box>

              <Box
                sx={{
                  background: `url('${mock3}')`,
                  width: { lg: "430px", md: "380px" },
                  height: "420px",
                  borderRadius: "24px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "bottom",
                  backgroundColor: "#04011533",
                  backgroundSize: "300px",
                  border: "7px solid #2d2e2f",
                  outline: "1px solid #cccccc33",
                  mt: 4,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "butler",
                    color: "#dedede",
                    fontSize: "22px",
                    textAlign: "center",
                    width: { md: "60%", xs: "80%" },
                    margin: "0 auto",
                    pt: 4,
                    lineHeight: "28px",
                  }}
                >
                  Invite Guests to your Table with Ease and Style.
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
                  height: "420px",
                  borderRadius: "24px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "bottom",
                  backgroundPositionX: "50px",
                  backgroundSize: "contain",
                  backgroundColor: "#04011533",
                  border: "7px solid #2d2e2f",
                  outline: "1px solid #cccccc33",
                  mt: 4,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "butler",
                    color: "#dedede",
                    fontSize: "22px",
                    textAlign: "center",
                    width: { md: "60%", xs: "80%" },
                    margin: "0 auto",
                    pt: 4,
                    lineHeight: "28px",
                  }}
                >
                  Effortlessly Split bills with Friends Directly from the App.
                </Typography>
              </Box>

              <Box
                sx={{
                  background: `url('${mock4}')`,
                  width: { lg: "430px", md: "380px" },
                  height: "520px",
                  borderRadius: "24px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "bottom",
                  backgroundColor: "#04011533",
                  backgroundSize: "contain",
                  border: "7px solid #2d2e2f",
                  outline: "1px solid #cccccc33",
                  mt: 4,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "butler",
                    color: "#dedede",
                    fontSize: "22px",
                    textAlign: "center",
                    width: { md: "60%", xs: "80%" },
                    margin: "0 auto",
                    pt: 4,
                    lineHeight: "28px",
                  }}
                >
                  Connect with New Friends by accepting People's Requests to
                  join your table.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box
        sx={{
          width: { md: "70%", xs: "100%" },
          margin: "0 auto",
          p: 2,
          boxSizing: "border-box",
          pt: 5,
          pb: 5,
        }}
      >
        <Grid container spacing={6}>
          <Grid item md={4} xs={12}>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: 2,
                  justifyContent: { md: "left", xs: "center" },
                }}
              >
                <img src={star} />
                <Typography
                  color="primary"
                  sx={{
                    fontWeight: 700,
                    fontSize: "16px",
                    textAlign: { md: "left", xs: "center" },
                  }}
                >
                  Vendor Exclusivity
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontFamily: "butler",
                  color: "#151515",
                  fontSize: { md: "22px", xs: "16px" },
                  fontWeight: 500,
                  lineHeight: { md: "30px", xs: "20px" },
                  textAlign: { md: "justify", xs: "center" },
                  width: { md: "fit-content", xs: "80%" },
                  margin: "0 auto",
                  mt: 2,
                }}
              >
                VibezsUp has partnered with 250+ Premium Establishments to
                Curate the Best Tables for you.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={8} xs={12}>
            {isMobile ? (
              <>
                <Box
                  sx={{
                    ml: { md: 8, xs: 0 },
                    display: "flex",
                    flexDirection: "column",
                    rowGap: 2,
                    // mx:-15
                  }}
                >
                  <Slider {...settings3}>
                    {BrandConfig?.slice(0, 7).map((img, index) => (
                      <Box
                        sx={{
                          mx: 4,
                          height: "50px",
                          width: "50px",
                          background: `url('${img}')`,
                          backgroundSize: "contain",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        {/* <img src={img} width={100} /> */}
                      </Box>
                    ))}
                  </Slider>
                  <Slider {...settings4}>
                    {BrandConfig?.slice(7, 14).map((img, index) => (
                      <Box
                        sx={{
                          mx: 4,
                          height: "50px",
                          width: "50px",
                          background: `url('${img}')`,
                          backgroundSize: "contain",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        {/* <img src={img} width={100} /> */}
                      </Box>
                    ))}
                  </Slider>
                  <Slider {...settings5}>
                    {BrandConfig?.slice(12, 19).map((img, index) => (
                      <Box
                        sx={{
                          mx: 4,
                          height: "50px",
                          width: "50px",
                          background: `url('${img}')`,
                          backgroundSize: "contain",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        {/* <img src={img} width={100} /> */}
                      </Box>
                    ))}
                  </Slider>
                </Box>
              </>
            ) : (
              <>
                <Box
                  sx={{
                    ml: { md: 8, xs: 0 },
                    display: "flex",
                    flexDirection: "column",
                    rowGap: 5,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    {BrandConfig?.slice(0, 7).map((img, index) => (
                      <img src={img} />
                    ))}
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    {BrandConfig?.slice(7, 14).map((img, index) => (
                      <img src={img} />
                    ))}
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    {BrandConfig?.slice(14, 19).map((img, index) => (
                      <img src={img} />
                    ))}
                  </Box>
                </Box>
              </>
            )}
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 5,
            mb: -5,
            background: `url('${line}')`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "1px",
          }}
        />
      </Box>
      <Box
        sx={{
          height: { md: "400px", xs: "200px" },
          overflow: "hidden",
          mt: 12,
        }}
      >
        <Box
          sx={{
            // height: "100px",
            position: "relative",
            boxSizing: "border-box",
            top: 60,
            background: `url('${imgBox}')`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            transform: "rotate(-10deg)",
            mx: -15,
            // display: "flex",
            // alignItems: "center",
          }}
        >
          <Slider {...settings}>
            <img src={logos} />
            <img src={logos} />
          </Slider>
        </Box>
        <Box
          sx={{
            // height: "100px",
            position: "relative",
            boxSizing: "border-box",
            // top: 60,
            background: `url('${imgBox}')`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            transform: "rotate(10deg)",
            mx: -15,
            //  display: "flex",
            // alignItems: "center",
          }}
        >
          <Slider {...settings2}>
            <img src={logos} />
            <img src={logos} />
          </Slider>
        </Box>
      </Box>
      <Box
        sx={{
          background: `url('${line}')`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          py: { md: 5, xs: 0 },
        }}
      />

      <Footer />
    </>
  );
};

export default Home;
