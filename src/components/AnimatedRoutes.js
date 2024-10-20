import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/home';
import Adventures from '../pages/adventures';
import Research from '../pages/research';
import Thoughts from '../pages/thoughts'
import Goals from '../pages/goals';
import Exploration from '../pages/exploration';
import Freelance from '../pages/freelance';
import FreelanceRu from '../pages/freelance_ru';
import CV from '../pages/cv';
import About from '../pages/about';
import Business from '../pages/information_for_business_inquiries';
import MachineLearning from '../pages/machine_learning';
import MachineLearningRu from '../pages/machine_learning_ru';
import DataAnalysis from '../pages/data_analysis';
import DataAnalysisRu from '../pages/data_analysis_ru';
import DataVisualization from '../pages/data_visualization';
import DataVisualizationRu from '../pages/data_visualization_ru';
import DataCollection from '../pages/data_collection';
import DataCollectionRu from '../pages/data_collection_ru';
import PythonApps from '../pages/python_apps';
import PythonAppsRu from '../pages/python_apps_ru';
import TechnicalWriting from '../pages/technical_writing';
import TechnicalWritingRu from '../pages/technical_writing_ru';
import WebDevelopment from '../pages/web_development';
import WebDevelopmentRu from '../pages/web_development_ru';
import Misc from '../pages/misc';
import MiscRu from '../pages/misc_ru';
import NotFound from './NotFound';

import Post1 from '../pages/posts/adventures/adventures_intro';
import Post2 from '../pages/posts/research/research_intro';
import Post3 from '../pages/posts/thoughts/thoughts_intro';
import Post4 from '../pages/posts/adventures/adventures_test';
import Post5 from '../pages/posts/research/research_test';
import Post6 from '../pages/posts/thoughts/thoughts_test';

function AnimatedRoutes() {
	const location = useLocation();
	return (
		<AnimatePresence exitBeforeEnter>
			<Routes location={location} key={location.pathname}>
				<Route index element={<Home />} />
				<Route path='/adventures' element={<Adventures />} />
				<Route path='/research' element={<Research />} />
				<Route path='/thoughts' element={<Thoughts/>} />				
				<Route path='/goals' element={<Goals/>} />	
				<Route path='/exploration' element={<Exploration/>} />
				<Route path='/freelance' element={<Freelance/>} />
				<Route path='/freelance/ru' element={<FreelanceRu/>} />		
				<Route path='/cv' element={<CV/>} />	
				<Route path='/about' element={<About/>} />
				<Route path='/information_for_business_inquiries' element={<Business/>} />	
				<Route path='/freelance/projects/machine_learning' element={<MachineLearning/>} />
				<Route path='/freelance/ru/projects/machine_learning' element={<MachineLearningRu/>} />
				<Route path='/freelance/projects/data_analysis' element={<DataAnalysis/>} />
				<Route path='/freelance/ru/projects/data_analysis' element={<DataAnalysisRu/>} />
				<Route path='/freelance/projects/data_visualization' element={<DataVisualization/>} />
				<Route path='/freelance/ru/projects/data_visualization' element={<DataVisualizationRu/>} />
				<Route path='/freelance/projects/data_collection' element={<DataCollection/>} />
				<Route path='/freelance/ru/projects/data_collection' element={<DataCollectionRu/>} />
				<Route path='/freelance/projects/python_apps' element={<PythonApps/>} />
				<Route path='/freelance/ru/projects/python_apps' element={<PythonAppsRu/>} />
				<Route path='/freelance/projects/technical_writing' element={<TechnicalWriting/>} />
				<Route path='/freelance/ru/projects/technical_writing' element={<TechnicalWritingRu/>} />
				<Route path='/freelance/projects/web_development' element={<WebDevelopment/>} />
				<Route path='/freelance/ru/projects/web_development' element={<WebDevelopmentRu/>} />
				<Route path='/freelance/projects/misc' element={<Misc/>} />
				<Route path='/freelance/ru/projects/misc' element={<MiscRu/>} />
				<Route path='*' element={<NotFound/>} />
				
				<Route path='/adventures/adventures_intro' element={<Post1/>} />
				<Route path='/research/research_intro' element={<Post2/>} />
				<Route path='/thoughts/thoughts_intro' element={<Post3/>} />
				<Route path='/adventures/adventures_test' element={<Post4/>} />
				<Route path='/research/research_test' element={<Post5/>} />
				<Route path='/thoughts/thoughts_test' element={<Post6/>} />

			</Routes>
		</AnimatePresence>
	);
}

export default AnimatedRoutes;
