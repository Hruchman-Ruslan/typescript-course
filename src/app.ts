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

console.log(mergeObject)

interface Lengthy {
	length: number
}

function countAndDescribe<T extends Lengthy>(el: T): [T, string] {
	let descriptionText = 'Got not value.'
	if (el.length === 1) {
		descriptionText = 'Got 1 element.'
	} else if (el.length > 1) {
		descriptionText = 'Got ' + el.length + ' elements.'
	}
	return [el, descriptionText]
}

// console.log(countAndDescribe('Hi there!')) // 'Hi there!', 'Got 9 elements.'
console.log(countAndDescribe(['Sports', 'Hobbies'])) // [Array(2), 'Got 2 elements.']
// console.log(countAndDescribe(10)) // error

function extractAndConvert<T extends object, U extends keyof T>(
	obj: T,
	key: U
) {
	return 'Value ' + obj[key]
}

// extractAndConvert({ name: 'Ruslan' }, 'age') // error because key is't a name extends with type T
extractAndConvert({ name: 'Ruslan' }, 'name') // no error
