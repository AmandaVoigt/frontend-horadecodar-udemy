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
const loggedIn = false;

if (loggedIn) {
    console.log("Está autenticado!");
} else {
    console.log("Não está autenticado!");
}

const q = 10;
const w = 15;

if (q > 5 && w > 20) {
    console.log("Números mais altos!");
} else {
    console.log("Os números não são mais altos!");
}

// 9 - else if
if (1 > 2) {
    console.log("Teste 1");
} else if (2 > 3) {
    console.log("Teste 2");
} else if (5 > 1) {
    console.log("Agora sim!");
}

const userName = "Amanda";
const userAge = 25;

if (userName === "José") {
    console.log("Bem vindo José!");
} else if (userName === "Amanda" && userAge === 25) {
    console.log("Olá Amanda, você tem 25 anos!");
} else {
    console.log("Nenhuma condição aceita!");
}

// 10 - while
let p = 0;

while (p < 5) {
    console.log(`Repetindo ${p}`);
    p = p + 1;
}

// loop infinito
// let x = 10;
// while (x > 5) {
//     console.log(`Imprimindo ${x}`);
// }

// 11 - do while
let o = 10;

do {
    console.log(`valor de o: ${o}`);
    o--;
} while (o > 1);

// - 12 - for
for (let t = 0; t < 10; t++) {
    console.log("Repetindo algo...");
}

let r = 10;

for (r; r > 0; r = r - 1) {
    console.log(`O r está diminuindo: ${r}`);
} 