"use strict";

// Select elements
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnsOpenModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");

// Function to show the tooltip
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// Function to close the tooltip

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Event listener to show the tooltip when clicking on buttons
for (let ele of btnsOpenModal) {
  ele.addEventListener("click", openModal);
}

// Event listener to close the tooltip when clicking on button X

btnCloseModal.addEventListener("click", closeModal);

// Event listener to close the tooltip when clicking on window outside the tooltip

overlay.addEventListener("click", closeModal);

// Event listener to close the tooltip when pressing Escape key

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains(".hidden")) {
    closeModal();
  }
});
