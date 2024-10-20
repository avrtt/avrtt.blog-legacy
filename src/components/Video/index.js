import React from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css/animate.min.css';  
  
const captionStyle = {
    'color': '#8e8e8e',
    'font-weight': 'bold',
    'font-size': '22px',
    'margin-top': '0px',
}
  
const Vid = ({ ytKey, c="", offset="300" }) => {

  const ytLink ='https://www.youtube.com/embed/' + ytKey;

  return (
    <center>
    	<AnimationOnScroll offset={offset} duration="1.2" animateIn="animate__fadeIn" animateOnce="true">
    		<div class="iframeWrapper">
    		    <iframe class="iframe" src={ytLink} title="video"></iframe>
    		</div>
    		<p style={captionStyle}>{c}</p>
    	</AnimationOnScroll>
    </center>
  );
};
export default Vid;
