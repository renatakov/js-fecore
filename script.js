// // console.log(window.location)
// // document.querySelector('h1').addEventListener('click', () => {
// //   // window.location.href = 'https://www.youtube.com/'
// //   window.location.pathname = 'youtube.com'
// // })
// let inputLogin = document.querySelector("#inputLogin");
// let inputPassword = document.querySelector("#inputPassword");
// let btnShow = document.querySelector("#btnShow");
// let btnSignIn = document.querySelector("#btnSignIn");
// let users = [
//   {
//     login: "Admin",
//     password: "Admin1234",
//   },
//   {
//     login: "Renata",
//     password: "renakov1234",
//   },
// ];
// console.log(inputPassword.type);
// let flag = 0;
// let showPassword = () => {
//   if (flag === 0) {
//     inputPassword.type = "text";
//     btnShow.innerHTML = "Hide password";
//     flag = 1;
//   } else {
//     inputPassword.type = "password";
//     btnShow.innerHTML = "Show password";
//     flag = 0;
//   }
// };

// let signIn = () => {
//   let currentUser = false;
//   users.map((el, index) => {
//     if (inputLogin.value === el.login) {
//       currentUser = el;
//     }
//   });
//   if (currentUser === false) {
//     alert("User not found");
//   } else if (currentUser.password === inputPassword.value) {
//     window.location.href = "/index.html";
//   } else {
//     alert("Wrong password");
//   }
// };
// btnShow.addEventListener("click", showPassword);
// btnSignIn.addEventListener("click", signIn);

document.querySelector("header").innerHTML = `
<img src="/lesson-10/1534129544.svg" alt="">
<nav>

  <a id="main" href="#1">Main</a>
  <a id="about" href="/lesson-10/about/about.html">About</a>
  <a id="contact" href="#3">Contact</a>
</nav>
`;
let nav_main = document.querySelector("#main");
let nav_about = document.querySelector("#about");
let nav_contact = document.querySelector("#contact");


let locationNow = window.location.pathname;
console.log(locationNow);

if (locationNow == "/lesson-10/index1.html") {
  nav_main.style.color = "red";
console.log(locationNow);

}

if (locationNow == "/lesson-10/about/about.html") {
  nav_about.style.color = "red";
}
