import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import M from '../components/Markdown';
import { categories, currentZoneUTC, freelanceWorkHourStart, freelanceWorkHourEnd, freelanceLastUpdated } from './itemData';
import Stack from'../components/Stack';
import FreelanceCategory from'../components/FreelanceCategory';
import info from "../img/goals/info.svg";

const TITLE = 'Фриланс - avrtt.blog'

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
	tooltipText = "Рабочее время приводится для Вашего часового пояса, основываясь на данных браузера. На текущий момент наши часовые пояса совпадают."
} else {
	tooltipText = "Рабочее время приводится для Вашего часового пояса, основываясь на данных браузера. Мой текущий часовой пояс — UTC" + currentZoneUTC + "."
}

const FreelanceRu = () => {
	
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

<div class="languageSwitchWrapper">
	<a href="/freelance/">
		<span class="languageButton noselect">EN</span>
	</a>
</div>

<div class="freelanceBody">


	
      </div>
      <div class="lastUpdatedFreelance">UPDATED {freelanceLastUpdated}</div>
    </motion.div>
  );
};
  
export default FreelanceRu;
