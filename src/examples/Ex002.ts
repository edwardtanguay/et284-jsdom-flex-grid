export const Ex002 = () => {
	const words = [
		'apple',
		'car',
		'house',
		'dog',
		'cat',
		'book',
		'computer',
		'friend',
		'flower',
		'phone',
	];
	return /*html*/ `
	
	<div class="ex002">
		<div class="content">
			${words.map((word) => `<div>${word}</div>`).join('')}	
		</div>
	</div>
`;
};
