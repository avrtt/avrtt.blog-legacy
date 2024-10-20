import React from "react";
import PostsLastNext from '../PostsLastNext';
import TelegramComments from 'react-telegram-comments';
import ChannelPreview from '../ChannelPreview';
import PostDonate from '../PostDonate';
import VenturingforthPicture from '../../img/posts/venturingforth.jpg';
import AvheuristicsPicture from '../../img/posts/avheuristics.jpg';

const PostBottom = ({ keyNext, keyLast, key, section }) => {

    var tgLink, ytLink, tgChannelPicture, tgChannelName, tgChannelDesc

    if (section === "adventures") {
        tgLink = "venturingforth"; 
        ytLink = "UUSGEQmkFLhS29sTSaFhqCIQ";
        tgChannelPicture = VenturingforthPicture;
        tgChannelName = "Venturing forth!";
        tgChannelDesc = "Subscribe to my Telegram channel for updates in the Adventures section and more travel content";
    } else if (section === "research") {
        tgLink = "avheuristics";  
        ytLink = "UUpPtaqqxzFqm9rZAh2xC5OA";
        tgChannelPicture = AvheuristicsPicture;
        tgChannelName = "Averett's Heuristics";
        tgChannelDesc = "Subscribe to my Telegram channel for updates in the Research section and more tech content";
    } else if (section === "thoughts") {
        tgLink = "venturingforth";  
        ytLink = "UUSGEQmkFLhS29sTSaFhqCIQ";
        tgChannelPicture = VenturingforthPicture;
        tgChannelName = "Venturing forth!";
        tgChannelDesc = "Subscribe to my Telegram channel for updates in the Thoughts section and more content";
    }

  return (
	<>
       <PostsLastNext keyNext={keyNext} keyLast={keyLast} section={section} />
       <PostDonate />
       <div class='chatWrapper'><TelegramComments websiteKey={'2JA7Wo3q'} customColor='000000' commentsNumber={5} pageId={key} showDislikes={true} /></div>
	     <ChannelPreview tgLink={tgLink} ytLink={ytLink} tgChannelPicture={tgChannelPicture} tgChannelName={tgChannelName} tgChannelDesc={tgChannelDesc} />
	</>
  );
};
export default PostBottom;


