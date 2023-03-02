// // let inputLogin = document.querySelector("#inputLogin");
// // let inputPassword = document.querySelector("#inputPassword");
// // let btnSignIn = document.querySelector("#btnSignIn");
// // let body = document.querySelector("#body");

// // let flag = false;
// // btnSignIn.addEventListener("click", () => {
// //   setInterval(() => {
// //     if (flag) {
// //       body.classList = "lightTheme";
// //       flag = false;
// //     } else {
// //       body.classList = "darkTheme";
// //       flag = true;
// //     }
// //   }, 1000);
// // });

// // let clockHtml = document.querySelector("#clock");
// // let btns = document.querySelector("#btns");

// // let setTime = (time) => ({
// //   hours: time.getHours(),
// //   minutes: time.getMinutes(),
// //   seconds: time.getSeconds(),
// // });

// // let formatTime = (time) => {
// //   if (time.hours < 10) {
// //     time.hours = `0${time.hours}`;
// //   }
// //   if (time.minutes < 10) {
// //     time.minutes = `0${time.minutes}`;
// //   }
// //   if (time.seconds < 10) {
// //     time.seconds = `0${time.seconds}`;
// //   }
// //   return time;
// // };

// // let flag = false;
// // let timeNow = new Date();
// // let clock = setInterval(() => {
// //   timeNow = new Date();
// //   timeNow = setTime(timeNow);
// //   timeNow = formatTime(timeNow);
// //   if (flag) {
// //     clockHtml.innerHTML = `
// //       ${timeNow.hours}:${timeNow.minutes}:${timeNow.seconds}
// //     `;
// //   } else {
// //     clockHtml.innerHTML = null;
// //   }
// // }, 1000);

// // btns.addEventListener("click", (e) => {
// //   if (e.target.id === "startClock") {
// //     flag = true;
// //     clock = setInterval(() => {
// //       timeNow = new Date();
// //       timeNow = setTime(timeNow);
// //       timeNow = formatTime(timeNow);
// //       if (flag) {
// //         clockHtml.innerHTML = `
// //           ${timeNow.hours}:${timeNow.minutes}:${timeNow.seconds}
// //         `;
// //       } else {
// //         clockHtml.innerHTML = null;
// //       }
// //     }, 1000);
// //   }
// //   if (e.target.id === "destroyClock") {
// //     clockHtml.innerHTML = null;
// //   }
// // });

// // timer

// let inputSeconds = document.querySelector("#inputSeconds");
// let inputMinutes = document.querySelector("#inputMinutes");
// let inputHours = document.querySelector("#inputHours");
// let btnStart = document.querySelector("#btnStart");
// let secondsSpan = document.querySelector("#secondsSpan");
// let minutesSpan = document.querySelector("#minutesSpan");
// let hoursSpan = document.querySelector("#hoursSpan");
// let watch = document.querySelector(".clock");

// btnStart.addEventListener("click", () => {
//   let clock = {
//     seconds: +inputSeconds.value,
//     minutes: +inputMinutes.value,
//     hours: +inputHours.value,
//   };
//   let { seconds, minutes, hours } = clock;
//   function backTime() {
//     setInterval(() => {
//       if (seconds >= 1) {
//         seconds--;
//         secondsSpan.innerText = seconds + "s";
//       }
//     }, 1000);
//     setInterval(() => {
//       if (seconds === 0 && minutes >= 1) {
//         seconds = 60;
//         seconds--;
//         minutes--;
//         minutesSpan.innerText = minutes + "min" + ":";
//         secondsSpan.innerText = seconds + "s";
//       }
//     }, seconds * 1000);
//   }
//   setInterval(() => {
//     if (minutes === 0 && hours >= 1) {
//       minutes = 60;
//       seconds = 60;
//       seconds--;
//       minutes--;
//       hours--;
//       minutesSpan.innerText = minutes + "min" + ":";
//       hoursSpan.innerText = hours + "h" + ":";
//     }
//   }, minutes * 60000);

//   backTime();
// });

// inputSeconds.addEventListener("keypress", (e) => {
//   var name = e.key;
//   if (name === "Enter") {
//     secondsSpan.innerText = inputSeconds.value + "s";
//   }
// });

// inputMinutes.addEventListener("keypress", (e) => {
//   var name = e.key;
//   if (name === "Enter") {
//     minutesSpan.innerText = `${inputMinutes.value}min :`;
//   }
// });
// inputHours.addEventListener("keypress", (e) => {
//   var name = e.key;
//   if (name === "Enter") {
//     hoursSpan.innerText = `${inputHours.value}h :`;
//   }
// });

// // -------------clock
// let clock = document.querySelector("#watch");
// let secondsClock = document.querySelector("#seconds");
// let minutesClock = document.querySelector("#minutes");
// let hoursClock = document.querySelector("#hours");

// function clockRunner() {
//   let d = new Date();
//   let hour = d.getHours();
//   let minute = d.getMinutes();
//   let second = d.getSeconds();

//   if (hour < 10) {
//     hour = "0" + hour;
//   }
//   if (minute < 10) {
//     minute = "0" + minute;
//   }
//   if (second < 10) {
//     second = "0" + second;
//   }
//   clock.innerHTML = `
//   <h3>Clock</h3>
//   <span id="seconds">${hour}h</span>
//   <span id="minutes">${minute}min</span>
//   <span id="hours">${second}s</span>
//   `;
//   setTimeout(clockRunner, 1000);
// }
// clockRunner();
