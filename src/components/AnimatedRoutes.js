import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Posts from '../pages/notes';
import About from '../pages/about';
import Donate from '../pages/donate';
import Post1 from '../pages/notes/nn_part_one';

function AnimatedRoutes() {
	const location = useLocation();
	return (
		<AnimatePresence exitBeforeEnter>
			<Routes location={location} key={location.pathname}>
				<Route index element={<Posts />} />
				<Route path='/about' element={<About/>} />
				<Route path='/donate' element={<Donate/>} />
				
				<Route path='/notes/nn_part_one' element={<Post1/>} />
				
			</Routes>
		</AnimatePresence>
	);
}

export default AnimatedRoutes;
