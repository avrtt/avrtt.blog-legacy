import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { itemDataLearning } from './itemData';
import TelegramComments from 'react-telegram-comments';
import ChannelPreviewLearning from '../components/ChannelPreviewLearning';
import ReactMarkdown from 'react-markdown';
import Latex from 'react-latex-next';
import Zoom from 'react-medium-image-zoom'
import 'katex/dist/katex.min.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css/animate.min.css';

const postNumber = itemDataLearning.find(x => x.key === 'hypothesis_testing').id;

const title = itemDataLearning.find(x => x.id === postNumber).title + ' - segfaultnomad.github.io';
const key = itemDataLearning.find(x => x.id === postNumber).key;
var banner = require("./img/learning/" + key + ".jpg");

const prevImgStyle = {
	"width": "55%",
	"clip-path": "inset(25% 0px 30% 0px round 15px)",
	"transform": "scale(1.8)",
	"filter": "brightness(70%)"
}

const prevStyle = {
	"position": "relative",
}

const prevTextStyle = {
	"position": "absolute",
	"top": "50%",
	"left": "50%", "width": "100%",
	"transform": "translate(-50%, -70%)",
	"margin": "0",
	"padding": "0",
	"color": "#f2f2f2",
	"font-size": "55px",
	"font-family": "'Quicksand', sand-serif"
}

export default function Post() {  	
	return (
		<motion.div 
			initial={{opacity: 0 }}
			animate={{opacity: 1 }}
			exit={{opacity: 0 }}
			transition={{ duration: 0.15 }}>
			<Helmet><title>{ title }</title></Helmet>
			<center><div class='noselect' style={prevStyle}>
				<img style={prevImgStyle} src={banner} alt="banner" />
				<b><div style={prevTextStyle}>{itemDataLearning.find(x => x.id === postNumber).title}</div></b>
				<br/>
			</div></center><div class="postBody">
				
					
<ReactMarkdown># This is Markdown </ReactMarkdown>
<Latex>This is LaTeX: $e^+e^-$ $\\gamma$</Latex>

											
Machine learning, specifically supervised learning, can be described as the desire to use available data to learn a function that best maps inputs to outputs.

Technically, this is a problem called function approximation, where we are approximating an unknown target function (that we assume exists) that can best map inputs to outputs on all possible observations from the problem domain.

An example of a model that approximates the target function and performs mappings of inputs to outputs is called a hypothesis in machine learning.

The choice of algorithm (e.g. neural network) and the configuration of the algorithm (e.g. network topology and hyperparameters) define the space of possible hypothesis that the model may represent.

В предыдущем уроке мы разобрали основные идеи, связанные с тестированием гипотез. Теперь давайте разберем алгоритм тестирования.

1. Для начала, мы формулируем нулевую и альтернативную гипотезы: H0 и H1.
2. Далее мы определяем статистический критерий. Это некая непрерывная СВ, служащая для проверки нулевой гипотезы. Будем обозначать его как K.
3. Задаем significance level альфа.
4. ...и так называемый rejection region. [рисунок] rejection region - это интервал отвержения нулевой гипотезы. Он зависит от significance level альфа. Вообще, это не обязательно интервал, это множество. 
5. Наконец, проводится тест, то есть наблюдаемое значение критерия проверяется на попадание в rejection region:	
<center><AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true"><Zoom><img alt="img" src="https://i.imgur.com/2fTbuRO.png" width="50%" /></Zoom></AnimationOnScroll></center>				
						
I know it seems a bit complicated, but I ll try to give you some intuitions.

Разбирать - целая куча:

[http://www.mathprofi.ru/statisticheskie_gipotezy.html](http://www.mathprofi.ru/statisticheskie_gipotezy.html)

[http://www.mathprofi.ru/proverka_statisticheskih_gipotez.html](http://www.mathprofi.ru/proverka_statisticheskih_gipotez.html)

[http://www.mathprofi.ru/kriteriy_soglasiya.html](http://www.mathprofi.ru/kriteriy_soglasiya.html)

[https://youtu.be/D2sMsmL0ScQ](https://youtu.be/D2sMsmL0ScQ)

[https://youtu.be/1JT9oODsClE](https://youtu.be/1JT9oODsClE)

Data Science from Scratch - глава 7, стр. 123

file:///home/lenferdetroud/Documents/Data%20Science%20from%20Scratch%20(2nd%20Edition).pdf

[https://habr.com/ru/company/stepic/blog/250527/](https://habr.com/ru/company/stepic/blog/250527/)

[https://habr.com/ru/company/stepic/blog/311354/](https://habr.com/ru/company/stepic/blog/311354/)

Статистические критерии и их виды

Проверка статистических гипотез является большим классом задач статистики.

A statistical hypothesis is an assumption about population that can be confirmed or rejected by observing a sample.

Простой пример. Если мы измерим вес 1000 котов определенного возраста и закон распределения их веса будет нормальным, то мы можем выдвинуть гипотезу о том, что вес всех котов этого возраста на планете распределен нормально.

Эта гипотеза, которую предстоит проверить, называется нулевой гипотезой и обозначается как H0. Она принимается за верную до тех пор, пока не будет доказано обратное. 

Формулируется также противоположная ей гипотеза: "Вес всех котов этого возраста на планете НЕ распределен нормально". Эта гипотеза называется альтернативной и обозначается как H1. Если исследование покажет, что нулевая гипотеза не верна, то за правильную будет принята альтернативная гипотеза.

Гипотеза - это не только про тип распределения. Можно выдвинуть нулевую гипотезу о том, что если средний вес 1000 котов равен 4 килограмма, то и средний вес всех котов на планете равен 4 килограмма. При этом альтернативных гипотез может быть несколько:

- Средний вес всех котов не равен 4 килограмма
- Средний вес всех котов большое или меньше 4 кг
- Средний вес всех котов равен конкретному значению, например 3.9 килограмма.

Выбор альтернативной гипотезы зависит от условия задачи.

Для того, чтобы отвергнуть или принять гипотезу, применяется строгое математическое правило, называемое статистическим тестом. Суть теста - понять, отличается ли наблюдение от нулевой гипотезы. Если не отличается - нулевая гипотеза верна. Если отличается - принять альтернативную гипотезу.

Но поскольку мы имеем дело со случайностью, с некоторой вероятностью гипотеза может быть ошибочно принята, либо ошибочно отвержена.

На нашем примере это будет выглядеть следующим образом:

- Мы отвергли гипотезу о том, что вес всех котов на планете распределен нормально, но на самом деле он действительной так распределен.
- Мы приняли гипотезу о том, что вес всех котов на планете распределен нормально, но в это не правда.

The first case is called a Type I error - the rejection of a true null hypothesis.

The second case is called a Type II error - the non-rejection of a false null hypothesis.

Think it over so you don t get confused later on.				
							
<center><AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true"><Zoom><img alt="img" src="https://i.imgur.com/i5r2Ghm.png" width="50%" /></Zoom></AnimationOnScroll></center>											

Now a little bit of terminology.

- Вероятность допустить ошибку первого типа называется significance level и обозначается как альфа. Её исследователь определяет заранее.
- Вероятность допустить ошибку второго типа обозначают как бета, а значение 1-бета называется power of a test. То есть, power of a test - это вероятность отвергнуть неправильную гипотезу.

При уменьшении вероятности альфа (отвергнуть правильную гипотезу) растёт вероятность бета (принять неверную гипотезу). Поэтому задача статистика правильно подобрать соотношения вероятностей альфа и бета. Это зависит от решаемой задачи. 

Это базовые идеи статистической проверки гипотез. В следующем уроке мы лучше углубимся в эту тему и разберем алгоритм тестирование гипотез.

p-значение - это вероятность того, отличаются ли гипотезы друг от друга. Оно помогает нам решить, стоит ли отвергать нулевую гипотезу или нет.

Пример по типу того, что здесь [https://youtu.be/vemZtEM63GY](https://youtu.be/vemZtEM63GY)

Малое p-значение говорит о том, что гипотезу следует отвергнуть, большое - принять.

[https://youtu.be/JQc3yx0-Q9E](https://youtu.be/JQc3yx0-Q9E)

[https://youtu.be/HDCOUXE3HMM](https://youtu.be/HDCOUXE3HMM)

[https://youtu.be/bsZGt-caXO4](https://youtu.be/bsZGt-caXO4)

[https://youtu.be/-FtlH4svqx4](https://youtu.be/-FtlH4svqx4)

[https://youtu.be/mvye6X_0upA](https://youtu.be/mvye6X_0upA) ?

A/B тестирование

[https://habr.com/ru/post/233911/](https://habr.com/ru/post/233911/)

[https://www.youtube.com/watch?v=cjMhezRVDq0](https://www.youtube.com/watch?v=cjMhezRVDq0)

[https://www.youtube.com/watch?v=dFCJysbOJ8c](https://www.youtube.com/watch?v=dFCJysbOJ8c)


<center><AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true"><Zoom><img alt="img" src="https://i.imgur.com/G7UCgbh.png" width="50%" /></Zoom></AnimationOnScroll></center>											
							
Хочу подчеркнуть важность знаний о [статистической мощности](https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D0%B0%D1%82%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F_%D0%BC%D0%BE%D1%89%D0%BD%D0%BE%D1%81%D1%82%D1%8C). Очень нужная тема для A/B тестирования.

- Семь часто задаваемых вопросов и ответов по A/B тестированию с собеседований ([блог](https://towardsdatascience.com/7-a-b-testing-questions-and-answers-in-data-science-interviews-eee6428a8b63)).
- Вопросы и ответы по тестированию гипотез на собеседованиях по Data Science ([часть 1](https://youtu.be/IY7y-t30UJc), [часть 2](https://youtu.be/6uw0A3aKwMc)).

Как вычислить минимальный размер выборки для проведения A/B теста?

Как объяснить бизнесу, что значат ошибки I и II рода?

### Power Analysis

[https://machinelearningmastery.com/statistical-power-and-power-analysis-in-python/](https://machinelearningmastery.com/statistical-power-and-power-analysis-in-python/)

[https://youtu.be/Rsc5znwR5FA](https://youtu.be/Rsc5znwR5FA)

[https://youtu.be/VX_M3tIyiYk](https://youtu.be/VX_M3tIyiYk)




<center><AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true"><Zoom><img alt="img" src="https://i.imgur.com/8GIrdoA.png" width="50%" /></Zoom></AnimationOnScroll></center>											
	
	
	
	
### AVONA

[https://youtu.be/EFdlFoHI_0I](https://youtu.be/EFdlFoHI_0I)

[https://youtu.be/j9ZPMlVHJVs](https://youtu.be/j9ZPMlVHJVs)

[https://youtu.be/Xg8_iSkJpAE](https://youtu.be/Xg8_iSkJpAE)	
						
							
			</div><div class='chatWrapper'><TelegramComments websiteKey={'2JA7Wo3q'} customColor='000000' commentsNumber={5} pageId={key} showDislikes={true} /></div>
			<ChannelPreviewLearning />
		</motion.div>
	);
};
  
