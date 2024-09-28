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

class DataStorage<T extends string | number | boolean> {
	private data: T[] = []

	addItem(item: T) {
		this.data.push(item)
	}

	removeItem(item: T) {
		if (this.data.indexOf(item) === -1) {
			return
		}
		this.data.splice(this.data.indexOf(item), 1) // -1
	}

	getItems() {
		return [...this.data]
	}
}

const textStorage = new DataStorage<string>()
// textStorage.addItem(10) // error because number is't a string type
textStorage.addItem('Ruslan')
textStorage.addItem('Manu')
textStorage.removeItem('Ruslan')

console.log(textStorage.getItems())

const numberStorage = new DataStorage<number>() // now it's number types. If we try use string we have error

// const objStorage = new DataStorage<object>()
// const myRef = { name: 'Ruslan' }
// objStorage.addItem(myRef)
// objStorage.addItem({ name: 'Manu' })
// // ...
// objStorage.removeItem(myRef)
// console.log(objStorage.getItems())

interface CourseGoal {
	title: string
	description: string
	completeUntil: Date
}

function createCourseGoal(
	title: string,
	description: string,
	completeUntil: Date
): CourseGoal {
	let courseGoal: Partial<CourseGoal> = {}
	courseGoal.title = title
	courseGoal.description = description
	courseGoal.completeUntil = completeUntil
	return courseGoal as CourseGoal
}

const names: Readonly<string[]> = ['Ruslan', 'Anna']
// names.push('Manu') // error because we have readonly string[]
// names.pop() // error because we have readonly string[]
