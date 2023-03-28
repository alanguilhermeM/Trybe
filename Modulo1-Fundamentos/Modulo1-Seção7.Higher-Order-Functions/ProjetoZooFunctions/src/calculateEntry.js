const data = require('../data/zoo_data');

const countAdults = (entrants) =>
  entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;

const countChildren = (entrants) =>
  entrants.filter((entrant) => entrant.age < 18).length;

const countSeniors = (entrants) =>
  entrants.filter((entrant) => entrant.age >= 50).length;

const countEntrants = (entrants) => ({
  adult: countAdults(entrants),
  child: countChildren(entrants),
  senior: countSeniors(entrants),
});

const calculatePrice = (age, prices) => {
  if (age >= 18 && age < 50) return prices.adult;
  if (age < 18) return prices.child;
  if (age >= 50) return prices.senior;
  return 0;
};

const calculateEntry = (entrants) => {
  const prices = {
    adult: 49.99,
    child: 20.99,
    senior: 24.99,
  };

  if (!entrants || entrants.length === 0) return 0;

  const total = entrants.reduce((acc, { age }) => acc + calculatePrice(age, prices), 0);

  return Number(total.toFixed(2));
};

module.exports = { calculateEntry, countEntrants };
