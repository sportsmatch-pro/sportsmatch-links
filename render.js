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
                const li = document.createElement("li");
                li.textContent = text;
                ul.appendChild(li);
            });
            container.appendChild(ul);
        }
    });
}

function loadJSON (folder, filename) {
    fetch(`/${folder}/${filename}.json`)
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