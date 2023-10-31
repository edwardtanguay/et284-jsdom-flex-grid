import * as tools from '../tools.js';

export class ExerciseManager {

	private exerciseId = '';

	constructor() {
		this.exerciseId = this.getNextExerciseId();
	}

	getNextExerciseId() {
		const exercisePathAndFileNames = tools.getDirectoryPathAndFileNames('./src/examples');
		const lastExercisePathAndFileName = exercisePathAndFileNames[exercisePathAndFileNames.length - 1];
		const matchInfo = lastExercisePathAndFileName.match(/(\d{3})/);
		const lastNumberAsString = matchInfo[0]; // '008'
		const lastNumberAsNumber = Number(lastNumberAsString);
		const nextNumberAsNumber = lastNumberAsNumber + 1; // 8
		const nextNumberAsString = String(nextNumberAsNumber).padStart(3, '0'); // '009'
		return nextNumberAsString;
	}

	public createExercise() {
		this.createExerciseComponentFile();
		this.addStyleToBeginningOfStylesheet();
	}

	private createExerciseComponentFile() {
		const content = `export const Ex${this.exerciseId} = () => {
	return /*html*/ \`
	<div class="ex${this.exerciseId}">
		<div class="content">
			<div>new exercise</div>
		</div>
	</div>
\`
}
`;
		tools.createFile(`./src/examples/Ex${this.exerciseId}.ts`, content);
	}

	private addStyleToBeginningOfStylesheet() {
		const content = `.ex${this.exerciseId} {
	.content {
		div {
			color: red;
		}
	}
}
		`
		tools.addLineInFile('./src/main.scss', '@@FIRSTLINE', content);
	}

	private callComponent() {
		tools.addLineInFile('./src/main.ts', 'BoxWrapper', '// 111')
		tools.addLineInFile('./src/main.ts', 'HTML', '// 222')
	}

}