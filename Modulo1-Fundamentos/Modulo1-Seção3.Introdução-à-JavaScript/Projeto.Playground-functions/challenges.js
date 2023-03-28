// Desafio 1 - Crie a função compareTrue

const girafa = true;
const macaco = false;
const elefante = true;

const compareTrue = (girafa, elefante) => {
    if (girafa === true && elefante === false || girafa === false && elefante === false || girafa === false && elefante === true) {
        return false
    }
    if (girafa === true && elefante === true) {
        return true
    }
}

console.log(compareTrue(girafa, elefante))

// Desafio 2 - Crie a função splitSentence

const splitSentence = (phrase) => {
  return phrase.split(' ')
}

console.log(splitSentence('go trybe'));

// Desafio 3 - Crie a função concatName

let ultimo = '';
let primeiro = '';
const concatName = (array) => {
    ultimo = array[array.length - 1];
    primeiro = array[0];
    return `${ultimo}, ${primeiro}`
}
concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']);

// Desafio 4 - Crie a função footballPoints

const footballPoints = (wins, ties) => {
  let resultado;
  resultado = (wins * 3) + ties;
  return resultado
}

footballPoints(0, 0);

// Desafio 5 - Crie a função highestCount

const highestCount = (array) => {
    let highestNumber = 0;
    let maior = array[0];
    for (let num of array) {
        if (num > maior) {
            maior = num;
        };
    };
    for (let i = 0; i < array.length; i += 1) {
        if(maior === array[i])
        highestNumber +=1;        
    }
    return highestNumber
};
highestCount([9, 1, 2, 3, 9, 5, 7]);


// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

const calcTriangleArea = (base, height) => ((base * height) / 2);
const calcRectangleArea = (base, height) => (base * height);

let returnS = '';
const calcAllAreas = (base, height, form) => {
    if (form === 'triângulo') {
      returnS = `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
    } else if (form === 'retângulo') {
      returnS = `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`;
    } else if (form === 'quadrado') {
      returnS = 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
    }
    return returnS
};
calcAllAreas(10, 50, 'triângulo');
calcAllAreas(5, 2, 'retângulo');
calcRectangleArea(10, 50);

// Desafio 7 - Crie a função catAndMouse

const catAndMouse = (mouse, cat, cat2) => {
  if(Math.abs(mouse - cat2) < Math.abs(mouse - cat)) {
      return 'cat2'
  }
  else if(Math.abs(mouse - cat) === Math.abs(mouse - cat2)) {
      return 'os gatos trombam e o rato foge'
  } else {
      return 'cat1'
  }
};

console.log(catAndMouse(2, 3, 1));

// Desafio 8 - Crie a função fizzBuzz

const fizzBuzz = (array) => {
    let string = [];
    for(let i = 0; i < array.length; i+= 1) {
        if(array[i] % 3 === 0 && array[i] % 5 !== 0) {
            string.push('fizz');
        }
        else if(array[i] % 5 === 0 && array[i] % 3 !== 0) {
            string.push('buzz');
        }
        else if(array[i] % 3 === 0 && array[i] % 5 === 0) {
            string.push('fizzBuzz');
        } 
        else if(array[i] % 3 !== 0 && array[i] % 5 !== 0) {
            string.push('bug!');
        }
    }
    return string 
}
fizzBuzz([2, 15, 7, 9, 45], );

// Desafio 9 - Crie a função encode e a função decode

const encode = (string) => {
    let letra = string.split('')
    let newphrase = [];
    for(let valor of letra) {
        switch (valor) {
            case('a'):
                newphrase.push('1');
                break;
            case('e'):
                newphrase.push('2');
                break;
            case('i'):
                newphrase.push('3');
                break;
            case('o'):
                newphrase.push('4');
                break;
            case('u'):
                newphrase.push('5');
                break;
            default:
                newphrase.push(valor);
                break;
        };
    };
    return newphrase.join('');
};

encode('Qualquer coisa');

const decode = (string) => {
    let letra = string.split('')
    let newphrase = [];
    for(let valor of letra) {
        switch (valor) {
            case('1'):
                newphrase.push('a');
                break;
            case('2'):
                newphrase.push('e');
                break;
            case('3'):
                newphrase.push('i');
                break;
            case('4'):
                newphrase.push('o');
                break;
            case('5'):
                newphrase.push('u');
                break;
            default:
                newphrase.push(valor);
                break;
        };
    };
    return newphrase.join('');
};

// Desafio 10 - Crie a função techList


// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
