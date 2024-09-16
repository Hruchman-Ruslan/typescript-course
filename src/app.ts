class Department {
	// public readonly id: string // public it's default properties
	// public name: string // public it's default properties
	// private employees: string[] = [] // can use inside Department class
	protected employees: string[] = [] // can use in extends Classes example ITDepartment and AccountingDepartment

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

	addEmployee(name: string) {
		if (name === 'Ruslan') {
			return
		}
		this.employees.push(name)
	}

	addReport(text: string) {
		this.reports.push(text)
	}

	printReports() {
		console.log(this.reports)
	}
}

const it = new ITDepartment('d1', ['Ruslan'])

it.addEmployee('Ruslan')
it.addEmployee('Max')

// it.employees[2] = 'Anna' is Error because private employees

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe }

it.describe()
it.name = 'NEW NAME' // we can change because it's public properties
it.printEmployeeInformation() // accountingCopy.describe()

console.log(it)

const accounting = new AccountingDepartment('d2', [])

accounting.addReport('Something went wrong...')

accounting.addEmployee('Ruslan')
accounting.addEmployee('Max')

accounting.printReports()
accounting.printEmployeeInformation()
