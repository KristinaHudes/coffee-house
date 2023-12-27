"use strict";

const btnPrevEl = document.querySelector(".btn__round--left");
const btnNextEl = document.querySelector(".btn__round--right");
const controlsEl = document.querySelectorAll(".control");
const sliderRowEl = document.querySelector(".slider__row");
const elWidth = document.querySelector(".slider__item").clientWidth;
let positionCurrent = 0;
let controlCurrent = 0;
let touchstartX = 0;
let touchendX = 0;

setInterval(() => {
  moveSlideLeft();
}, 5000);

function moveSlideLeft() {
  if (positionCurrent < (controlsEl.length - 1) * elWidth) {
    positionCurrent += elWidth;
    controlCurrent++;
  } else {
    positionCurrent = 0;
    controlCurrent = 0;
  }
  sliderRowEl.style.left = `-${positionCurrent}px`;
  changeControlEl(controlCurrent);
}

function moveSlideRight() {
  if (positionCurrent > 0) {
    positionCurrent -= elWidth;
    controlCurrent--;
  } else {
    positionCurrent = (controlsEl.length - 1) * elWidth;
    controlCurrent = controlsEl.length - 1;
  }
  sliderRowEl.style.left = `-${positionCurrent}px`;
  changeControlEl(controlCurrent);
}

function checkDirection() {
  if (touchendX < touchstartX) moveSlideLeft();
  if (touchendX > touchstartX) moveSlideRight();
}

function changeControlEl(el) {
  controlsEl.forEach((control) => {
    control.classList.remove("control--active");
  });

  controlsEl[el].classList.add("control--active");
}

btnPrevEl.addEventListener("click", moveSlideRight);
btnNextEl.addEventListener("click", moveSlideLeft);
document.addEventListener("touchstart", (e) => {
  touchstartX = e.changedTouches[0].screenX;
});
document.addEventListener("touchend", (e) => {
  touchendX = e.changedTouches[0].screenX;
  checkDirection();
});
controlsEl.forEach((control, i) =>
  control.addEventListener("click", () => {
    positionCurrent = elWidth * i;
    sliderRowEl.style.left = `-${positionCurrent}px`;
    controlCurrent = i;
    changeControlEl(controlCurrent);
  })
);
