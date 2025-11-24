class Employee {
  constructor(id, name, dept, salary) {
    this.id = id;
    this.name = name;
    this.dept = dept;
    this.salary = salary;
  }

  getAnnualSalary() {
    return this.salary * 12;
  }

  applyBonus(percent) {
    this.salary += (this.salary * percent) / 100;
  }
}

const employees = [
  new Employee(1, "Amit", "IT", 40000),
  new Employee(2, "Riya", "HR", 35000),
  new Employee(3, "John", "Sales", 30000),
  new Employee(4, "Kiran", "Dev", 45000),
  new Employee(5, "Meena", "Finance", 50000)
];

const total = employees.reduce((acc, emp) => acc + emp.getAnnualSalary(), 0);
console.log(total);

