
// There are 3 ways to declare a JavaScript variable

// - var
// - let 
// - const 

// var a = 5
// var b = 2
// var c = a + b
// console.log(c)

// let a = 2
// let b = 3

// const  a = 3
// const  b = 4


// The assignment operator

// x = x + 5



// data Types 

// var pi = 3.14
// var person = "john doe"
// var answer = 'ye i am '


// one Statement many variable 

// var person = "john doe", carName = "Volvo", price  = 200
// console.log(carName);


// javaScript dollar sign $

// var $$$ = "three"
// console.log($$$);


// javaScript let 

// variables defined with 'let' cannot be redeclared
// variable defined with 'let' must be declared befor use
// variables defined with 'let' have block scope


// let cannot be redeclared

// let x = "john doe"
// let x = "apple"
// console.log(x);

// with var you can

// var  x = "john doe"
// var x = "apple"
// console.log(x);

// let is block scoped

// function test() {
//     let a = "apple"
// }

// console.log(a);


// JavaScript const

// always use 'const' when you declare

// - a new Array
// - a new object 
// - a new function
// - a new RegExp


// const arr = ['shakil babu','ahm fahim morshed','shakil haque']
// console.log(arr);



// const car = {
//     type : "Fait",
//     model : "500",
//     color : "White"
// }
// console.log(car.color);


// javaScript arthmetic operators 

// + 
// - 
// *
// **
// /
// %
// ++ 
// --


// javaScript assignment operaors

// =
// +=
// -=
// *=
// /=
// %=
// **=


// javaScript comparison operators

// == 
// ===
// !=
// !==
// >
// <
// >=
// <=
// ?


// javaScript logical operators

// && // logical and
// || logical or
// ! logical not


// javaScript type operators

// typeof   // returns the type of a varibale
// instanceof   // returns true if an object is an instance of an object type


// javaScript bitwise operators

// &    and 
// |    or
// ~    not
// ^    xor
// <<   zero fill left shift
// >>   signed right shift
// >>>  zero fill right shift


// javaScript function:

// function myFunction(a, b) {
//     return a + b
// }
// console.log(myFunction(12, 23));


// const person = {
//     firstName : "john",
//     lastName : "Doe",
//     id : 5544,
//     fullName : function() {
//         return this.firstName + " " + this.lastName
//     }
// }
// console.log(person.fullName);

// ===============================================

// Do not Declare string, numbers, and booleans as objects!


// a = new String()     // Declares a as a String object
// b = new Number()     // Declares b as a Number object
// c = new Boolean()    // Declares c as a Boolean object

// js string methods

// let message = "hey, shakil babu. what are you doing?"
// console.log(message.length);


// Extracting string parts: 

// slice(start, end)
// substring(start, end)
// substr(start, length)


// slice(start, end)

// let string = "shakil, fahim, kuddus"
// console.log(string.slice(7, 13)); 
// console.log(string.slice(7));
// console.log(string.slice(-13));



// substring(start, end)

// let tori = "shakil, fahim, kuddus"
// console.log(tori.substring(7, 14));


// substrt(start, length)
// console.log(tori.substr(7, 5));

// replace()


// replace("selected word", "Replaced new word")

// let text = "please visit shakilbabus web app"
// let newText = text.replace("shakilbabus", "babus")
// console.log(newText);


// to replace case insensitive, use a regular expression with an /i flag(insensitive)
// https://www.w3schools.com/js/js_string_methods.asp

// let text = "She is ugly"
// let newOne = text.replace(/ugly/i, "pretty!!")
// console.log(newOne)



// To replace all matches use a regular expression with a /g flag(global match)

// let text = "Please visit youtube. youtube is awesome dude."
// let newOne = text.replace(/youtube/g, "google")
// console.log(newOne);


// trim() 

// let text = "        shakil babu         "
// console.log(text.trim());

// js string padding

// let text = "5"
// console.log(text.padStart(6,0));


// charAt() 

// let text = "she is cute" 
// console.log(text.charAt(0))

// converting a string to an array

// let msg = "i am gonna tell you that i  cant be able to make you understand this."
// console.log(msg.split(""))



// javaScript methods for searching strings:

// String.indexOf()
// String.lastindexOf()
// String.startsWith()
// String.endsWith()


// let str = "please find my pen"
// console.log(str.indexOf('m'));


// resource : https://www.w3schools.com/js/js_string_search.asp


// js string templates : https://www.w3schools.com/js/js_string_templates.asp

// back-tics syntax

// let text = `hey world`

// quotes inside strings:

// let text = `he's often called "johnny" `

// let a  = 23
// let b = 22
// let result = a + b
// console.log(`value of a is : ${a} and value of b is: ${b}. Final result is: ${result}`);

// ----------  Number methods  ----------

// let a = 1243
// b = a.toString()
// console.log(b);


// let x = 9.656
// y = x.toExponential(2)
// y = x.toExponential(4)
// y = x.toExponential(6)
// console.log(y);


// let x = 8.344
// y = x.toFixed(0)
// y = x.toFixed(2)
// y = x.toFixed(6)
// console.log(y);


// let a = 8.234
// b = a.toPrecision()
// b = a.toPrecision(2)
// b = a.toPrecision(5)
// console.log(b);


// converting variables to numbers

// Number()
// parseInt()
// parseFloat()

// number properties

// MAX_VALUE
// MIN_VALUE
// POSITIVE_INFINITY
// NEGATIVE_INFINITY
// NaN


// ---------- js arrays -----------

// const cars = ['sab','volvo','bmw']
// console.log(cars);


// spaces and line brakes are not important 

// const cars = [
//     'toyota',
//     'frod',
//     'volvo',
//     'tesla',
//     'bmw'
// ]
// console.log(cars);
// source: https://www.w3schools.com/js/js_arrays.asp



// js Array methods:  https://www.w3schools.com/js/js_array_methods.asp

// toString()

// const fruits = ['apple','banana','jackfruit','lichi']
// console.log(fruits.toString());


// join() 

// const fruits = ['apple','banana','jackfruit','lichi']
// console.log(fruits.join(" * "));


// pop()

// const fruits = ['apple','banana','jackfruit','lichi']
// console.log(fruits.pop());

// push() 
// const fruits = ['apple','banana','jackfruit','lichi']
// console.log(fruits.push('kiwi'))
// console.log(fruits)

// the shift() method returns the value that was shifted out 

// the unshift() method adds a new element to an array (at the beginning)