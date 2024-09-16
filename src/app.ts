class Department {
	// public readonly id: string // public it's default properties
	// public name: string // public it's default properties
	private employees: string[] = []

	constructor(private readonly id: string, public name: string) {
		// this.name = name
		// this.id = id
	}

	describe(this: Department) {
		console.log(`Department (${this.id}: ${this.name})`)
	}

	addEmployee(employee: string) {
		// this.id = 'd2' // can't change value because we have readonly properties
		this.employees.push(employee)
	}

	printEmployeeInformation() {
		console.log(this.employees.length)
		console.log(this.employees)
	}
}

class ITDepartment extends Department {
	admins: string[]
	constructor(id: string, admins: string[]) {
		super(id, 'IT')
		this.admins = admins
	}
}

class AccountingDepartment extends Department {
	constructor(id: string, private reports: string[]) {
		super(id, 'Accounting')
	}

	addReport(text: string) {
		this.reports.push(text)
	}

	printReports() {
		console.log(this.reports)
	}
}

const it = new ITDepartment('d1', ['Ruslan'])
const accounting = new AccountingDepartment('d2', [])

it.addEmployee('Ruslan')
it.addEmployee('Max')

console.log(it)

// it.employees[2] = 'Anna' is Error because private employees
// it.name = 'NEW NAME' // we can change because it's public properties

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe }

it.describe()
it.printEmployeeInformation() // accountingCopy.describe()

accounting.addReport('Something went wrong...')
accounting.printReports()
