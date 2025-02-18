document.addEventListener("DOMContentLoaded", function () {
    const languageContainer = document.getElementById("language-menu");

    if (languageContainer) {
        // Crear el selector d'idioma dinàmicament
        const languageSelector = document.createElement("select");
        languageSelector.id = "languageSelector";
        languageSelector.innerHTML = `
            <option value="es-ES">Español</option>
            <option value="en-US">English</option>
            <option value="ca-ES">Català</option>
        `;

        // Afegir-lo a la pàgina
        languageContainer.appendChild(languageSelector);

        // Definir l'idioma actual
        const currentLang = getLanguage();
        languageSelector.value = currentLang;
        loadTranslations(currentLang);

        // Canviar l'idioma quan l'usuari ho seleccioni
        languageSelector.addEventListener("change", function () {
            const newLang = languageSelector.value;
            const params = new URLSearchParams(window.location.search);
            params.set("lang", newLang);
            window.location.search = params.toString();
        });
    }
});

function getLanguage () {
    const params = new URLSearchParams(window.location.search);
    return params.get("lang") || "es-ES"; // Idioma per defecte
}

function loadTranslations (lang) {
    fetch(`../lang/${lang}.json`)
        .then(response => response.json())
        .then(translations => {
            document.querySelectorAll("[data-translate]").forEach(el => {
                const key = el.getAttribute("data-translate");
                el.textContent = translations[key] || key;
            });
        });
}