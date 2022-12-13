import React from 'react';
import { Helmet } from 'react-helmet'
import { itemData } from './itemData';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';

itemData.sort(function (a, b) {
  return b.id - a.id;
});

const TITLE = 'Posts - segfaultnomad.github.io'

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
			<ImageList cols={3} gap={3}>
				{itemData.map((item) => (
					<ImageListItem key={item.img}>
						<div class="hover">
							<img
								class="prew-home"
								src={`${item.img}?w=248&fit=crop&auto=format`}
								srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
								alt="img_prev"
								loading="lazy"
							/>
							<Link to={item.href}>
								<div class="overlay-home">
									<div class="title">{item.title}</div>
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
