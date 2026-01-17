
const themes = [
  {
    name: "light",
    message: "light theme is enabled"
  },
  {
    name: "dark",
    message: "you have choosen dark theme"
  },
  {
    name: "blue",
    message: "Ocean is blue"
  },
  {
    name: "red",
    message: "red is color of heart"
  }
];

const button = document.getElementById("theme-switcher-button");
const menu = document.getElementById("theme-dropdown");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  const isOpen = button.getAttribute("aria-expanded") === "true";
  button.setAttribute("aria-expanded", String(!isOpen));
  menu.hidden = isOpen;
});

menu.addEventListener("click", (e) => {
  if (e.target.getAttribute("role") !== "menuitem") return;

  const selectedTheme = e.target.id;
  const themeName = selectedTheme.replace("theme-", "");
  document.body.className = "";
  document.body.classList.add(`theme-${themeName}`);

  const themeData = themes.find(t => t.name === themeName);

  message.textContent = themeData.message;
});

