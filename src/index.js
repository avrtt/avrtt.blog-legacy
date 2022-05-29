import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home';
import Life from './pages/life';
import IT from './pages/it';
import About from './pages/about';
import Donate from './pages/donate';
import NotFound from './pages/404';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route index element={<Home />} />
        <Route path='/life' element={<Life/>} />
        <Route path='/it' element={<IT/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/donate' element={<Donate/>} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    </Router>
);
}
  
ReactDOM.render(<App />, document.getElementById("root"));

