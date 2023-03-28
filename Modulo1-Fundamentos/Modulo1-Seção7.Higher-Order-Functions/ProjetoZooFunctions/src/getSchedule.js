const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');
const { hours } = require('../data/zoo_data');

const dias = (day) => species.filter((specie) => specie.availability.includes(day))
  .map(({ name }) => name);

const getHours = () => {
  const hour = Object.keys(hours).reduce((acc, cur) => {
    if (cur === 'Monday') {
      acc[cur] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
      return acc;
    }
    acc[cur] = {
      officeHour: `Open from ${hours[cur].open}am until ${hours[cur].close}pm`,
      exhibition: dias(cur),
    };
    return acc;
  }, {});
  return hour;
};

const getSchedule = (scheduleTarget) => {
  const animal = data.species.find((specie) => specie.name === scheduleTarget);
  if (animal) {
    return animal.availability;
  }
  const diaDaSemana = Object.keys(hours).find((day) => day === scheduleTarget);
  if (diaDaSemana) {
    return { [scheduleTarget]: getHours()[scheduleTarget] };
  }
  return getHours();
};

module.exports = getSchedule;
