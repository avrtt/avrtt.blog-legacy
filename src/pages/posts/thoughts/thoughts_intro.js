import React,{useEffect}from'react';import{Helmet}from'react-helmet';import{motion}from'framer-motion';import M from'../../../components/Markdown';import L from'../../../components/Latex';import Img from'../../../components/Image';import Vid from'../../../components/Video';import FetchVariables from'../../../components/FetchVariables';import PostBanner from'../../../components/PostBanner';import PostBottom from'../../../components/PostBottom';import{itemDataAdventures,itemDataResearch,itemDataThoughts}from'../../itemData';var key,path
// ------------------------------------- //

key = 'thoughts_intro'

// ------------------------------------- //
const[array,postNumber,nextPostKey,lastPostKey,title,date,desc,backgroundTitleWidth,backgroundDescWidth,banner,imgPath,section]=FetchVariables(key,itemDataAdventures,itemDataResearch,itemDataThoughts);function img(imgName,caption){var path=require(imgPath+imgName+'.jpg');return(<Img p={path}c={caption}/>)}function vid(ytKey,caption){return(<Vid ytKey={ytKey}c={caption}/>)}export default function Post(){useEffect(()=>{window.scrollTo(0,0)},[]);return(<motion.div initial={{opacity:0}}animate={{opacity:1}}exit={{opacity:0}}transition={{duration:0.15}}><Helmet><title>{title}</title></Helmet><PostBanner itemDataArray={array}postNumber={postNumber}date={date}desc={desc}backgroundTitleWidth={backgroundTitleWidth}backgroundDescWidth={backgroundDescWidth}banner={banner}section={section}postKey={key}/>


<div class="postBody">			
    <div class="yellowNotice">
        <M text="## 🚧 HEADS UP!"/>
        <M text="This post isn't finished. There may be typos, inconsistent narration, superficiality and lack of stylization."/>
    </div>
    

    
</div>


<PostBottom keyNext={nextPostKey}keyLast={lastPostKey}key={key}section={section}/></motion.div>)}
