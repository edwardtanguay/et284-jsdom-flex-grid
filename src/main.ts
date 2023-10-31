import { BoxWrapper } from './components/BoxWrapper'
// 111
import { Ex003 } from './examples/Ex003'
import { Ex002 } from './examples/Ex002'
import { Ex001 } from './examples/Ex001'
import './style.scss'
import './main.scss'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
// 222
	<h1 class="text-3xl mb-6">Flex and Grid Practice</h1>
	${BoxWrapper('Ex003', Ex003, 'minmax')}
	${BoxWrapper('Ex002', Ex002, 'grid three-width responsive')}
	${BoxWrapper('Ex001', Ex001, 'grid three-width responsive')}
`