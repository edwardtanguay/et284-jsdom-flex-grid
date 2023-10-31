import * as tools from '../tools.js';

export class ExerciseManager {

	private exerciseId = '';

	constructor() {
		this.exerciseId = this.getNextExerciseId();
	}

	getNextExerciseId() {
		return '888';
	}

	public createFile() {
		tools.createFile(`./src/examples/Ex${this.exerciseId}.ts`, 'the content');
	}

}