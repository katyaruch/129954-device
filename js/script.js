var linkwrite = document.querySelector(".link-write");
var popupwrite = document.querySelector(".modal-write-us");
var closewrite = popupwrite.querySelector(".modal-close");

var linkmap = document.querySelector(".contact-map");
var popupmap = document.querySelector(".modal-map");
var closemap = popupmap.querySelector(".modal-close");

linkwrite.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupwrite.classList.remove("hidden");
});

closewrite.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupwrite.classList.add("hidden");
});

linkmap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupmap.classList.remove("hidden");
});

closemap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupmap.classList.add("hidden");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    popupmap.classList.add("hidden");
    popupwrite.classList.add("hidden");
  }
});