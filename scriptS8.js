
const p = document.getElementById("rq-text");
const btn = document.getElementById("button-load");

const loadQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    const newQuote = data.content;
    console.log(newQuote);
    return newQuote
}
btn.addEventListener("click", async() => {
    p.innerHTML = await loadQuote()
})

