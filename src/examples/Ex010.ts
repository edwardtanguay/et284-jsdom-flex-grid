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
		imageAreaElem.addEventListener('click', () => {
			imageAreaElem.style.opacity = '.5';
		})
	}
})