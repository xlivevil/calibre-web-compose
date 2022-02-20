function loadCollections() {
    fetch("/website.json").then(response => response.json()).then(data => {
        let websitelist = document.getElementById("website-list");

        for (let i = 0; i < data.length; i++) {
            let website = data[i];

            websitelist.innerHTML += `
        <li>
        <a href="${website.url}" >
        <div class="card">
            
            <div class="card-header"> 
                <h3>${website.name}</h3>
            </div>
            <div class="card-body">
                <img src="${website.logo}" alt="${website.name}">
                <p>${website.description}</p>
            </div>
            
        </div>
        </a>
        </li>
        `;
        }
    });
}

function showCollections() {
    let websites = document.getElementById("collections");
    let header = document.getElementById("header");
    websites.style.display = "block";
    header.style.filter = "blur(5px)";
}

function closeCollections() {
    let websites = document.getElementById("collections");
    let header = document.getElementById("header");
    websites.style.display = "none";
    header.style.filter = "none";
}
