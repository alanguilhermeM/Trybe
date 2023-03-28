// Percorra o array imprimindo todos os valores nele contidos com a função console.log();

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let number of numbers) {
    console.log(number)
}
//Some todos os valores contidos no array e imprima o resultado;
soma = 0;
for (i = 0; i < numbers.length; i +=1) {
    soma += numbers[i];
}
console.log(soma);

//Calcule e imprima a média aritmética dos valores contidos no array;

let mediaA = soma / (numbers.length)
console.log(mediaA);

if (mediaA > 20) {
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor ou igual a 20');
}

// Utilizando for, descubra qual o maior valor contido no array e imprima-o;

higherNumber = numbers[0]
for (index = 1 ; index < numbers.length; index +=1) {
    if (numbers[index] > higherNumber) {
        higherNumber = numbers[index];
    }
}
console.log(higherNumber)

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”

for (index = 0 ; index < numbers.length; index +=1) {
    if (numbers[index] % 2 !== 0) {
        console.log(numbers[index]);
    } else {
        console.log('nenhum valor ímpar encontrado');
    }
}


// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

smallNumber = numbers[0]
for (index = 1 ; index < numbers.length; index +=1) {
    if (numbers[index] < smallNumber) {
        smallNumber = numbers[index];
    }
}
console.log(smallNumber);

// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let array = [];
for (index = 1; index < 26; index += 1) {
    array += [index,' '];
}
console.log(array);

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

for (index = 0; index < array.length; index += 1) {
    console.log(array[index] / 2);
}
