// ---------------------
// function - ФУНКЦІЯ

// let add = function(a,b,c){
//   return a + b + c;
// }
// console.log(add(-55, -6, 7))

// параметри - function(params){}
// аргументи - add(argumnets)

// -----------------

// let funcA = function(){
// console.log('Почала виконуватися ф-ція funcA');
// funcB()
// }

// let funcB = function(){
//   console.log('Почала виконуватися ф-ція funcB')
// }

// console.log('Почав виконуватися main')

// console.log('Почав виконуватися main')
// 1- ;2 - funcB; 3 - funcA;

// -----------------

// let count = function (countFrom = 0, countTo = 10, step = 1) {
// console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}` )
// for(let i = countFrom; i <= countTo; step++){
//   console.log(i);
// }
// };
// count(1, 5)
// count(2);
// count(undefined, 4, 3);
// count();

// ----------------
// ПСЕВДОМАСИВ - колекція значень в arguments
// ----------------
// let sum = function(){
//   let total = 0;
//   for(let argument of arguments){ //7, 8, 3, 1
//     total+=argument;
//   }
//   return total;
// }

// console.log(sum(1, 23, 4)) //28

// ----------

// let fn = function(){
//   let args = Array.from(arguments);
//   //Array.from() - Creates an array from an iterable object.
// }

// --------------

// let fn = function (...args) {

// }

// ------
// let money = function (amount, balance) {
// if (amount === 0) {
//   console.log('Введіть суму більше 0')
//   return;
// } else if(amount > balance){
//   console.log('Недостатньо коштів на рахунку')
//   return;
// }else{
//   console.log('Операція зняття коштів успішна');
// }
// }
// money(200, 500)

// ------------

// function one(){
//   if(true){

//   }
//   function two(){
//     let a = 10;
//   }
// }
// let a = 20;
// let b = function(){
// let c = 5;
// return c + a; //25
// function add(){
//   let c = 10;
// }
// }
// b(); //25

// --ОБЛАСТІ ВИДИМОСТІ Ф-ЦЇ--

// let value = 20;
// let add = function (num) {
//   let value = 10;
//   let innerValue = 5;
//   return num + value + innerValue;
// }

// console.log(value); //20
// console.log(add(20))//35
// console.log(innerValue)
//Uncaught ReferenceError: innerValue is not defined

// -----------
// console.log('Цього повідомлення не буде в консолі');
// cos value = 5;

// console.log(value); //undefined
// const value = 5;
// console.log(value);//5

// if(true){
// console.log(value);//error
// const value = 10;
// console.log(value);//10
// }

// value = 15;
// console.log(value);//error

// --СТРІЛКОВІ Ф-ЦІЇ

  // let add = (a, b ,c) => a + b + c;

  //OR

// let add = (a, b, c) => {
// return a + b + c;
// }

  // --------------
  // let fn = x => {
  //   return x * 2;
  // }

  // console.log(fn(3))

  // --------------

  // let add = (...args) => {
  //   console.log(args);
  // }
  // add(1, 4 , 6) // [1, 4, 6]

  // !!НЕ МОЖНА ВИКОРИСТОВУВАТИ Array.from()!!

// ------------

    // function f(counter){ // 3
    // counter--; // 2
    // document.write("<p style='background-color:blue;'> Перша половина методу : " + counter); // blue 2
    // if (counter != 0)  // true 2
    //     f(counter);
    //     document.write("<p style='background-color:yellow;'> Друга половина методу : " + counter);
    // }
    // f(3);

    // ---------------

    // var input = prompt('Enter number');
    // input = parseInt(input)
    // function factorial(x) { //5
    //   if(x <= 1)
    //     return 1;
    //     return x * factorial(x-1) // 5 *4 * 3 * 2 * 1
    // }
    // document.write(`Factorial ${input} != ${factorial(input)}`)

    // -----------------
    // function hypotenuse(a, b) {
    //   function pow(x) {
    //     return x*x;
    //   }
    //   return Math.sqrt(pow(a) + pow(b))
    // }

    // document.write(`гіпотенуза ${hypotenuse(3, 4)}`)