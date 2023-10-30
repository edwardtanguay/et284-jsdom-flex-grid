export const BoxWrapper = (title: string, func : () => string, description: string = '') => {
	return /*html*/ `
	<fieldset class="boxWrapper">
		<legend>${title}${description ? `<span class="description"> - ${description}</span>` : ''}</legend>
		${func()}
	</fieldset>
	`
}