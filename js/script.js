var linkwrite = document.querySelector(".link-write");
var popupwrite = document.querySelector(".modal-write-us");
var closewrite = popupwrite.querySelector(".modal-close");
var form = popupwrite.querySelector("form");
var name = popupwrite.querySelector("[name=name]");
var email = popupwrite.querySelector("[name=e-mail]");
var text = popupwrite.querySelector("[name=text]");

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
  popupwrite.classList.remove("modal-error");
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
    popupwrite.classList.remove("modal-error");
  }
});

form.addEventListener("submit", function (evt) {
  if (!name.value || !email.value || !text.value) {
  evt.preventDefault();
  popupwrite.classList.remove("modal-error");
  popupwrite.offsetWidth = popupwrite.offsetWidth;
  popupwrite.classList.add("modal-error");
  }
});