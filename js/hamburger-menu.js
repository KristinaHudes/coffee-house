"use strict";

const btnMenuEl = document.querySelector(".btn__menu");
const navBoxEl = document.querySelector(".nav-box");
const navLinksEl = document.querySelectorAll(".nav__link");
const menuLinkEl = document.querySelector(".menu__link");

function hideMenu() {
  if (btnMenuEl.classList.contains("btn__menu--active")) {
    document.body.classList.remove("body-fix");
    btnMenuEl.classList.remove("btn__menu--active");
    navBoxEl.classList.remove("nav-box--active");
  }
}

function handleMobileNav() {
  if (btnMenuEl) {
    document.body.classList.toggle("body-fix");
    btnMenuEl.classList.toggle("btn__menu--active");
    navBoxEl.classList.toggle("nav-box--active");
  }
}

if (navLinksEl.length > 0) {
  navLinksEl.forEach((link) => {
    link.addEventListener("click", hideMenu);
  });
}

if (btnMenuEl) {
  btnMenuEl.addEventListener("click", handleMobileNav);
}

menuLinkEl.addEventListener("click", handleMobileNav);
