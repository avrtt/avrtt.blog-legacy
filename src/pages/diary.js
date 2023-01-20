import React from 'react';
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion';
import { galleryImages } from './itemData';
import Gallery from '../components/Gallery/gallery';

const TITLE = 'Diary - segfaultnomad.github.io'

const telegramPrevStyle = {
	'border': '0px',
	'height': '700px',
	'width': '100%',
	'margin-top': '50px',
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

const Diary = () => {
  return (
    <motion.div class='noselect'
		initial={{opacity: 0 }}
		animate={{opacity: 1 }}
		exit={{opacity: 0 }}
		transition={{ duration: 0.15 }}>
		
		<Helmet>
			<title>{ TITLE }</title>
        </Helmet>
        
        <Gallery galleryImages={galleryImages}/>  
                           
        <center>
			<div style={divStyle}>
				<p style={pStyle}>[ Channel preview was probably removed by the Adblock extension ]</p>
				<iframe id='telegram-embed' style={telegramPrevStyle} src="https://xn--r1a.website/s/venturingforth" title='Telegram Preview' />
			</div>
		</center>
                        
    </motion.div>
  );
};
  
export default Diary;
