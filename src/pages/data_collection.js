import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import M from '../components/Markdown';
import { projects, categories } from './itemData';
import FreelanceProject from'../components/FreelanceProject'
import MachineLearningIcon from "../img/freelance/machineLearningIcon.svg";
import DataAnalysisIcon from "../img/freelance/dataAnalysisIcon.svg";
import DataVisualizationIcon from "../img/freelance/dataVisualizationIcon.svg";
import PythonAppsIcon from "../img/freelance/pythonAppsIcon.svg";
import TechnicalWritingIcon from "../img/freelance/technicalWritingIcon.svg";
import WebDevelopmentIcon from "../img/freelance/webDevelopmentIcon.svg";
import MiscIcon from "../img/freelance/miscIcon.svg";
import Spoiler from '../components/Spoiler';

const projectsFiltered = projects.filter(item => item.categoryKey === 'data_collection')
const categoryDescDetailed = categories.find(item => item.categoryKey === 'data_collection').categoryDescDetailed;

projectsFiltered.sort(function (a, b) {
	return b.id - a.id;
  });

const TITLE = 'Data collection projects - avrtt.blog'

const DataCollection = () => {
	
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
        
<div class="categorySwitchWrapper">
	<a title="Machine learning projects" class="categoryButton noselect" href="/freelance/projects/machine_learning"><div class="categoryButton noselect"><img src={MachineLearningIcon} alt="button_icon" width="50%" height="100%" /></div></a>
	<a title="Data analysis projects" class="categoryButton noselect" href="/freelance/projects/data_analysis"><div class="categoryButton noselect"><img src={DataAnalysisIcon} alt="button_icon" width="50%" height="100%" /></div></a>
	<a title="Data visualization projects" class="categoryButton noselect" href="/freelance/projects/data_visualization"><div class="categoryButton noselect"><img src={DataVisualizationIcon} alt="button_icon" width="50%" height="100%" /></div></a>
	<a title="Python projects" class="categoryButton noselect" href="/freelance/projects/python_apps"><div class="categoryButton noselect"><img src={PythonAppsIcon} alt="button_icon" width="50%" height="100%" /></div></a>
	<a title="Technical writing projects" class="categoryButton noselect" href="/freelance/projects/technical_writing"><div class="categoryButton noselect"><img src={TechnicalWritingIcon} alt="button_icon" width="50%" height="100%" /></div></a>
	<a title="Web development projects" class="categoryButton noselect" href="/freelance/projects/web_development"><div class="categoryButton noselect"><img src={WebDevelopmentIcon} alt="button_icon" width="50%" height="100%" /></div></a>
	<a title="Misc projects" class="categoryButton noselect" href="/freelance/projects/misc"><div class="categoryButton noselect"><img src={MiscIcon} alt="button_icon" width="50%" height="100%" /></div></a>
</div>

<div class="freelanceBody">

<Spoiler 
    title={"More about this category of projects"} 
    block1={categoryDescDetailed}
/>
<br/>
<M text="The following list represents some of my highlighted machine learning projects (excluding open-source contributions and other proprietary or small projects):"/>

{projectsFiltered.map((project) => (
	<FreelanceProject 
		emoji={project.emoji}
		projectName={project.projectName}
		projectDesc={project.projectDesc}
		date={project.date}
		duration={project.duration}
		tag={project.tag}
		source1={project.source1}
		source1Link={project.source1Link}
		source2={project.source2}
		source2Link={project.source2Link}
		source3={project.source3}
		source3Link={project.source3Link}
		extraContentHide={project.extraContentHide}
		extraDesc={project.extraDesc}
		demoImg1={project.demoImg1}
		demoImg2={project.demoImg2}
		demoImg3={project.demoImg3}
		demoVidYTKey={project.demoVidYTKey}
	/>
))}

      </div>
    </motion.div>
  );
};
  
export default DataCollection;
