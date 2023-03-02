
// if(login == 'Працівник'){
  //   message='Привіт';
  // }

  // ТЕРНАРНИЙ ОПЕРАТОР - message = (condition) ? '' : ''

//   let message;
// let login = prompt('Введіть логін : ');
// message = (login == 'Працівник') ? 'Привіт' : 'Добрий день'
// console.log(message);

// var x = 10, y = 10, position = '';
// alert('Введіть end для виходу');
// if(position != 'end') {
//   alert('Ваші координати : ' + x + ',' + y)
//   position = prompt('Виберіть напрямок (n,s,e,w):');
//   if(position == 'n'){
//     y--; // y = y - 1;
//   } else if(position == 's'){
//     y++; // y = y + 1
//   } else if(position == 'e'){
//     x++;
//   } else if(position == 'w'){
//     x--;
//   }
// };

// alert('Ваші координати : ' + x + ',' + y);

// -----------------------------------------
// SWITCH

// let start;
// let bulba = prompt('Введіть якесь слово : ');

// switch(bulba){
//   case 'Bandera' :
//   start = alert(0);
//   break;
//   case 'Renata' :
//     start = alert(10);
//     break;
//   default :
//   alert('Ви ввели невалідне значення');
// }
// console.log(start)

// -----------------------------------

// const one = 10;
// if(1){
//   console.log('Hello', one);
// }

// console.log('Hello 2', one); //10

// if(1){
//   const one = 10
//   console.log('Hello', one);
// }

// console.log('Hello 2', one); //error

// if(1){
//   const two = 6;
//   console.log(one)
// }
// ---------------------------------------


// WHILE

// let one = 4;
// while(one < 10){
// one++;
// }

// -------------------

// DO WHILE

// let one = 4;
// do{
//   one++;
//   console.log(one);
// }
// while (one > 10); //false

// --------------------------
// FOR

// const max = 10;
// for(let i = 0; i < 10; i++){
//   console.log(i);
// }

// let count = prompt("Enter number:");
// let i = count;
// let rand;
// while (i > 0) {
//     rand = Math.floor(Math.random()*100);
//     console.log(`Random number_${count - i + 1} : ${rand}`);
//     i--;
// }

// ---------------

// let number;
// let max = 0;
// do{
//   number = +prompt('Enter your number: ');
//   if(number > max){
//     max = number;
//   }
// }
// while (number != 0);
// alert('Max num: ' + max);

// ---------------
// ЦИКЛИ - ПРАКТИКА!!!
// ------------------------------

// 1-ше завдання

// let totalSum = 0;
// let allDigits = 0;

// do{
// var digit = +prompt('Введіть число, для розрахунку, вийти - 0', 0)
// if(digit){
//   allDigits++;
//   totalSum += digit;
// }
// } while(digit);
// alert('К-сть чисел: ' + allDigits);
// alert('Загальна сума: ' + totalSum);
// alert('Середнє арифметичне: ' + totalSum / allDigits);

// ------------------------

// 2-е завдання

// Необхідно сумувати усі непарні числа в діапазоні, який введе користувач

// var sumOdd = 0;
// var start = +prompt('Введіть початок діапазону: ');
// var finish = +prompt('Введіть кінець діапазону: ');
// var i = start;
// while(i <= finish){
//     if(i % 2 !== 0){
//       sumOdd += 1;
//     }
//     i++;
// }

// alert(`Сума непарних чисел в діапазоні від ${start} до ${finish} дорівнює
// ${sumOdd}`);

// -----------------------------

// 3-тє завдання

// Введіть стовпчик чисел від 1 до 50

// for(let i = 1; i <= 50; i++){
//   document.write(i + '<br>')
// }

// --------------------------

// 4-те завдання

// Намалювати рівнобедренний трикутник з символів *.Висоту обирає
// користувач

// var i = 0, j = 0;
// var max = 20;
// var space = "", star = "";
// while (i < max){
//   space = "";
//   star = "";
//   for (j = 0; j < max - i; j++) space += " ";
//  for (j = 0; j < 2 * i + 1; j++) star += "*";
//   console.log(space + star);
//   i++;
// }

// ---------------------------

// 5-те завдання

// let sum = 0;
// let number = +prompt('Enter the starting number of organisms: ');
// let increase = +prompt('Enter the percentage of daily increase: ');
// let day_breed = +prompt('Enter the number of days to bread: ');

// console.log('Starting number of organisms: ' + number);
// console.log('Percentage of daily increase: ' + increase);
// console.log('Number of days to bread: ' + day_breed);

// for(let i = 1; i <= day_breed; i++){
// console.log(`Day ${i} : ${number}`)
// number = number + (increase/100);
// }


// ----------------------------

// 6-те завдання

// for(var i = 100; i > 0; i--){
//   console.log(i);
// }
// ----------------------------

// 7-ме завдання

// var i = 1;
// var message = '';
// while(i < 10){
// message += i + 'x 3 = ' + (i*3) + '<br>';
// i++;
// };
// document.write(message);

// -----------------------------

// 8-ме завдання

// var num = 1;
// var n,t;

// while(num <= 100){
//   n = 0;
//   t = 1;
//   do{
//     if(num % t === 0){
//       n++;
//       t++;
//     }
//     if(n == 5){
//       num++;
//       console.log(num + '<br>')
//     }
//   }while(t <= num);
// }

// --------------------------