import { react } from './arquivo1.js'
import { javaScript } from './arquivo2.js'

function conteudoReact() {
    let seletor = document.getElementById("container");
    let addElement = document.createElement("p");
    let texto = document.createTextNode(react());

    addElement.appendChild(texto);
    seletor.appendChild(addElement);
}

function conteudoJs() {
    let seletor = document.getElementById("container");
    let addElement = document.createElement("p");
    let texto = document.createTextNode(javaScript());

    addElement.appendChild(texto);
    seletor.appendChild(addElement);
}

let btnReact = document.getElementById("react");
btnReact.addEventListener("click", conteudoReact);

let btnJs = document.getElementById("javascript");
btnJs.addEventListener("click", conteudoJs);