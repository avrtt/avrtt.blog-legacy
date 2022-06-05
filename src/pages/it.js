import React from 'react';
import { Helmet } from 'react-helmet'
import { itemDataIT } from './itemData'

itemDataIT.sort(function (a, b) {
  return b.id - a.id;
});

const TITLE = 'IT blog post - Venturing Forth'
  
const IT = () => {
  return (
    <>
		<Helmet>
			<title>{ TITLE }</title>
        </Helmet> 
       
		<div>
			{itemDataIT.map((imgSrc, index) => (<img class="prew" src={imgSrc.img} key={index} alt="img_prev"/>))}
		</div>	
        
    </>
  );
};
  
export default IT;
