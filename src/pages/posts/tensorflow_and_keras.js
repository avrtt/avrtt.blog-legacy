import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { itemData } from '../itemData';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import TelegramComments from 'react-telegram-comments';
import Frog from '../img/mysterious_frog.png';

const postNumber = itemData.find(x => x.key === 'tensorflow_and_keras').id;

const pdf = itemData.find(x => x.id === postNumber).pdf;
const title = itemData.find(x => x.id === postNumber).title + ' - lenferdetroud.github.io';
const key = itemData.find(x => x.id === postNumber).key;

export default function Post() {  
	
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);
	
	function onDocumentLoadSuccess({numPages}) {
		setNumPages(numPages);
		setPageNumber(1);
	}
	
	return (
		<motion.div class='noselect'
			initial={{opacity: 0 }}
			animate={{opacity: 1 }}
			exit={{opacity: 0 }}
			transition={{ duration: 0.15 }}>
			<Helmet><title>{ title }</title></Helmet>
        	
			<center>
				<div>
					<Document 
						file={pdf} 
						onLoadSuccess={onDocumentLoadSuccess} 
						error={<div><img src={Frog} alt='frog'/><h3>Something went wrong and now you see the frog.</h3></div>}
						loading={<h3>Loading «{itemData.find(x => x.id === postNumber).title}»...</h3>}
						noData={<div><img src={Frog} alt='frog'/><h3>Something went wrong and now you see the frog.</h3></div>}
						renderMode={'svg'}>
						{Array.from(new Array(numPages), (el,index) => (
							<Page 
								key={`page_${index+1}`} 
								pageNumber={index+1} 
								error={<div><img src={Frog} alt='frog'/><h3>Something went wrong and now you see the frog.</h3></div>}
								loading={<h3>Loading...</h3>}
								noData={<div><img src={Frog} alt='frog'/><h3>Something went wrong and now you see the frog.</h3></div>}
								renderMode={'svg'}
								scale={1.7}
							/>))}
					</Document>
				</div>
				<p></p><a href={'https://github.com/lenferdetroud/lenferdetroud.github.io/raw/master/src/pages/posts/' + key + '.pdf'}>Download PDF</a>
			</center>
        
			<div class='chatWrapper'><TelegramComments websiteKey={'2JA7Wo3q'} customColor='000000' commentsNumber={5} pageId={key} showDislikes={true} /></div>
        
		</motion.div>
	);
};
  
