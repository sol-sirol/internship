const buttonDaySelection = document.querySelector(".header__button_drop_big");
const daySelection = document.querySelector(".day-selection");
const buttonStatusSelection = document.querySelector(
  ".header__button_drop_small"
);
const statusSelection = document.querySelector(".status-selection");

buttonDaySelection.addEventListener("click", (evt) => {
  if (!evt.target.closest(".day-selection")) {
    daySelection.classList.toggle("_active_drop");
  }
});
buttonStatusSelection.addEventListener("click", (evt) => {
  if (!evt.target.closest(".status-selection")) {
    statusSelection.classList.toggle("_active_drop");
  }
});
