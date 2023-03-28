let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

console.log('Bem-vinda, '+ info.personagem);

info['recorrente'] = 'Sim';

console.log(info.recorrente);

for(let chave in info) {
    console.log(chave);
}
for(let chave in info) {
    console.log(info[chave]);
}

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
};
info2['recorrente'] = 'Sim';

console.log(info.personagem + ' e ' + info2.personagem);
console.log(info.origem + ' e ' + info2.origem);
console.log(info.nota + ' e ' + info2.nota); 