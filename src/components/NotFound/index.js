import React from "react";

const notFoundStyle = {
  'display': 'block',
  'margin-left': 'auto',
  'margin-right': 'auto', 
  'width': '50%', 
  'margin-top': '100px', 
  'text-align': 'center'
}

const NotFound = () => {
  return (
    <div style={notFoundStyle}>
	    <a href="https://www.youtube.com/watch?v=KLn43uJl6o4"><img src={require("./mysterious_frog.png")} /></a>
	    <p>Error 404: the frog was found</p>
	  </div>
  );
};
export default NotFound;