const themeKey = "theme";

window.onload = function () {
    let body = document.body; // hanya ada satu
    let tombol = document.getElementById("toggle-mode");

    function setMode(mode) {
        if (mode === "dark") {
            body.classList.add("dark");
            localStorage.setItem(themeKey, "dark");
        } else {
            body.classList.remove("dark");
            localStorage.setItem(themeKey, "light");
        }
    }

    tombol.addEventListener("click", function () {
        const isDark = body.classList.contains("dark");

        if (isDark) {
            setMode("light");
        } else {
            setMode("dark");
        }
    });

    const mode = localStorage.getItem(themeKey);
    if (mode === "dark") {
        setMode("dark");
    } else {
        setMode("light");
    }
};

