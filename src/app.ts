function Logger(construction: Function) {
	console.log('Logging...')
	console.log(construction)
}

@Logger
class Person {
	name = 'Ruslan'

	constructor() {
		console.log('Creating person object...')
	}
}

const per = new Person()

console.log(per)
