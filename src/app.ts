interface IPerson {
	name: string
	age: number

	greet(phrase: string): void
}

let user1: IPerson

user1 = {
	name: 'Ruslan',
	age: 32,
	greet(phrase) {
		console.log(phrase + ' ' + this.name)
	},
}
