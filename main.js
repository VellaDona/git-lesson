const helloBtn = document.querySelector("#helloBtn");
const colorBtn = document.querySelector("#colorBtn");
const helloTag = document.querySelector(".helloTag");
const bodySector = document.querySelector("body");

helloBtn.addEventListener("click", () => {
    helloTag.textContent = "Hello!";
}, false);

colorBtn.addEventListener("click", () => {
    bodySector.style.background = "lightblue";
}
);

