import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Posts from '../pages/posts';
import About from '../pages/about';
import Diary from '../pages/diary';
import Donate from '../pages/donate';
import Achievements from '../pages/achievements';

import Post1 from '../pages/posts/nn_part_one';

function AnimatedRoutes() {
	const location = useLocation();
	return (
		<AnimatePresence exitBeforeEnter>
			<Routes location={location} key={location.pathname}>
				<Route index element={<Posts />} />
				<Route path='/about' element={<About/>} />
				<Route path='/diary' element={<Diary/>} />
				<Route path='/donate' element={<Donate/>} />
				<Route path='/achievements' element={<Achievements/>} />
				
				<Route path='/posts/nn_part_one' element={<Post1/>} />
				
			</Routes>
		</AnimatePresence>
	);
}

export default AnimatedRoutes;
