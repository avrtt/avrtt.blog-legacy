import React from "react";
import checkbox from "./checked.svg";
import { achievementsArr } from "../../pages/itemData"

const dateStyle = {
	'color': '#adadad'
};

const Achievements = () => { 
	
	return (
		<div class='achievements'>
			<h1>Achievements</h1>
			<table className="table table-striped table-bordered">
                <tbody>
                    {achievementsArr && achievementsArr.map(achievement =>                  
                        <tr>
							<img src={checkbox} class={achievement.status} alt='checkbox'/>
                            <td width='550px'>{achievement.text}</td>
                            <td>{achievement.type}&nbsp;&nbsp;</td>
                            <td style={dateStyle}>{achievement.date}</td>
                        </tr>
                    )}
                </tbody>
            </table>
		</div> 
	)
};

export default Achievements;



