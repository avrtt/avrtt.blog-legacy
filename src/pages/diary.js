import React from 'react';
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion';
import { galleryImages } from './itemData';
import Gallery from '../components/Gallery/gallery';

const TITLE = 'Diary - lenferdetroud.github.io'

const playlistHolderStyle = {
	'margin-top': '100px',
	'text-align': 'center'
}; 

const telegramPrevStyle = {
	'border': '0px',
	'height': '700px',
	'width': '100%',
	'margin-top': '50px',
	'box-shadow': '0 0 16px 3px rgba(0,0,0,.2)'
};

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
        <iframe id='telegram-embed' style={telegramPrevStyle} src="https://xn--r1a.website/s/venturingforth" title='Telegram Preview' />
        
        <div style={playlistHolderStyle}>
			<iframe width='560' height='315' src='https://www.youtube.com/embed/videoseries?list=PLFzQnxF1skPvlvnld01k0Pgmzxbn5OMx3' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen title='playlist'></iframe>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<iframe width='560' height='315' src='https://www.youtube.com/embed/videoseries?list=PLFzQnxF1skPuILXEWcVz-SJg0D5kzLHVv' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen title='playlist'></iframe>
        </div>
                
    </motion.div>
  );
};
  
export default Diary;
