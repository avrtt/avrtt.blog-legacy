import React from 'react';
import { Helmet } from 'react-helmet'
import { itemDataLife } from './itemData'

itemDataLife.sort(function (a, b) {
  return b.id - a.id;
});

const TITLE = 'Life blog post - Venturing Forth'

const iframeStyle = {
	border: 'none',
	width: '100%',
	height: '540px',
	position: 'relative',
	top: '-50px'
}; 

const divStyle = {
	width: '100%',
	height: '540px',
	overflow: 'hidden'
}

const Life = () => {
  return (
    <>
		<Helmet>
			<title>{ TITLE }</title>
        </Helmet>
        
        <div>
			{itemDataLife.map((imgSrc, index) => (<img class="prew" src={imgSrc.img} key={index} alt="img_prev"/>))}
		</div>	
        
		<div id="map-container" style={divStyle}>
			<iframe id="map-embed" src="https://www.google.com/maps/d/embed?mid=1X9b0bo11WcY9on87ZQXoB3YUkccwnK49&ehbc=2E312F" style={iframeStyle} title="Travel Map" />
		</div>
    </>
  );
};
  
export default Life;
