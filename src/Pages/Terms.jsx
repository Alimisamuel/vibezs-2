import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Common/Navbar";
import { Box, ListItemButton, Typography } from "@mui/material";
import thunnder from "../assets/img/vectors/thunder.svg";
import Footer from "../Components/Common/Footer";
import bg from "../assets/img/vectors/single.svg";

const navConfig = [
  {
    title: "Terms & Condition",
    link: "/terms-and-condition",
  },
  {
    title: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    title: "Cookies Policy",
    link: "/cookies-policy",
  },
];

const Terms = () => {
  const router = useLocation();
  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          width:{md: "75%", xs:'90%'},
          margin: "0 auto",
          mt: 15,
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: "20%", display:{md:'block', xs:'none'} }}>
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
                  {router.pathname === item.link && <img src={thunnder} />}

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
          sx={{
            width: {md:"75%", xs:'100%'},
            background: `url('${bg}')`,
            backgroundPosition: " right center",
            backgroundRepeat: "no-repeat",
            mb: 10,
          }}
        >
          <Outlet />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Terms;
