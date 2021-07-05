"use strict";

//* Selecting Elements
const closeReservationBtn = document.querySelector(".close--reservation__btn");
const openReservationBtn = document.querySelectorAll(".reservation-vid");
const reservationModal = document.querySelector(
  ".reservation--modal__container"
);

const toggleReservationModal = function () {
  reservationModal.classList.toggle("reservation-close");
};

//* Event Handler
openReservationBtn.forEach(function (el) {
  el.addEventListener("click", toggleReservationModal);
});
closeReservationBtn.addEventListener("click", toggleReservationModal);
