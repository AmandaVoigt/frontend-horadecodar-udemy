// 1 - arrays
let numbers: number[] = [1, 2, 3];

numbers.push(5);

console.log(numbers[2]);

// numbers = "teste"

const nomes: string[] = ["Matheus", "João"];

// nomes.push(4)

// 2 - outra sintaxe de array
const nums: Array<number> = [100, 200];

nums.push(300);

console.log(nums);

// nums.push("teste")

console.log(nums[0]);

// 3 - any
const arr1: any = [1, "teste", true, [], { nome: "Amanda" }];

console.log(arr1);

arr1.push([1, 2, 3]);

console.log(arr1);

// 4 - tipo de parâmetro
function soma(a: number, b: number) {
  console.log(a + b);
}

soma(4, 5);

// soma("a", "b");

// 5 - tipo de retorno
function greeting(name: string): string {
  return `Olá ${name}`;
}

console.log(greeting("Matheus"));

// 6 - funções anônimas
setTimeout(function () {
  const sallary: number = 1000;

  // console.log(parseFloat(sallary)); - parseFloat = tem que ser string!

  console.log(sallary);
}, 2000);

// 7 - tipos de objetos
function passCoordinates(coord: { x: number; y: number }) {
  console.log("X coordiantes: " + coord.x);
  console.log("X coordiantes: " + coord.y);
}

const objCoord = { x: 329, y: 84.2 };

passCoordinates(objCoord);
// passCoordinates({ nome: 1, sobrenome: 2 }); - Não funciona desse jeito!

const pessoaObj: { nome: string; surname: string } = {
  nome: "Amanda",
  surname: "Voigt",
};

console.log(pessoaObj);

// 8 - propriedades opcionais
function showNumbers(a: number, b: number, c?: number) {
  console.log("A: " + a);
  console.log("B: " + b);
  if (c) {
    console.log("C: " + c);
  }
}

showNumbers(1, 2, 3);
showNumbers(4, 5);
// showNumbers(6); - Não funciana só com um número

// 9 - validação de parâmetro opcional
function advancedGreeting(firstName?: string, lastName?: string) {
  if (lastName !== undefined) {
    return `Olá, ${firstName} ${lastName}, tudo bem?`;
  }

  return `Olá, ${firstName}, tudo bem?`;
}

advancedGreeting("Amanda", "Voigt");
advancedGreeting("Matheus");

// 10 - union type
function showBalance(balance: string | number) {
  console.log(`O saldo da conta é R$${balance}`);
}

showBalance(100);
showBalance("500");
// showBalance(true); - Não funciona por ser boolean

const arr2: Array<number | string | boolean> = [1, "teste", true];

// 11 - avançando em union types
function showUserRole(role: boolean | string) {
  if (typeof role === "boolean") {
    return "Usuário não aprovado!";
  }

  return `A função do usuário é: ${role}`;
}

console.log(showUserRole(false));
console.log(showUserRole("Admin"));
