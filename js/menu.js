/* MENU */
document.addEventListener("DOMContentLoaded", function () {
    const currentPath = window.location.pathname.split("/").pop(); // Obté el nom del fitxer actual
    const menu = `
        <nav>
            <ul>
                <li><a href="termsofuse.html?lang=${getLanguage()}" data-translate="termsofuse_title">termsofuse</a></li>
                <li><a href="comunity.html?lang=${getLanguage()}" data-translate="comunity_title">comunity</a></li>
                <li><a href="content.html?lang=${getLanguage()}" data-translate="content_title">content</a></li>
                <li><a href="brand.html?lang=${getLanguage()}" data-translate="brand_title">brand</a></li>
                <li><a href="cookies.html?lang=${getLanguage()}" data-translate="cookies_title">cookies</a></li>
                <li><a href="misuse.html?lang=${getLanguage()}" data-translate="misuse_title">misuse</a></li>
                <li><a href="music.html?lang=${getLanguage()}" data-translate="music_title">music</a></li>
                <li><a href="privacity.html?lang=${getLanguage()}" data-translate="privacity_title">privacity</a></li>
                <li><a href="promotedposts.html?lang=${getLanguage()}" data-translate="promotedposts_title">promotedposts</a></li>
                <li><a href="promotedoffers.html?lang=${getLanguage()}" data-translate="promotedoffers_title">promotedoffers</a></li>
                <li><a href="delete-account.html?lang=${getLanguage()}" data-translate="delete-account_title">delete-account</a></li>
                <li><a href="safety.html?lang=${getLanguage()}" data-translate="safety_title">safety</a></li>
            </ul>
        </nav>
    `;
    document.getElementById("menu").innerHTML = menu;
    document.getElementById("menu2").innerHTML = menu;

    // Afegim la classe "active" al menú actiu
    document.querySelectorAll("#menu nav ul li a").forEach(link => {
        if (link.getAttribute("href").split("?")[0] === currentPath) {
            link.parentElement.classList.add("active");
        }
    });
    document.querySelectorAll("#menu2 nav ul li a").forEach(link => {
        if (link.getAttribute("href").split("?")[0] === currentPath) {
            link.parentElement.classList.add("active");
        }
    });
});
/* LOGO */
document.addEventListener("DOMContentLoaded", function () {
    const menu = `
        <a href="index.html?lang=${getLanguage()}" class="logo">
            <svg
            preserveAspectRatio="xMidYMid meet"
            data-bbox="0.113 0 178.346 42.11"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0.113 0 178.346 42.11"
            width="1790"
            data-type="tint"
            role="presentation"
            aria-hidden="true"
            aria-label=""
            >
            <g>
                <path
                d="M125.06 36.816c1.455 0 2.538 1.074 2.538 2.53 0 1.455-1.083 2.528-2.538 2.528-1.455 0-2.529-1.083-2.529-2.529s1.074-2.529 2.529-2.529Zm0 4.54c1.146 0 1.992-.851 1.992-2.006 0-1.156-.85-2.006-1.992-2.006s-1.978.85-1.978 2.006c0 1.155.841 2.005 1.978 2.005Zm-.832-3.325h1.023c.496 0 .819.31.819.787a.742.742 0 0 1-.405.664l.714 1.182h-.614l-.623-1.073h-.405v1.073h-.514v-2.629l.005-.004Zm.941 1.119c.246 0 .387-.137.387-.332 0-.196-.141-.341-.387-.341h-.423v.673h.423Z"
                ></path>
                <path
                d="M.113 13.117h3.184c.277 2.629 2.074 3.902 4.425 3.902 2.129 0 3.625-1.05 3.625-2.683C11.347 9.77.723 12.285.723 5.312.723 2.102 3.515 0 7.227 0c4.066 0 6.695 2.16 7.14 5.758h-3.183c-.36-1.856-1.856-2.96-3.957-2.96-1.992 0-3.266.913-3.266 2.378 0 3.93 10.652 1.464 10.652 8.964 0 3.43-2.879 5.672-6.89 5.672-4.012 0-7.25-2.351-7.61-6.695Z"
                ></path>
                <path
                d="M17.27.223h7.75c3.793 0 6.28 2.296 6.28 5.753 0 3.457-2.492 5.785-6.28 5.785h-4.512v7.832H17.27V.223Zm7.418 8.773c2.046 0 3.374-1.191 3.374-3.015S26.734 3.02 24.688 3.02h-4.18v5.976h4.18Z"
                ></path>
                <path
                d="M32.016 9.906C32.016 4.18 36.14 0 41.758 0c5.617 0 9.715 4.18 9.715 9.906 0 5.726-4.153 9.906-9.715 9.906-5.563 0-9.742-4.18-9.742-9.906Zm9.742 7.113c3.761 0 6.45-3.015 6.45-7.113 0-4.098-2.684-7.113-6.45-7.113S35.28 5.78 35.28 9.906s2.711 7.113 6.477 7.113Z"
                ></path>
                <path
                d="M53.602.223h7.418c3.57 0 6.003 2.242 6.003 5.562 0 2.27-1.3 4.207-3.429 5.062l5.34 8.746H65.14l-4.843-8.245h-3.43v8.245h-3.265V.223Zm6.863 8.327c2.02 0 3.32-1.132 3.32-2.765 0-1.633-1.3-2.765-3.32-2.765h-3.598v5.535h3.598V8.55Z"
                ></path>
                <path
                d="M74.383 3.015h-5.95V.223h15.164v2.792h-5.949V19.59h-3.265V3.015Z"
                ></path>
                <path
                d="M84.238 13.116h3.184c.278 2.63 2.074 3.903 4.425 3.903 2.129 0 3.625-1.05 3.625-2.684 0-4.566-10.624-2.046-10.624-9.019 0-3.21 2.792-5.312 6.504-5.312 4.066 0 6.695 2.16 7.14 5.758H95.31c-.36-1.856-1.856-2.96-3.957-2.96-1.992-.001-3.266.913-3.266 2.378 0 3.93 10.652 1.464 10.652 8.964 0 3.43-2.879 5.672-6.89 5.672-4.012 0-7.25-2.351-7.61-6.695v-.005Z"
                ></path>
                <path
                d="M27.23 22.512h4.594l4.398 10.597c1.22 2.934 1.66 4.844 1.66 4.844s.442-1.91 1.606-4.703l4.457-10.738h4.485v19.37h-3.266V31.617c0-3.156.164-5.121.164-5.121s-.61 1.883-1.77 4.676l-4.425 10.71h-2.601l-4.399-10.57c-1.219-2.933-1.796-4.816-1.796-4.816s.168 1.965.168 5.008v10.378H27.24v-19.37h-.01Z"
                ></path>
                <path
                d="M57.7 22.512h3.679l7.527 19.37h-3.489l-1.742-4.566h-8.414l-1.742 4.566h-3.402l7.582-19.37Zm4.925 12.039-3.13-8.023-3.156 8.023h6.286Z"
                ></path>
                <path
                d="M74.383 25.308h-5.95v-2.792h15.164v2.792h-5.949v16.574h-3.265V25.308Z"
                ></path>
                <path
                d="M83.793 32.199c0-6.2 4.066-9.906 9.574-9.906 4.648 0 7.859 2.852 8.246 6.809h-3.239c-.386-2.352-2.324-4.012-5.007-4.012-3.68 0-6.308 2.656-6.308 7.113 0 4.458 2.656 7.114 6.308 7.114 2.683 0 4.73-1.828 5.09-4.207h3.238c-.441 3.93-3.625 7-8.328 7-5.453 0-9.574-3.68-9.574-9.907V32.2Z"
                ></path>
                <path
                d="M116.082 33.136h-9.297v8.746h-3.265v-19.37h3.265v7.832h9.297v-7.832h3.265v19.37h-3.265v-8.746Z"
                ></path>
                <path
                fill="#777777"
                d="m139.311 25.11-.2-.2-10.033-10.033 10.033-10.033 9.288 9.287 2.31-2.31L139.111.223l-14.654 14.654 23.942 23.946 2.31-2.315-11.398-11.398Z"
                ></path>
                <path
                fill="#777777"
                d="m154.519 15.63-2.312 2.311 8.542 8.542 2.312-2.312-8.542-8.542Z"
                ></path>
                <path
                d="M163.805.223 153.308 10.72l-1.847 1.846-1.196 1.192-2.847 2.852-7.555 7.554 2.311 2.31 21.631-21.63 10.033 10.033-8.186 8.187-5.89 5.89-5.495 5.494-5.121 5.121 2.315 2.31 2.311-2.31 24.687-24.692L163.805.223Z"
                ></path>
            </g>
            </svg>
        </a>
    `;
    document.getElementById("logo").innerHTML = menu;
});