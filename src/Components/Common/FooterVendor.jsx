import {
  Box,
  Grid,
  Typography,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import launch from "../../assets/img/vectors/launch.png";
import CustomInput from "../CustomInput";
import playstore from "../../assets/img/vectors/googlestore.svg";
import applestore from "../../assets/img/vectors/appstore.svg";
import img1 from "../../assets/img/vectors/Mac Studio.png";
import img2 from "../../assets/img/vectors/tree2.svg";
import img3 from "../../assets/img/vectors/foot-m.svg";
import logo from "../../assets/img/logo/logo.svg";
import { Link } from "react-router-dom";
import twitter from "../../assets/img/vectors/Vector (2).svg";
import insta from "../../assets/img/vectors/Vector (3).svg";
import linkedin from "../../assets/img/vectors/Vector (4).svg";
import line from "../../assets/img/vectors/Line 2.svg";
import phone from "../../assets/img/vectors/v-foot.png";

const FooterVendor = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(800));
  return (
    <>
      <Box sx={{ mt: 3, bgcolor: { md: "#fff", xs: "#151515" } }}>
        <Box sx={{ width: "85%", margin: "0 auto" }}>
          {isMobile ? (
            <>
              <Box
                sx={{
                  pt: 10,
                  display: "flex",
                  flexDirection: "column",
                  // alignItems: "center",
                }}
              >
                <img src={phone} />
                <CustomInput />
               
                <Box
                  sx={{
                    my: 5,

                    background: `url('${line}')`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "5px",
                  }}
                />
              </Box>
            </>
          ) : (
            <>
              <Grid container>
                <Grid item md={5} sm={12}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      height: "100%",
                    }}
                  >
                    <Box>
                      <img src={launch} width={150} />
                    </Box>
                    <Box sx={{ mt: 3 }}>
                      <CustomInput />
                    </Box>
                  </Box>
                </Grid>
                <Grid md={1}></Grid>
                <Grid md={6}>
                  <Box
                    align="right"
                    sx={{ height: "327px", overflow: "hidden" }}
                  >
                    <img src={img1} width={600} />
                  </Box>
                </Grid>
              </Grid>
            </>
          )}
        </Box>

        <Box
          sx={{
            width: "100%",
            backgroundColor: "#151515",
            height: { md: "260px", xs: "auto" },
            backgroundImage: isMobile ? `url('${img3}')` : `url('${img2}')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundSize: "contain",
          }}
        >
          <Box
            sx={{
              py: { md: 0, xs: 9 },
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "85%",
              margin: "0 auto",
              height: "200px",
              flexDirection: { md: "row", xs: "column" },
              rowGap: 3,
            }}
          >
            <Box>
              <Link to="/">
                <img src={logo} />
              </Link>
            </Box>

            <Box>
              <Link to="/terms-and-condition">
                <Typography sx={{ color: "#c5c5c5", fontSize: "14px" }}>
                  Terms of Use
                </Typography>
              </Link>
            </Box>

            <Box sx={{}}>
              <Box
                sx={{
                  mt: { md: 2, xs: 0 },
                  display: "flex",
                  columnGap: 2,
                }}
              >
                <IconButton>
                  <img src={twitter} width={20} />
                </IconButton>
                <IconButton>
                  <img src={insta} width={20} />
                </IconButton>
                <IconButton>
                  <img src={linkedin} width={20} />
                </IconButton>
              </Box>
              <a href="mailto:support@vibezsup.com">
                <Typography sx={{ mt: 1, color: "#c5c5c5" }}>
                  support@vibezsup.com
                </Typography>
              </a>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FooterVendor;
