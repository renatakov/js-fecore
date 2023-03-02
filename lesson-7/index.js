// Події у DOM

// let welcomeBlock = document.getElementById("welcome-block");
// let inputName = document.getElementById("inputName");

// welcomeBlock.innerHTML = `<h1>Welcome, stranger</h1>`;

// let changeInput = () => {
//   if (inputName.value !== 0) {
//     welcomeBlock.innerHTML = `<h1>Welcome, ${inputName.value}!</h1>`;
//   } else {
//     welcomeBlock.innerHTML = `<h1>Welcome, stranger</h1>`;
//   }
// };

// inputName.onchange = changeInput;

// let inputColor = document.getElementById("inputColor");

// let changeBodyColor = () => {
//   document.getElementById("body").style.backgroundColor = inputColor.value;
// };
// inputColor.onchange = changeBodyColor;

// let changeTheme = document.getElementById("changeTheme");

// let flag = 0;

// let changingTheme = () => {
//   if (flag === 0) {
//     document.getElementById("body").style.backgroundColor = "#1f1b1b";
//     document.getElementById("body").style.color = "#ffffff";
//     flag = 1;
//   } else {
//     document.getElementById("body").style.backgroundColor = "#ffff";
//     document.getElementById("body").style.color = "#1f1b1b";
//     flag = 0;
//   }
// };

// changeTheme.onclick = changingTheme;

// ---------------
// querySekector()
// ----------------

// .block - class
// #block - id
// div - tag

// console.log(document.querySelector('div'))
// document.querySelector('div').innerHTML = '<h1>Title</h1>'

// -----------------
// querySelectorAll()
// ------------------

// console.log(document.querySelectorAll('div'))
// document.querySelectorAll('div')[1].innerHTML = `<h1>Title</h1>`

// document.querySelectorAll('li')[0].style.color = 'red';
// document.querySelectorAll('li')[1].style.color = 'green'
// document.querySelectorAll('li')[2].style.color = 'blue'
// document.querySelectorAll('li')[3].style.color = 'yellow'

// console.log(document.querySelectorAll('ul li'));

// -----------------
// addEventListener()
// let discriptionBlock = document.querySelector('.description')

// let click = () => {
// discriptionBlock.innerHTML = `
//   <p>code for long</p>
// `
// }

// let img = document.querySelector('img');
// img.addEventListener('click', click)
// // console.log(img)
// // img.addEventListener('click', ()=>{
// //   alert('hello')
// })
// let inputName = document.querySelector(".name");
// let keyK = document.querySelector(".keyK");

// inputName.addEventListener("keydown", (e) => {
//   if (e.key === "k") {
//     keyK.style.backgroundColor = "yellow";
//   }
// });

// inputName.addEventListener('keyup', (e) => {
//   if(e.key === 'k'){
//     keyK.style.backgroundColor = 'blue'
//   }
// })

// keyK.addEventListener("click", () => {
//   inputName.value += "k";
// });

// -------------------------
// RANDOM COLOR GENERATOR

// let btn = document.querySelector("button");

// let btnClick = () => {
//   btn.style.background =
//     "#" + Math.floor(Math.random() * 16777215).toString(16);
// };
// btn.addEventListener("click", btnClick);

// NOTES

let btnsDelete = [];
let btnsChange = [];

let notesHtml = document.querySelector("#notes");
let btnPost = document.querySelector("#btnPost");
let inputSearch = document.querySelector("#inputSearch");
let inputs = {
  title: document.querySelector("#inputTitle"),
  text: document.querySelector("#inputText"),
  color: document.querySelector("#inputColor"),
  getInfo() {
    if (this.title.value.length != 0 && this.text.value.length != 0) {
      return {
        title: this.title.value,
        text: this.text.value,
        color: this.color.value,
      };
    } else {
      return null;
    }
  },
};
let statusWindow = "open notes";
let notesStore = [
  {
    id: 1,
    title: "Title 1",
    text: "Зробити дз",
    color: "#803939",
    timeCreated: {
      hours: 10,
      minutes: 20,
      seconds: 25,
    },
  },
];

let genereteNotes = (noteStore = notesStore) => {
  notesHtml.innerHTML = null;
  console.log(notesStore);
  notesStore.map((el, index) => {
    if (!el.statusDelete) {
      notesHtml.innerHTML += `
      <div class="noteBlock" id="note${index}" style="background:${el.color}">
      <h2>${el.title}</h2>
      <p>${el.text}</p>
      <p id='noteText${index}' class='time'>${el.timeCreated.hours}:${el.timeCreated.minutes}:${el.timeCreated.seconds}</p>
      <button id='btnChange${index}'><img class='icon' alt='change' src='/lesson-7/book-svgrepo-com.svg'>
      </button>
      <button class="btnDelete" id="btnDel${index}">Delete</button>
      </div>
      `;
    }
  });
  for (let i = 0; i <= notesStore.length - 1; i++) {
    if (!notesStore[i].statusDelete) {
      btnsDelete[i] = document.querySelector(`#btnDel${i}`);
      console.log(btnsDelete);
      btnsDelete[i].addEventListener("click", () => {
        notesStore[i].statusDelete = true;
        console.log(notesStore);
      });

      btnsChange[i] = document.querySelector(`#btnChange${i}`);
      btnsChange[i].addEventListener("click", () => {
        document.querySelector(`#noteText${i}`).innerHTML = `
          <textarea id='textarea${i}' placeholder='Write new text'></textarea>
        `;
        btnsChange[
          i
        ].innerHTML = `<button id='btnSave${i}'><img class='icon' alt='change' src='/lesson-7/png-clipart-floppy-disc-computer-icons-iconfinder-desktop-floppy-save-icon-miscellaneous-blue-thumbnail.png'></button>`;
        document.querySelector(`#btnSave${i}`).addEventListener("click", () => {
          let newTxt = document.querySelector(`#textarea${i}`).value;
          if (newTxt.length != 0) {
            notesStore[i].text = newTxt;
            genereteNotes();
          }
        });
      });
    }
  }
};

let getCurrentTime = () => {
  let time = new Date();
  console.log(time);
  return {
    hours: time.getHours(),
    minutes: time.getMinutes(),
    seconds: time.getSeconds(),
  };
};
let checkTimeFormat = (time) => {
  if (time.hours < 10) {
    time.hours = "0" + time.hours;
  }
  if (time.minutes < 10) {
    time.minutes = "0" + time.minutes;
  }
  if (time.seconds < 10) {
    time.seconds = "0" + time.seconds;
  }
  return time;
};

let btnPostClick = () => {
  let timeNow = checkTimeFormat(getCurrentTime());
  // console.log(time)

  // console.log(inputs.color.value);
  if (inputs.getInfo()) {
    notesStore = [
      ...notesStore,
      {
        id: notesStore.length + 1,
        title: inputs.getInfo().title,
        text: inputs.getInfo().text,
        color: inputs.getInfo().color,
        timeCreated: {
          ...timeNow,
        },
      },
    ];
    console.log(notesStore);
    genereteNotes();
    inputs.title.value = "";
    inputs.text.value = "";
  } else {
    alert("Pls, write title or text");
  }
};
genereteNotes();
let genereteNotesSearch = (notes) => {
  console.log(notes);
  notesHtml.innerHTML = null;
  notes.map((el, index) => {
    if (!el.statusDelete) {
      notesHtml.innerHTML += `
      <div class="noteBlock" id="note${index}" style="background:${el.color}">
      <h2>${el.title}</h2>
      <p>${el.text}</p>
      <p id='noteText${index}' class='time'>${el.timeCreated.hours}:${el.timeCreated.minutes}:${el.timeCreated.seconds}</p>
      <button id='btnChange${index}'><img class='icon' alt='change' src='/lesson-7/book-svgrepo-com.svg'>
      </button>
      <button class="btnDelete" id="btnDel${index}">Delete</button>
      </div>
      `;
    }
  });
};

let startSearch = () => {
  if (inputSearch.value.length !== 0) {
    notesHtml.innerHTML = null;
    let noteStoreToSearch = [];
    notesStore.map((el) => {
      if (!el.statusDelete) {
        noteStoreToSearch.push(el.text);
      }
    });
    let resultSearch = searchText(
      inputSearch.value,
      noteStoreToSearch,
      notesStore,
    );
    console.log(resultSearch);
    if (resultSearch.length === 0) {
      noteStoreToSearch = [];
      notesStore.map((el) => {
        if (!el.statusDelete) {
          noteStoreToSearch.push(el.title);
        }
      });
      resultSearch = searchText(
        inputSearch.value,
        noteStoreToSearch,
        notesStore,
      );
      genereteNotesSearch(resultSearch);
      console.log(resultSearch);
    }
  } else {
    genereteNotesSearch(resultSearch);
  }
};

inputSearch.addEventListener("change", startSearch);
btnPost.addEventListener("click", btnPostClick);
console.log(str2);
