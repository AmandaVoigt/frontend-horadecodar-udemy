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