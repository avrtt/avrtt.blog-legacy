import React from "react";

const telegramPrevStyle = {
	'border': '0px',
	'height': '700px',
	'width': '100%',
	'margin-top': '5px',
	'box-shadow': '0 0 16px 3px rgba(0,0,0,.2)'
}

const textStyle = {
	'margin-top': '80px',
	'color': '#8e8e8e'
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

const ChannelPreviewLearning = () => {
  return (
	<>
		<center>
			<b><p style={textStyle}>Check out my Telegram channel for updates and more posts</p></b>
			<div style={divStyle}>
				<p style={pStyle}>[ Channel preview was probably removed by the Adblock extension ]</p>
				<iframe id='telegram-embed' style={telegramPrevStyle} src="https://xn--r1a.website/s/train_test_rocknroll" title='Telegram Preview' />
			</div>
		</center>
	</>
  );
};
export default ChannelPreviewLearning;


