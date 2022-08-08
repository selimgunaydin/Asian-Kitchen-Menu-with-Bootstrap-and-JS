import { menu } from "./data.js";

const buttonArea = document.querySelector(".btn-container");
const menuArea = document.querySelector(".section-center");

const categories = menu.reduce(
  (values, items) => {
    if (!values.includes(items.category)) {
      values.push(items.category);
    }
    return values;
  },
  ["ALL"]
);

const btnCategories = categories
  .map((category) => {
    let buttonDOM = document.createElement("div");
    buttonDOM.innerText = category;
    buttonDOM.setAttribute("type", "button");
    buttonDOM.setAttribute("data-id", category);
    buttonDOM.classList.add("btn", "btn-outline-danger", "btn-item");

    return buttonDOM.outerHTML;
  })
  .join("");

buttonArea.innerHTML = btnCategories;

const allBtn = document.querySelectorAll(".btn-item");

allBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const btnCategory = e.currentTarget.dataset.id;

    const menuCategoryItem = menu.filter((item) => {
      if (item.category == btnCategory) {
        return item;
      }
    });
    if (btnCategory === "ALL") {
      menuList(menu);
    } else {
      menuList(menuCategoryItem);
    }
  });
});

const menuList = (menuItems) => {
  const menuDisplay = menuItems
    .map((item) => {
      let categoryDOM = document.createElement("div");
      categoryDOM.classList.add("menu-items", "col-lg-6", "col-sm-12");

      let imgDOM = document.createElement("img");
      imgDOM.setAttribute("src", item.img);
      imgDOM.setAttribute("alt", item.title);
      imgDOM.classList.add("photo");

      let infoDOM = document.createElement("div");
      infoDOM.classList.add("menu-info");

      let menuTitleDOM = document.createElement("div");
      menuTitleDOM.classList.add("menu-title");

      let titleDOM = document.createElement("h4");
      titleDOM.innerHTML = item.title;

      let priceDOM = document.createElement("h4");
      priceDOM.innerHTML = item.price;

      let menuText = document.createElement("div");
      menuText.classList.add("menu-text");
      menuText.innerHTML = item.desc;

      categoryDOM.appendChild(imgDOM);
      categoryDOM.appendChild(infoDOM);
      infoDOM.appendChild(menuTitleDOM);
      menuTitleDOM.appendChild(titleDOM);
      menuTitleDOM.appendChild(priceDOM);
      infoDOM.appendChild(menuText);

      return categoryDOM.outerHTML;
    })
    .join("");

  menuArea.innerHTML = menuDisplay;
};

menuList(menu);
