// 1 - arrays
const lista = [1, 2, 3, 4, 5];

console.log(lista);
console.log(typeof lista);

const itens = ["Amanda", true, 2, 4.12, []];

console.log(itens);

// 2 - mais sobre arrays
const arr = ["a", "b", "c", "d"];

console.log(arr[0]);
console.log(arr[2]);
console.log(arr[83]);

// 3 - propriedades
const numbers = [5, 2, 4];

console.log(numbers.length);
console.log(numbers["length"]);

const myName = "Amanda";
console.log(myName.length);

// 4 - métodos
const otherNumbers = [1, 2, 3];

const allNunbers = numbers.concat(otherNumbers);
console.log(allNunbers);

const text = "algum texto";

console.log(text.toUpperCase());
console.log(typeof text.toUpperCase);
console.log(text.indexOf("g"));