import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import M from '../components/Markdown';
import { categories, currentZoneUTC, freelanceWorkHourStart, freelanceWorkHourEnd, freelanceLastUpdated } from './itemData';
import Stack from'../components/Stack';
import FreelanceCategory from'../components/FreelanceCategory';
import info from "../img/goals/info.svg";
import Spoiler from '../components/Spoiler';

const TITLE = 'Freelance - avrtt.blog'

// fetch my current time zone and working hours (ints)
const myTimeOffset = parseInt(currentZoneUTC)
const startHourFetch = parseInt(freelanceWorkHourStart)
const endHourFetch = parseInt(freelanceWorkHourEnd)

// get user (browser) time zone offset in hours (int)
const userTimeOffset = -parseInt((new Date().getTimezoneOffset()) / 60)

// create "UTC[+/-]<offset>" string
var strUTCOffset
if (userTimeOffset < 0) {
	strUTCOffset = "UTC" + userTimeOffset 
} else {
	strUTCOffset = "UTC+" + userTimeOffset
}

// get time difference between user and me in hours (int)
const userDiff = myTimeOffset - userTimeOffset

// set Date objects with my working hours in user's time zone
var startTime = new Date()
var endTime = new Date() 
startTime.setHours(startHourFetch - userDiff)
endTime.setHours(endHourFetch - userDiff)

// extract hours from Date objects and create strings
var startHoursUTC = (startTime.getHours()).toString() + ":00"
var endHoursUTC = (endTime.getHours()).toString() + ":00"

// create tooltip text
var tooltipText
if (userDiff === 0) {
	tooltipText = "The hours are shown for your local time in the 24-hour notation, based on your browser data. My current time zone is the same as yours."
} else {
	tooltipText = "The hours are shown for your local time in the 24-hour notation, based on your browser data. My current time zone is UTC" + currentZoneUTC + "."
}

const Freelance = () => {
	
	useEffect(() => {
  		window.scrollTo(0, 0)
	}, [])
	
  return (
    <motion.div
		initial={{opacity: 0 }}
		animate={{opacity: 1 }}
		exit={{opacity: 0 }}
		transition={{ duration: 0.15 }}>
		
		<Helmet>
			<title>{ TITLE }</title>
        </Helmet>

<div class="languageSwitchWrapper noselect">
	<a href="/freelance/ru">
		<span class="languageButton">RU</span>
	</a>
</div>

<div class="freelanceBody">
        
<M text="I'm a full-time freelancer primarily focused on Data Science, offering both regular and one-off project-based work, service maintenance, consulting and teaching. My main areas of expertise are machine learning, data analysis, data collection, statistics, visualization and Python programming, but I'm also competent in some aspects of web development, video post-production and prompt engineering."/>
<Spoiler 
    title={"Detailed list: services I offer (with examples)"} 
    block1={"Point 1"}
	block2={"Point 2"}
/>

	
      </div>
      <div class="lastUpdatedFreelance">UPDATED ON {freelanceLastUpdated}</div>
    </motion.div>
  );
};
  
export default Freelance;
