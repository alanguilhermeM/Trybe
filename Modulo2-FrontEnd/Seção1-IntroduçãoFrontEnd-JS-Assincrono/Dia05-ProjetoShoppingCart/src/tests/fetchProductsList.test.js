import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function');
  });

  it('fetch é chamado ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  it('retorno da função fetchProductsList("computador") é=computadorSearch', async () => {
    expect(typeof fetchProductsList('computador')).toBe(typeof computadorSearch);
  });

  it('a função fetchProductsList(), lança um erro "Termo de busca não informado"', () => {
    expect(() => {
      fetchProductsList();
    }).toThrow('Termo de busca não informado');
  });
});
