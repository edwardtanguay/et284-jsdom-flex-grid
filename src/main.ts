import { BoxWrapper } from './components/BoxWrapper'
import { Ex001 } from './examples/Ex001'
import { Ex002 } from './examples/Ex002'
import './style.scss'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
	<h1 class="text-3xl mb-6">Flex and Grid Practice</h1>
	${BoxWrapper(Ex001)}
	${BoxWrapper(Ex002)}
`
