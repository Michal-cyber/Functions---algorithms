users = [{
    "id": 1,
    "first_name": "Dunn",
    "last_name": "Gaspar",
    "gender": "Male",
    "age": 65,
    "number": 108
  }, {
    "id": 2,
    "first_name": "Garland",
    "last_name": "Theakston",
    "gender": "Female",
    "age": 12,
    "number": 32
  }, {
    "id": 3,
    "first_name": "Lorri",
    "last_name": "Sparrowe",
    "gender": "Female",
    "age": 69,
    "number": 102
  }, {
    "id": 4,
    "first_name": "Klara",
    "last_name": "Derington",
    "gender": "Female",
    "age": 55,
    "number": 34
  }, {
    "id": 5,
    "first_name": "Monty",
    "last_name": "Dutton",
    "gender": "Male",
    "age": 23,
    "number": 59
  }, {
    "id": 6,
    "first_name": "Jolene",
    "last_name": "Gillease",
    "gender": "Female",
    "age": 73,
    "number": 109
  }, {
    "id": 7,
    "first_name": "Kalie",
    "last_name": "Berthelet",
    "gender": "Female",
    "age": 77,
    "number": 113
  }, {
    "id": 8,
    "first_name": "Camila",
    "last_name": "Oxlee",
    "gender": "Female",
    "age": 18,
    "number": 134
  }, {
    "id": 9,
    "first_name": "Nelli",
    "last_name": "Scroxton",
    "gender": "Female",
    "age": 67,
    "number": 90
  }, {
    "id": 10,
    "first_name": "Bryn",
    "last_name": "Durrett",
    "gender": "Female",
    "age": 69,
    "number": 11
  }]
  
  const GENDER = {
      F: 'Female',
      M: 'Male'
  }
  
  function mapGender(user) {
      let gender
      if (user.gender === 'Female') {
        gender = GENDER.F
      } else {
        gender = GENDER.M
      }
      return {
        ...user,
        status: getStatus(user.age),
        stav_Uctu: getMoney(user.number),
        gender,
      }
    }
  
    const MoneyStatus =  {
      Bohaty: 'Bohaty',
      Chudoba: 'Smutny'
    }
  
    function getMoney(number) {
      if(number > 100) {
        return MoneyStatus.Bohaty
      } else return MoneyStatus.Chudoba
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
       if (age > 0 && age <= 18) {
        return STATUSES.dieta
      } else if (age >= 19 && age <= 65) {
        return STATUSES.dospely
      } else {
        return STATUSES.senior
      }
    }
  
    console.log(users.map(mapGender))
  
    function getAge() {
       let sumAge = 0;
       let sumAge1 = 0;  
  
       for (let val of users) {
        sumAge1 += val.number;
      }
  
      users.forEach(val => sumAge += val.age);
      console.log(sumAge1);
      console.log(sumAge);
    }
  console.log(getAge());
  
  function avrAgeFor() {
    let sumAge = 0;
  
    for(let i = 0; i < users.length; i++) {
      sumAge += users[i].age;
    }
    return sumAge;
  }
  
  console.log(avrAgeFor());    