import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Common/Navbar";
import {
  Box,
  ListItemButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import thunnder from "../assets/img/vectors/thunder.svg";
import kite from "../assets/img/vectors/kite.svg";
import star from "../assets/img/vectors/star2.svg";
import Footer from "../Components/Common/Footer";
import bg from "../assets/img/vectors/single.svg";
import TermsCo from "../Components/Terms/TermsCo";
import Privacy from "../Components/Terms/Privacy";
import Cookies from "../Components/Terms/Cookies";

const navConfig = [
  {
    title: "Terms & Condition",
    link: "/terms-and-condition",
    icon: thunnder,
  },
  {
    title: "Privacy Policy",
    link: "/privacy-policy",
    icon: kite,
  },
  {
    title: "Cookies Policy",
    link: "/cookies-policy",
    icon: star,
  },
];

const Terms = () => {
  const router = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(800));
  return (
    <>
      <Navbar />
      {isMobile ? (
        <>
          <Box
            sx={{
              width: { md: "75%", xs: "90%" },
              margin: "0 auto",
              mt: 15,
            }}
          >
            <TermsCo />
            <Privacy />
            <Cookies />
          </Box>
        </>
      ) : (
        <>
          <Box
            sx={{
              display: "flex",
              width: { md: "75%", xs: "90%" },
              margin: "0 auto",
              mt: 17,
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                width: "20%",
                display: { md: "block", xs: "none" },
                height: "80vh",
              }}
            >
              <Typography sx={{ fontWeight: 700, color: "#151515" }}>
                VibezsUp Terms of Use
              </Typography>
              <Box sx={{ mt: 3 }}>
                {navConfig.map((item, index) => (
                  <Link to={item?.link}>
                    <ListItemButton
                      sx={{
                        "&.Mui-selected": {
                          fontWeight: 500,
                        },
                      }}
                    >
                      {router.pathname === item.link && (
                        <img src={item?.icon} />
                      )}

                      <Typography
                        sx={{
                          ml: 2,
                          ...(router.pathname === item.link && {
                            fontWeight: 700,
                          }),
                        }}
                      >
                        {item?.title}
                      </Typography>
                    </ListItemButton>
                  </Link>
                ))}
              </Box>
            </Box>
            <Box
            className="hide_scrollbar"
              sx={{
                width: { md: "75%", xs: "100%" },
                background: `url('${bg}')`,
                backgroundPosition: " right center",
                backgroundRepeat: "no-repeat",
                mb: 10,

                height: "80vh",
                overflow: "scroll",
              
              }}
            >
              <Outlet />
            </Box>
          </Box>
        </>
      )}
      <Footer />
    </>
  );
};

export default Terms;
