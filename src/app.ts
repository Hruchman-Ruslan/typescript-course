const useName = 'Ruslan'
// userName = "Other" ERROR
let age = 32
age = 33

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

const add = (a: number, b: number) => a + b

const printOutput: (a: number | string) => void = output => console.log(output)

const button = document.querySelector('button')

button?.addEventListener('click', e => console.log(e))

printOutput(add(2, 5))
