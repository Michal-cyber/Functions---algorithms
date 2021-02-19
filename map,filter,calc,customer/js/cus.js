const items = [
    {
      code: 12,
      title: 'JBL reproduktor',
      price: 193.50
    },
    {
      code: 15,
      title: 'Zvukova karta',
      price: 421.50
    },
    {
      code: 19,
      title: 'Monitor',
      price: 80.50
    },
    {
      code: 120,
      title: 'Mikrofon',
      price: 122
    },
    {
      code: 18,
      title: 'LCD Monitor',
      price: 200
    },
    {
      code: 999,
      title: 'AirPods',
      price: 119.90
    },
  ]


  const users = [
    {
      first: 'Jan',
      age: 24,
      purchases: [19, 120, 999, 18],
    },
    {
      first: 'Michal',
      age: 42,
      purchases: [],
    },
    {
      first: 'Kim',
      age: 29,
      purchases: [12],
    },
    {
      first: 'David',
      age: 15,
      purchases: [15, 19, 999],
    },
    {
      first: 'Roman',
      age: 37,
      purchases: [15, 19, 12, 120],
    },
    {
      first: 'Lea',
      age: 17,
      purchases: [18, 12],
    },
  ]

  function avgAge() {
    let x = 0, y = 0;
    users.forEach(val => x += val.age);
    y = x/users.length;
    console.log(`Total users age is: ${x}`);
    console.log(`Average users age is: ${y}`);
    console.log(' ');
  }

  function avgProduct() {
    let x = 0, y = 0;
    users.forEach(val => x += val.purchases.length);
    y = x/users.length;
    console.log(`Total product sold: ${x}`)
    console.log(`Average product sold: ${y}`);
    console.log(' ');
  }

  function avgProductPrice() {
    let x = 0, y = 0;
    items.forEach(val => x += val.price);
    y = x/items.length;
    console.log(`Total products price is: ${x}`)
    console.log(`Average product price is: ${y}`);
    console.log(' ');
  }

  function mapStatus(user) {
    return {
      name: user.first,
      age: user.age,
      status: getStatus(user.age),
      priority: getPrior(user.purchases)
  }
} 

function getPrior(purchases) {
    if(purchases.length <= 1) {
        return mapStatus.priority = 0;
    } else if(purchases.length <= 3) {
        return mapStatus.priority = 5;
    } else return mapStatus.priority = 10;   
}

function filterPrior(user) {
    return user.priority >= 5;
}

const STATUSES = {
    dieta: 'dieta',
    dospely: 'dospely',
    senior: 'undefined - probbably too old for that'
  }

  function getStatus(age) {
    if (typeof age !== 'number' || age <= 0) {
      return 0
    }
     if (age >= 0 && age <= 18) {
      return STATUSES.dieta
    } else if (age >= 19 && age <= 65) {
      return STATUSES.dospely
    } else {
      return STATUSES.senior
    }
  }

  console.log(users.map(mapStatus));
  console.log(users.map(mapStatus).filter(filterPrior));

  avgAge();
  avgProduct();
  avgProductPrice();