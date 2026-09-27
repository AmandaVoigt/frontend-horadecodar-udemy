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
