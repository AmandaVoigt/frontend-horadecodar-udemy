// 1 - métodos
const animal = {
  nome: "Bob",
  latir: function () {
    console.log("Au au");
  },
};

console.log(animal.nome);
animal.latir();

// 2 - aprofundando em métodos
const pessoa = {
  nome: "Amanda",

  getNome: function () {
    return this.nome;
  },

  setNome: function (novoNome) {
    this.nome = novoNome;
  },
};

console.log(pessoa.nome);
console.log(pessoa.getNome());

pessoa.setNome("Matheus");
console.log(pessoa.getNome());

// 3 - prototype
const text = "asd";
console.log(Object.getPrototypeOf(text));

const bool = true;
console.log(Object.getPrototypeOf(bool));

const arr = [];
console.log(arr.length);
console.log(Object.getPrototypeOf(arr));

// 4 - mais sobre prototype
const myObject = {
  a: "b",
};

console.log(Object.getPrototypeOf(myObject));
console.log(Object.getPrototypeOf(myObject) === Object.prototype);

const mySecondObject = Object.create(myObject);

console.log(mySecondObject);
console.log(mySecondObject.a);
console.log(Object.getPrototypeOf(mySecondObject) === myObject);

// 5 - classes básicas
const cachorro = {
  raca: null,
  patas: 4,
};

const pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "Pastor Alemão";

console.log(pastorAlemao);
console.log(pastorAlemao.patas);

const bulldog = Object.create(cachorro);

bulldog.raca = "Bulldog";

console.log(bulldog);

//  6 - função como classe
function criarCachoro(nome, raca) {
  const cachorro = Object.create({});

  cachorro.nome = nome;
  cachorro.raca = raca;

  return cachorro;
}

const bob = criarCachoro("Bob", "Vira lata");
console.log(bob);

const jack = criarCachoro("Jack", "Poodle");
console.log(jack);
console.log(Object.getPrototypeOf(jack));

// 7 - funções construtoras
function Cachorro(nome, raca) {
  this.nome = nome;
  this.raca = raca;
}

const husky = new Cachorro("Ozzy", "Husky");

console.log(husky);

// 8 - métodos em funções construtoras
Cachorro.prototype.uivar = function () {
  console.log("Auuuuu!");
};

console.log(Cachorro.prototype);

husky.uivar();

// 9 - classes es6
class CachorroClasse {
  constructor(nome, raca) {
    this.nome = nome;
    this.raca = raca;
  }
}

const jeff = new CachorroClasse("Jeff", "Labrador");

console.log(jeff);
console.log(Object.getPrototypeOf(jeff));

//
