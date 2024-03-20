import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#75007E",
    },
  },
  typography: {
    fontFamily: "outfit",
    color: "#fff",
    h1: {
      fontSize: "32px",
      color: "#121417",
      fontWeight: 900,
      color: "#fff",
    },
    h2: {
      fontSize: "20px",
      color: "#121417",
      fontWeight: 700,
      fontFamily: "butler",
    },
    body1: {
      fontSize: "14px",
      color: "#121417",
      fontWeight: 400,
      fontFamily: "outfit",
      lineHeight: "20px",
    },
    body2: {
      fontSize: "13px",
      color: "#121417",
      fontWeight: 400,
      fontFamily: "outfit",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 1053,
      lg: 1287,
    },
  },
});

export default theme;
