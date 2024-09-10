let userInput: unknown
let userName: string

userInput = 5
userInput = 'Ruslan'

if (typeof userInput === 'string') {
	userName = userInput // no Error
}

// userName = userInput no Error
