const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".header__nav-wrapper");

hamburger.addEventListener("click",function () {
    hamburger.classList.toggle("hamburger--close")
    nav.classList.toggle("header__nav-wrapper--open")
})