/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /*========== sticky navbar ==========*/
  let header = document.querySelector(".header");

  header.classList.toggle("sticky", window.scrollY > 100);

  /*========== remove menu icon navbar when click navbar link (scroll) ==========*/
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/*========== swiper ==========*/
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*========== dark light mode ==========*/
let darkModeIcon = document.querySelector("#darkMode-icon");

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle("bx-sun");
  document.body.classList.toggle("dark-mode");
};

/*========== scroll reveal ==========*/
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img img", { origin: "left" });
ScrollReveal().reveal(".home-content h3, .home-content p, .about-content", {
  origin: "right",
});

// Name alias
document.addEventListener("DOMContentLoaded", () => {
  const nameTitle = document.getElementById("name-title");
  const originalText = nameTitle.querySelector(".name-text:not(.hidden)");
  const aliasText = nameTitle.querySelector(".name-text.hidden");

  let isHovering = false;
  let intervalId = null;

  function changeText(element, targetContent) {
    let current = element.textContent;
    let target = targetContent.textContent.trim();
    let i = 0;

    clearInterval(intervalId);

    intervalId = setInterval(() => {
      if (i < target.length) {
        if (target[i] === "<") {
          // Skip HTML tags
          let endIndex = target.indexOf(">", i);
          if (endIndex !== -1) {
            i = endIndex + 1;
          } else {
            i++;
          }
        } else {
          current = target.slice(0, i + 1) + current.slice(i + 1);
          element.innerHTML = current;
          i++;
        }
      } else if (current.length > target.length) {
        current = current.slice(0, -1);
        element.innerHTML = current;
      } else {
        clearInterval(intervalId);
      }
    }, 50);
  }

  nameTitle.addEventListener("mouseenter", () => {
    isHovering = true;
    originalText.style.opacity = "0";
    aliasText.style.opacity = "1";
    changeText(originalText, aliasText);
  });

  nameTitle.addEventListener("mouseleave", () => {
    isHovering = false;
    originalText.style.opacity = "1";
    aliasText.style.opacity = "0";
    changeText(originalText, { textContent: "Tesfamichael Tafere" });
  });
});
