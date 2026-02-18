let isDarkTheme = true;

function intiCopyright() {
  const year = new Date().getFullYear();

  const footer = document.createElement("footer");
  footer.textContent = `© Copyright ${year}, Carmen Chan`;
  document.querySelector("main").appendChild(footer);
}

function initTheme() {
  const theme = localStorage.getItem("theme");
  if (theme !== null && (theme === "light" || theme === "dark")) {
    changeTheme(theme === "dark");
  } else {
    const matchDarkTheme =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    changeTheme(matchDarkTheme);
  }
}

function changeTheme(isDark = true) {
  isDarkTheme = isDark;
  const darkCSS = document.getElementById("dark-css");
  const lightCSS = document.getElementById("light-css");
  const themeBtn = document.querySelector(".app-nav > .btn");

  if (isDark) {
    darkCSS.removeAttribute("disabled");
    lightCSS.setAttribute("disabled", true);
    themeBtn.classList.remove("light");
    themeBtn.classList.add("dark");
  } else {
    lightCSS.removeAttribute("disabled");
    darkCSS.setAttribute("disabled", true);
    themeBtn.classList.add("light");
    themeBtn.classList.remove("dark");
  }

  localStorage.setItem("theme", isDark ? "dark" : "light");
}

window.addEventListener("load", function () {
  initTheme();
});

window.addEventListener("DOMContentLoaded", function () {
  intiCopyright();

  this.document
    .querySelector(".btn.change-theme-btn")
    .addEventListener("click", function () {
      changeTheme(!isDarkTheme);
    });
});
