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
		this.createCallComponentCode();
	}

	private createExerciseComponentFile() {
		const content = `export const Ex${this.exerciseId} = () => {
	return /*html*/ \`
	<div class="ex${this.exerciseId}">
		<div class="content">
			<div>nnn</div>
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
		
	}
}
		`
		tools.addLineInFile('./src/exercises.scss', '@@FIRSTLINE', content);
	}

	private createCallComponentCode() {
		tools.addLineInFile('./src/main.ts', 'components/BoxWrapper', `import { Ex${this.exerciseId} } from './examples/Ex${this.exerciseId}'`)
		tools.addLineInFile('./src/main.ts', 'class="text',`	\${BoxWrapper('Ex${this.exerciseId}', Ex${this.exerciseId}, '')}`)
	}

}