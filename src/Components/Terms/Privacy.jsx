import React from "react";
import { Box, Typography } from "@mui/material";

const Privacy = () => {
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
          Privacy Policy
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography sx={{ color: "#000000b7", fontSize: "14px" }}>
            Privacy is important to VibezsUp. This privacy policy outlines the
            types of personal information that is received and collected by
            VibezsUp and how it is used.
            <br />
            <br />
            <ol>
              <li>
                <b> Collection of Personal Information:</b>
                <br />
                <br />
                1.1. When you register for an account on VibezsUp, we collect
                personal information such as your name, phone number, email, and
                social media handles.
                <br />
                <br />
                1.2. We may also collect information about your usage of the
                application, such as your interactions with other users and your
                preferences for table bookings.
                <br />
                <br />
                1.3. We may also collect location information to streamline some
                experiences on the app for your usage. Location information will
                be collected to suggest spots close to your location.
              </li>{" "}
              <br />
              <li>
                <b> Use of Personal Information:</b>
                <br />
                <br />
                2.1. Personal information collected by VibezsUp is used to
                generate a profile for you to use the application for bookings
                and to facilitate payments through the Vibezs wallet.. <br />
                <br />
                2.2. We may also use your personal information to communicate
                with you about your account and to provide you with updates and
                promotions related to VibezsUp.
              </li>
              <br />
              <li>
                <b> Sharing of Personal Information:</b>
                <br />
                <br />
                3.1. We may share your personal information with third-party
                service providers who assist us in operating our application,
                conducting our business, or servicing you.
                <br />
                <br />
                3.2. We may also share your personal information in response to
                legal processes or to comply with applicable laws and
                regulations. <br />
              </li>
              <br />
              <li>
                <b>Security of Personal Information:</b>
                <br />
                <br />
                4.1. VibezsUp takes reasonable precautions to protect your
                personal information from unauthorized access, use, or
                disclosure.<br/><br/>
                4.2. However, no method of transmission over the internet, or method of electronic storage, is 100% secure. Therefore, while we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
              </li>
              <br />
              <li>
                <b>Changes to Privacy Policy:</b>
                <br />
                <br />
                5.1. VibezsUp reserves the right to update or change this privacy policy at any time. Any changes to the privacy policy will be posted on this page.
              </li>
              <br />
              <li>
                <b>Governing Law:</b>
                <br />
                <br />
                6.1. These terms and conditions are governed by and construed in
                accordance with the laws of the Federal Republic of Nigeria and
                you irrevocably submit to the exclusive jurisdiction of the
                courts in that State or location.
              </li>
            </ol>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Privacy;
