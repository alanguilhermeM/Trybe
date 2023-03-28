// crie um algoritmo que imprima na tela o fatorial de 10.

    // utilizar um comando que PERCORRA cada um desses antecessores e salvar o resultado da multiplicação em uma variavel.

let fatorial = 1;
for (let index = 10; index > 0; index -= 1) {
    fatorial *= index;
    console.log(fatorial);
}
  

// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
let word = 'Olá pessoas do mundo';
let reverseWord = '';

for (let index = 0; index < word.length; index += 1) {
  reverseWord += word[word.length - 1 - index];
}

console.log(reverseWord);

// Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

maiorPalavra = array[0];
menorPalavra = array[0]
for (index = 0; index < array.length; index += 1) {
    if (array[index].length > maiorPalavra.length) {
        maiorPalavra = array[index];
    };
};
console.log(maiorPalavra);

for (index = 0; index < array.length; index += 1) {
    if (array[index].length < menorPalavra.length) {
        menorPalavra = array[index];
    };
};
console.log(menorPalavra);

// Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.

