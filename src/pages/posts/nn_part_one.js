import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { itemData } from '../itemData';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import TelegramComments from 'react-telegram-comments';
import nn_part_one from "./nn_part_one.pdf";
const TITLE = itemData.find(x => x.id === 1).title + ' - lenferdetroud.github.io';

const pdfStyle = {
	'zoom': '130%',
}

const pageStyle = {
	
}

export default function Post() {  
	
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);
	
	function onDocumentLoadSuccess({numPages}) {
		setNumPages(numPages);
		setPageNumber(1);
	}
	
	return (
		<motion.div style={pageStyle}
			initial={{opacity: 0 }}
			animate={{opacity: 1 }}
			exit={{opacity: 0 }}
			transition={{ duration: 0.15 }}>
			<Helmet><title>{ TITLE }</title></Helmet>
        	
			<center>
				<div style={pdfStyle}>
					<Document file={nn_part_one} onLoadSuccess={onDocumentLoadSuccess}>
						{Array.from(
							new Array(numPages),
							(el,index) => (
								<Page key={`page_${index+1}`} pageNumber={index+1} />
							)
						)}
					</Document>
				</div>
				<p></p><a href=''>Download PDF</a>
			</center>
        
			<div class='chatWrapper'><TelegramComments websiteKey={'2JA7Wo3q'} customColor='000000' commentsNumber={5} pageId='nn_part_one' showDislikes={true} /></div>
        
		</motion.div>
	);
};
  
