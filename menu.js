const menuBtn = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
menu.classList.toggle("show");
menuBtn.classList.toggle("active");
});