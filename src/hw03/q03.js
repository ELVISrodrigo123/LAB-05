
const root = document.getElementById("root");
const pregunta7 = document.createElement("h2");

pregunta7.textContent = "Elvis Rodrigo Condori Vasquez";
root.appendChild(pregunta7);

document.getElementById("google-7").href = "https://www.google.com";
document.getElementById("google-7").href = "https://keybr.com";

const buyList = [
    "books",
    "bread",
    "eraser",
    "earphones",
    "collection-cards",
    "hdmi",
    "vga",
    "motherboard",
    "university-books",
];


const ul = document.createElement("ul");


buyList.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
});


root.appendChild(ul);