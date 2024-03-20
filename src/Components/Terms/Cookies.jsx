import React from "react";
import { Box, Typography } from "@mui/material";

const Cookies = () => {
  return (
    <>
      <Box>
        <Typography sx={{ color: "#000000b7", fontSize: "14px" }}>
          By using VibezsUp, you acknowledge that you have read, understood, and
          agree to be bound by these terms. Enjoy your experience with
          VibezsUp!.
        </Typography>
        <Typography
          sx={{
            fontSize: "32px",
            fontWeight: 800,
            fontFamily: "butler",
            mt: 5,
          }}
        >
          Cookies Policy
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography sx={{ color: "#000000b7", fontSize: "14px" }}>
            VibezsUp uses cookies to improve your experience on our application.
            By using VibezsUp, you consent to the use of cookies in accordance
            with this policy.
            <br />
            <br />
            <ol>
              <li>
                <b> What Are Cookies:</b>
                <br />
                <br />
                1.1. Cookies are small files that are sent to your browser from
                a web server and stored on your device's hard drive.
                <br />
                <br />
                1.2. We use cookies to collect information about your usage of
                the application and to personalize your experience.
              </li>{" "}
              <br />
              <li>
                <b> Types of Cookies:</b>
                <br />
                <br />
                2.1. VibezsUp uses both session cookies and persistent cookies.
                Session cookies are temporary files that are erased when you
                close your browser, while persistent cookies remain on your
                device for a set period of time or until you delete them
                manually.
                <br />
                <br />
              </li>
              <br />
              <li>
                <b> How We Use Cookies:</b>
                <br />
                <br />
                3.1. We use cookies to track your preferences and to improve the
                performance and functionality of the application.
                <br />
                <br />
                3.2. We may also use cookies to analyze trends, administer the
                application, track users’ movements around the application, and
                to gather demographic information about our user base as a
                whole.. <br />
              </li>
              <br />
              <li>
                <b>Managing Cookies:</b>
                <br />
                <br />
                4.1. You have the ability to accept or decline cookies. Most web
                browsers automatically accept cookies, but you can usually
                modify your browser setting to decline cookies if you prefer.
                <br />
                <br />
                4.2. If you choose to decline cookies, you may not be able to
                fully experience the interactive features of VibezsUp.
              </li>
              <br />
              <li>
                <b> Changes to Cookies Policy:</b>
                <br />
                <br />
                5.1. VibezsUp reserves the right to update or change this
                cookies policy at any time. Any changes to the cookies policy
                will be posted on this page.
                <br />
                <br />
            By using VibezsUp, you agree to the terms and conditions, privacy policy, and cookies policy outlined above. If you have any questions or concerns about these policies, please contact us at support@vibezsup.com.<br/><br/>This document was last updated on January 30th, 2024.
              </li>
              <br />
           
            </ol>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Cookies;
