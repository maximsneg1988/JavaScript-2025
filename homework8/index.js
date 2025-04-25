//1
// class Worker {
//   constructor(name, surname, rate, days) {
//     this.name = name;
//     this.surname = surname;
//     this.rate = rate;
//     this.days = days;
//   }

//   getSalary() {
//     return this.rate * this.days;
//   }

//   getFullName() {
//     return `${this.name} ${this.surname}`;
//   }
// }

// const worker1 = new Worker("Максим", "Снегирев", 5000, 20);
// console.log(worker1.getFullName());
// console.log(worker1.getSalary());

//2
// class Boss extends Worker {
//   constructor(name, surname, rate, days, workers) {
//     super(name, surname, rate, days);
//     this.workers = workers;
//   }

//   getSalary() {
//     return this.rate * this.days * this.workers;
//   }
// }

// const boss1 = new Boss("Максим", "Снегирев", 5000, 20, 10);
// console.log(boss1.getFullName());
// console.log(boss1.getSalary());

//3
// class Worker {
//   constructor(name, surname, rate, days) {
//     this.name = name;
//     this.surname = surname;
//     this._rate = rate;
//     this._days = days;
//   }

//   get rate() {
//     return this._rate;
//   }

//   set rate(newRate) {
//     this._rate = newRate;
//   }

//   get days() {
//     return this._days;
//   }

//   set days(newDays) {
//     this._days = newDays;
//   }

//   getSalary() {
//     return this.rate * this.days;
//   }

//   getFullName() {
//     return `${this.name} ${this.surname}`;
//   }
// }

// const worker1 = new Worker("Максим", "Снегирев", 5000, 20);
// console.log(worker1.getFullName());
// console.log(worker1.getSalary());

// worker1.rate = 6000;
// worker1.days = 25;
// console.log(worker1.getSalary());

// 4
// class MyString {
//   static reverse(s) {
//     return s.split("").reverse().join("");
//   }

//   static ucFirst(s) {
//     if (s.length > 0) {
//       return s.charAt(0).toUpperCase() + s.slice(1);
//     }
//     return s;
//   }

//   static ucWords(s) {
//     return s
//       .split(" ")
//       .map((word) => this.ucFirst(word))
//       .join(" ");
//   }
// }

// console.log(MyString.reverse("hello"));

// console.log(MyString.ucFirst("hello"));

// console.log(MyString.ucWords("hello world"));

// 5
// class Validator {
//   isEmail(email) {
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailPattern.test(email);
//   }

//   isDomain(domain) {
//     const domainPattern = /^(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.?)+[a-z]{2,}$/i;
//     return domainPattern.test(domain);
//   }

//   isDate(dateString) {
//     const datePattern = /^\d{4}-\d{2}-\d{2}$/;
//     if (!datePattern.test(dateString)) return false;

//     const date = new Date(dateString);
//     return date && date.getFullYear() == dateString.split("-")[0];
//   }

//   isPhone(phone) {
//     const phonePattern = /^\+?\d{10,15}$/;
//     return phonePattern.test(phone);
//   }
// }

// const validator = new Validator();

// console.log(validator.isEmail("example@example.com"));
// console.log(validator.isDomain("example.com"));
// console.log(validator.isDate("2025-04-25"));
// console.log(validator.isPhone("+1234567890"));

// 6
class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  getFullName() {
    return super.getFullName();
  }

  getCourse() {
    const currentYear = new Date().getFullYear();
    const course = currentYear - this.year;
    return course >= 1 && course <= 5 ? course : null;
  }
}

const student1 = new Student("Иван", "Иванов", 2021);
console.log(student1.getFullName());
console.log(student1.getCourse());
