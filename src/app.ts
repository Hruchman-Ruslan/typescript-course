// type AddFun = (a: number, b: number) => number
interface AddFun {
	(a: number, b: number): number
}

let add: AddFun

add = (n1: number, n2: number) => {
	return n1 + n2
}

interface INamed {
	readonly name: string
}

// interface IGreetable extends INamed, OtherInterface { // we can extends many Interface when ise Interface, but we can't do this with Classes
// 	greet(phrase: string): void
// }

interface IGreetable extends INamed {
	greet(phrase: string): void
}

class Person implements IGreetable {
	name: string
	age = 32

	constructor(n: string) {
		this.name = n
	}

	greet(phrase: string): void {
		console.log(phrase + ' ' + this.name)
	}
}

let user1: IGreetable

user1 = new Person('Ruslan')
// user1.name = 'Max' // ERROR because we have readonly properties name

user1.greet('Hi there I - am')
console.log(user1)
