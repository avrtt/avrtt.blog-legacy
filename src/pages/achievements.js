import React from 'react';
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion';
import TelegramComments from 'react-telegram-comments';
import checkbox from "./img/checked.svg";
import link from "./img/link.svg";
import info from "./img/info.svg";
import { achievementsArr } from "./itemData"

const TITLE = 'Achievements - lenferdetroud.github.io'

const divStyle = {
	width: '100%',
	height: '540px',
	overflow: 'hidden'
}  

const mapFrameStyle = {
	border: 'none',
	width: '100%',
	height: '540px',
	position: 'relative',
	top: '-50px'
}; 

const Achievements = () => {
  return (
    <motion.div
		initial={{opacity: 0 }}
		animate={{opacity: 1 }}
		exit={{opacity: 0 }}
		transition={{ duration: 0.15 }}>
		
		<Helmet>
			<title>{ TITLE }</title>
        </Helmet>
        
        <div class='achievements'>
			<table className="table table-striped table-bordered">
                <tbody>
                    {achievementsArr && achievementsArr.map(achievement =>                  
                        <tr>
							<td>{achievement.type}&nbsp;&nbsp;&nbsp;</td>
							<img src={checkbox} class={achievement.status} alt='checkbox'/>
                            <td width='600px'>{achievement.text}</td>
                            <td>
								<div class="tooltipAchievements">
									<img id='info' src={info} class={achievement.hasinfo} alt='info'/>
									<span class="tooltiptextAchievements">{achievement.info}</span>
								</div>
							</td>
                            <td><a class={achievement.haslink} href={achievement.link}><img id='link' src={link} class={achievement.haslink} alt='link'/></a></td>
                        </tr>
                    )}
                </tbody>
            </table>
		</div> 
        
        <div id="map-container" style={divStyle}>
			<iframe id="map-embed" src="https://www.google.com/maps/d/embed?mid=1X9b0bo11WcY9on87ZQXoB3YUkccwnK49&ehbc=2E312F" style={mapFrameStyle} title="Travel Map" />
		</div>
        
        <div class='chatWrapper'><TelegramComments websiteKey={'2JA7Wo3q'} ccustomColor='000000' ommentsNumber={5} pageId='achievements' showDislikes={true} /></div>
         
    </motion.div>
  );
};
  
export default Achievements;
