// 1 - variáveis
let nome = "Amanda";
console.log(nome);

nome = "Amanda Voigt"
console.log(nome);

const idade = 25;
console.log(idade);

console.log(typeof nome);
console.log(typeof idade);

// 2 - mais sobre variáveis

// let 2teste = "inválido"
// let @teste = "inválido"

let a = 10,
    b = 20,
    c = 30;

console.log(a, b, c);

const nomecompleto = "Amanda Voigt";
const nomeCompleto = "Matheus Martins";

console.log(nomecompleto);
console.log(nomeCompleto);

let _teste = "ok";
let $teste = "ok";
console.log(_teste, $teste);

// 3 - prompt
// const age = prompt("Digite a sua idade:");
// console.log(`Você tem ${age} anos.`);

// 4 - alert
// alert("Testando");

// const z = 10
// alert(`O número é ${z}`);

// 5 - math
console.log(Math.max(5, 2, 1, 10));  // retorna o maior

console.log(Math.floor(5.14));       // arredonda o número pra baixo

console.log(Math.ceil(5.14));        // arredonda o número pra cima

// 6 - console
console.log("teste!");

console.error("erro!");

console.warn("aviso!");

// 7 - if
const m = 10;
if (m > 5) {
    console.log("M é maior que 5!");
}

const user = "João";
if (user === "João") {
    console.log("Olá João!");
}

if (user === "Maria") {
    console.log("Olá Maria!");
}

console.log(user === "João", user === "Maria");

// 8 - else