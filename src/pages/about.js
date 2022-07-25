import React from 'react';
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion';

const TITLE = 'About - lenferdetroud.github.io'
  
const iframeStyle = {
	border: 'none',
	width: '100%',
	height: '540px',
	position: 'relative',
	top: '-50px'
}; 

const divStyle = {
	width: '100%',
	height: '540px',
	overflow: 'hidden'
}  

const About = () => {
  return (
    <motion.div
		initial={{opacity: 0 }}
		animate={{opacity: 1 }}
		exit={{opacity: 0 }}
		transition={{ duration: 0.15 }}>
		
		<Helmet>
			<title>{ TITLE }</title>
        </Helmet>
        
        <p>There's nothing here yet.</p>
        
        <div id="map-container" style={divStyle}>
			<iframe id="map-embed" src="https://www.google.com/maps/d/embed?mid=1X9b0bo11WcY9on87ZQXoB3YUkccwnK49&ehbc=2E312F" style={iframeStyle} title="Travel Map" />
		</div>
        
    </motion.div>
  );
};
  
export default About;
