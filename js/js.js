let menuHeader = document.querySelector(".header-menu");
let menu = document.querySelector(".nav-list");

menuHeader.addEventListener("click", function () {
  menu.classList.toggle("active");
});

let okko = document.querySelector(".okko");
let slider = document.querySelector(".slider");
okko.addEventListener("click", function () {
  if (slider.style.display == "none") {
    slider.style.display = "block";
  } else {
    slider.style.display = "none";
  }
});

// Находим кнопку с вопросом
service = document.querySelector(".service");
// Добавляем слушатель на клик
service.addEventListener("click", ({ target }) => {
  // Меняем состояние кнопки
  target.classList.toggle("is-active");
});
