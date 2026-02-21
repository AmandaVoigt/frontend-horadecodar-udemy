// 1 - number
console.log(typeof 2);

console.log(typeof 5.14);

console.log(typeof -127);

// 2 - operações aritméticas
console.log(2 + 4);

console.log(10 - 5);

console.log(5 * 4);

console.log(10 / 2);

console.log(5 + 4 * 2);

// 3 - special numbers
console.log(typeof Infinity);

console.log(typeof -Infinity);

console.log(12 * "asd");

console.log(typeof NaN);

// 4 - string
console.log(typeof "Um texto");

console.log(typeof 'Mais um texto');

// 5 - símbolos especiais em string
console.log("Testando a \n quebra de linha");

console.log("Espaçamento \t de tab");

// 6 - concatenação
console.log("Oi," + " tudo" + " bem?");

console.log('Testando' + ' com' + ' crase!');

// 7 - template strings
console.log(`A soma de 2 + 2 é: ${2 + 2}`);

console.log(`Podemos executar qualquer coisa aqui ${console.log("teste")}`);

// 8 - boolean
console.log(true);

console.log(5 > 20);

console.log(30 > 10);

console.log(typeof false);

// 9 - comparações
console.log(5 <= 5);    // menor igual

console.log(5 < 5);     // menor

console.log(10 == 10);  // igual

console.log(10 == 9);   // igual

console.log(10 != 9);   // diferente

// 10 - idêntico
console.log(9 == "9");

console.log(9 === "9");

console.log(9 != "9");

console.log(9 !== "9");

// 11 - operadores lógicos
console.log(true && true);

console.log(true && false);

console.log(5 > 2 && 2 < 10);

console.log(5 > 2 && "Amanda" === 1);

console.log(5 > 2 || "Amanda" === 1);

console.log(5 < 2 || 5 > 100);

console.log(!true);

console.log(!5 > 2);