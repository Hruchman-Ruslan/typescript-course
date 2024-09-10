let userInput: unknown
let userName: string

userInput = 5
userInput = 'Ruslan'

if (typeof userInput === 'string') {
	userName = userInput // no Error
}

// userName = userInput no Error

function generateError(message: string, code: number): never {
	throw { message: message, errorCode: code }
	// while(true) {}
}

generateError('An error occurred!', 500)
