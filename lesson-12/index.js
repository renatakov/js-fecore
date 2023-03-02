// const options = {
//   threshold: 0.5,
// };

// let arrNav = document.querySelectorAll('a')


// const observer = new IntersectionObserver((entires, obs) => {
//   entires.forEach((entry) => {
//     if (entry.isIntersecting) {
//       // console.log(entry.target.id)
//       if(entry.target.id === 'article-1'){
//         arrNav.forEach(navItem=>{
//           if(navItem.id != 0){
//             navItem.style.backgroundColor ='rgb(101, 70, 70)'
//           }
//         })
//         arrNav[0].style.backgroundColor = 'red'
//       }
//       if(entry.target.id === 'article-2'){
//         arrNav.forEach(navItem=>{
//           if(navItem.id != 1){
//             navItem.style.backgroundColor ='rgb(101, 70, 70)'
//           }
//         })
//         arrNav[1].style.backgroundColor = 'green'

//       }
//       if(entry.target.id === 'article-3'){
//         arrNav.forEach(navItem=>{
//           if(navItem.id != 2){
//             navItem.style.backgroundColor ='rgb(101, 70, 70)'
//           }
//         })
//         arrNav[2].style.backgroundColor = 'blue'
//       }

//     //  entry.target.src = 'https://cdn2.steamgriddb.com/file/sgdb-cdn/logo_thumb/e13748298cfb23c19fdfd134a2221e7b.png'
//       // entry.target.style.width = '200px'
//       // entry.target.style.height = '200px'
//       // entry.target.style.marginBottom = '200px'

//     // } else{
//     //   // entry.target.src = 'https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg'

//     }
//   });
// }, options);

// let arrArticle = document.querySelectorAll("article");
// arrArticle.forEach((block) => {
//   observer.observe(block);
// });
