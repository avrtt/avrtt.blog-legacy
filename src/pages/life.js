import React from 'react';
import { Helmet } from 'react-helmet'

const TITLE = 'Life blog post - Venturing Forth'

const Life = () => {
  return (
    <>
		<Helmet>
			<title>{ TITLE }</title>
        </Helmet>
    </>
  );
};
  
export default Life;
