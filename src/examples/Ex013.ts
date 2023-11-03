export const Ex013 = () => {
	return /*html*/ `
	<div class="ex013">
		<div class="content">
			<ul class="navbar">
				<li><a href="#">Home</a></li>
				<li class="dropdown">
					<a href="#">Services</a>
					<div class="dropdown-content">
					<a href="#">Service 1</a>
					<a href="#">Service 2</a>
					<a href="#">Service 3</a>
					</div>
				</li>
				<li class="dropdown">
					<a href="#">About</a>
					<div class="dropdown-content">
					<a href="#">About 1</a>
					<a href="#">About 2</a>
					</div>
				</li>
				<li><a href="#">Contact</a></li>
			</ul>
			<p class="message text-slate-400 text-3xl relative text-right w-[42.5rem]"></p>
		</div>
	</div>
`
}

setTimeout(() => {
	const aElems = document.querySelectorAll<HTMLAnchorElement>('.ex013 a');
	const aDropdownContentElems = document.querySelectorAll<HTMLDivElement>('.ex013 div.dropdown-content');
	const messageElem = document.querySelector<HTMLParagraphElement>('.ex013 .message');

	if (aElems && messageElem) {
		for (const aElem of aElems) {
			aElem.addEventListener('click', (e) => {
				e.preventDefault();
				const elem = e.target as HTMLAnchorElement;
				if (elem) {
					const menuText = elem.innerText;
					messageElem.innerText = menuText;

					for (const aDropdownContentElem of aDropdownContentElems) {
						aDropdownContentElem.focus();
					}
				}
			})
		}
	}
})