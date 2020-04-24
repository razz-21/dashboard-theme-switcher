'use strict'

function toggleDarkMode() {
    const isDarkMode = document.getElementById("dark-mode-toggle").checked;
    const bodyEl = document.body;

    if (isDarkMode) {
        bodyEl.classList.replace("light-theme", "dark-theme");
    } else {
        bodyEl.classList.replace("dark-theme", "light-theme");
    }
}