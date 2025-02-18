document.addEventListener("DOMContentLoaded", function () {
    const languageSelector = document.getElementById("languageSelector");
    const currentLang = getLanguage();
    languageSelector.value = currentLang;
    loadTranslations(currentLang);

    languageSelector.addEventListener("change", function () {
        const newLang = languageSelector.value;
        window.location.search = `?lang=${newLang}`;
    });
});

function getLanguage () {
    const params = new URLSearchParams(window.location.search);
    return params.get("lang") || "es-ES"; // 🌍 Idioma per defecte
}

function loadTranslations (lang) {
    fetch(`./lang/${lang}.json`)
        .then(response => response.json())
        .then(translations => {
            document.querySelectorAll("[data-translate]").forEach(el => {
                const key = el.getAttribute("data-translate");
                el.textContent = translations[key] || key;
            });
        });
}