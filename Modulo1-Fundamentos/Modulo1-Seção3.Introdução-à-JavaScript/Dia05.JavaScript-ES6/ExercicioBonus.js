let substituaX = (nome) => {
    const phrase = 'Tryber x aqui!';
    const phraseArray = phrase.split(' ');
    for (let i = 0; i < phraseArray.length; i += 1) {
        if(phraseArray[i] === 'x') {
            phraseArray[i] = nome;
            console.log(phrase)
        }
    }
    return phraseArray.join(' ');
}
console.log(substituaX('Bebeto'));
