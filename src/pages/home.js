import React from 'react';
import { Helmet } from 'react-helmet'

const TITLE = 'Venturing Forth'
const DESCRIPTION = ''

const Home = () => {
  return (
	<>
		<Helmet>
			<title>{ TITLE }</title>
			<description>{ DESCRIPTION }</description>
        </Helmet>
    </>
  );
};
  
export default Home;
