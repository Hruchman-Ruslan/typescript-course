// const names: Array<string> = [] // string[]
// // names[0].split(' ')

// const promise: Promise<number> = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve(10)
// 	}, 2000)
// })

// promise.then(data => {
// 	// data.split(' ') error because Promise<number>
// })

function merge<T extends object, U extends object>(objA: T, objB: U) {
	return Object.assign(objA, objB)
}

// same generic types T and U
const mergeObject = merge<{ name: string; hobbies: string[] }, { age: number }>(
	{ name: 'Ruslan', hobbies: ['Sports'] },
	{ age: 32 }
)
