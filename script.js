const themeToggleButton = document.querySelector(".theme_toggle_button_dark");

document.onload = setInitialTheme(localStorage.getItem("theme"));

function setInitialTheme(themeKey) {
  if (themeKey === "light") {
    document.documentElement.classList.add("lightTheme");
    themeToggleButton.classList.toggle("theme_toggle_button_dark");
    themeToggleButton.classList.toggle("theme_toggle_button_light");
  } else {
    document.documentElement.classList.remove("lightTheme");
  }
}
themeToggleButton.addEventListener("click", () => {
  document.documentElement.classList.toggle("lightTheme");
  themeToggleButton.classList.toggle("theme_toggle_button_dark");
  themeToggleButton.classList.toggle("theme_toggle_button_light");

  if (document.documentElement.classList.contains("lightTheme")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
});
