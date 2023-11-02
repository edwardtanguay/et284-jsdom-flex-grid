export const Ex008 = () => {
	return /*html*/ `
	<div class="ex008">
		<div class="content">
			<div class="mb-3 flex gap-3">
				<span class="pause underline select-none">pause</span>
				<a class="underline select-none" href="https://www.w3schools.com/cssref/css3_pr_animation.php" target="_blank">see all properties of animation</a>
			</div>
			<div class="ball"></div>
		</div>
	</div>
`
}

setTimeout(() => {
	const pauseElem = document.querySelector<HTMLSpanElement>('.ex008 .pause');
	const ballElem = document.querySelector<HTMLDivElement>('.ex008 .ball');


	if (pauseElem && ballElem) {
		pauseElem.addEventListener('click', () => {
			ballElem.style.animationPlayState = ballElem.style.animationPlayState === 'paused' ? 'running' : 'paused';
		})
	}
})