// Funció per crear elements HTML a partir del JSON
function renderContent (content) {
    const container = document.getElementById("content");
    content.forEach((item) => {
        if (
            item.type === "p" ||
            item.type === "h1" ||
            item.type === "h2" ||
            item.type === "h3"
        ) {
            const element = document.createElement(item.type);
            element.textContent = item.text;
            container.appendChild(element);
        } else if (item.type === "list") {
            const ul = document.createElement("ul");
            item.texts.forEach((text) => {
                // Check if is an array
                if (text instanceof Array) {
                    const li = document.createElement("li");
                    const ul2 = document.createElement("ul");
                    text.forEach((text2) => {
                        const li2 = document.createElement("li");
                        li2.textContent = text2;
                        ul2.appendChild(li2);
                    });
                    li.appendChild(ul2);
                    ul.appendChild(li);

                } else {
                    const li = document.createElement("li");
                    li.textContent = text;
                    ul.appendChild(li);
                }
            });
            container.appendChild(ul);
        }
    });
}

function loadJSON (filename, locale) {
    fetch(`/${locale}/${filename}.json`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            document.title = data.title + "SportsMatch.pro";
            renderContent(data.content);
        })
        .catch((error) => {
            console.error("Error loading el JSON:", error);
        });
}