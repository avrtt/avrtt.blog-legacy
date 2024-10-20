import React from "react";
import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css'; 
  
const L = ({ text }) => {
  return (
    <Latex>{text}</Latex>
  );
};
export default L;
