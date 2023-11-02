export const Ex007 = () => {
	return /*html*/ `
	<div class="ex007">
		<div class="content">
			<div class="shapeArea">
				<div class="shape ball"></div>
				<div class="shape square"></div>
			</div>
			<div class="messageArea">
				<div class="message1">The ball can move.</div>
				<div class="message2">All have the same CSS color variable.</div>
				<div class="message3">The square can move.</div>
			</div>
			<div class="buttonArea">
				<button>start/reset</button>
				<button>red</button>
				<button>blue</button>
				<button>green</button>
			</div>
		</div>
	</div>
`
}

setTimeout(() => {
	const ex007contentElem = document.querySelector<HTMLDivElement>('.ex007 .content');
	const ballElem = document.querySelector<HTMLButtonElement>('.ex007 .ball');
	const squareElem = document.querySelector<HTMLButtonElement>('.ex007 .square');
	const buttonStartResetElem = document.querySelector<HTMLButtonElement>('.ex007 .buttonArea button:nth-child(1)');
	const buttonRedElem = document.querySelector<HTMLButtonElement>('.ex007 .buttonArea button:nth-child(2)');
	const buttonBlueElem = document.querySelector<HTMLButtonElement>('.ex007 .buttonArea button:nth-child(3)');
	const buttonGreenElem = document.querySelector<HTMLButtonElement>('.ex007 .buttonArea button:nth-child(4)');

	let isMoving = false;

	if (ex007contentElem && ballElem && squareElem && buttonStartResetElem && buttonRedElem && buttonBlueElem && buttonGreenElem) {
		buttonStartResetElem.addEventListener('click', () => {
			if (!isMoving) {
				ballElem.style.animation = 'slide-right 3s linear infinite';
				squareElem.style.animation = 'slide-right 3s linear infinite';
				squareElem.style.animationDelay = '1.5s';
			} else {
				ballElem.style.animation = '';
				squareElem.style.animation = '';
				squareElem.style.animationDelay = '';
				ex007contentElem.style.setProperty('--ball-color', '#777');
			}
			isMoving = !isMoving;
		})
		buttonRedElem.addEventListener('click', () => {
			ex007contentElem.style.setProperty('--ball-color', 'red');
		})
		buttonBlueElem.addEventListener('click', () => {
			ex007contentElem.style.setProperty('--ball-color', 'blue');
		})
		buttonGreenElem.addEventListener('click', () => {
			ex007contentElem.style.setProperty('--ball-color', 'darkgreen');
		})
	}
})