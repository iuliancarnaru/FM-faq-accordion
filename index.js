const paragraphs = document.querySelectorAll(".question-content");
const questionsContainer = document.querySelector(".accordion");
const images = document.querySelectorAll(".question-img");

questionsContainer.addEventListener("click", (e) => {
  const elClicked = e.target.closest(".question");
  const tabNr = elClicked.dataset.tab;

  if (!elClicked) return;

  paragraphs.forEach((p) => p.classList.add("hidden"));
  images.forEach((img) => {
    img.src = `./assets/images/icon-plus.svg`;
  });

  const img = document.querySelector(`.question-img-${tabNr}`);
  img.src = `./assets/images/icon-minus.svg`;

  document
    .querySelector(`.question-content-${tabNr}`)
    .classList.remove("hidden");
});
