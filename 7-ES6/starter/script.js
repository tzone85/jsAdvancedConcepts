// Lecture about let and const
/*
// ES5
var name5 = "Mncedi";
var age5 = 23;
name5 = "Mncedi Miller";
console.log(name5);

// ES6
const name6 = "Mncedi";
let age6 = 23;
// name6 = 
console.log(name6)

// var in ES5 - Function scoped, ES6 Block scope

// ES5
function driversLicense5(passTest) {
    if (passTest){
        console.log(firstName);
        var firstName = "John";
        var yearOfBirth = 1990; 
    }
    console.log(firstName + ', born in '+ yearOfBirth + ', is now officially drive a car.')
}

driversLicense5(true);

//ES6
function driversLicense6(passTest) {
    
    // console.log(firstName);
    let firstName;
    const yearOfBirth = 1990;

    if (passTest){
        firstName = "John";
        console.log(firstName + ', 6born in '+ yearOfBirth + ', 6is now officially drive a car.')
    }    
}

driversLicense6(true);

var i = 23;
for (var i = 0; i < 5; i++){
    console.log(i);
}

console.log(i);
*/

/////////////////////////////////////////////////////
// Blocks and IIFEs
/*
// ES6
{
    const a = 1;
    let b = 2;
    var c = 3;
}
// console.log(a + b);
console.log(c);

(function() {
    var c = 3;
})();

// console.log(c);
*/

////////////////////////////////////////////////////////////
// Lecture: Strings

/*
let firstName = 'john';
let lastName = 'smith';
const yearOfBirth = 1990;

function calcAge(year) {
    return 2019 - year;
}

// ES5
console.log('This is '+ firstName + ' '+ lastName + '. He was born in '+ yearOfBirth + '. Today, he is '+ calcAge(yearOfBirth) + 'years old');

// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}, and today he is ${calcAge(yearOfBirth)} years old`);
const fullName = `${firstName} ${lastName}`;

console.log(fullName.startsWith('j'));
console.log(fullName.endsWith('h'));
console.log(fullName.includes('oh'));
console.log(`${fullName} `.repeate(5));
*/

///////////////////////////////////////////////////////////////////////
// Lecture Arrow Functions
/*
const years = [1990, 2000, 1985];

// ES5 
var ages5 = years.map( function(el) {
    return 2019 - el;
});
console.log(ages5);

// ES6

let ages6 = years.map(el => 2019 - el);
console.log(ages6);

ages6 = years.map((el, index) => `age element ${index + 1} is: ${2019 - el}`);
console.log(ages6);

// more than one line in the code

age6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}: `
});

console.log(age6);

*/

///////////////////////////////////////////////////////////////////////
// Lecture Arrow Functions 2

// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        
        var self = this;

        document.querySelector('.green').addEventListener('click', function(){
            var str = 'This is box number '+ self.position +' and it is ' + self.color;
            alert(str);
        })
    }
 }
 box5.clickMe();

 // ES6 shares the lexical function of the 'this' key word

//  var box6 = {
//     color: 'green',
//     position: 1,
//     clickMe: function() {
        
//         const self = this;

//         document.querySelector('.green').addEventListener('click', () => {
//             let str = 'This is box number '+ this.position +' and it is ' + this.color;
//             alert(str);
//         });
//     }
//  }
//  box6.clickMe();
// DuaneAccount01@@
var box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        
        const self = this;

        document.querySelector('.green').addEventListener('click', () => {
            let str = 'This is box number '+ this.position +' and it is ' + this.color;
            alert(str);
        });
    }
 }
 box66.clickMe();