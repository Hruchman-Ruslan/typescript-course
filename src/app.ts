// autobind decorator
function autobind(_: any, __: string, descriptor: PropertyDescriptor) {
	const originalMethod = descriptor.value
	const adjDescriptor: PropertyDescriptor = {
		configurable: true,
		get() {
			const boundFn = originalMethod.bind(this)
			return boundFn
		},
	}
	return adjDescriptor
}

// ProjectInput class
class ProjectInput {
	templateElement: HTMLTemplateElement
	hostElement: HTMLDivElement
	element: HTMLFormElement
	titleInputElement: HTMLInputElement
	descriptionInputElement: HTMLInputElement
	peopleInputElement: HTMLInputElement

	constructor() {
		this.templateElement = document.getElementById(
			'project-input'
		)! as HTMLTemplateElement
		this.hostElement = document.getElementById('app')! as HTMLDivElement

		const importNode = document.importNode(this.templateElement.content, true)
		this.element = importNode.firstElementChild as HTMLFormElement
		this.element.id = 'user-input'

		this.titleInputElement = this.element.querySelector(
			'#title'
		) as HTMLInputElement
		this.descriptionInputElement = this.element.querySelector(
			'#description'
		) as HTMLInputElement
		this.peopleInputElement = this.element.querySelector(
			'#people'
		) as HTMLInputElement

		this.configure()
		this.attach()
	}

	@autobind
	private submitHandler(e: Event) {
		e.preventDefault()

		console.log({
			title: this.titleInputElement.value,
			description: this.descriptionInputElement.value,
			people: this.peopleInputElement.value,
		})
	}

	private configure() {
		this.element.addEventListener('submit', this.submitHandler)
	}

	private attach() {
		this.hostElement.insertAdjacentElement('afterbegin', this.element)
	}
}

const prjtInput = new ProjectInput()
