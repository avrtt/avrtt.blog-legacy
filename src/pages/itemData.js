import nn_part_one from './img/common/nn_part_one.jpg'
import knn from './img/common/knn.jpg';
import bayes_classificators from './img/common/bayes_classificators.jpg';
import classification_metrics from './img/common/classification_metrics.jpg';

export const itemDataLife = [
	{id: 1, img: nn_part_one, title: 'life1', href: 'https://lenferdetroud.github.io/1'},
	{id: 3, img: knn, title: 'life3', href: 'https://lenferdetroud.github.io/1'},
];

export const itemDataIT = [
	{id: 2, img: bayes_classificators, title: 'it2', href: 'https://lenferdetroud.github.io/1'},
	{id: 4, img: classification_metrics, title: 'it4', href: 'https://lenferdetroud.github.io/1'},
];

export function imageClick(url) {
    window.location = url;
}
