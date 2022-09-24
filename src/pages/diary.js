import React from 'react';
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion';
import { galleryImages } from './itemData';
import TelegramComments from 'react-telegram-comments';
import Gallery from '../components/Gallery/gallery';

const TITLE = 'Diary - lenferdetroud.github.io'

const playlistHolderStyle = {
	'margin-top': '100px',
	'text-align': 'center'
}; 

const Diary = () => {
  return (
    <motion.div
		initial={{opacity: 0 }}
		animate={{opacity: 1 }}
		exit={{opacity: 0 }}
		transition={{ duration: 0.15 }}>
		
		<Helmet>
			<title>{ TITLE }</title>
        </Helmet>
                
        <Gallery galleryImages={galleryImages}/>
        
        <div style={playlistHolderStyle}>
			<iframe width='560' height='315' src='https://www.youtube.com/embed/videoseries?list=PLFzQnxF1skPvlvnld01k0Pgmzxbn5OMx3' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen title='playlist'></iframe>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<iframe width='560' height='315' src='https://www.youtube.com/embed/videoseries?list=PLFzQnxF1skPuILXEWcVz-SJg0D5kzLHVv' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen title='playlist'></iframe>
        </div>
                
        <div class='chatWrapper'><TelegramComments websiteKey={'2JA7Wo3q'} ccustomColor='000000' ommentsNumber={5} pageId='diary' showDislikes={true} /></div>
         
    </motion.div>
  );
};
  
export default Diary;
