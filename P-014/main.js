const darkModeToggle = document.getElementById("dark-mode");

function applyDarkMode(isEnabled) {
  if (isEnabled) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}

darkModeToggle.addEventListener("change", function () {
  const isChecked = darkModeToggle.checked;
  applyDarkMode(isChecked);
});


