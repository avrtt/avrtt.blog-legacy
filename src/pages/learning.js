import React from 'react';
import { Helmet } from 'react-helmet'
import { itemDataLearning } from './itemData';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css/animate.min.css';

itemDataLearning.sort(function (a, b) {
  return b.id - a.id;
});

const TITLE = 'Learning - segfaultnomad.github.io'

const Posts = () => {
  return (
	<motion.div class='noselect'
		initial={{opacity: 0 }}
		animate={{opacity: 1 }}
		exit={{opacity: 0 }}
		transition={{ duration: 0.15 }}>
		
		<Helmet>
			<title>{ TITLE }</title>
        </Helmet>  
        
        <Box>
			<ImageList cols={2} gap={5}>
				{itemDataLearning.map((item) => (
					<ImageListItem key={item.img}>
						<div class="hover">
							<AnimationOnScroll offset="1000" animateIn="animate__fadeIn" animateOnce="true" duration="1"><img
								class="prew-home"
								src={`${item.img}?w=248&fit=crop&auto=format`}
								srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
								alt="img_prev"
								loading="lazy"
							/></AnimationOnScroll>
							<Link to={item.href}>
								<div class="overlay-back">
									<div class="titleblock"><p class="title">{item.title}</p></div>							
								</div>
								<div class="overlay-home">
									<p class="title">{item.title}</p>
									<div class="description">{item.desc}</div>
								</div>
							</Link>
						</div>
					</ImageListItem>
				))}
			</ImageList>
		</Box>
		
    </motion.div>
  );
};
  
export default Posts;
