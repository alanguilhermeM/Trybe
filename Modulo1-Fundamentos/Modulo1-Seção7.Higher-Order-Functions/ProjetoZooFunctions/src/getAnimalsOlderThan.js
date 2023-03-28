const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const animals = animal.toLowerCase();
  return species.every((specie) => {
    if (animals === specie.name) {
      return specie.residents.every((resident) => resident.age >= age);
    }
    return true;
  });
};
module.exports = getAnimalsOlderThan;
