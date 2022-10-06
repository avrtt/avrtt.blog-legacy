import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Posts from '../pages/posts';
import About from '../pages/about';
import Diary from '../pages/diary';
import Donate from '../pages/donate';
import Achievements from '../pages/achievements';

import Post1 from '../pages/posts/math_for_ds';
import Post2 from '../pages/posts/hypothesis_testing';
import Post3 from '../pages/posts/algorithms_and_data_structures';
import Post4 from '../pages/posts/ml_basics';
import Post5 from '../pages/posts/classification_metrics';
import Post6 from '../pages/posts/gradient_descent_optimization';
import Post7 from '../pages/posts/linear_regression';
import Post8 from '../pages/posts/regularization';
import Post9 from '../pages/posts/logistic_regression';
import Post10 from '../pages/posts/bayesian_algorithms';
import Post11 from '../pages/posts/decision_trees';
import Post12 from '../pages/posts/knn';
import Post13 from '../pages/posts/svm';
import Post14 from '../pages/posts/clustering';
import Post15 from '../pages/posts/dimensionality_reduction';
import Post16 from '../pages/posts/intro_to_bigdata';
import Post17 from '../pages/posts/neural_network_architectures';
import Post18 from '../pages/posts/ml_model_tuning';
import Post19 from '../pages/posts/eda';
import Post20 from '../pages/posts/sklearn';
import Post21 from '../pages/posts/tensorflow_and_keras';
import Post22 from '../pages/posts/cv';
import Post23 from '../pages/posts/nlp';
import Post24 from '../pages/posts/recommender_systems';
import Post25 from '../pages/posts/anomaly_detection';
import Post26 from '../pages/posts/ensembles';
import Post27 from '../pages/posts/neural_network_concepts';
import Post28 from '../pages/posts/time_series';
import Post29 from '../pages/posts/sql_for_ds';
import Post30 from '../pages/posts/linux_and_cs_for_ds';
import Post31 from '../pages/posts/web_services_for_ds';

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
				
				<Route path='/posts/math_for_ds' element={<Post1/>} />
				<Route path='/posts/hypothesis_testing' element={<Post2/>} />
				<Route path='/posts/algorithms_and_data_structures' element={<Post3/>} />
				<Route path='/posts/ml_basics' element={<Post4/>} />
				<Route path='/posts/classification_metrics' element={<Post5/>} />
				<Route path='/posts/gradient_descent_optimization' element={<Post6/>} />
				<Route path='/posts/linear_regression' element={<Post7/>} />
				<Route path='/posts/regularization' element={<Post8/>} />
				<Route path='/posts/logistic_regression' element={<Post9/>} />
				<Route path='/posts/bayesian_algorithms' element={<Post10/>} />
				<Route path='/posts/decision_trees' element={<Post11/>} />
				<Route path='/posts/knn' element={<Post12/>} />
				<Route path='/posts/svm' element={<Post13/>} />
				<Route path='/posts/clustering' element={<Post14/>} />
				<Route path='/posts/dimensionality_reduction' element={<Post15/>} />
				<Route path='/posts/ml_model_tuning' element={<Post16/>} />
				<Route path='/posts/eda' element={<Post17/>} />
				<Route path='/posts/sklearn' element={<Post18/>} />
				<Route path='/posts/tensorflow_and_keras' element={<Post19/>} />
				<Route path='/posts/cv' element={<Post20/>} />
				<Route path='/posts/nlp' element={<Post21/>} />
				<Route path='/posts/recommender_systems' element={<Post22/>} />
				<Route path='/posts/anomaly_detection' element={<Post23/>} />
				<Route path='/posts/ensembles' element={<Post24/>} />
				<Route path='/posts/neural_network_concepts' element={<Post25/>} />
				<Route path='/posts/time_series' element={<Post26/>} />
				<Route path='/posts/sql_for_ds' element={<Post27/>} />
				<Route path='/posts/linux_and_cs_for_ds' element={<Post28/>} />
				<Route path='/posts/web_services_for_ds' element={<Post29/>} />
				<Route path='/posts/intro_to_bigdata' element={<Post30/>} />
				<Route path='/posts/neural_network_architectures' element={<Post31/>} />
				
			</Routes>
		</AnimatePresence>
	);
}

export default AnimatedRoutes;
