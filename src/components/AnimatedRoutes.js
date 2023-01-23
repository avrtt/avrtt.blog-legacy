import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Learning from '../pages/learning';
import Home from '../pages/home';
import Adventures from '../pages/adventures';
import Donate from '../pages/donate';
import Goals from '../pages/goals';

import Post1 from '../pages/math_for_ds';
import Post2 from '../pages/hypothesis_testing';
import Post3 from '../pages/algorithms_and_data_structures';
import Post4 from '../pages/ml_basics';
import Post5 from '../pages/classification_metrics';
import Post6 from '../pages/gradient_descent_optimization';
import Post7 from '../pages/linear_regression';
import Post8 from '../pages/regularization';
import Post9 from '../pages/logistic_regression';
import Post10 from '../pages/bayesian_algorithms';
import Post11 from '../pages/decision_trees';
import Post12 from '../pages/knn';
import Post13 from '../pages/svm';
import Post14 from '../pages/clustering';
import Post15 from '../pages/dimensionality_reduction';
import Post16 from '../pages/intro_to_bigdata';
import Post17 from '../pages/neural_network_architectures';
import Post18 from '../pages/ml_model_tuning';
import Post19 from '../pages/eda';
import Post20 from '../pages/sklearn';
import Post21 from '../pages/tensorflow_and_keras';
import Post22 from '../pages/cv';
import Post23 from '../pages/nlp';
import Post24 from '../pages/recommender_systems';
import Post25 from '../pages/anomaly_detection';
import Post26 from '../pages/ensembles';
import Post27 from '../pages/neural_network_concepts';
import Post28 from '../pages/time_series';
import Post29 from '../pages/sql_for_ds';
import Post30 from '../pages/linux_and_cs_for_ds';
import Post31 from '../pages/web_services_for_ds';
import Post32 from '../pages/novosibirsk';
import Post33 from '../pages/altai';

function AnimatedRoutes() {
	const location = useLocation();
	return (
		<AnimatePresence exitBeforeEnter>
			<Routes location={location} key={location.pathname}>
				<Route index element={<Home />} />
				<Route path='/learning' element={<Learning />} />
				<Route path='/adventures' element={<Adventures />} />
				<Route path='/donate' element={<Donate/>} />
				<Route path='/goals' element={<Goals/>} />
				
				<Route path='/learning/math_for_ds' element={<Post1/>} />
				<Route path='/learning/hypothesis_testing' element={<Post2/>} />
				<Route path='/learning/algorithms_and_data_structures' element={<Post3/>} />
				<Route path='/learning/ml_basics' element={<Post4/>} />
				<Route path='/learning/classification_metrics' element={<Post5/>} />
				<Route path='/learning/gradient_descent_optimization' element={<Post6/>} />
				<Route path='/learning/linear_regression' element={<Post7/>} />
				<Route path='/learning/regularization' element={<Post8/>} />
				<Route path='/learning/logistic_regression' element={<Post9/>} />
				<Route path='/learning/bayesian_algorithms' element={<Post10/>} />
				<Route path='/learning/decision_trees' element={<Post11/>} />
				<Route path='/learning/knn' element={<Post12/>} />
				<Route path='/learning/svm' element={<Post13/>} />
				<Route path='/learning/clustering' element={<Post14/>} />
				<Route path='/learning/dimensionality_reduction' element={<Post15/>} />
				<Route path='/learning/ml_model_tuning' element={<Post18/>} />
				<Route path='/learning/eda' element={<Post19/>} />
				<Route path='/learning/sklearn' element={<Post20/>} />
				<Route path='/learning/tensorflow_and_keras' element={<Post21/>} />
				<Route path='/learning/cv' element={<Post22/>} />
				<Route path='/learning/nlp' element={<Post23/>} />
				<Route path='/learning/recommender_systems' element={<Post24/>} />
				<Route path='/learning/anomaly_detection' element={<Post25/>} />
				<Route path='/learning/ensembles' element={<Post26/>} />
				<Route path='/learning/neural_network_concepts' element={<Post27/>} />
				<Route path='/learning/time_series' element={<Post28/>} />
				<Route path='/learning/sql_for_ds' element={<Post29/>} />
				<Route path='/learning/linux_and_cs_for_ds' element={<Post30/>} />
				<Route path='/learning/web_services_for_ds' element={<Post31/>} />
				<Route path='/learning/intro_to_bigdata' element={<Post16/>} />
				<Route path='/learning/neural_network_architectures' element={<Post17/>} />
				<Route path='/adventures/novosibirsk' element={<Post32/>} />
				<Route path='/adventures/altai' element={<Post33/>} />
				
			</Routes>
		</AnimatePresence>
	);
}

export default AnimatedRoutes;
