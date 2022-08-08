import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Notes from '../pages/notes';
import About from '../pages/about';
import Memories from '../pages/memories';
import Donate from '../pages/donate';
import Post1 from '../pages/notes/nn_part_one';

function AnimatedRoutes() {
	const location = useLocation();
	return (
		<AnimatePresence exitBeforeEnter>
			<Routes location={location} key={location.pathname}>
				<Route index element={<Notes />} />
				<Route path='/about' element={<About/>} />
				<Route path='/memories' element={<Memories/>} />
				<Route path='/donate' element={<Donate/>} />
				
				<Route path='/notes/nn_part_one' element={<Post1/>} />
				
			</Routes>
		</AnimatePresence>
	);
}

export default AnimatedRoutes;
