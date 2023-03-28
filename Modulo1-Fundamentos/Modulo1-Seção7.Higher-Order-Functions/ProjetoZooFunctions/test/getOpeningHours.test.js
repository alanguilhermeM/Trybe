const { hours } = require('../data/zoo_data');
const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('se não receber parametros, retorna hours', () => {
    expect(getOpeningHours()).toBe(hours);
  });
  it('se o dia for invalido, retorna um error', () => {
    expect(() => getOpeningHours('Sabadou', '11:00-AM')).toThrowError('The day must be valid. Example: Monday');
  });
  it('Se a hora for invalida, retorna um error', () => {
    expect(() => getOpeningHours('Monday', '13:00-PM')).toThrowError('The hour must be between 0 and 12');
  });
  it('Se a hora não representar um numero, retorna um error', () => {
    expect(() => getOpeningHours('Monday', 'AA:00-PM')).toThrowError('The hour should represent a number');
  });
  it('Se os minutos não representar um numero, retorna um error', () => {
    expect(() => getOpeningHours('Monday', '11:BB-PM')).toThrowError('The minutes should represent a number');
  });
  it('retorna "the zoo is open", se o zoo estiver aberto na hora ou dia', () => {
    expect(getOpeningHours('Tuesday', '10:00-AM')).toEqual('The zoo is open');
  });
  it('retorna "the zoo is closed", se o zoo estiver fechado na hora ou dia', () => {
    expect(getOpeningHours('Monday', '06:00-AM')).toEqual('The zoo is closed');
  });
  it('se a hora for invalida, retorna um erro', () => {
    expect(() => getOpeningHours('Monday', '09:c0-AM')).toThrowError('The minutes should represent a number');
  });
  it('se a hora for invalida, retorna um error', () => {
    expect(() => getOpeningHours('Sunday', 'C9:00-AM')).toThrowError('The hour should represent a number');
  });
  it('Para os argumentos Tuesday e 09:60-AM deve lançar uma exceção com a mensagem: The minutes must be between 0 and 59', () => {
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrowError('The minutes must be between 0 and 59');
  });
  it('Para os argumentos Friday e 09:00-ZM deve lançar uma exceção com a mensagem: The abbreviation must be AM or PM', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrowError('The abbreviation must be \'AM\' or \'PM\'');
  });
});
