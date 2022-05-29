import React from 'react';
import { Helmet } from 'react-helmet'

const TITLE = 'About - Venturing Forth'
  
const About = () => {
  return (
    <>
		<Helmet>
			<title>{ TITLE }</title>
        </Helmet>
    </>
  );
};
  
export default About;
