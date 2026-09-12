const dialog = document.querySelector("#signup-dialog");
const form = document.querySelector("#signup-form");
const formNote = document.querySelector(".form-note");
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-nav");

function getNextFriday(from = new Date()) {
  const date = new Date(from);
  date.setDate(date.getDate() + ((5 - date.getDay() + 7) % 7));
  return date;
}

const nextFriday = getNextFriday();
document.querySelector("#next-date").textContent = nextFriday
  .toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  })
  .toUpperCase()
  .replace(",", " ·");

menuButton.addEventListener("click", () => {
  const expanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!expanded));
  navigation.classList.toggle("open", !expanded);
});

navigation.addEventListener("click", () => {
  navigation.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
});

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
