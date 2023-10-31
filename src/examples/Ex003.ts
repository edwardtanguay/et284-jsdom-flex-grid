export const Ex003 = () => {
	const words = [
		"side",
		"main",
		"aside",
		"side"
	];
	return /*html*/ `
	
	<div class="ex003">
		<div class="content">
			${words.map(word => `<div>${word}</div>`).join('')}	
		</div>
	</div>
`
}