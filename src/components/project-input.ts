import Cmp from './base-component'
import * as Validate from '../util/validations'
import { autobind as Autobind } from '../decorators/autobind'
import { projectState } from '../state/project'

// ProjectInput class
export class ProjectInput extends Cmp<HTMLDivElement, HTMLFormElement> {
	titleInputElement: HTMLInputElement
	descriptionInputElement: HTMLInputElement
	peopleInputElement: HTMLInputElement

	constructor() {
		super('project-input', 'app', true, 'user-input')

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
	}

	configure() {
		this.element.addEventListener('submit', this.submitHandler)
	}

	renderContent() {}

	private gatherUserInput(): [string, string, number] | void {
		const enteredTitle = this.titleInputElement.value
		const enteredDescription = this.descriptionInputElement.value
		const enteredPeople = this.peopleInputElement.value

		const titleValidatable: Validate.Validatable = {
			value: enteredTitle,
			required: true,
		}

		const descriptionValidatable: Validate.Validatable = {
			value: enteredDescription,
			required: true,
			minLength: 5,
		}

		const peopleValidatable: Validate.Validatable = {
			value: +enteredPeople,
			required: true,
			min: 1,
			max: 5,
		}

		if (
			!Validate.validate(titleValidatable) ||
			!Validate.validate(descriptionValidatable) ||
			!Validate.validate(peopleValidatable)
		) {
			alert('Invalid input, please try again!')
			return
		} else {
			return [enteredTitle, enteredDescription, +enteredPeople]
		}
	}

	private clearInputs() {
		this.titleInputElement.value = ''
		this.descriptionInputElement.value = ''
		this.peopleInputElement.value = ''
	}

	@Autobind
	private submitHandler(e: Event) {
		e.preventDefault()
		const userInput = this.gatherUserInput()

		if (Array.isArray(userInput)) {
			const [title, description, people] = userInput
			projectState.addProject(title, description, people)
			this.clearInputs()
		}
	}
}
