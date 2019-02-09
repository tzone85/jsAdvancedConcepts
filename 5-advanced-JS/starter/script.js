// Function constructor

var Person  = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

// adding a method to Perosn constructor
Person.prototype.calculateAge = function() {
    console.log(2019 - this.yearOfBirth);
}

// adding a property to Person constructor
Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'Designer');
var mark = new Person('Mark', 1948, 'Retired');

john.calculateAge();
mark.calculateAge();
jane.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);