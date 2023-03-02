  // ОБ'ЄКТИ


  // const car = {
  // color: 'red',
  // km: 20000,
  // maxSpeed: '300km/h'
  // };

  // console.log(car.km);
  // console.log(car['color'])

  // car.horsePower = '100';
  // console.log(car)

  // delete car.km
  // console.log(car);

// let train = {
//   color: 'blue',
//   numberOfSeats: 200,
//   currentSpeed: '100km/h'
// }

// let color = 'blue';
// let numberOfSeats = 200;
// let currentSpeed = '100km/h';
// let train = {
//   color,
//   numberOfSeats,
//   currentSpeed
// };

// let key = 'door';
// let home = {};
// home[key] = 'floor';
// console.log(home)

// let key = 'door';
// let getKey = function(){
//   return 'floor';
// };
// let home = {
//   [key]: 'balala',
//   [getKey()]: 5
// }

// console.log(home) //door: balala, floor: 5
// let home = {
//   light: false,
//   water: 5,
//   gaz : function(){
//     console.log('Дайте світло');
//   }
// }

// home.gaz(); // Дайте світло


// --------------------------------

// this

// let park = {
//   chairs: 5,
//   flowers: 'roses',
//   shop(){
//     console.log(this.chairs);
//   },
//   attraction(val1){
//     this.flowers = val1;
//   }
// }

// // park.shop() //5
// park.attraction(50)
// console.log(park.flowers);

// --------------------------------

// for(key in object){

// }

// ---------------------------
// let phone = {
//   color: 'red',
//   memory: '128gb',
//   battery: 98,
// }

// for(let key in phone){
//   console.log(phone[key])
// }

//red
//128gb
//98

// -----------------------

// let laptop = {
// color: 'black',
// memoryOnSsd: 500,
// memoryOnHdd: 1000,
// processor: 'i5-825U',
// videocard: 'Nvidia Geforce MX150'
// }

// let keys = Object.keys(laptop)
// // console.log(keys)
// // 'color', 'memoryOnSsd', 'memoryOnHdd', 'processor', 'videocard'

// let val = Object.values(laptop);
// // console.log(val)
// // ['black', 500, 1000, 'i5-825U', 'Nvidia Geforce MX150']


// let entries = Object.entries(laptop)
// // console.log(entries)

// // ['color', 'black']
// // ['memoryOnSsd', 500]
// // ['memoryOnHdd', 1000]
// // ['processor', 'i5-825U']
// // ['videocard', 'Nvidia Geforce MX150']

// -------------------

// let meatball = {
//   farsh: 2,
//   oil : 200,
//   panirowka: 'fromPetro'
// }

// let entries = Object.entries(meatball);
// console.log(entries)

// ----------------------

// let zoo = [2, 3, 56, 33, 90];
// let minNum = Math.min(...zoo);
// console.log(minNum)

// let soup = ['frik', 'bulba', 'onion'];
// let pure = [...soup];
//let pure = [..soup, 'morkwa']
// console.log(soup);
// console.log(pure);

// let nazar = ['Pidzak', 'okulary'];
// let dima = ['perchik', 'devushka'];
// let team = [...nazar, ...dima];
// console.log(team)

// ------------------

// let x = {x: 5,y: 2}; let y = {x: 38,y: 51};
// let c = Object.assign({}, x, y);
// console.log(c);

// let sedan = {
//   comfort: true,
//   rul: 1,

// }

// let vol = {
// safety: true
// }

// let car = {...sedan, ...vol}
// console.log(car)

// ----------------------

// let royal = function(peka, ...args){
//   console.log(peka)
//   console.log(args);
// }

// console.log(royal(5, 7, 8));

// let pants = [
//   {dirka: '3dirki', size: 40},
//   {dirka: '3dirki', size: 30},
//   {dirka: '3dirki', size: 20}
// ];


// let pantsSize = pants.filter((value) => value. size >= 30);
// console.log(pantsSize)
