import { BoxWrapper } from './components/BoxWrapper';
import { Ex013 } from './examples/Ex013'
import { Ex012 } from './examples/Ex012'
import { Ex011 } from './examples/Ex011'
import { Ex010 } from './examples/Ex010'
import { Ex009 } from './examples/Ex009'
import { Ex008 } from './examples/Ex008'
import { Ex007 } from './examples/Ex007'
import { Ex006 } from './examples/Ex006'
import { Ex005 } from './examples/Ex005';
import { Ex004 } from './examples/Ex004';
import { Ex003 } from './examples/Ex003';
import { Ex002 } from './examples/Ex002';
import { Ex001 } from './examples/Ex001';
import './style.scss';
import './exercises.scss';
import learnLinks from './data/learnLinks.json';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
	<h1 class="text-3xl mb-2">Flex, Grid and Animation Practice</h1>
	<nav class="main mb-4">
		<a target="_blank" class="base" href="https://github.com/edwardtanguay/et284-jsdom-flex-grid">GitHub repository</a> &#x2022;  
		<a target="_blank" class="base" href="https://et284-jsdom-flex-grid.vercel.app">live site</a> &#x2022; 
		${learnLinks.map(learnLink => {
			return `<a target="_blank" href="${learnLink.url}">${learnLink.topic}</a>`
		}).join(' &#x2022; ')}
	</nav>
	${BoxWrapper('Ex013', Ex013, 'menu with hover transition')}
	${BoxWrapper('Ex012', Ex012, 'transition with three properties')}
	${BoxWrapper('Ex011', Ex011, 'pulsate on hover')}
	${BoxWrapper('Ex010', Ex010, 'pulsate image with text')}
	${BoxWrapper('Ex009', Ex009, 'animation percentage')}
	${BoxWrapper('Ex008', Ex008, 'animation to/from')}
	${BoxWrapper('Ex007', Ex007, 'CSS variables - animation')}
	${BoxWrapper('Ex006', Ex006, 'flex order')}
	${BoxWrapper('Ex005', Ex005, 'grid-template-areas')}
	${BoxWrapper('Ex004', Ex004, 'grid-column: 1/3')}
	${BoxWrapper('Ex003', Ex003, 'minmax(15rem, 100%)')}
	${BoxWrapper('Ex002', Ex002, 'grid three-width responsive')}
	${BoxWrapper('Ex001', Ex001, 'grid three-width responsive')}
`;