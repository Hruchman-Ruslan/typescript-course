function Logger(logString: string) {
	return function (construction: Function) {
		console.log(logString)
		console.log(construction)
	}
}

function WithTemplate(template: string, hookId: string) {
	return function (construction: any) {
		const element = document.getElementById(hookId)
		const p = new construction()
		if (element) {
			element.innerHTML = template
			element.querySelector('h1')!.textContent = p.name
		}
	}
}

// @Logger('LOGGING - PERSON')
@WithTemplate('<h1>My Person Object<h1/>', 'app')
class Person {
	name = 'Ruslan'

	constructor() {
		console.log('Creating person object...')
	}
}

const per = new Person()

console.log(per)
