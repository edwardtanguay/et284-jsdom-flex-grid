export const Ex007 = () => {
	return /*html*/ `
	<div class="ex007">
		<div class="content">
			<div class="shapeArea">
				<div class="ball"></div>
				<div class="square"></div>
			</div>
			<div class="messageArea">
				<div class="message1">The ball is moving.</div>
				<div class="message2">All have the same CSS color variable.</div>
				<div class="message3">The square is moving.</div>
			</div>
			<div class="buttonArea">
				<button>Red</button>
				<button>Blue</button>
				<button>Green</button>
			</div>
		</div>
	</div>
`
}

setTimeout(() => {
	const ex007contentElem = document.querySelector<HTMLDivElement>('.ex007 .content');
	const buttonRedElem = document.querySelector<HTMLButtonElement>('.buttonArea button:nth-child(1)');
	const buttonBlueElem = document.querySelector<HTMLButtonElement>('.buttonArea button:nth-child(2)');
	const buttonGreenElem = document.querySelector<HTMLButtonElement>('.buttonArea button:nth-child(3)');

	console.log(buttonRedElem);

	if (ex007contentElem && buttonRedElem && buttonBlueElem && buttonGreenElem) {
		buttonRedElem.addEventListener('click', () => {
			ex007contentElem.style.setProperty('--ball-color', 'red');
		})
		buttonBlueElem.addEventListener('click', () => {
			ex007contentElem.style.setProperty('--ball-color', 'navy');
		})
		buttonGreenElem.addEventListener('click', () => {
			ex007contentElem.style.setProperty('--ball-color', 'darkgreen');
		})
	}
})