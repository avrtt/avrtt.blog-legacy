import React from "react";
import Telegram from "./telegram.svg";
import Instagram from "./instagram.svg";
import Email from "./email.svg";
import Map from "./map.svg";
import YouTube from "./youtube.svg";
import Facebook from "./facebook.svg";
import {footerYear} from "../../pages/itemData";
import {
  Box,
  Container,
  Row,
  FooterLink,
} from "./FooterStyles";
  
const copyStyle = {
	"font-size": "1.9vh",
  "margin-top": "2.8vw",
}  

const nameStyle = {
	"font-weight": "normal",
}  

const badgesLeftWrapperStyle = {
  "justify-content": "left",
  "margin-left": "5%",
}

const badgesRightWrapperStyle = {
  "justify-content": "right",
  "margin-right": "5%"
}

const badgeFirstStyle = {
  "margin-top": "-1.2vw",
  "position": "absolute",
  "height": "1.2vw"
}

const badgeSecondStyle = {
  "margin-top": "-0.2vw",
  "position": "absolute",
  "margin-left": "-0.3vw",
  "height": "1.2vw"
}

const badgeThirdStyle = {
  "margin-top": "0.8vw",
  "position": "absolute",
  "margin-left": "-0.6vw",
  "height": "1.2vw"
}

const badgeFourthStyle = {
  "margin-top": "1.8vw",
  "position": "absolute",
  "margin-left": "0vw",
  "opacity": "0.6",
  "height": "1.2vw"
}

const badgeFifthStyle = {
  "margin-top": "2.8vw",
  "position": "absolute",
  "margin-left": "-0.9vw",
  "height": "1.2vw"
}

const visitsTodayBadgeStyle = {
  "margin-top": "-1vw",
  "position": "absolute",
  "height": "1.2vw"
}

const visitsTotalBadgeStyle = {
  "margin-top": "0.2vw",
  "position": "absolute",
  "height": "1.2vw"
}

const FooterLinksStyle = {
  "transform": "translateY(2vw)"
}

const Footer = () => {
  return (
    <Box>
      <Container>
		<Row style={FooterLinksStyle}>
            <FooterLink href="mailto:avrtt@tuta.io"><img src={Email} style={{ height: "4.6vh", width: "4.6vh" }} alt="email-logo" /></FooterLink>
            <FooterLink href="https://www.facebook.com/avrttblog"><img src={Facebook} style={{ height: "4.6vh", width: "4.6vh" }} alt="facebook-logo" /></FooterLink>
            <FooterLink href="https://www.instagram.com/avrttv"><img src={Instagram} style={{ height: "4.6vh", width: "4.6vh" }} alt="intagram-logo" /></FooterLink>
            <FooterLink href="https://www.youtube.com/@vladaverett"><img src={YouTube} style={{ height: "4.6vh", width: "4.6vh" }} alt="youtube-logo" /></FooterLink>
            <FooterLink href="https://t.me/avrttclub"><img src={Telegram} style={{ height: "4.6vh", width: "4.6vh" }} alt="telegram-logo" /></FooterLink>
            <FooterLink href="https://www.google.com/maps/d/viewer?mid=1X9b0bo11WcY9on87ZQXoB3YUkccwnK49&ll=0.3349379679001004%2C0&z=2"><img src={Map} style={{ height: "4.6vh", width: "4.6vh" }} alt="map-logo" /></FooterLink>     
		</Row>
    <Row style={badgesLeftWrapperStyle}>
      <a href="https://github.com/avrtt/avrtt.github.io/commits/gh-pages/"><img class="footerBadgeStyle" style={badgeFirstStyle} src="https://img.shields.io/github/commit-activity/t/avrtt/avrtt.github.io/gh-pages?style=flat-square&label=Commits%20(gh-pages%20branch)%3A&labelColor=%23f2f2f2&color=%23f2f2f2" alt="badge"/></a>
      <a href="https://github.com/avrtt/avrtt.github.io/commits/master/"><img class="footerBadgeStyle" style={badgeSecondStyle} src="https://img.shields.io/github/commit-activity/t/avrtt/avrtt.github.io/master?style=flat-square&label=Commits%20(master%20branch)%3A&labelColor=%23f2f2f2&color=%23f2f2f2" alt="badge"/></a>
      <a href="https://github.com/avrtt/avrtt.github.io/activity"><img class="footerBadgeStyle" style={badgeThirdStyle} src="https://img.shields.io/github/last-commit/avrtt/avrtt.github.io/gh-pages?style=flat-square&label=Last%20deploy%3A&labelColor=%23f2f2f2&color=%23f2f2f2" alt="badge"/></a>
      <img style={badgeFourthStyle} class="footerBadgeStyle" src="https://img.shields.io/github/repo-size/avrtt/avrtt.github.io?style=flat-square&label=Repo%20size%3A&labelColor=%23f2f2f2&color=%23f2f2f2" alt="badge"/>
    </Row>
    <Row style={badgesRightWrapperStyle}>
      <img style={visitsTodayBadgeStyle} src="https://api.visitorbadge.io/api/daily?path=https%3A%2F%2Favrtt.github.io%2F&label=TODAY&labelColor=%23f2f2f2&countColor=%23FFAC1C&style=flat-square&labelStyle=none" alt="badge"/>
      <img style={visitsTotalBadgeStyle} src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Favrtt.github.io%2F&label=TOTAL&labelColor=%23f2f2f2&countColor=%23263759&style=flat-square&labelStyle=none" alt="badge"/>
    </Row>
		<Row style={badgesRightWrapperStyle}>
			<p style={copyStyle} title="Made with love!">Copyright © {footerYear} &nbsp;<span style={nameStyle}>Vladislav Averett</span></p>
		</Row>
      </Container>
    </Box>
  );
};
export default Footer;
