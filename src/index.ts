let x: string = "Anirudh";
console.log(x);

//problem 1
function greet(firstName: string) {
  console.log("Hello " + firstName);
}

greet("Anirudh");

//problem 2
function sum(num1: number, num2: number) {
  console.log(num1 + num2);
}

sum(4, 6);

//problem 3
function checkAge(age: number) {
  if (age >= 18) return true;
  else return false;
}

console.log(checkAge(25));

//problem 4
function delayedCall(another: () => void) {
  setTimeout(another, 1000);
}

function another() {
  console.log("Logged after 1 second");
}

delayedCall(another);

//defining an object inside a function in ts
function greet2(user: { name: string; age: 20 }) {
  console.log("hello " + user.name);
}
greet2({
  name : "Anirudh",
  age : 20
});



