export const BoxWrapper = (title: string, func : () => string, description: string = '') => {
	return /*html*/ `
	<fieldset class="boxWrapper">
		<legend>${title}${description ? `<span class="description"> - ${description}</span>` : ''} - <a target="_blank" href="${`https://github.com/edwardtanguay/et284-jsdom-flex-grid/blob/dev/src/examples/${title}.ts`}">html</a> - <a target="_blank" href="https://github.com/edwardtanguay/et284-jsdom-flex-grid/blob/dev/src/main.scss">css</a></legend>
		${func()}
	</fieldset>
	`
}