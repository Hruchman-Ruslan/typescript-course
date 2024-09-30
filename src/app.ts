function Logger(logString: string) {
	return function (construction: Function) {
		console.log(logString)
		console.log(construction)
	}
}

@Logger('LOGGING - PERSON')
class Person {
	name = 'Ruslan'

	constructor() {
		console.log('Creating person object...')
	}
}

const per = new Person()

console.log(per)
