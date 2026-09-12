const dialog = document.querySelector("#signup-dialog");
const form = document.querySelector("#signup-form");
const formNote = document.querySelector(".form-note");

document.querySelector("[data-open-signup]").addEventListener("click", () => {
  dialog.showModal();
});

document.querySelector("[data-close-signup]").addEventListener("click", () => {
  dialog.close();
});

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  formNote.textContent =
    "Prototype only — connect this button to the producer’s Slotted signup page.";
});
