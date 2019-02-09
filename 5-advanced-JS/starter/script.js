// Function constructor

/*var Person  = function(name, yearOfBirth, job){
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
*/

// Primitives and objects

var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

var obj1 = {
    name: 'John',
    age: 26
}

// objects
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// functions

var age = 27;
var obj = {
    name: 'Thando',
    city: 'Cape Town'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
    b.name = 'Mncedi';
}

change(age, obj);

console.log('age: '+age);
console.log(obj.city);
console.log(obj.name);

