class Department {
	// public id: string // public it's default properties
	// public name: string // public it's default properties
	private employees: string[] = []

	constructor(private id: string, public name: string) {
		// this.name = name
		// this.id = id
	}

	describe(this: Department) {
		console.log(`Department (${this.id}: ${this.name})`)
	}

	addEmployee(employee: string) {
		this.employees.push(employee)
	}

	printEmployeeInformation() {
		console.log(this.employees.length)
		console.log(this.employees)
	}
}

const accounting = new Department('d1', 'Accounting')

accounting.addEmployee('Ruslan')
accounting.addEmployee('Max')

// accounting.employees[2] = 'Anna' is Error because private employees
// accounting.name = 'NEW NAME' // we can change because it's public properties

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe }

accounting.describe()
accounting.printEmployeeInformation() // accountingCopy.describe()
