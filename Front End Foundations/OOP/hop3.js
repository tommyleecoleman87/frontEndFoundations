class Employee {
  constructor(name, salary, hireDate) {
    this.name = name;
    this.salary = salary;
    this.hireDate = hireDate;
  }
  getName() {
    console.log(this.name.toUpperCase());
  }
  getSalary() {
    console.log(this.salary);
  }
  getHireDate() {
    console.log(this.hireDate);
  }
}

class Manager extends Employee {
    constructor(name, salary, hireDate) {
        super(name, salary, hireDate);
        this.name = name;
        this.salary = salary;
        this.hireDate = hireDate;
    }

    jobDescription() {
        console.log(`${this.name} will be tasked with overseeing employees`);
    }

}

class Designer extends Employee {
    constructor(name, salary, hireDate) {
        super(name, salary, hireDate);
        this.name = name;
        this.salary = salary;
        this.hireDate = hireDate;
    }

    yearsExperience() {
        console.log('This position requires 4 years previous experience');
    }
}

class QA extends Employee {
    constructor(name, salary, hireDate) {
        super(name, salary, hireDate);
        this.name = name;
        this.salary = salary;
        this.hireDate = hireDate;
    }

    degreeCompleted() {
        console.log('For this position you should have a bachelors degree');
    }
}

let designJob = new Designer('Tommy', '$60,000', 'June 4th, 2018');
console.log(designJob.getSalary());