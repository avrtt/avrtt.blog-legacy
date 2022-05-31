import React from 'react';
import { Helmet } from 'react-helmet'

const TITLE = 'Venturing Forth'
const DESCRIPTION = 'A diary of a lifelong traveler.'

const Home = () => {
  return (
	<>
		<Helmet>
			<title>{ TITLE }</title>
			<description>{ DESCRIPTION }</description>
        </Helmet>  
        
        <p>Link example: <a href="https://music.youtube.com/watch?v=fnwZca8z9II&list=RDAMVMfnwZca8z9II">hover on me</a></p>
              
    </>
  );
};
  
export default Home;
