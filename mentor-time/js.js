let pWelcome = document.getElementById("p-welcome");
let inputName = document.getElementById("inputName");
let nameLocal = localStorage.getItem("username");
let h1 = document.querySelector(".h1");

console.log(nameLocal);

// cookies
// let nameCookies = document.cookie.match(/username(.+?)(;|$)/);
// if (nameCookies == null) {
//   pWelcome.innerHTML = "Welcome, stranger!";
// } else{
//   let username = nameCookies[1].substring(1);
//   pWelcome.innerHTML = "Welcome, " + username + "!";

// }

// inputName.addEventListener("change", function (e) {
//   document.cookie = "username=" + inputName.value;
//   pWelcome.innerHTML = "Welcome, " + inputName.value + "!";
// })

//localStorage - зберігає дані тільки на пристрої,
// в якому користувач ввів дані

// localStorage.clear(); - видаляє весь об'єкт
// localStorage.removeItem('username'); - видаляє
// конкретний елемент
if (nameLocal == null) {
  pWelcome.innerHTML = "Welcome, stranger!";
} else {
  pWelcome.innerHTML = "Welcome, " + nameLocal + "!";
}
inputName.addEventListener("change", function (e) {
  localStorage.setItem("username", inputName.value);
  pWelcome.innerHTML = "Welcome, " + inputName.value + "!";
});
import user from "./user.json";
console.log(user);
// localStorage.setItem("users", users);
// let localUsers = localStorage.getItem("users");
// console.log(localUsers[2]);
// let userJson = {
//   name: "Alex",
//   age: 25,
// };
// userJson = JSON.stringify(userJson);
// localStorage.setItem('user', user)
// let localUser = localStorage.getItem('user');
// localUser = JSON.parse(localUser);



// sessionStorage - зберігає дані тільки тоді,
// коли браузер не закрито.Такі ж самі методи , як
// і в localStorage

// import bcrypt from "./node_modules/bcrypt/bcrypt";
// let xhr = new XMLHttpRequest();

// xhr.open("GET", "http://api.weatherapi.com/v1/current.json?key=f57ded1f279f4aeaa14102446232101&q=London&aqi=no");
// xhr.setRequestHeader("Content-type", "application/json");
// xhr.send();
// xhr.onload = () => {
// let response = xhr.response
// response = JSON.parse(response);
// console.log(response);
// h1.innerHTML = response.current.temp_c + 'C'
// }

// fetch("http://api.weatherapi.com/v1/current.json?key=f")
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);

// });

import axios  from "./node_modules/axios/index";

axios.get("http://api.weatherapi.com/v1/current.json?key=f57ded1f279f4aeaa14102446232101&q=London&aqi=no")
.then((res)=>{
  console.log(res.data);
})
.catch((err)=>{
  console.log(err);
});