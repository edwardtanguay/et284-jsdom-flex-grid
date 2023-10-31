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
	const buttonRedElem = document.querySelector<HTMLButtonElement>('.ex007 .buttonArea:nth-child(0)');

	if (ex007contentElem && buttonRedElem) {
		ex007contentElem.style.setProperty('--ball-color', 'orchid');
		buttonRedElem.style.color = 'red';
	}
})