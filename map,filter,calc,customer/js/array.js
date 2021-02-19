const arr = ['Citrus','Stone','Tropical','Berries','Melons'];

function chceckFilter1(fruit) {
  return fruit.length <= 5;
}

console.log(arr.filter(chceckFilter1));

const arr1 = [19,2,245,110,330,-10,45,70];

function chceckFilter(fruit) {
  console.log(fruit + furit[+1]);
  return fruit % 10 === 0;
}

console.log(arr1.filter(chceckFilter));


const COUNTRY_CODES = {
  SK: 'SK',
  CZ: 'CZ',
  US: 'US',
}
const users = [
  {
    name: 'Matej',
    age: 12,
    country: COUNTRY_CODES.SK
  },
  {
    name: 'Tibor',
    age: 22,
    country: COUNTRY_CODES.SK
  },
  {
    name: 'Rado',
    age: 89,
    country: COUNTRY_CODES.CZ
  },
  {
    name: 'Hugo',
    age: 42,
    country: COUNTRY_CODES.US
  },
]

function mapStatus(user) {
  
  return {
    name: user.name,
    age: user.age,
    country: user.country,
    status: getStatus(user.age) // pozor, povodne islo do getStatus cislo
  }
}


const STATUSES = {
  dieta: 'dieta',
  tinedzer: 'tinedzer',
  dospely: 'dospely',
  senior: 'senior',
}

function getStatus(age) {
  // na zaciatku F osetrit vzdy chyby
  if (typeof age !== 'number' || age <= 0) {
    return 0
  }
  if (age < 12) {
    return STATUSES.dieta
  } else if (age >= 12 && age <= 19) {
    return STATUSES.tinedzer
  } else if (age >= 20 && age <= 65) {
    return STATUSES.dospely
  } else {
    return STATUSES.senior
  }
}

function isAdult(user) {
  return user.status === STATUSES.dospely
}
console.log(users.map(mapStatus).filter(isAdult))