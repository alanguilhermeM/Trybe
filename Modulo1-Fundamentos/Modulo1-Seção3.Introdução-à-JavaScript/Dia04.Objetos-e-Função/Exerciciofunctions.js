// 1 - Crie a função ligarDesligar, que ligue e desligue um motor de um carro.

function ligarDesligar(status) {
  if (status === 'ligado') {
    status = 'desligado';
    console.log('O motor está desligado');
    return status;
  }
  else if (status === 'desligado') {
    status = 'ligado';
    console.log('O motor está ligado');
    return status;
  }
}

ligarDesligar('ligado');

// 2 - Crie a função circleArea, que calcule a área de um círculo.

let pi = 3.14;
let circleArea = (radius) => {
  if (typeof radius !== 'number') {
    return 'O parâmetro radius deve ser um número';
  }
  area = pi * (radius * radius);
  return 'Essa é a área do círculo: ' + area;
};

// 3 - Crie a função longestWord, que receba uma frase como parâmetro e retorne a maior palavra da frase.

const longestWord = (phrase) => {
  let words = phrase.split(' ');
  let longest = words[0];
  for (let index = 0; index < words.length; index += 1) {
    if (longest.length < words[index].length) {
      longest = words[index];
    }
  }
  return longest;
};

// Não modifique as linhas abaixo
module.exports = {
  ligarDesligar: typeof ligarDesligar === 'function' ? ligarDesligar : (() => {}),
  circleArea: typeof circleArea === 'function' ? circleArea : (() => {}),
  longestWord: typeof longestWord === 'function' ? longestWord : (() => {}),
};
