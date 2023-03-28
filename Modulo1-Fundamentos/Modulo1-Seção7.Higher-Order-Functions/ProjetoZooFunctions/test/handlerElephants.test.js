const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Se o parametro não for definido, a função deve retornar undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Se o parametro não for uma string, deve retornar uma mensagem de erro', () => {
    expect(handlerElephants(2)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('dado uma chave como parametro, deve retornar o valor desta chave', () => {
    expect(handlerElephants('name')).toEqual('elephants');
  });

  it('Caso parametro seja count, retornar a quantidade de residentes', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  it('Caso parametro seja names, retornar todos os nomes dos residentes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Caso parametro seja averageAge, retornar a media da idade de todos os elefantes residentes', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('Caso parametro seja qualquer outra coisa, retornar null', () => {
    expect(handlerElephants('qualquer coisa')).toBe(null);
  });
});
