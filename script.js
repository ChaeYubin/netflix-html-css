const themeToggleButton = document.querySelector(".theme_toggle_button_dark");

document.onload = setInitialTheme(localStorage.getItem("theme"));

function setInitialTheme(themeKey) {
  if (themeKey === "light") {
    document.documentElement.classList.add("lightTheme");
    classListToggle(); // 처음 로드할 때 dark 클래스로 로드하므로
  } else {
    document.documentElement.classList.remove("lightTheme");
  }
}
themeToggleButton.addEventListener("click", () => {
  document.documentElement.classList.toggle("lightTheme");
  classListToggle();

  if (document.documentElement.classList.contains("lightTheme")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
});

function classListToggle() {
  themeToggleButton.classList.toggle("theme_toggle_button_dark");
  themeToggleButton.classList.toggle("theme_toggle_button_light");
}
