import React from "react";
import ReactMarkdown from 'react-markdown';
  
const M = ({ text }) => {
  return (
    <ReactMarkdown>{text}</ReactMarkdown>
  );
};
export default M;