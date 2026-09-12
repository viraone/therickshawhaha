const dialog = document.querySelector("#signup-dialog");
const form = document.querySelector("#signup-form");
const formNote = document.querySelector(".form-note");

function nextWeekday(from, weekday) {
  const date = new Date(from);
  date.setHours(12, 0, 0, 0);
  date.setDate(date.getDate() + ((weekday - date.getDay() + 7) % 7));
  return date;
}

function nextFirstSunday(from) {
  const date = new Date(from.getFullYear(), from.getMonth(), 1, 12);
  date.setDate(1 + ((7 - date.getDay()) % 7));

  if (date < from) {
    date.setMonth(date.getMonth() + 1, 1);
    date.setDate(1 + ((7 - date.getDay()) % 7));
  }

  return date;
}

function shortMonth(date) {
  return date.toLocaleDateString("en-US", { month: "short" }).toUpperCase();
}

function fullDate(date) {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

const today = new Date();
const firstFriday = nextWeekday(today, 5);

for (let index = 0; index < 3; index += 1) {
  const showDate = new Date(firstFriday);
  showDate.setDate(showDate.getDate() + index * 7);

  const signupOpens = new Date(showDate);
  signupOpens.setDate(signupOpens.getDate() - 7);

  const signupCloses = new Date(showDate);
  signupCloses.setDate(signupCloses.getDate() - 1);

  document.querySelector(`#friday-day-${index}`).textContent = String(
    showDate.getDate(),
  ).padStart(2, "0");
  document.querySelector(`#friday-month-${index}`).textContent = shortMonth(showDate);
  document.querySelector(`#friday-full-${index}`).textContent =
    `${fullDate(showDate)} · 7–9 PM`;
  document.querySelector(`#signup-window-${index}`).textContent =
    `Signup: ${shortMonth(signupOpens)} ${signupOpens.getDate()} at night–` +
    `${shortMonth(signupCloses)} ${signupCloses.getDate()} at night`;
}

const firstSunday = nextFirstSunday(today);
document.querySelector("#sunday-day").textContent = String(
  firstSunday.getDate(),
).padStart(2, "0");
document.querySelector("#sunday-month").textContent = shortMonth(firstSunday);
document.querySelector("#sunday-full").textContent =
  `${fullDate(firstSunday)} · 7–9 PM`;

document.querySelectorAll("[data-open-signup]").forEach((button) => {
  button.addEventListener("click", () => {
    dialog.showModal();
  });
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
    "Prototype only — connect this form to the producer’s current Friday signup list.";
});
