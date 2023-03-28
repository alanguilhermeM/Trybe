const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const animals = {};
    data.species.forEach((specie) => {
      animals[specie.name] = specie.residents.length;
    });
    return animals;
  }
  const { species, sex } = animal;
  const speecie = data.species.find((specie) => specie.name === species);
  return sex ? speecie.residents.filter((resident) => resident.sex === sex)
    .length : speecie.residents.length;
}

module.exports = countAnimals;
