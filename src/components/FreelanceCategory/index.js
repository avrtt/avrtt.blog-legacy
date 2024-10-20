import React, { useEffect } from "react";

const categoryNameStyle = {
  'font-weight': 'bold',
  'margin-left': '14px',
}; 

const numProjectsStyle = {
  'font-weight': 'lighter',
  'font-size': '18px',
  'float': 'right',
  'line-height': '46.5px',
}; 

const imgStyle = {
  'vertical-align': 'middle',
  'margin-right': '2px',
}; 

const categoryDescStyle = {
  'font-weight': 'lighter',
  'font-size': '18px',
  'margin-left': '14px',
  'width': '85%'
}; 

const FreelanceCategory= ({ categoryName, categoryDesc, numProjects, img, url }) => {
  
  return (
    <a href={url}><div class="freelanceCategoryWrapper">
      <span style={categoryNameStyle}>{categoryName}</span>
      <span style={numProjectsStyle}>
        {numProjects}
        &nbsp;&nbsp;&nbsp;&nbsp;
        <img src={img} class="noselect" alt="category_icon" width="60" height="60" style={imgStyle} />
      </span>
      <br/>
      <p style={categoryDescStyle}>{categoryDesc}</p>
    </div></a>
  )
};
export default FreelanceCategory;


