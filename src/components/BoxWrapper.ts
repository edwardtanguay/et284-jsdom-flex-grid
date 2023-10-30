export const BoxWrapper = (title: string, func : () => string) => {
	return /*html*/ `
	<fieldset class="boxWrapper">
		<legend>${title}</legend>
		${func()}
	</fieldset>
	`
}