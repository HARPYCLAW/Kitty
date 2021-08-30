const breed_url = "https://api.thecatapi.com/v1/breeds";

const breed = document.querySelector("#breed");
const info = document.querySelector(".b");
const img = document.querySelector(".image");


var all;
var image;

breed.addEventListener('change', async () => {
    await fetch(breed_url, {
        cache: "no-cache"
    })
    .then(async response => await response.json())
    .then(data => {
        const {life_span} = data[breed.value];
        const {url} = data[breed.value].image;
        const {name} = data[breed.value];
        const {intelligence} = data[breed.value];
        const {origin} = data[breed.value];
        const {metric} = data[breed.value].weight;
        const {temperament} = data[breed.value];
        console.log(data[0]);

        image = `
            <img class="img-fluid" src="${url}" alt="Cat Image" height="300px" width="600px">
        `
        all = `
            <p style="font-size:25px; color: white;"><span style="font-size:40px; color: #BD4B4B;">></span> As you already know , Name of this breed is <span style="font-size:30px; color: #ffd369;">${name}.</span></p>
            <hr>
            <p style="font-size:25px; color: white;"><span style="font-size:40px; color: #BD4B4B;">></span> This Breed lives for approx <span style="font-size:30px; color: #ffd369;">${life_span}</span> years.</p>
            <hr>
            <p style="font-size:25px; color: white;"><span style="font-size:40px; color: #BD4B4B;">></span> It originates from the country <span style="font-size:30px; color: #ffd369;">${origin}.</span></p>
            <hr>
            <p style="font-size:25px; color: white;"><span style="font-size:40px; color: #BD4B4B;">></span> This Breed has intelligence level of about <span style="font-size:30px; color: #ffd369;">${intelligence}</span>.</p>
            <hr>
            <p style="font-size:25px; color: white;"><span style="font-size:40px; color: #BD4B4B;">></span> The average weight of this breed is <span style="font-size:30px; color: #ffd369;">${metric}</span> Kg.</p>
            <hr>
            <p style="font-size:25px; color: white;"><span style="font-size:40px; color: #BD4B4B;">></span> This breed is <span style="font-size:30px; color: #ffd369;">${temperament}</span>.</p>
        `
    });
    img.innerHTML = image;
    info.innerHTML = all;

});