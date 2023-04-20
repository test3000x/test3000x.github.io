const hamburgerMenu = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".menu");
const shadow = document.querySelector(".shadow");

function toggleMenu() {
  hamburgerMenu.classList.toggle("active");
  menu.classList.toggle("show");
  shadow.classList.toggle("show");

  if (menu.classList.contains("show")) {
    document.body.classList.add("show-shadow");
  } else {
    document.body.classList.remove("show-shadow");
  }
}

function closeMenu() {
  hamburgerMenu.classList.remove("active");
  menu.classList.remove("show");
  shadow.classList.remove("show");
  document.body.classList.remove("show-shadow");
}

hamburgerMenu.addEventListener("click", toggleMenu);
shadow.addEventListener("click", closeMenu);
