// const useName = 'Ruslan'
// // userName = "Other" ERROR
// let age = 32
// age = 33

// var result

// function add(a: number, b: number) {
// 	// var result No find console.log(result)
// 	let result
// 	result = a + b
// 	return result
// }

// if (age > 20) {
// 	let isOld = true
// }

// console.log(isOld)
// console.log(result)

// const add = (a: number, b: number = 5) => a + b

// const printOutput: (a: number | string) => void = output => console.log(output)

// const button = document.querySelector('button')

// button?.addEventListener('click', e => console.log(e))

// printOutput(add(2))

const hobbies = ['Sport', 'Cookies', 'other', 'and Other']
const activeHobbies = ['Hiking']

activeHobbies.push(...hobbies)

const person = {
	firstName: 'Ruslan',
	age: 32,
}

const copiedPerson = { ...person }

console.log(copiedPerson)

// const add = (...numbers: [number, number, number]) => {  if need 3 parameters
// 	return numbers.reduce((curtResult, curtValue) => {
// 		return curtResult + curtValue
// 	}, 0)
// }

// const addedNumbers = add(5, 10, 2)  if need 3 parameters

const add = (...numbers: number[]) => {
	return numbers.reduce((curtResult, curtValue) => {
		return curtResult + curtValue
	}, 0)
}

const addedNumbers = add(5, 10, 2, 3.7)

console.log(addedNumbers)

const [hobby1, hobby2, ...remainingHobbies] = hobbies

console.log(hobbies, hobby1, hobby2, remainingHobbies)

const { firstName: userName, age } = person
console.log(userName, age, person)
