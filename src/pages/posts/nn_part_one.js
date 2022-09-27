import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { itemData } from '../itemData';
const TITLE = itemData.find(x => x.id === 1).title + ' - lenferdetroud.github.io'

export default function Post() {	
	return (
		<motion.div
			initial={{opacity: 0 }}
			animate={{opacity: 1 }}
			exit={{opacity: 0 }}
			transition={{ duration: 0.15 }}>
			<Helmet><title>{ TITLE }</title></Helmet>
        
			<p>Test</p>
        
		</motion.div>
	);
};
  
