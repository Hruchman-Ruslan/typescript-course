function Logger(logString: string) {
	console.log('LOGGER FACTORY')
	return function (construction: Function) {
		console.log(logString)
		console.log(construction)
	}
}

function WithTemplate(template: string, hookId: string) {
	console.log('TEMPLATE FACTORY')
	return function (construction: any) {
		console.log('Rendering template')
		const element = document.getElementById(hookId)
		const p = new construction()
		if (element) {
			element.innerHTML = template
			element.querySelector('h1')!.textContent = p.name
		}
	}
}

// @Logger('LOGGING - PERSON')
@Logger('LOGGING')
@WithTemplate('<h1>My Person Object<h1/>', 'app')
class Person {
	name = 'Ruslan'

	constructor() {
		console.log('Creating person object...')
	}
}

const per = new Person()

console.log(per)

// ---

function Log(target: any, propertyName: string | Symbol) {
	console.log('Property decorator!')
	console.log(target, propertyName)
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
	console.log('Accessor decorator!')
	console.log(target)
	console.log(name)
	console.log(descriptor)
}

function Log3(
	target: any,
	name: string | Symbol,
	descriptor: PropertyDescriptor
) {
	console.log('Method decorator!')
	console.log(target)
	console.log(name)
	console.log(descriptor)
}

function Log4(target: any, name: string | Symbol, position: number) {
	console.log('Parameter decorator!')
	console.log(target)
	console.log(name)
	console.log(position)
}

class Product {
	@Log
	title: string
	private _price: number

	@Log2
	set price(val: number) {
		if (val > 0) {
			this._price = val
		} else {
			throw new Error('Invalid price - should be positive!')
		}
	}

	constructor(t: string, p: number) {
		this.title = t
		this._price = p
	}

	@Log3
	getPriceWitchTax(@Log4 tax: number) {
		return this._price * (1 + tax)
	}
}
