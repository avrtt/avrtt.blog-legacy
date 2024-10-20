import React from "react";
import ArrowNext from "../../img/posts/arrow_next.svg";
import ArrowLast from "../../img/posts/arrow_last.svg";

const PostsLastNext = ({ keyNext, keyLast, section }) => {
  
  var lastPost, nextPost
  var noLast = {}
  var noNext = {}
  
  if (typeof keyNext === 'undefined') {
    lastPost = require("../../img/" + section + "/" + keyLast + ".jpg");
    nextPost = "";
    noNext = { 'display': 'none' }
  } else if (typeof keyLast === 'undefined') {
    lastPost = "";
    nextPost = require("../../img/" + section + "/" + keyNext + ".jpg");
    noLast = { 'display': 'none' }
  } else {
    lastPost = require("../../img/" + section + "/" + keyLast + ".jpg");
    nextPost = require("../../img/" + section + "/" + keyNext + ".jpg");
  }
  
  const lastLink = '/' + section + '/' + keyLast;
  const nextLink = '/' + section + '/' + keyNext;
  
  return (
	<>
	    <div class="readNextWrapper">
	        <a href={lastLink}><img class="lastPost" style={noLast} src={lastPost} alt="post_last" /></a>
	        <img class="lastArrow" style={noLast} src={ArrowLast} alt="arrow_last" />
	        <a href={nextLink}><img class="nextPost" style={noNext} src={nextPost} alt="post_next" /></a>
	        <img class="nextArrow" style={noNext} src={ArrowNext} alt="arrow_next" />
      </div>
	</>
  );
};
export default PostsLastNext;


