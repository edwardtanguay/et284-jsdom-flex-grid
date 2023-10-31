import * as tools from '../tools.js';

export class ExerciseManager {

	constructor() {
		console.log('in constructor');
	}

	public createFile() {
		tools.createFile('./src/examples/Ex999.ts', 'the content');
	}

}