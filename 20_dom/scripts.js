// 1 - movendo-se pelo DOM
console.log(document.body);

console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[1].childNodes);

console.log(document.body.childNodes[1].childNodes[1].textContent);

// 2 - selecionando elementos por tag
const listItens = document.getElementsByTagName("li");

console.log(listItens);

// 3 - selecionando elementos por id
const title = document.getElementById("title");

console.log(title);

// 4 - selecionando elementos por classe
const products = document.getElementsByClassName("product");

console.log(products);

// 5 - Selecionando elementos por CSS
const productsQuery = document.querySelectorAll(".product");

console.log(productsQuery);

const mainContainer = document.querySelector("#main-container");

console.log(mainContainer);

// 6 - insertBefore
const p = document.createElement("p");

const header = title.parentElement;

header.insertBefore(p, title);
