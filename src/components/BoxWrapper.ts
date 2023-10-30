export const BoxWrapper = (func : () => string) => {
	return /*html*/ `
	<div class="boxWrapper">
		${func()}
	</div>
	`
}