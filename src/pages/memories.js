import React from 'react';
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion';

const TITLE = 'Memories - lenferdetroud.github.io'

const mapFrameStyle = {
	border: 'none',
	width: '100%',
	height: '540px',
	position: 'relative',
	top: '-50px'
}; 

const playlistFrameStyle = {
	display: 'block',
	'margin-left': 'auto',
	'margin-right': 'auto',
	'margin-top': '100px'
}; 

const divStyle = {
	width: '100%',
	height: '540px',
	overflow: 'hidden'
}  

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
        
        <div id="map-container" style={divStyle}>
			<iframe id="map-embed" src="https://www.google.com/maps/d/embed?mid=1X9b0bo11WcY9on87ZQXoB3YUkccwnK49&ehbc=2E312F" style={mapFrameStyle} title="Travel Map" />
		</div>
        
    </motion.div>
  );
};
  
export default Memories;
