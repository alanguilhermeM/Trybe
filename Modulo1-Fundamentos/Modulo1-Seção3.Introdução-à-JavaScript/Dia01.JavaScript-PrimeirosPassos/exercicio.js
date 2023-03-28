const a = 6;
const b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);


const numA = 23;
const numB = 34;
if (numA > numB) {
    console.log(numA + ' é maior');
}
else {
    console.log(numB + ' é maior');
}

const x = 52;
const y = 39;
const z = 120;
if (x > y && x > z) {
    console.log(x + ' é maior');
}
else if (y > x && y > z) {
    console.log(y + ' é maior');
}
else if (z > x && z > y) {
    console.log(z + ' é maior');
}


const p = 0;
if (p > 0) {
    console.log(p + ' é positivo');
}
else if (p < 0) {
    console.log(p + ' é negativo');
}
else {
    console.log('zero');
}



const primeiroAngulo = 50;
const segundoAngulo = 40;
const terceiroAngulo = 90;
if (primeiroAngulo + segundoAngulo + terceiroAngulo === 180) {
    console.log('True');
}
else if (primeiroAngulo < 0 || segundoAngulo < 0 || terceiroAngulo < 0) {
    console.log('Erro: ângulo inválido');
}
else {
    console.log('False');
}



let peçaXadrez = 'torre';

switch(peçaXadrez.toLowerCase()) {
    case 'peão':
        console.log('os peões se movem somente para frente, uma casa por vez. Um exceção é a primeira vez que um peão é movido, quando ele pode se mover duas casas.');
        break;
    case 'bispo':
        console.log('O bispo se move em uma linha reta diagonalmente no tabuleiro.');
        break;
    case 'torre':
        console.log('A torre se move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas.');
        break;
    case 'cavalo':
        console.log('O cavalo move-se por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto.');
        break;
    case 'rainha':
        console.log('A Rainha pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente.');
        break;
    case 'rei':
        console.log('O rei pode se mover para qualquer casa adjacente. Assim, ele pode mover-se uma casa em qualquer direção: horizontalmente, verticalmente ou diagonalmente.');
        break;
    default:
        console.log('Erro: Peça inválida.');
        break;
}



const porcentagem = 21;
if (porcentagem >= 90) {
    console.log('A');
} else if (porcentagem >= 80) {
    console.log('B');
} else if (porcentagem >= 70) {
    console.log('C');
} else if (porcentagem >= 60) {
    console.log('D');
} else if (porcentagem >= 50) {
    console.log('E');
} else if (porcentagem < 50) {
    console.log('F');
} else if (porcentagem < 0 || porcentagem > 100 ) {
    console.log('Erro: Nota inválida.');
}



const um = 3;
const dois = 9;
const tres = 6;

let isEven = false;

if(um % 2 === 0 || dois % 2 === 0 || tres % 2 === 0) {
    isEven = true;
    console.log(isEven);
} else {
    console.log('false');
}



const umI = 2;
const doisI = 4;
const tresI = 6;

let isOdd = false;

if(umI % 2 !== 0 || doisI % 2 !== 0 || tresI % 2 !== 0) {
    isOdd = true;
};
console.log(isOdd);



const custoProduto = 100;
const valorVenda = 300;

const custoTotalProduto = custoProduto * 1.2;

if(custoProduto >= 0 && valorVenda >= 0) {
    const lucro = (valorVenda - custoTotalProduto) * 1000;
    console.log(lucro)
} else {
    console.log('Erro: Valor inválido');
};
