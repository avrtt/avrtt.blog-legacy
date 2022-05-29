import React from 'react';
import { Helmet } from 'react-helmet'

const TITLE = 'IT blog post - Venturing Forth'
  
const IT = () => {
  return (
    <>
		<Helmet>
			<title>{ TITLE }</title>
        </Helmet>
    </>
  );
};
  
export default IT;
