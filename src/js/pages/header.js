let burger = document.querySelector(".header__burger");
let menu = document.querySelector(".header__nav");

burger.onclick = function () {
  burger.classList.toggle("header__burger_active");
  menu.classList.toggle("header__nav_active");
};
