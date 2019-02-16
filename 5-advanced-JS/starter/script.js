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

/*var a = 23;
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
*/

// Passing functions as arguments

/*
var years = [1990, 1965, 1937, 2005, 1985];

function arrayCalc(arr, fn) {
    var arrRes = [];

    for (var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2019 - el;
}


function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(personAge) {

    if (personAge >= 18 && personAge <= 81){
        return Math.round(206.9 - (0.67 * personAge));
    } else {
        return -1;
    }

}

var ages = arrayCalc(years, calculateAge);
var fullAges =arrayCalc(ages, isFullAge);
var heartRates = arrayCalc(ages, maxHeartRate);


console.log('Ages: '+ages);
console.log('Full Age: '+fullAges);
console.log('Heart Rates: '+heartRates);
*/

// Functions returning functions

/*function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {     // anonymous function for it has no name
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function (name) {
            console.log(name + ', what subject do you teach?');
        }
    } else {
        return function(name){
            console.log('Hello '+ name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John');

var designerQuestion = interviewQuestion('designer');
designerQuestion('Thando');
*/

// a different way of doing the same thing.

interviewQuestion('teacher')('Mark');
interviewQuestion('designer')('Mncedi');

// Closures

/*function retirement(retirementAge) {
    var leftYrs = ' years left before retirment';
    return function(yearOfBirth) {
        var age = 2019 - yearOfBirth;
        console.log((retirementAge - age) + leftYrs)
    }
}

var retirementUs = retirement(66);
var retirementGermany = retirement(65);
var retirementIsland = retirement(67);
var retirementSouthAfrica = retirement(65);

retirementUs(1990);
retirementSouthAfrica(1985);
retirementIsland(1985);
retirementGermany(2000);
retirementGermany(1993);
retirementGermany(1980);
// retirement(66)(1985);

retirementIsland(1954);
*/

// same example using closures

function interviewQuestion(job) {

    return function (name) {
        if (job === 'designer') {
            {     // anonymous function for it has no name
                console.log(name + ', can you please explain what UX design is?');
            }
        } else if (job === 'teacher') {
            {
                console.log(name + ', what subject do you teach?');
            }
        } else {
            {
                console.log('Hello ' + name + ', what do you do?');
            }
        }
    }
}

interviewQuestion('Mongameli')('Mncedi');

