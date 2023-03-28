const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => species.filter((pessoa) => ids.includes(pessoa.id));

module.exports = getSpeciesByIds;
