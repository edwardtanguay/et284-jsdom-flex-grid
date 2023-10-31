export const Ex006 = () => {
	const states = [
		"Baden-Württemberg",
		"Bayern",
		"Berlin",
		"Brandenburg",
		"Bremen",
		"Hamburg",
		"Hessen",
		"Mecklenburg-Vorpommern",
		"Niedersachsen",
		"Nordrhein-Westfalen",
		"Rheinland-Pfalz",
		"Saarland",
		"Sachsen",
		"Sachsen-Anhalt",
		"Schleswig-Holstein",
		"Thüringen"
	];
	return /*html*/ `
	<div class="ex006">
		<div class="content">
			${states.map((state,index) => {
				return `<div class="state${index+1}">${state} (${index+1})</div>`;
			}).join('')}
		</div>
	</div>
`
}