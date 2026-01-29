
const couleurs = ["red", "blue", "green", "yellow", "purple", "orange", "pink"];

document.querySelector("div").addEventListener("click", function() {
    const newColor = couleurs[Math.floor(Math.random() * couleurs.length)];
    document.querySelector("div").style.backgroundColor = newColor;
});

document.querySelector(".zone").addEventListener("mouseover", (event) => {
    document.getElementById("result").textContent =event.offsetX + ", " + event.offsetY;
});

document.addEventListener("scroll", function() {
    const newColor = couleurs[Math.floor(Math.random() * couleurs.length)];
    document.querySelector("header").style.backgroundColor = newColor;
});

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    if (name.trim() === "") {
        alert("Veuillez entrer votre nom.");
        return;
    }
    alert(name);
});


let expression = "";
const buttons = document.querySelectorAll("button");
buttons.addEventListener("click", function(event) {
    if (event.target.textContent === "=") {
        alert(expression);
    }
    expression += value;
    result.textContent = expression;
    alert(expression);
});