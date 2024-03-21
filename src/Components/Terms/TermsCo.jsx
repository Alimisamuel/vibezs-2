import { Box, Typography } from "@mui/material";
import React from "react";

const TermsCo = () => {
  return (
    <>
      <Box sx={{ mt: 2 }}>
        <Typography
          sx={{ fontSize: "32px", fontWeight: 800, fontFamily: "butler" }}
        >
          Terms & Conditions
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography
            sx={{ color: "#000000b7", fontSize: "14px", textAlign: "justify" }}
          >
            Welcome to VibezsUp! These terms and conditions outline the rules
            and regulations for the use of VibezsUp's platform.
            <br />
            <br />
            By accessing this application, we assume you accept these terms and
            conditions. Do not continue to use VibezsUp if you do not agree to
            all of the terms and conditions stated on this page.
            <br />
            <br />
            The following terminology applies to these Terms and Conditions,
            Privacy Statement and Disclaimer Notice and all Agreements:
            "Client", "You" and "Your" refers to you, the person log on this
            application and compliant to the Company’s terms and conditions.
            "The Company", "Ourselves", "We", "Our" and "Us", refers to our
            Company. "Party", "Parties", or "Us", refers to both the Client and
            ourselves. All terms refer to the offer, acceptance and
            consideration of payment necessary to undertake the process of our
            assistance to the Client in the most appropriate manner for the
            express purpose of meeting the Client’s needs in respect of
            provision of the Company’s stated services, in accordance with and
            subject to, prevailing law of the Federal Republic of Nigeria. Any
            use of the above terminology or other words in the singular, plural,
            capitalization and/or he/she or they, are taken as interchangeable
            and therefore as referring to the same.
            <ol>
              <li>
                <b> Account Registration:</b>
                <br />
                <br />
                1.1. In order to use VibezsUp, you must register for an account
                by providing personal information such as your name, phone
                number, and email.
                <br />
                <br />
                1.2. Additional information like Gender, Date of birth & Social
                media handles are optional for onboarding VibezsUp however one
                or more of these information may be required to access certain
                services on the VibezsUp platform.
                <br />
                <br />
                1.3. You agree to provide accurate, current, and complete
                information during the registration process and to update such
                information to keep it accurate, current, and complete.
              </li>{" "}
              <br />
              <li>
                <b> Vibezs Wallet:</b>
                <br />
                <br />
                2.1. Upon registration, a Vibezs wallet (virtual account) will
                be opened for you to facilitate payments for table reservations
                and bookings. <br />
                <br />
                2.2. You are solely responsible for maintaining the security of
                your Vibezs wallet and agree not to share your login credentials
                with anyone else.
              </li>
              <br />
              <li>
                <b> Table Booking and Reservation:</b>
                <br />
                <br />
                3.1. VibezsUp allows users to book tables at upscale restaurants
                and lounges. <br />
                <br />
                3.2. By booking a table, you agree to abide by the terms and
                conditions set forth by the respective establishment. <br />
                <br />
                3.3. Users may also open their tables to other users to send a
                request to join their table. By accepting table join requests,
                users agree to allow access to their social media profiles for
                personality assessment.
              </li>
              <br />
              <li>
                <b>Intellectual Property:</b>
                <br />
                <br />
                4.1. All content included on VibezsUp, such as text, graphics,
                logos, images, audio clips, digital downloads, data
                compilations, and software, is the property of VibezsUp or its
                content suppliers and protected by international copyright laws
              </li>
              <br />
              <li>
                <b>Limitation of Liability:</b>
                <br />
                <br />
                5.1. In no event shall VibezsUp be liable for any indirect,
                incidental, special, consequential, or punitive damages,
                including but not limited to loss of profits, data, or goodwill,
                arising from your use of the application.
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

export default TermsCo;
