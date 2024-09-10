function add(n1: number, n2: number) {
	return n1 + n2
}

function printResult(num: number): void {
	console.log('Result:' + num)
}

function addAndHandler(n1: number, n2: number, cd: (num: number) => void) {
	const result = n1 + n2
	cd(result)
}

printResult(add(5, 12))

let combineValues: (a: number, b: number) => number

combineValues = add
// combineValues = printResult ERROR
// combineValues = 5 ERROR

console.log(combineValues(8, 8))

// let someValue: undefined

addAndHandler(10, 20, result => {
	console.log(result)
})
