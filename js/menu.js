document.addEventListener("DOMContentLoaded", function () {
    const menu = `
        <nav>
            <ul>
                <li><a href="index.html" data-translate="home">Inici</a></li>
                <li><a href="test.html?lang=${getLanguage()}" data-translate="test">Prueba</a></li>
                <li><a href="brand.html?lang=${getLanguage()}" data-translate="brand">Políticas de contenido de marca</a></li>
                <li><a href="comunity.html?lang=${getLanguage()}" data-translate="comunity">Normas comunitarias</a></li>
                <li><a href="content.html?lang=${getLanguage()}" data-translate="content">Políticas de contenido</a></li>
                <li><a href="cookies?lang=${getLanguage()}" data-translate="cookies">Política de cookies</a></li>
            </ul>
        </nav>
    `;
    document.getElementById("menu").innerHTML = menu;
});