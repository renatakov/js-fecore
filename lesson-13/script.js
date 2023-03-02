let progressBar = document.querySelector(".progressBar");

const options = {
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    let currentWidth = 0;
    if (entry.isIntersecting) {
      if (entry.target.id == "1") {
        currentWidth = "20%";
      }
      if (entry.target.id == "2") {
        currentWidth = "40%";
      }
      if (entry.target.id == "3") {
        currentWidth = "60%";
      }
      if (entry.target.id == "4") {
        currentWidth = "80%";
      }
      if (entry.target.id == "5") {
        currentWidth = "100%";
      }
      progressBar.style.width = currentWidth;
    }
  });
}, options);

const articles = document.querySelectorAll("article");
articles.forEach((article) => {
  observer.observe(article);
});
