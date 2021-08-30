const url = "https://catfact.ninja/facts";
const facts = document.querySelector(".fact");
const btn = document.querySelector(".btn");

var hey;

btn.addEventListener('click', async () => {
    await fetch(url, {
        cache: "no-cache"
    })
    .then(async response => await response.json())
    .then(data => {
        console.log(data.data[0].fact);
        const {fact} = data.data[0];
        
        hey = `
            <span>${fact}</span>
        `
    });
    facts.innerHTML = hey;
});