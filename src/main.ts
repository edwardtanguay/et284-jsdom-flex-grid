import { BoxWrapper } from './components/BoxWrapper'
import { Ex001 } from './examples/Ex001'
import './style.scss'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
	<h1>Flex and Grid Practice</h1>
	${BoxWrapper(Ex001)}
`
