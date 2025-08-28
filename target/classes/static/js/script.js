console.log("Script loaded");

document.addEventListener("DOMContentLoaded", () => {
  // Get and apply the theme as soon as the DOM is loaded
  let currentTheme = getTheme();
  changePageTheme(currentTheme, ""); // Apply theme immediately

  const changeThemeButton = document.querySelector("#theme_change_button");

  // Handle the case if the button does not exist
  if (!changeThemeButton) {
    console.log("No theme change button found.");
    return;
  }

  // Initial log
  logBodyBackgroundColor("Initial");

  // Add event listener for theme change
  changeThemeButton.addEventListener("click", () => {
    const oldTheme = currentTheme;
    currentTheme = currentTheme === "dark" ? "light" : "dark";

    console.log("Theme changed to:", currentTheme);
    changePageTheme(currentTheme, oldTheme);

    // Log background color after theme change
    logBodyBackgroundColor("After change");
  });
});

// Set the theme in localStorage
function setTheme(theme) {
  localStorage.setItem("theme", theme);
}

// Get the saved theme or default to light
function getTheme() {
  const theme = localStorage.getItem("theme");
  return theme ? theme : "light"; // Default to light if no theme is found
}

// Function to change page theme (add/remove 'dark' class)
function changePageTheme(theme, oldTheme) {
  setTheme(theme);

  const html = document.querySelector("html");
  const body = document.querySelector("body");

  // Add or remove dark classes based on the theme
  if (theme === "dark") {
    html.classList.add("dark");
    body.classList.remove("bg-white");
    body.classList.add("bg-gradient-to-br", "from-gray-900", "via-gray-800", "to-gray-900");
  } else {
    html.classList.remove("dark");
    body.classList.remove("bg-gradient-to-br", "from-gray-900", "via-gray-800", "to-gray-900");
    body.classList.add("bg-white");
  }

  // Button text update logic
  const button = document.querySelector("#theme_change_button");
  if (button) {
    const span = button.querySelector("span");
    if (span) {
      span.textContent = theme === "light" ? "dark" : "light";
    }
  }
}

// Log the body background color for debugging purposes
function logBodyBackgroundColor(prefix = "") {
  const bodyStyles = window.getComputedStyle(document.body);
  console.log(`${prefix} background-color:`, bodyStyles.backgroundColor);
}
