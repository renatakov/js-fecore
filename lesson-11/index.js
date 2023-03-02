let inputNumber = document.querySelector("#inputNumber");
let btnStart = document.querySelector("#btnStart");
let body = document.querySelector("#body");
let block = document.querySelector("#block");
let position = 0;

btnStart.addEventListener("keydown", () => {
  // let flag = 0;
  // for (let i = 0; i <= inputNumber.value; i++) {
  //   flag = Math.random();
  //   debugger;
  // }
  // body.classList.add("container");
  // body.classList.replace('lightTheme', 'darkTheme')
  // console.log(body.classList);
  position += 100;
  block.style.left = position + "px";
});

let str = "100px";
let number = parseInt(str);

// parseInt() принимает строку в качестве аргумента и
// возвращает целое число в соответствии с указанным
// основанием системы счисления.
