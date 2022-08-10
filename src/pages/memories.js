import React from 'react';
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion';

const TITLE = 'Memories - lenferdetroud.github.io'

const playlistFrameStyle = {
	display: 'block',
	'margin-left': 'auto',
	'margin-right': 'auto',
	'margin-top': '100px'
}; 

const Memories = () => {
  return (
    <motion.div
		initial={{opacity: 0 }}
		animate={{opacity: 1 }}
		exit={{opacity: 0 }}
		transition={{ duration: 0.15 }}>
		
		<Helmet>
			<title>{ TITLE }</title>
        </Helmet>
        
        <iframe src="https://drive.google.com/embeddedfolderview?id=13x8Cs1TIWZSYN_ywbWZOT4FivWQ--8wG#grid" width="100%" height="700" frameborder="0" title='drive'></iframe>
        <iframe width='560' height='315' src='https://www.youtube.com/embed/videoseries?list=PLFzQnxF1skPuILXEWcVz-SJg0D5kzLHVv' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen style={playlistFrameStyle} title='playlist'></iframe>
        
    </motion.div>
  );
};
  
export default Memories;
