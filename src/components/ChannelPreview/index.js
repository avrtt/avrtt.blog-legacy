import React from "react";
import Box from '@mui/material/Box';

/*
const telegramPrevStyle = {
	'border': '0px',
	'height': '700px',
	'width': '100%',
	'margin-top': '5px',
	'border-radius': '20px',
}

const textStyle = {
	'margin-top': '80px',
	'color': '#ececec',
    'background-color': '#1e1e1e',
    'padding': '6px 15px 16px 15px',
    'border-radius': '20px 20px 0 0',
    'vertical-align': 'middle',
    'margin-bottom': '-54px',
    'font-size': '22px',
    'position': 'relative',
    'z-index': '1'
}

const divStyle = {
	'position': 'relative'
}

const pStyle = {
	'position': 'absolute',
	'top': '50%',
    'left': '50%',
    'z-index': '-1',
    'transform': 'translate(-50%, -50%)'
}

const linkStyle = {
    'text-decoration': 'none',
	'font-weight': '800',
	'border-bottom': '0',
	'color': '#8e8e8e',
    '-webkit-transition': 'color 0.1s ease-in-out',
       '-moz-transition': 'color 0.1s ease-in-out',
         '-o-transition': 'color 0.1s ease-in-out',
            'transition': 'color 0.1s ease-in-out',
}
*/

const ChannelPreview = ({ tgLink, ytLink, tgChannelPicture, tgChannelName, tgChannelDesc }) => {

  const ytUrl = "https://www.youtube.com/embed?listType=playlist&list=" + ytLink + "&index=1";
  const tgHandle = "@" + tgLink;
  const hrefLink = "https://t.me/" + tgLink

  /*
  const srcLink = "https://xn--r1a.website/s/" + link
  const srcLink = "https://xn--r1a.site/s/" + link
  const srcLink = "https://t.me/s/" + link

  return (
	<>
		<center>
			<p style={textStyle}>Subscribe to <a style={linkStyle} href={hrefLink}>@{link}</a> on Telegram for updates and more posts</p>
			<div style={divStyle}>
				<p style={pStyle}>[ Channel preview was probably removed by the Adblock extension ]</p>
				<iframe class="noselect" id='telegram-embed' style={telegramPrevStyle} src={srcLink} title='Telegram Preview' />
			</div>
		</center>
	</>
  );
  */
  
  return (
	<>
		<Box class="moreContentWrapper">
            <a href={hrefLink}><div class="blockLeft">
				<img class="tgChannelPicture" src={tgChannelPicture} alt="telegram_channel"></img>
				<span class="blockLeftTitle">{tgChannelName}</span>
				<span class="blockLeftLink">{tgHandle}</span>
				<p class="blockLeftDesc">{tgChannelDesc}</p>
			</div></a>
            <iframe class="blockRight" src={ytUrl} frameborder="0" allowfullscreen="1"></iframe>
		</Box>
	</>
  );

};
export default ChannelPreview;


