// // Original
// function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
//     if (localStorageTheme !== null) {
//         localStorageTheme = localStorageTheme;
//     } else if (systemSettingDark.matches) {
//         localStorageTheme = "dark";
//     } else {
//         localStorageTheme = "light";
//     }

//     // Update the theme attribute on HTML to switch theme in CSS
//     document.querySelector("html").setAttribute("data-theme", localStorageTheme);

//     // Update the state of the toggle input
//     const toggleInput = document.getElementById("toggle");
//     if (toggleInput) {
//         toggleInput.checked = localStorageTheme === "dark";
//     }

//     // Update in local storage
//     localStorage.setItem("theme", localStorageTheme);

//     return localStorageTheme;
// }

// const localStorageTheme = localStorage.getItem("theme");
// const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

// let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });


// Modificación para que el input toggle switch cargue adecuadamente conforme a las preferencias del sistema del usuario
// ----------------------------
document.addEventListener("DOMContentLoaded", () => {
    const localStorageTheme = localStorage.getItem("theme");
    const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

    // Determine the theme
    const initialTheme = localStorageTheme !== null
        ? localStorageTheme
        : systemSettingDark.matches
        ? "dark"
        : "light";

    // Update the toggle state early
    const toggleInput = document.getElementById("toggle");
    if (toggleInput) {
        toggleInput.checked = initialTheme === "dark";
    } else {
        toggleInput.checked = initialTheme === "light";
    }

    // Update the theme attribute
    document.querySelector("html").setAttribute("data-theme", initialTheme);

    // Update localStorage
    localStorage.setItem("theme", initialTheme);
});
// ---------------------------




// call this function when clicking the inoput checkbox (toggle)
//  function for checking if the input (toggle) is checked or not
function validate() {
    let newTheme = "dark";
    var isChecked = document.getElementById("toggle").checked;
    // if checked set theme to dark (don't change newTheme value)
    if (isChecked) {
        // setTheme('dark');
        // update theme attribute on HTML to switch theme in CSS
        document.querySelector("html").setAttribute("data-theme", newTheme);
        // update in local storage
        localStorage.setItem("theme", newTheme);
        // update the currentThemeSetting in memory
        currentThemeSetting = newTheme;
    // if unchecked set theme to light
    } else {
        // setTheme('light');
        newTheme = "light";
        // update theme attribute on HTML to switch theme in CSS
        document.querySelector("html").setAttribute("data-theme", newTheme);
        // update in local storage
        localStorage.setItem("theme", newTheme);
        // update the currentThemeSetting in memory
        currentThemeSetting = newTheme;
    }
}

