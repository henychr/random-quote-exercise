const loadQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    const newText = data.content;
    console.log(newText);
    return newText
}

const p = document.getElementById("rq-text");
const btn = document.getElementById("button-load");

console.log(p);
console.log(btn);

btn.addEventListener("click", () => {
    loadQuote();
})

p.innerHTML = newText;
