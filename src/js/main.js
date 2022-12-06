let all = document.querySelector(".ourProject-buttons__btn_all");
let comers = document.querySelector(".ourProject-buttons__btn_comers");
let lived = document.querySelector(".ourProject-buttons__btn_lived");

let ourProjectCard = document.querySelectorAll(".ourProject__card");
let ourProjectCardComers = document.querySelectorAll(
  ".ourProject__card_comers "
);
let ourProjectCardLived = document.querySelectorAll(".ourProject__card_lived ");

all.onclick = function () {
  all.classList.add("ourProject-buttons_active");
  comers.classList.remove("ourProject-buttons_active");
  lived.classList.remove("ourProject-buttons_active");
  ourProjectCard.forEach(function (cards) {
    cards.style.display = "block";
  });
};

comers.onclick = function () {
  comers.classList.add("ourProject-buttons_active");
  all.classList.remove("ourProject-buttons_active");
  lived.classList.remove("ourProject-buttons_active");
  ourProjectCardLived.forEach(function (cards) {
    cards.style.display = "none";
  });
  ourProjectCardComers.forEach(function (cards) {
    cards.style.display = "block";
  });
};

lived.onclick = function () {
  lived.classList.add("ourProject-buttons_active");
  comers.classList.remove("ourProject-buttons_active");
  all.classList.remove("ourProject-buttons_active");

  ourProjectCardComers.forEach(function (cards) {
    cards.style.display = "none";
  });
  ourProjectCardLived.forEach(function (cards) {
    cards.style.display = "block";
  });
};
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});

let btn = document.querySelector(".home-btn");
let form = document.querySelector(".form");
btn.addEventListener("click", function () {
  form.style.display = "flex";
});

form.addEventListener("click", function (e) {
  if (e.target.className === "form") {
    form.style.display = "none";
  }
});

form.addEventListener("click", function (e) {
  if (e.target.className === "form-list__close") {
    form.style.display = "none";
  }
});
