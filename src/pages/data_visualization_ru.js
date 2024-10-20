import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import M from '../components/Markdown';
import { projects, categories } from './itemData';
import FreelanceProject from'../components/FreelanceProject'
import MachineLearningIcon from "../img/freelance/machineLearningIcon.svg";
import DataAnalysisIcon from "../img/freelance/dataAnalysisIcon.svg";
import DataCollectionIcon from "../img/freelance/dataCollectionIcon.svg";
import PythonAppsIcon from "../img/freelance/pythonAppsIcon.svg";
import WebDevelopmentIcon from "../img/freelance/webDevelopmentIcon.svg";
import TechnicalWritingIcon from "../img/freelance/technicalWritingIcon.svg";
import MiscIcon from "../img/freelance/miscIcon.svg";
import Spoiler from '../components/Spoiler';

const projectsFiltered = projects.filter(item => item.categoryKey === 'data_visualization')
const categoryDescDetailedRu = categories.find(item => item.categoryKey === 'data_visualization').categoryDescDetailedRu;

projectsFiltered.sort(function (a, b) {
	return b.id - a.id;
  });

const TITLE = 'Проекты: визуализация данных - avrtt.blog'

const DataVisualizationRu = () => {
	
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
	<a title="Проекты по машинному обучению" class="categoryButton noselect" href="/freelance/ru/projects/machine_learning"><div class="categoryButton noselect"><img src={MachineLearningIcon} alt="button_icon" width="50%" height="100%" /></div></a>
	<a title="Проекты по анализу данных" class="categoryButton noselect" href="/freelance/ru/projects/data_analysis"><div class="categoryButton noselect"><img src={DataAnalysisIcon} alt="button_icon" width="50%" height="100%" /></div></a>
	<a title="Проекты по сбору данных" class="categoryButton noselect" href="/freelance/ru/projects/data_collection"><div class="categoryButton noselect"><img src={DataCollectionIcon} alt="button_icon" width="50%" height="100%" /></div></a>
	<a title="Python-приложения" class="categoryButton noselect" href="/freelance/ru/projects/python_apps"><div class="categoryButton noselect"><img src={PythonAppsIcon} alt="button_icon" width="50%" height="100%" /></div></a>
	<a title="Проекты по техрайтингу" class="categoryButton noselect" href="/freelance/ru/projects/technical_writing"><div class="categoryButton noselect"><img src={TechnicalWritingIcon} alt="button_icon" width="50%" height="100%" /></div></a>
	<a title="Проекты по веб-разработке" class="categoryButton noselect" href="/freelance/ru/projects/web_development"><div class="categoryButton noselect"><img src={WebDevelopmentIcon} alt="button_icon" width="50%" height="100%" /></div></a>
	<a title="Прочие проекты" class="categoryButton noselect" href="/freelance/ru/projects/misc"><div class="categoryButton noselect"><img src={MiscIcon} alt="button_icon" width="50%" height="100%" /></div></a>
</div>

<div class="freelanceBody">

<Spoiler 
    title={"Подробнее про эту категорию проектов"} 
    block1={categoryDescDetailedRu}
/>
<br/>
<M text="В данном списке представлены некоторые мои проекты, связанные с анализом данных (исключая вклад в open-source и прочие проприетарные или небольшие проекты):"/>

{projectsFiltered.map((project) => (
	<FreelanceProject 
		emoji={project.emoji}
		projectName={project.projectNameRu}
		projectDesc={project.projectDescRu}
		date={project.dateRu}
		duration={project.durationRu}
		tag={project.tagRu}
		source1={project.source1}
		source1Link={project.source1Link}
		source2={project.source2}
		source2Link={project.source2Link}
		source3={project.source3}
		source3Link={project.source3Link}
		extraContentHide={project.extraContentHide}
		extraDesc={project.extraDescRu}
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
  
export default DataVisualizationRu;
