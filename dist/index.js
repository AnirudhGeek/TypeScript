"use strict";
let x = "Anirudh";
console.log(x);
//problem 1
function greet(firstName) {
    console.log("Hello " + firstName);
}
greet("Anirudh");
//problem 2
function sum(num1, num2) {
    console.log(num1 + num2);
}
sum(4, 6);
//problem 3
function checkAge(age) {
    if (age >= 18)
        return true;
    else
        return false;
}
console.log(checkAge(25));
//problem 4
function delayedCall(another) {
    setTimeout(another, 1000);
}
function another() {
    console.log("Logged after 1 second");
}
delayedCall(another);
//defining an object inside a function in ts
function greet2(user) {
    console.log("hello " + user.name);
}
greet2({
    name: "Anirudh",
    age: 20
});
