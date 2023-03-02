// let btnClick = document.querySelector("#block")

// btnClick.addEventListener('click', (e) => {
//   if(e.target.id === 'btnclick'){
//     alert('button')
//   } else{
//     alert('block')
//   }
// })

let notesHtml = document.querySelector("#notes");

let notesStore = [
  {
    text: "Text 1",
  },
  {
    text: "Text 2",
  },
];

let notes = [];
let generateNotes = () => {
  notesStore.map((el, index) => {
    if (!el.status) {
      notesHtml.innerHTML += `
      <div class='note' id='note${index}'>
      ${el.text}
      <button class='btnDelete' id='btnDelete'>Delete</button>
      </div>
      `;
    }
  });
};

generateNotes();
for (let i = 0; i <= notesStore.length - 1; i++) {
  // if (!notesStore[i].statusDelete) {
  //   notes[i] = document.querySelector(`#note${i}`);
  //   notes[i].addEventListener("click", (el) => {
  //     console.log(el.target);
  //   });
  // }
  notes[i] = document.querySelector(`#note${i}`);
  notes[i].addEventListener("click", (event) => {
    console.log(event.target);
    if(event.target.id === 'btnDelete'){
      notesStore[i].status = 'delete'
      notesHtml.innerHTML = ''
      generateNotes()
    }
  });
}

// let btnDelete = documnet.querySelector(`#btnDelete`);
