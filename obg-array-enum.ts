// const person: {
// 	name: string
// 	age: number
// } = {
// const person: {
// 	name: string
// 	age: number
// 	hobbies: string[]
// 	role: [number, string] // tuples type O_o
// } = {
// 	name: 'Ruslan',
// 	age: 32,
// 	hobbies: ['Sports', 'Cooking'],
// 	role: [0, 'author'],
// }

enum Role {
	ADMIN = 'ADMIN',
	READ_ONLY = 100,
	AUTHOR = 'AUTHOR',
}

const person = {
	name: 'Ruslan',
	age: 32,
	hobbies: ['Sports', 'Cooking'],
	role: Role.ADMIN,
}

// person.role.push('admin') // no ERROR
// person.role[1] = 10 // ERROR
// person.role = [0, 'admin', 'user'] // ERROR

let favoriteActivities: string[]
favoriteActivities = ['Sports']

console.log(person.name)

for (const hobby of person.hobbies) {
	console.log(hobby.toUpperCase())
	// console.log(hobby.map()) !!! ERROR
}
