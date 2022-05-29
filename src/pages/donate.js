import React from 'react';
import { Helmet } from 'react-helmet'

const TITLE = 'Donate - Venturing Forth'
  
const Donate = () => {
  return (
    <>
		<Helmet>
			<title>{ TITLE }</title>
        </Helmet>
    </>
  );
};
  
export default Donate;
