import React from "react";
import checkbox from "../../img/goals/checked.svg";
import refLink from "../../img/goals/refLink.svg";
import resultLink from "../../img/goals/resultLink.svg";
import info from "../../img/goals/info.svg";
import { goalsTags } from "../../pages/itemData"

const checkboxWrapper = {
    'vertical-align': 'middle',
}

const refLinkStyle = {
    'text-align': 'right',
    'vertical-align': 'middle',
}

const resultLinkStyle = {
    'text-align': 'left',
    'vertical-align': 'middle',
}

const infoStyle = {
	'text-align': 'right',
	'vertical-align': 'middle',
} 

const textStyle = {
    'line-height': '30px',
    'padding-right': '3vh',
    'padding-left': '1vh',
}

const textChecked = {
    'opacity': '0.6'
}

const textUnchecked = {
    'opacity': '1'
}

const deadlineStyle = {
    'opacity': '0.15',
    'font-weight': 'lighter',
    'color': 'black'
}

const deadlineHide = {
    'display': 'none',
}

const tooltipHide = {
    'display': 'none',
}

const Goal = ({ goal, isOpaque, hideChecked, hideUnchecked }) => {

  const diffStyle = {
    'opacity': isOpaque ? 1 : 0,
    'transition': 'opacity 0.3s ease', 
    'font-size': '20px',
    'vertical-align': 'middle',
    'border-radius': '8px',
    'padding': '3px 6px',
    'margin-left': '-80px',
    'margin-top': '-24px',
    'line-height': '30px',
    'position': 'absolute',
  }

  const safetyStyle = {
    'opacity': isOpaque ? 1 : 0,
    'transition': 'opacity 0.3s ease', 
    'font-size': '20px',
    'vertical-align': 'middle',
    'border-radius': '8px',
    'padding': '3px 6px',
    'margin-left': '42px',
    'margin-top': '-24px',
    'line-height': '30px',
    'position': 'absolute',
  }

  const tag1Style = {
    'opacity': isOpaque ? 1 : 0,
    'font-size': isOpaque ? '18px' : '0px',
    'transition': 'font-size 0.1s ease, opacity 0.3s ease', 
    'vertical-align': 'middle',
  }

  const tag2Style = {
    'opacity': isOpaque ? 1 : 0,
    'font-size': isOpaque ? '18px' : '0px',
    'transition': 'font-size 0.1s ease, opacity 0.3s ease', 
    'vertical-align': 'middle',
  }

  const tag3Style = {
    'opacity': isOpaque ? 1 : 0,
    'font-size': isOpaque ? '18px' : '0px',
    'transition': 'font-size 0.1s ease, opacity 0.3s ease', 
    'vertical-align': 'middle',
  }

  const tag4Style = {
    'opacity': isOpaque ? 1 : 0,
    'font-size': isOpaque ? '18px' : '0px',
    'transition': 'font-size 0.1s ease, opacity 0.3s ease', 
    'vertical-align': 'middle',
  }

  const tag5Style = {
    'opacity': isOpaque ? 1 : 0,
    'font-size': isOpaque ? '18px' : '0px',
    'transition': 'font-size 0.1s ease, opacity 0.3s ease', 
    'vertical-align': 'middle',
  }

  const rowStyleC = {
    'display': hideChecked ? 'none' : '',
  }

  const rowStyleU = {
    'display': hideUnchecked ? 'none' : '',
  }

  var showinfo, showref, showresult, showdeadline, textStatus, showtooltip, difftagname, diffdesc, safetytagname, safetydesc, tagname1, tagdesc1, tagname2, tagdesc2, tagname3, tagdesc3, tagname4, tagdesc4, tagname5, tagdesc5, checkboxStyle, legendaryText, rowStyle

  if (goal.info === '') {showinfo = 'n'} else {showinfo = 'y'}
  if (goal.refLink === '') {showref = 'n'} else {showref = 'y'}
  if (goal.resultLink === '') {showresult = 'n'} else {showresult = 'y'}
  if (goal.status === 'c') {showdeadline = deadlineHide} else {showdeadline = deadlineStyle}
  if (goal.status === 'c') {textStatus = textChecked} else {textStatus = textUnchecked}
  if (goal.status === 'u') {showtooltip = tooltipHide} 
  if (goal.difftag !== '') {
    difftagname = goalsTags.find(x => x.emoji === goal.difftag).name
    diffdesc = goalsTags.find(x => x.emoji === goal.difftag).desc
  }
  if (goal.safetytag !== '') {
    safetytagname = goalsTags.find(x => x.emoji === goal.safetytag).name
    safetydesc = goalsTags.find(x => x.emoji === goal.safetytag).desc
  }
  if (goal.tag1 !== '') {
    tagname1 = goalsTags.find(x => x.emoji === goal.tag1).name
    tagdesc1 = goalsTags.find(x => x.emoji === goal.tag1).desc
  } 
  if (goal.tag2 !== '') {
    tagname2 = goalsTags.find(x => x.emoji === goal.tag2).name
    tagdesc2 = goalsTags.find(x => x.emoji === goal.tag2).desc
  } 
  if (goal.tag3 !== '') {
    tagname3 = goalsTags.find(x => x.emoji === goal.tag3).name
    tagdesc3 = goalsTags.find(x => x.emoji === goal.tag3).desc
  } 
  if (goal.tag4 !== '') {
    tagname4 = goalsTags.find(x => x.emoji === goal.tag4).name
    tagdesc4 = goalsTags.find(x => x.emoji === goal.tag4).desc
  } 
  if (goal.tag5 !== '') {
    tagname5 = goalsTags.find(x => x.emoji === goal.tag5).name
    tagdesc5 = goalsTags.find(x => x.emoji === goal.tag5).desc
  } 
  if (goal.dateCompleted !== '') {checkboxStyle = 'checkboxStyle'} else {checkboxStyle = 'checkboxStyleEmptyDate'} 
  if (goal.difftag === '🌟') {legendaryText = 'legendaryText'}
  if (goal.status === 'c') {rowStyle = rowStyleC} else {rowStyle = rowStyleU}

  return (  
    <tr style={rowStyle}>
        <td>
            <span class="tooltipGoals">
                <span id={difftagname} class={difftagname} style={diffStyle}>{goal.difftag}
                    <p class="tooltiptextGoals tooltiptextGoalsLeft"><span class="tooltipTitle"><p></p>{difftagname}</span>
                        <p class="lighterText">{diffdesc}</p>
                    </p>
                </span>
            </span>
        </td>
        <td style={checkboxWrapper}>
            <div style={showtooltip} class="tooltipGoals">
				<img id={checkboxStyle} src={checkbox} class={goal.status} alt='checkbox'/>
				<span class="tooltiptextGoals tooltiptextGoalsLeft">{goal.dateCompleted}</span>
			</div>
        </td>
        <td style={textStyle} width='100%'>
            <span class={legendaryText} style={textStatus}>{goal.text}</span><span class='noselect' style={showdeadline}> – {goal.deadline}</span>
            <span class="noselect">&nbsp;&nbsp;</span>
            <span class="tooltipGoals noselect tagAnimation">
                <span style={tag5Style}>{goal.tag5}
                    <p class="tooltiptextGoals tooltiptextGoalsLeft"><span class="tooltipTitle"><p></p>{tagname5}</span>
                        <p class="lighterText">{tagdesc5}</p>
                    </p>
                </span>
            </span>
            <span class="tooltipGoals noselect tagAnimation">
                <span style={tag4Style}>{goal.tag4}
                    <p class="tooltiptextGoals tooltiptextGoalsLeft"><span class="tooltipTitle"><p></p>{tagname4}</span>
                        <p class="lighterText">{tagdesc4}</p>
                    </p>
                </span>
            </span>
            <span class="tooltipGoals noselect tagAnimation">
                <span style={tag3Style}>{goal.tag3}
                    <p class="tooltiptextGoals tooltiptextGoalsLeft"><span class="tooltipTitle"><p></p>{tagname3}</span>
                        <p class="lighterText">{tagdesc3}</p>
                    </p>
                </span>
            </span>
            <span class="tooltipGoals noselect tagAnimation">
                <span style={tag2Style}>{goal.tag2}
                    <p class="tooltiptextGoals tooltiptextGoalsLeft"><span class="tooltipTitle"><p></p>{tagname2}</span>
                        <p class="lighterText">{tagdesc2}</p>
                    </p>
                </span>
            </span>
            <span class="tooltipGoals noselect tagAnimation">
                <span style={tag1Style}>{goal.tag1}
                    <p class="tooltiptextGoals tooltiptextGoalsLeft"><span class="tooltipTitle"><p></p>{tagname1}</span>
                        <p class="lighterText">{tagdesc1}</p>
                    </p>
                </span>
            </span>
        </td>
        <td style={infoStyle}>
			<div class="tooltipGoals">
				<img id='infoGoals' src={info} class={showinfo} alt='info'/>
				<span class="tooltiptextGoals tooltiptextGoalsRight lighterText goalsTooltipPadding">{goal.info}</span>
			</div>
		</td>
        <td style={refLinkStyle}>
            <a class={showref} href={goal.refLink}>
                <img id='link' src={refLink} class={showref} alt='reference_link'/>
            </a>
        </td>
        <td style={resultLinkStyle}>
            <a class={showresult} href={goal.resultLink}>
                <img id='link' src={resultLink} class={showresult} alt='result_link'/>
            </a>
        </td>
        <td>
            <span class="tooltipGoals">
                <span id={safetytagname} class={safetytagname} style={safetyStyle}>{goal.safetytag}
                    <p class="tooltiptextGoals tooltiptextGoalsRight"><span class="tooltipTitle"><p></p>{safetytagname}</span>
                        <p class="lighterText">{safetydesc}</p>
                    </p>
                </span>
            </span>
        </td>
    </tr>
  );
};
export default Goal;
