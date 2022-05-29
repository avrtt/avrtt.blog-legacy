import React from "react";
import Telegram from "./telegram.svg";
import GitHub from "./github.svg";
import Email from "./email.svg";
import {
  Box,
  Container,
  Row,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <Container>
		<Row>
            <a href="mailto:lenferdetroud@gmail.com"><img src={Email} style={{ height: 40, width: 40 }} alt="email-logo" /></a>
            <a href="https://t.me/venturingforth"><img src={Telegram} style={{ height: 40, width: 40 }} alt="telegram-logo" /></a>
            <a href="https://github.com/lenferdetroud"><img src={GitHub} style={{ height: 40, width: 40 }} alt="github-logo" /></a>
		</Row>
		<Row>
			copyright © lenferdetroud
		</Row>
      </Container>
    </Box>
  );
};
export default Footer;
