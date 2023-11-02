export const Ex010 = () => {
	return /*html*/ `
	<div class="ex010">
		<div class="content flex gap-6">
			<div class="imageArea"></div>
			<p class="text flex pt-12 text-[#1B758D] text-5xl"></p>
		</div>
	</div>
`
}

setTimeout(() => {
	const texts = ['blue sky', 'white rocks', 'great vacation', ''];
	const imageAreaElem = document.querySelector<HTMLSpanElement>('.ex010 .imageArea');
	const textElem = document.querySelector<HTMLSpanElement>('.ex010 .text');

	let textIndex = 0;

	if (imageAreaElem && textElem) {
		imageAreaElem.style.animationName = '';
		imageAreaElem.addEventListener('click', () => {
			setTimeout(() => {
				imageAreaElem.style.animationName = '';
			}, 300)
			imageAreaElem.style.animationName = 'pulsate010';
			textElem.innerText = texts[textIndex];	
			textIndex++;
			if (textIndex >= texts.length) {
				textIndex = 0;
			}
			
		})
	}
})