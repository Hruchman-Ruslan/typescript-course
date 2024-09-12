let appId = 'adc'

const button = document.querySelector('button')!

function clickHandler(message: string, age: number) {
	let userName = 'Ruslan'
	console.log('Clicked!' + message)
}

function add(n1: number, n2: number) {
	if (n1 + n2 > 0) {
		return n1 + n2
	}
	// return
}

if (button) {
	button.addEventListener(
		'click',
		clickHandler.bind(null, " You're welcome", 32)
	)
}
