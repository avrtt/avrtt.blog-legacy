import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import { HashRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedRoutes from './components/AnimatedRoutes';
  
function App() {
	return (
		<Router>
			<Navbar />
			<AnimatedRoutes />
			<Footer />
		</Router>
	);
}
  
ReactDOM.render(<App />, document.getElementById("root"));

