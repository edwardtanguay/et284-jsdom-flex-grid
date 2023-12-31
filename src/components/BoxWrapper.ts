export const BoxWrapper = (
	title: string,
	func: () => string,
	description: string = ''
) => {
	return /*html*/ `
	<fieldset class="boxWrapper">
		<legend><span class="title">${title}<span>${
			description
				? `<span class="description"> - ${description}</span>`
				: ''
		} - <a target="_blank" href="${`https://github.com/edwardtanguay/et284-jsdom-flex-grid/blob/dev/src/examples/${title}.ts`}">html</a> - <a target="_blank" href="https://github.com/edwardtanguay/et284-jsdom-flex-grid/blob/dev/src/exercises.scss">css</a></legend>
		${func()}
	</fieldset>
	`;
};
