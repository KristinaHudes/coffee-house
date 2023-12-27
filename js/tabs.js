"use strict";

import productsMenu from "../json/products.json" assert { type: "json" };

const tabsEl = document.querySelectorAll(".tab");
const tabBoxEl = document.querySelector(".tab-box");
const cardBoxEl = document.querySelector(".card-box");
const btnLoadEl = document.querySelector(".btn__round--load");

function toggleButton() {
  if (screen.width <= 768) {
    btnLoadEl.style.display = "block";
  } else {
    btnLoadEl.style.display = "none";
  }
}

function checkChildrenLength() {
  if (cardBoxEl.children.length < 5) {
    btnLoadEl.style.display = "none";
  }
}

function showCards() {
  for (const child of cardBoxEl.children) {
    child.style.display = "block";
  }
  btnLoadEl.style.display = "none";
}

tabBoxEl.addEventListener("click", (e) => {
  let htmlCode = ``;
  const tabClicked = e.target.closest(".tab");
  const tabText = tabClicked.innerText.replace(
    tabClicked.innerText[0],
    tabClicked.innerText[0].toLowerCase()
  );

  if (!tabClicked) return;

  tabsEl.forEach((tab) => {
    tab.classList.remove("tab--active");
  });
  tabClicked.classList.add("tab--active");

  const categorySelected = productsMenu.filter(
    (cat) => cat.category === `${tabText}`
  );

  categorySelected.forEach((category = "coffee") => {
    htmlCode += `
            <div class="card">
              <figure class="card__img-item">
                <img
                  src="${category.url}"
                  alt="${category.name}"
                  class="card__img"
                />
              </figure>

              <div class="card__text-box">
                <p class="card__name">${category.name}</p>
                <p class="card__description">
                  ${category.description}
                </p>
                <p class="card__price">$${category.price}</p>
              </div>
            </div>
  `;
  });

  cardBoxEl.innerHTML = htmlCode;
  toggleButton();
  checkChildrenLength();
});

if (btnLoadEl) btnLoadEl.addEventListener("click", showCards);
window.addEventListener("resize", toggleButton);
window.addEventListener("resize", checkChildrenLength);
