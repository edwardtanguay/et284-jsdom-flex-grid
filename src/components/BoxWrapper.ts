export const BoxWrapper = (title: string, func : () => string, description: string = '') => {
	return /*html*/ `
	<fieldset class="boxWrapper">
		<legend><a target="_blank" href="${`https://github.com/edwardtanguay/et284-jsdom-flex-grid/blob/dev/src/examples/${title}.ts`}">${title}${description ? `<span class="description"> - ${description}</span>` : ''}</a></legend>
		${func()}
	</fieldset>
	`
}