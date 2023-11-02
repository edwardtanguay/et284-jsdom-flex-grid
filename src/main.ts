import { BoxWrapper } from './components/BoxWrapper';
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

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
	<h1 class="text-3xl mb-6">Flex, Grid and Animation Practice</h1>
	${BoxWrapper('Ex009', Ex009, '')}
	${BoxWrapper('Ex008', Ex008, 'animation - to/from')}
	${BoxWrapper('Ex007', Ex007, 'CSS variables - animation')}
	${BoxWrapper('Ex006', Ex006, 'flex order')}
	${BoxWrapper('Ex005', Ex005, 'grid-template-areas')}
	${BoxWrapper('Ex004', Ex004, 'grid-column: 1/3')}
	${BoxWrapper('Ex003', Ex003, 'minmax(15rem, 100%)')}
	${BoxWrapper('Ex002', Ex002, 'grid three-width responsive')}
	${BoxWrapper('Ex001', Ex001, 'grid three-width responsive')}
`;