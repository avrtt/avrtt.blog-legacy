import React, { useEffect } from "react";
import cvCalendar from "../../img/cv/cvCalendar.svg";
import cvLocation from "../../img/cv/cvLocation.svg";
import M from '../../components/Markdown';

const calendarLogoStyle = {
	'vertical-align': 'middle',
	'margin-right': '7px',
	'opacity': '0.7'
}; 

const locationLogoStyle = {
	'vertical-align': 'middle',
	'margin-right': '5px',
	'opacity': '0.7'
}; 

const point1Style = {
  'margin-bottom': '-26px'
};

const point2Style = {
  'margin-bottom': '-26px'
};

const point3Style = {
  'margin-bottom': '-26px'
};

const point4Style = {
  'margin-bottom': '-26px'
};

const point5Style = {
  'margin-bottom': '-26px'
};

const CvPositionFirst = ({ positionName, expTime, expLocation, expDesc, point1, point2, point3, point4, point5, pointLast }) => {
  return (
	<>
    <span class="expPosition">{positionName}</span>
    <br/>
    <div class="expTimeLocationWrapper">
      <span class="expTime">
        <img src={cvCalendar} class="noselect" alt="calendar_logo" width="20" height="20" style={calendarLogoStyle} />
	      {expTime}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </span>
      <span class="expLocation">
        <img src={cvLocation} class="noselect" alt="location_logo" width="20" height="20" style={locationLogoStyle} />
	      {expLocation}
      </span>
    </div>
    <div class="expDesc">
      <M text={expDesc}/>
    </div>
    <div class="expDescListFirst">
      <p style={point1Style}><M text={point1}/></p>
      <p style={point2Style}><M text={point2}/></p>
      <p style={point3Style}><M text={point3}/></p>
      <p style={point4Style}><M text={point4}/></p>
      <p style={point5Style}><M text={point5}/></p>
      <p><M text={pointLast}/></p>
    </div>
	</>
  );
};
export default CvPositionFirst;


