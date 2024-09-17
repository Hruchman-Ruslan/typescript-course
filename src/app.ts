interface IGreetable {
	name: string
	age: number

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

user1.greet('Hi there I - am')
console.log(user1)
