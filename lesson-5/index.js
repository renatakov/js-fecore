// МЕТОДИ ПЕРЕБОРУ МАСИВІВ

// ---------------------------

// Array.method(callback[currentValue], index, arr);
// Array.method((item, inx, arr) =>{

// });

// forEach() method
// -----------------------

// let bochka = [3, 5, 7];
// for(let i = 0; i < bochka.length;i++ ){
//   console.log(bochka[i]);
// }

// bochka.forEach(num => console.log(num))
// bochka.forEach((num, index) =>console.log(index, num))

// map() method
// ---------

// Array.map(callback[currentValue, index, array]);
// let numbers = [4, 8 , 10];
// let transformArray = numbers.map(num => num * 4)
// console.log(transformArray);  //16, 32, 40

// -------------------

// let users = [
//   {
//     name: "Renata",
//     isActive: false,
//   },
//   {
//     name: "Anrew",
//     isActive: true,
//   },
//   {
//     name: "Petro",
//     isActive: true,
//   },
// ];

// let names = users.map((user) => user.name);

// console.log(names); //['Renata', 'Anrew', 'Petro']

// -----------------------
// filter() method
// ------------------------

// let numbers = [4, 6 ,77, 18, 32, 27];
// console.log(numbers.filter(num => num % 2 === 0));

// let users = [
//   {
//     name: "Renata",
//     isActive: false,
//   },
//   {
//     name: "Anrew",
//     isActive: true,
//   },
//   {
//     name: "Petro",
//     isActive: true,
//   },
// ];

// let activeUsers = users.filter(user => user.isActive);
// console.log(activeUsers)

// ------------------------
// find() method
// ------------------------

// let numbers = [1, 3, 5, 13];
// console.log(numbers.find((num) => num > 2)); //3

// let users = [
//   {
//     id: "000",
//     name: "Renata",
//     isActive: false,
//   },
//   {
//     id: "001",
//     name: "Anrew",
//     isActive: true,
//   },
//   {
//     id: "002",
//     name: "Petro",
//     isActive: true,
//   },
// ];

// let user = users.find((user) => user.id === "001");
// console.log(user);
// let getUserById = (arr, id) => arr.find(x => x.id === id);
// console.log(getUserById(users, '002'))

// --------------------------
// every() and some() methods
// ---------------------------

// let name1 = (val) => val >= 5;
// console.log([5, 7, 6, 3, 2].every(name1)); // false
// console.log([5, 7, 6, 3, 2].some(name1)); // true

// let fruits = [
//   {
//     name1: "apples",
//     amount: 130,
//   },
//   {
//     name1: "bananas",
//     amount: 0,
//   },
//   {
//     name1: "peach",
//     amount: 50,
//   },
// ];

// let allFruits = fruits.every((fruit) => fruit.amount > 0);
// let allFruits1 = fruits.some((fruit) => fruit.amount > 0);
// console.log(allFruits); // false
// console.log(allFruits1); // true

// --------------------
// reduce() method
// --------------------

//Structure:
// array.reduce(callback[
//   (previousValue, currentValue, currentIndex, array)
// ])

// let numbers = [5, 1, 4, 8];
// let sum = numbers.reduce((acc, value) => acc + value, 0);
// console.log(sum); // 18
// let tweets = [
//   {
//     id: "000",
//     likes: 1000,
//     tags: ["c++", "c#", "python"],
//   },
//   {
//     id: "001",
//     likes: 1327,
//     tags: ["paskal", "js", "java"],
//   },
//   {
//     id: "002",
//     likes: 1754,
//     tags: ["paskal", "design", "java"],
//   },
//   {
//     id: "003",
//     likes: 1825,
//     tags: ["ruby", "js", "php"],
//   },
//   {
//     id: "004",
//     likes: 2243,
//     tags: ["c", "nodejs", "java"],
//   },
// ];

// let tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);
//   return allTags;
// }, []);
// let getTags = (tweets) =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);
//     return allTags;
//   }, []);

// let getUniqueTag = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   } else {
//     acc[tag]++;
//     return acc;
//   }
// };
// let countTags = (tags) => tags.reduce(getUniqueTag, {});
// let tagCount = countTags(tags);
// console.log(tagCount);

// let Multiply = (array, value) => {
//   let Array1 = [];
//   array.forEach(element => { Array1.push(element * value)});
// return Array1;
// };
// let numbers = [3,4,6,2,8];
// let numbersMultiply = Multiply(numbers, 3);
// console.log(numbersMultiply); // [9,12...]

// -----------------
// sort() method
// ---------------------

// let scores = [30, 70 , 50, 6]
// scores.sort((a, b) => a - b);
// console.log(scores)

// let students = ['c', 'A', 'a'];
// students.sort();
// console.log(students)

// Array.sort((i, d) => {
//   //тіло ф-ції
// })

// let numbers = [77, 81, 22, 13, 7];
// let numbersSort = [...numbers].sort((a, b) => a - b);
// console.log(numbersSort)

// "a".localeCompare("b"); // -1
// "b".localeCompare("a"); // 1
// "a".localeCompare("a"); // 0
// "b".localeCompare("b"); // 0

// let users = ['Валентин', 'Аня', 'Рената', 'Олена'];
// let usersOrder = [...users].sort((a, b) => a.localeCompare(b));
// console.log(usersOrder)

// let costumers = [
//   {
//     name: "Masha",
//     count: 5,
//   },
//   {
//     name: "Phillip",
//     count: 15,
//   },
//   {
//     name: "Renata",
//     count: 2,
//   },
//   {
//     name: "Sasha",
//     count: 7,
//   },
// ];
// let sorted = costumers.sort((first, last) => {
//   first.count - last.count
// })

// let sorted1 = costumers.sort((first, last) => {
//   last.count - first.count
// })

// let alphabet = costumers.sort((first, sec) => {
//   first.name.localeCompare(sec.name)
// })

// console.log(alphabet);