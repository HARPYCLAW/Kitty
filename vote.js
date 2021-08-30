const vote_url = "https://api.thecatapi.com/v1/images/search";
const img = document.querySelector(".random-image");
const btn = document.querySelector(".btn")
const btnn = document.querySelector(".btnn")

var hi;

btn.addEventListener('click', () => {
    fetch(vote_url, {
        cache: "no-cache"
    })
    .then(async response => await response.json())
    .then(async data => {
        console.log(data[0].id);
        const {url} = await data[0];
        hi = `
            <img class="mt-4" src="${url}" alt="Cat Image" height="400px" width="80%">
        `
        img.innerHTML = hi;
    });
});

btnn.addEventListener('click', () => {
    fetch(vote_url, {
        cache: "no-cache"
    })
    .then(async response => await response.json())
    .then(async data => {
        console.log(data[0].id);
        const {url} = await data[0];
        hi = `
            <img class="mt-4" src="${url}" alt="Cat Image" height="400px" width="80%">
        `
        img.innerHTML = hi;
    });
});

window.addEventListener('load', () => {
    fetch(vote_url, {
        cache: "no-cache"
    })
    .then(async response => await response.json())
    .then(async data => {
        console.log(data[0].id);
        const {url} = await data[0];
        hi = `
            <img class="mt-4" src="${url}" alt="Cat Image" height="400px" width="80%">
        `
        img.innerHTML = hi;
    });
});