const headerEl = document.getElementById("header");
const headerWrapper = document.getElementById("header__wrapper");
const hamburger = document.getElementById("hamburger");
const headerCurtain = document.getElementById("header__curtain");
const navList = document.getElementById("navigation__list");

document.addEventListener("click", (event) => {
  if (hamburger.contains(event.target)) {
    headerEl.classList.toggle("is-open");
    headerWrapper.classList.toggle("is-open");
  } else if (
    headerCurtain.contains(event.target) ||
    navList.contains(event.target)
  ) {
    headerEl.classList.remove("is-open");
    headerWrapper.classList.remove("is-open");
  }
});

// NAVIGATION
const navItems = document.querySelectorAll(".navigation__item");

const addNavListener = (navItem) => {
  document.addEventListener("click", (event) => {
    if (!navItem.contains(event.target) && event.target !== navItem) {
      navItem.classList.remove("active");
    } else {
      navItem.classList.add("active");
    }
  });
};

navItems.forEach(addNavListener);

const swiperPortfolio = new Swiper("#swiperPortfolio", {
  loop: true,

  pagination: {
    el: ".swiper__pagination",
    clickable: true,
    bulletClass: "pagination-bullet",
    bulletActiveClass: "pagination-bullet-active",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const navLabels = [];
navItems.forEach((navItem) => {
  const textContent = navItem.textContent;
  navLabels.push(textContent);
});

const swiperMain = new Swiper("#swiperMain", {
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  direction: "vertical",
  pagination: {
    el: "#navigation__list",
    clickable: true,
    type: "bullets",
    bulletClass: "navigation__item",
    bulletActiveClass: "active",
    renderBullet: function (index, className) {
      return '<li class="' + className + '">' + navLabels[index] + "</li>";
    },
  },
});

// SECTION SCROLLING

// const sectionList = document.querySelectorAll(".section");
// const mainContainer = document.getElementById("main__container");

// let lastScroll = 0;
// let currentSectionIndex = 0;
// let canScroll = true;

// // const scrollDown = () => {
// //   if (!canScroll) {
// //     return;
// //   }
// //   mainContainer.style.transform =
// //     "translateY(" +
// //     (100 / sectionList.length) * (currentSectionIndex + 1) +
// //     "%)";

// //   currentSectionIndex++;

// //   canScroll = !canScroll;

// //   setInterval(() => {
// //     canScroll = !canScroll;
// //   }, 1000);
// // };

// const scrollToSection = (sectionIndex) => {
//   sectionList[sectionIndex].scrollIntoView({ behavior: "smooth" });
//   console.log(sectionList[sectionIndex]);
// };

// document.addEventListener("scroll", () => {
//   if (!canScroll) {
//     return;
//   }

//   let currentScroll = window.scrollY;

//   if (currentScroll > lastScroll) {
//     if (currentSectionIndex < sectionList.length - 1) {
//       currentSectionIndex++;
//       scrollToSection(currentSectionIndex);
//     }
//   } else {
//     if (currentSectionIndex > 0) {
//       currentSectionIndex--;
//       scrollToSection(currentSectionIndex);
//     }
//   }

//   canScroll = false;

//   lastScroll = currentScroll;

//   setTimeout(() => {
//     canScroll = true;
//     console.log("funguje");
//   }, 1000);
// });

// SWIPER

// import Swiper JS
// import Swiper from "../node_modules/swiper";
// import Swiper styles
// import "../node_modules/swiper/css";
