const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const employe = employees.find((employee) => employee.id === id);
  const animalId = employe.responsibleFor[0];
  const animall = data.species.find((animal) => animal.id === animalId);
  const ages = animall.residents.map((resident) => resident.age);
  const oldestAge = Math.max(...ages);
  const oldestResident = animall.residents.find((resident) => resident.age === oldestAge);
  return [oldestResident.name, oldestResident.sex, oldestAge];
};
module.exports = getOldestFromFirstSpecies;
