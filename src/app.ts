function Logger(logString: string) {
	console.log('LOGGER FACTORY')
	return function (construction: Function) {
		console.log(logString)
		console.log(construction)
	}
}

function WithTemplate(template: string, hookId: string) {
	console.log('TEMPLATE FACTORY')
	return function <T extends { new (...args: any[]): { name: string } }>(
		originalConstruction: T
	) {
		return class extends originalConstruction {
			constructor(..._: any[]) {
				super()
				console.log('Rendering template')
				const element = document.getElementById(hookId)
				if (element) {
					element.innerHTML = template
					element.querySelector('h1')!.textContent = this.name
				}
			}
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

function AutoBind(_: any, __: string, descriptor: PropertyDescriptor) {
	const originalMethod = descriptor.value
	const adjDescriptor: PropertyDescriptor = {
		configurable: true,
		enumerable: false,
		get() {
			const boundFn = originalMethod.bind(this) // decorator result
			return boundFn
		},
	}
	return adjDescriptor
}

class Printer {
	message = 'This works!'

	@AutoBind
	showMessage() {
		console.log(this.message)
	}
}

const p = new Printer()

const button = document.querySelector('button')!
// button.addEventListener('click', p.showMessage.bind(p)) // js result
button.addEventListener('click', p.showMessage) // line 106

// ---

function Required() {}

function PositiveNumber() {}

function validate(obj: object) {}

class Course {
	@Required
	title: string
	@PositiveNumber
	price: number

	constructor(t: string, p: number) {
		this.title = t
		this.price = p
	}
}

const courseFrom = document.querySelector('form')!
courseFrom.addEventListener('submit', e => {
	e.preventDefault()

	const titleEl = document.getElementById('title') as HTMLInputElement
	const priceEl = document.getElementById('price') as HTMLInputElement

	const title = titleEl.value
	const price = +priceEl.value

	const createCourse = new Course(title, price)

	validate(createCourse)

	console.log('createCourse', createCourse)
})
