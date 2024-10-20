import React from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Zoom from 'react-medium-image-zoom'
import 'animate.css/animate.min.css';  
  
const captionStyle = {
    'color': '#8e8e8e',
    'font-weight': 'bold',
    'font-size': '22px',
    'margin-top': '-60px'
}
  
const Img = ({ p, c="", w="100%", offset="300" }) => {
  return (
    <center>
    	<AnimationOnScroll offset={offset} duration="1.2" animateIn="animate__fadeIn" animateOnce="true">
    		<Zoom>
    			<img alt="img" src={p} width={w} />
    		</Zoom>
    		<p style={captionStyle}>{c}</p>
    	</AnimationOnScroll>
    </center>
  );
};
export default Img;
