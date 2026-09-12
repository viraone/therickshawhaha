const showMonth = document.querySelector("#show-month");
const showDay = document.querySelector("#show-day");
const dialog = document.querySelector("#signup-dialog");
const form = document.querySelector("#signup-form");
const formNote = document.querySelector(".form-note");

function getNextFriday(from = new Date()) {
  const date = new Date(from);
  const daysUntilFriday = (5 - date.getDay() + 7) % 7;
  date.setDate(date.getDate() + daysUntilFriday);
  return date;
}

const nextFriday = getNextFriday();
showMonth.textContent = nextFriday
  .toLocaleDateString("en-US", { month: "short" })
  .toUpperCase();
showDay.textContent = nextFriday.getDate();

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
    "Prototype only — connect this button to Slotted or your preferred signup form.";
});
