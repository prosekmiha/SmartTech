let specsNavBtn = document.querySelector("#specsNavBtn");
let specsDiv = document.querySelector(".specs");
let zapriBtn = document.querySelector(".zapri");

function openspecs() {
    specsNavBtn.addEventListener("click", function(){
        specsDiv.style.display = "initial";
    })
    zapriBtn.addEventListener("click", function(){
        specsDiv.style.display = "none";
    })
}