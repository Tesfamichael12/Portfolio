let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");
let carousel = document.querySelector(".carousel");
let listHTML = document.querySelector(".carousel .list");
let seeMoreButtons = document.querySelectorAll(".seeMore");
let backButton = document.getElementById("back");

let autoScrollInterval = 4000;
let autoScrollTimeout;
let autoScroll;

const startAutoScroll = (interval) => {
  clearInterval(autoScroll);
  autoScroll = setInterval(() => {
    showSlider("next");
  }, interval);
};

const pauseAutoScroll = () => {
  clearInterval(autoScroll);
};

nextButton.onclick = function () {
  showSlider("next");
  startAutoScroll(10000); // Set to 10 seconds after button click
};
prevButton.onclick = function () {
  showSlider("prev");
  startAutoScroll(10000); // Set to 10 seconds after button click
};

let unAcceppClick;
const showSlider = (type) => {
  nextButton.classList.add("disabled");
  prevButton.classList.add("disabled");

  carousel.classList.remove("next", "prev");
  let items = document.querySelectorAll(".carousel .list .item");
  if (type === "next") {
    listHTML.appendChild(items[0]);
    carousel.classList.add("next");
  } else {
    listHTML.prepend(items[items.length - 1]);
    carousel.classList.add("prev");
  }
  clearTimeout(unAcceppClick);
  unAcceppClick = setTimeout(() => {
    nextButton.classList.remove("disabled");
    prevButton.classList.remove("disabled");
  }, 2000);
};

seeMoreButtons.forEach((button) => {
  button.onclick = function () {
    carousel.classList.remove("next", "prev");
    carousel.classList.add("showDetail");
    pauseAutoScroll(); // Pause auto-scroll when "seeMore" is clicked
  };
});

backButton.onclick = function () {
  carousel.classList.remove("showDetail");
  startAutoScroll(autoScrollInterval); // Resume auto-scroll when back button is clicked
};

// Start initial auto-scroll
startAutoScroll(autoScrollInterval);
