let test = document.querySelector("#test");
let testText = document.querySelector("#testText");

test.addEventListener("click", (e) => {
  if (isStart === true) {
    timeClick = new Date();

    let seconds = timeClick.getSeconds() - timeStartNewGame.getSeconds();
    let milliSeconds =
      timeClick.getMilliseconds() - timeStartNewGame.getMilliseconds();
    testText.innerHTML = `Ваша реакція:  ${seconds}.${milliSeconds}`;
  }
});

let timeStartNewGame = null;
let timeClick = null;
let isStart = false;

let startNewGame = () => {
  test.classList.add("startBlock");
  test.classList.remove("startTest");
  console.log(test.classList);
  startTest();
};

let startTest = () => {
  let time = Math.random() * (6 - 1) + 1;
  time = Math.floor(time * 1000);
  setTimeout(() => {
    isStart = true;

    timeStartNewGame = new Date();
    test.classList.remove("startBlock");
    test.classList.add("startTest");

    let timeEnd = Math.random() * (3 - 1) + 1;
    timeEnd = Math.floor(timeEnd * 1000);
    setTimeout(() => {
      isStart = false;
      startNewGame();
    }, timeEnd);
  }, time);
  testText.innerHTML = "";
};

startTest();
startNewGame();
