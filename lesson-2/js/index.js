// МАСИВИ

// ---------------------

// let animals = ['cat', 'dog'];
// console.log(animals[1])
// animals[0] = 'monkey';
// console.log(animals);
// console.log(animals.length);

// --------------------------
// const names = ['Sasha', 'Renata', 'Nazar'];
// for(let i = 0; i < names.length; i++){
//   console.log(names[i]);
// }

// const num1 = [];
// for(let i = 0; i < 6; i++){
//   num1.push(i);
// }
// console.log(num1)
// ------------------------------

// const clients = ['Renata', 'Phillip', 'Natalia'];

// for (let client of clients){
//   console.log(client);
// }

// ------------------------------

// const clients = ['Petro', 'Renata', 'Masha'];

// const find = 'Renata';

// let message;

// for(const i of clients){
//   if(i == find){
//     message = 'Client found';
//     break;
//   } else{
//     message = 'Client not found';
//   }
// }
// console.log(message);

// ------------------------------------

// const numbers = [1, 66 ,43, 12, 22, 4, 5 ,2, 3];
// const find = 0;
// for(let i = 0; i < numbers.length; i++){
// if(numbers[i] < find){
// continue;
// }
// console.log('NUmbers <' + find + numbers[i])
// }

// ---------------------------------------

// const matrix = [
//   [8, 7, 5],
//   [1, 4, 2],
//   [6, 9, 3],
// ];
// let total = 0;
// for(let i = 0; i < matrix.length; i++){
//   console.log('Підмасив матриці matrix[i] ' + matrix[i])
//   for(let j = 0; j < matrix[i].length; j++){
//     console.log('Елемент підмасив матриці matrix[i][j] ' + matrix[i][j])
//     total += matrix[i][j];
//   }
// }
// console.log(total);

// ---------------------------------------

// let a = 5;
// let b = a;
// console.log(a, b) // 5, 5
// a = 10;
// console.log(a, b) // 10, 5

// const a = ['Apple']
// const b = a;
// console.log(a,b); // ['Apple'], ['Apple']
// a.push('Orange');
// console.log(a,b) // [Orange]

// const message = 'welcome to Ukraine';
// console.log(message.split(' '))
// console.log(message.split(''))
// SPLIT - З РЯДКА В МАСИВ
// ---------------------

// JOIN - З МАСИВА В РЯДОК
// const client = ['Mango', 'Poly', 'Joy'];
// console.log(client.join(', '))

// -------------------------------------------

// indexOf - ВИВОДИТЬ ІНДЕКС ІСНУЮЧОГО ЕЛЕМ.

// const client = ['Mango', 'Poly', 'Joy'];
// console.log(client.indexOf('Poly')) // 1

// -------------------
// includes - ПОВЕРТАЄ true || false, якщо в масиві є даний елем.
// const client = ['Mango', 'Poly', 'Joy'];
// console.log(client.includes('Poly'));
// ---------------------------------------

// const fruit = 'apple';
// if(fruit === 'apple' || fruit === 'strawberry'){
//   console.log('Itis a red fruit')
// }

// const redFruits = ['apple', 'cherry', 'strawberry'];
// const fruit = 'cherry';

// if(redFruits.includes(fruit)){
//     console.log('Itis a red fruit')

// }

// -------------------------------------------

// let stack = [];
// stack.push(3);
// console.log(stack)
// stack.pop()

// ---------------------------------------

// const client = ['Mango', 'Poly', 'Joy', 'Ajax'];
// // console.log(client.shift());
// // console.log(client.unshift('Kiwi'));
// // console.log(client);

// console.log(client.slice(1, 3));
// console.log(client.slice(1));

// ---------------------
// let scores = [1, 2, 3, 4, 5];
// const deleteScore = scores.splice(0, 3);
// console.log(scores); //4, 5

// let colors = ['red', 'green', 'blue'];
// colors.splice(2, 0, 'purple');
// console.log(colors)

// let languages = ['C++', 'Java', 'Javascript', 'C'];
// languages.splice(1, 1,'Python');

// languages.splice(2, 1, 'C#', 'Go', 'Swift')
// console.log(languages)

// let colors = ['red', 'green', 'blue'];
// let languages = ['C++', 'Java', 'Javascript', 'C'];
// let all = languages.concat(colors)
// console.log(all)

// ----------------------------------------------------
// ПРАКТИКА
// ----------------------------------------------

// #1

// let a1 = [];
// let a2 = [];
// a1.length = prompt('n = ');
// for(let i = 0;i < a1.length; i++)
//   a1[i]  = prompt('a1[]' + i + ']=')
//   document.write('n = ' + a1.length + '<br>');
//   document.write('a1:<br>');
//   for(let j = 0; j < a1.length; j++)
//     document.write(a1[j] + ' ');
//     document.write('<br/>');
//     for(let i = a1.length - 1; i >= 0; i--)
//       a2[a1.length-i-1] = a1[i]

//     document.write('a2:<br>');
//     for(let j = 0; j < a2.length; j++)
//       document.write(a2[j] + ' ');
//       document.write('<br>')


