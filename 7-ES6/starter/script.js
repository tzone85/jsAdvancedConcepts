// ES 5 (Function Scoped)
/*
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Mini';
console.log(name5);

// ES 6 (Block Scoped)
const  name6 ='Jane Smith';
let age6 = 23;
// name6 = 'Jane Mini';
console.log(name6);


// ES 5

function driversLicence(passTest) {
    if (passTest) {
        var firstName = 'John';
        var yearOfBirth = 1994;

    }

    console.log(firstName + ', born in ' + yearOfBirth +' is now officially allowed to drive.');
}

driversLicence(true);

// ES 6

function driversLicence6(passTest) {

    let firstName;
    const yearOfBirth = 1994;
    if (passTest) {
        firstName = 'John';
    }
    console.log(firstName + ', born in ' + yearOfBirth +' is now officially allowed to drive.');
}

driversLicence6(true);



let i = 23;
for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);

*/

///////////////////////////////////////////////////////
// Blocks and IIFEs (data privacy)
/*
{
    const a = 1;
    let b = 2;
    var c = 3
}

// console.log(a + b);
console.log(c);

// ES 5  IIFE
(function () {
    var c = 3;
})(); //calling the fxn immediately.

// console.log(c);

*/
///////////////////////////////////////////////////////////////////////////////////
// Strings

/*
let firstName = 'john';
let lastName = 'Mini';
const yearOfBirth = 1990;

function calcAge(year) {
    return 2019 - year;
}


// ES 5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in '+ yearOfBirth + '. Today, he is '+ calcAge(yearOfBirth) + ' years old.');

// ES 6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('j'));
console.log(n.endsWith('i'));
console.log(n.includes(' '));
console.log(n.includes('oh'));
console.log(`${firstName} `.repeat(4));
*/

////////////////////////////////////////////////////////////////////////////////////////////////
// Arrow Functions
/*
const years = [1990, 1899, 2008, 1994];

// ES 5
var ages5 = years.map(function (el) {
    return 2019 - el;
});
console.log(ages5);

// ES 6
let ages6 = years.map(el => 2019 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2019 - el}`);

console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;

    return `Age element ${index + 1}: ${age}.`
});

console.log(ages6);

*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Arrow Functions 2

// ES 5
/*
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function () {

        // to avoid using the straight 'this' for that one will point to the window object and my vars will be undifined ;)
        var self = this;
        document.querySelector('.green').addEventListener('click', function () {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
};

// box5.clickMe();
*/
// ES 6

/*
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function () {


        document.querySelector('.green').addEventListener('click',  () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
};

box6.clickMe();
*/

// ES 66

// gives the same results as ES 5 for the this key word is belongs to the window object which was the case with the ES 5 section
/*
const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {


        document.querySelector('.green').addEventListener('click',  () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
};

box66.clickMe();
*/
/*
function Person(name) {
    this.name = name;
}
*/
// ES 5
/*
Person.prototype.myFriends =
    function (friends) {
        var arr = friends.map(function (el){
            return this.name + ' is friends with '+ el;
        }.bind(this));      // made a copy of this method, and made "this" point in this scope instead of the global/window scope

        console.log(arr);
    };

var friends = ['Bob', 'Sam', 'Sunday'];

new Person('John').myFriends(friends);
*/

// ES 6
/*
Person.prototype.myFriends6 =
    function (friends) {
        var arr = friends.map((el) => `${this.name} is friends with ${el}`);
        console.log(arr);
    };

var friends = ['Bob', 'Sam', 'Sunday'];
new Person('Mncedi').myFriends6(friends);
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Destructuring (getting the contents of an array or object )

// ES 5

// var john = ['john', 26];
// var  name = john[0];
// var age = john[1];

// ES 6
/*
const [name, age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

// another way
const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);

function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;

    return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);

*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Arrays

// const boxes = document.querySelectorAll('.box');

// ES5
/*
var boxesArr5 = Array.prototype.slice.call(boxes);

boxesArr5.forEach(function (currentEl) {
    currentEl.style.backgroundColor = 'dodgerblue';

});
*/

// ES 6 ( maing use of the Array.from method converts the returned node element to an array)

// const boxesArr6 = Array.from(boxes);
// boxesArr6.forEach(curr => curr.style.backgroundColor = 'dodgerblue');

// ES 5 (getting a loop to continue and make a change on specific elements only)
/*
for (var i = 0; i < boxesArr5.length; i++) {

    if (boxesArr5[i].className === 'box blue') {
        // break;
        continue;
    }

    boxesArr5[i].textContent = 'I changed to blue!';
}
*/


// ES 6
/*
for (let cur of boxesArr6) {
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I changed to blue!';
}

// ES 5

var ages = [12, 17, 8, 14, 11, 21];

var fullAge = ages.map(function (cur) {
    return cur >= 18;
});
console.log(fullAge);
console.log(fullAge.indexOf(true));
console.log(ages[fullAge.indexOf(true)]);


// ES 6

let ages6 = [12, 14, 17, 23, 28];

console.log(ages6.findIndex(cur => cur >= 18));
console.log(ages6.find(cur => cur >= 18));

*/


//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Spread operator
/*
function addFourAges(a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 20, 12, 32);

console.log(sum1);

// ES 5

var ages = [18, 20, 12, 32];
var sum2 = addFourAges.apply(null, ages);

console.log(sum2);

// ES 6

const ages6 = [18, 20, 12, 32];
const sum3 = addFourAges(...ages6);
console.log(sum3);


const smithFamily = ['John', 'Jane', 'Mark'];
const millerFamily = ['Mary', 'Bob', 'Ann'];

const bigFamily = [...smithFamily, 'Lilly', ...millerFamily];

console.log(bigFamily);


const heading = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');

const all = [heading, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');
// console.log(all);
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Rest Parameters

// ES 5
/*
function isFullAge5() {
    // console.log(arguments);
    var argsArray = Array.prototype.slice.call(arguments); // converting the object into an array.

    argsArray.forEach(function (cur) {
        console.log((2019 - cur) >= 18);
    });
}

// isFullAge5(1990, 1999, 2004, 1965, 2000);

// EsS 6

function isFullAge6(...years) {
    // console.log(years);
    years.forEach(cur => console.log((2019 - cur) >= 18));
}

isFullAge6(1990, 1999, 2004, 1965, 2000);
*/

// ES 5
/*
function isFullAge5(limit) {
    console.log(arguments);
    var argsArray = Array.prototype.slice.call(arguments, 1); // converting the object into an array.
    console.log(argsArray);
    argsArray.forEach(function (cur) {
        console.log((2019 - cur) >= limit);
    });
}

isFullAge5(21, 1990, 1999, 2004, 1965, 2000);

// EsS 6

function isFullAge6(limit, ...years) {
    // console.log(years);
    years.forEach(cur => console.log((2019 - cur) >= limit));
}

isFullAge6(19, 1990, 1999, 2004, 1965, 2000);
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Default Parameters
/*
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'South African' : nationality = nationality;

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Mini', 'Xhosa');

// ES 6

function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'South African') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}


var john6 = new SmithPerson('John', 1990);
var emily6 = new SmithPerson('Emily', 1983, 'Mini', 'Xhosa');
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Maps
/*
const question = new Map();

question.set('question', 'What is the official name of the latest major js version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct Answer');
question.set(false, 'Wrong Answer, Please try again.');

// to retrieve data

console.log(question.get('question'));

console.log(question.size);

if (question.has(4)){
    // question.delete(4)
    // console.log('Answer 4 is here');
}

// question.clear();

// question.forEach((value, key) =>
//
// console.log(`This is ${key}, and it's set to ${value}`));


// for accessing the key as well as the value (use destructuring)
for (let [key, value] of question.entries()){
    if (typeof(key) === 'number') {
        console.log(`Answer: ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('write the correct answer'));

console.log(question.get(ans === question.get('correct')));
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Classes (NB classes are not hoisted, so one needs to implement them first, and then call them.)

//ES5

var Person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person5.prototype.calculateAge = function () {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
};

var john5 = new Person5('John5', 1990, 'Teacher');

//ES6
class Person6 {
    constructor (name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        let age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    // adding a static method. this is not inherited by the class instances, so objects that we create for that class
    // can be used as helper functions
    static greeting() {
        console.log('Hey there');
    }
}

const john6 = new Person6('Thando6', 1990, 'teacher');

Person6.greeting();


//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Subclasses (continuing from the classes lecture above)

// ES5

var Athlete5 = function (name, yearOfBirth, job, olympicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
};

// to connect the two function constructors in order to make the prototype chain work well
Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
};

var johnAthlete5 = new Athlete5('John', 1990, 'Swimmer', 3, 10);

johnAthlete5.calculateAge();
johnAthlete5.wonMedal();




















