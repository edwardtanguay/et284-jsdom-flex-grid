export const Ex010 = () => {
	return /*html*/ `
	<div class="ex010">
		<div class="content">
			<div class="imageArea"></div>
		</div>
	</div>
`
}

setTimeout(() => {
	const imageAreaElem = document.querySelector<HTMLSpanElement>('.ex010 .imageArea');

	if (imageAreaElem) {
		imageAreaElem.style.animationName = '';
		imageAreaElem.addEventListener('click', () => {
			setTimeout(() => {
				imageAreaElem.style.animationName = '';
			}, 500)
			imageAreaElem.style.animationName = 'pulsate010';
		})
	}
})