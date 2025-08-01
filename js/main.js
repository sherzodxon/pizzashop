const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".header__nav-wrapper");
const gradient = document.querySelector(".header__gradient");

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("hamburger--close");
    nav.classList.toggle("header__nav-wrapper--open");
    gradient.classList.toggle("header__gradient--active")
})

gradient.addEventListener('click',function(){
    hamburger.classList.remove("hamburger--close");
    nav.classList.remove("header__nav-wrapper--open");
    gradient.classList.remove("header__gradient--active")
})
const btn1 = document.getElementById("button1");
const btn2 = document.getElementById("button2");

btn1.addEventListener("click", function () {
    btn1.classList.add("link");
    btn2.classList.remove("link");
})

btn2.addEventListener("click", function () {
    btn2.classList.add("link");
    btn1.classList.remove("link");
})