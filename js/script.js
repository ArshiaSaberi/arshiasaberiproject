let swichMode = document.querySelector(".swich-mode");
let HTML = document.documentElement;
let lightMode = document.querySelector(".swich-mode__light");
let darkMode = document.querySelector(".swich-mode__dark");
let headerImg1 = document.querySelector(".header__img1");
let headerImg2 = document.querySelector(".header__img2");
let menuItem = document.querySelectorAll(".menu-des__item");
let headerImg = document.querySelector(".main > section > img");

/*-------------------------- color mode -------------------------------- */
swichMode.addEventListener("click", (e) => {
  e.preventDefault();
  darkMode.classList.toggle("d-n");
  lightMode.classList.toggle("d-n");

  if (lightMode.classList.contains("d-n")) {
    localStorage.setItem("mode", "light");
    HTML.style.setProperty("--color", "var(--c-white)");
    document.body.classList.remove("dark");
  } else {
    localStorage.setItem("mode", "dark");
    HTML.style.setProperty("--color", "var(--c-dark)");
    document.body.classList.add("dark");
  }
  colormode();
});
window.onload = () => {
  let localStoragemode = localStorage.getItem("mode");
  if (localStoragemode === "light") {
    HTML.style.setProperty("--color", "var(--c-white)");
    document.body.classList.remove("dark");
  } else {
    HTML.style.setProperty("--color", "var(--c-dark)");
    darkMode.classList.toggle("d-n");
    lightMode.classList.toggle("d-n");
    document.body.classList.add("dark");
  }
  colormode();
};
function colormode() {
  if (lightMode.classList.contains("d-n")) {
    swichMode.style.setProperty("--color", "var(--c-white)");
    HTML.style.setProperty("color", "var(--c-dark)");
    headerImg.style.setProperty("--color", "var(--c-dark)");
  } else {
    swichMode.style.setProperty("--color", "var(--c-dark-blue)");
    HTML.style.setProperty("color", "var(--c-white)");
    headerImg.style.setProperty("--color", "var(--c-white)");
  }
}
menuItem.forEach((e) => {
  menuItem[0].classList.add("active")
  e.addEventListener("click", () => {
    menuItem.forEach((item) => {
      item.classList.remove("active");
    })
    e.classList.add("active");
  });
  e.addEventListener("mouseover", () => {
    menuItem.forEach((e) => {
      e.classList.remove("menu-des__item--hover");
    });
    e.classList.add("menu-des__item--hover");
  });
  e.addEventListener("mouseout", () => {
    menuItem.forEach((e) => {
      e.classList.remove("menu-des__item--hover");
    });
    e.classList.remove("menu-des__item--hover");
  });
});
/*/////////////////////////////// color mode ///////////////////////////// */

var typed = new Typed(".text-type", {
  strings: ["طراحی وب ", "فرانت اند ", "UX و UI"],
  typeSpeed: 60,
  backSpeed: 90,
  loop: true,
});


/*--------------------------nav-togle-icon ------------------------------ */

let navToggle = document.querySelector(".nav__toggle-icon");
navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("nav__toggle-icon--open");
});




let metmenuItem = document.querySelectorAll(".menu-des__item");
let sectionss = document.querySelectorAll("section");


window.onscroll = () => {
  sectionss.forEach((sec) => {

    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;


    if (top >= offset && top < offset + height) {
      let id = sec.getAttribute("id")
      metmenuItem.forEach((links) => {
        links.classList.remove("active");
        document.querySelector(`ul li[data-sec=${id}]`).classList.add("active")
      })

    }
  })
}
