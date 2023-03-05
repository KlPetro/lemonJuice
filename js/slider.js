// кнопки слайдера
prev = document.querySelector("#prev");
next = document.querySelector("#next");
//картинка слайдера
slideImg = document.querySelector(".slider-img img");

//функція при нажиманні вперед
next.onclick = function () {
  //поточний слайд
  let currentSlide = document.querySelector(
    ".slider .slider-small-img li.active"
  );
  //видалення класу поточному слайду
  currentSlide.classList.remove("active");
  //наступний слайд
  let nextSlide = currentSlide.nextElementSibling;
  //якщо наступний слайд є йому додається клас "активний"
  if (nextSlide) {
    nextSlide.classList.add("active");
    //великому слайду присвоюється срц активного слайду
    slideImg.src = nextSlide.querySelector("img").src;
    //якщо нема наступного слайду, то клас "активний" присвоюється 1 елементу
  } else if (nextSlide == null) {
    let nextSlide = document.querySelector(".first");
    nextSlide.classList.add("active");
    //великому слайду присвоюється срц активного слайду
    slideImg.src = nextSlide.querySelector("img").src;
  }
  //великому слайду присвоюється срц активного слайду
};
//функція при нажиманні назад
prev.onclick = function () {
  //поточний слайд
  let currentSlide = document.querySelector(
    ".slider .slider-small-img li.active"
  );
  //видалення класу поточному слайду
  currentSlide.classList.remove("active");
  //попередній слайд
  let prevSlide = currentSlide.previousElementSibling;
  //якщо попередній слайд є йому додається клас "активний"
  if (prevSlide) {
    prevSlide.classList.add("active");
    //великому слайду присвоюється срц активного слайду
    slideImg.src = prevSlide.querySelector("img").src;
    //якщо нема попереднього слайду, то клас "активний" присвоюється останьому елементу
  } else {
    let prevSlide = document.querySelector(".last");
    prevSlide.classList.add("active");
    //великому слайду присвоюється срц активного слайду
    slideImg.src = prevSlide.querySelector("img").src;
  }
};
//переключення картинки з малої на велику
let small = document.querySelector(".slider-small-img");
small.addEventListener("click", function (event) {
  if (event.target.tagName == "IMG") {
    let currentSlide = document.querySelector(
      ".slider .slider-small-img li.active"
    );
    currentSlide.classList.remove("active");
    currentSlide = event.target.parentNode;
    currentSlide.classList.add("active");
    slideImg.src = event.target.src;
  }
});

/* slider = $(".slider");
$("#prev").on("click", function () {
  let elem = $(".slider .slider-small-img li.active").prev();
  $(".slider .slider-small-img li.active").removeClass("active");

  if (!elem.length) {
    elem = $(".slider .slider-small-img li:last-child");
  }
  elem.addClass("active");
  $(".slider-img img").attr("src", elem.find("img").attr("src"));
});

slider = $(".slider");
$("#next").on("click", function () {
  let elem = $(".slider .slider-small-img li.active").next();
  $(".slider .slider-small-img li.active").removeClass("active");

  if (!elem.length) {
    elem = $(".slider .slider-small-img li");
  }
  elem.addClass("active");
  $(".slider-img img").attr("src", elem.find("img").attr("src"));
});
 */
