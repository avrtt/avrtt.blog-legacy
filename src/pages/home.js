import React from 'react';
import { Helmet } from 'react-helmet'
import { itemDataLife, itemDataIT, imageClick } from './itemData';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const itemData = itemDataIT.concat(itemDataLife);
itemData.sort(function (a, b) {
  return b.id - a.id;
});

const TITLE = 'Venturing Forth'
const DESCRIPTION = 'A diary of a lifelong traveler.'

const Home = () => {
  return (
	<>
		<Helmet>
			<title>{ TITLE }</title>
			<description>{ DESCRIPTION }</description>
        </Helmet>  
        
        <Box>
			<ImageList cols={3} gap={15}>
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
							<div class="overlay-home" onClick={() => imageClick(item.href)}>
								<div class="title">{item.title}</div>
							</div>
						</div>
					</ImageListItem>
				))}
			</ImageList>
		</Box>

    </>
  );
};
  
export default Home;
