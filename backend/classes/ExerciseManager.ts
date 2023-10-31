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
		const nextNumberAsNumber = lastNumberAsNumber + 1;
		const nextNumberAsString = String(nextNumberAsNumber).padStart(3, '0');
		return nextNumberAsString;
	}

	public createFile() {
		tools.createFile(`./src/examples/Ex${this.exerciseId}.ts`, 'the content');
	}

}