let numbers = [1, -2, 3, 4, -9, 6];

console.log(numbers.length);
numbers[2] = 0;
numbers.push(10);

function mapNumbers(number) {
  if (typeof number === 'number') {
    return number * 3
  } else return Error;   
}

console.log(numbers.map(mapNumbers));

function FilterNumber(number) {
    return number > 0;
}

console.log(numbers.map(mapNumbers).filter(FilterNumber));

function addNumber(...rest) {
  if (typeof rest === 'number') {
    return numbers.push(...rest);
  } else return Error;
    
}

function addNumberFor(arr) {
    for(let i = 0; i <= arr.length; i++ ) {
      numbers.push(i);
    }
}


function addNumberWhile() {
    let arr = [-2,-1,0,1,2],
        i = 0;
   while(i < arr.length) {
    numbers.push(arr[i]);
    i++
   }
}


function filterEvenOdd() { 
    arrFirst = [],
    arrSecond = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        arrSecond.push(numbers[i])
    } else {
        arrFirst.push(numbers[i])
    }
    
}
return arrSecond;
}

const evenNumber = filterEvenOdd();

function sumEven() {
    let sum = 0;
    evenNumber.forEach( val => sum += val)
    return sum;
}

function totalPositiveNumber() {
    let totalSum = 0;
    for(let i = 0; i <= evenNumber.length; i++)
    if (evenNumber[i] > 0) {
        totalSum++;
    }
    return totalSum;
}



/**
 * PRACA S DATAMI
 */

 people = [{
    "id": 1,
    "first_name": "Cully",
    "gender": "Male",
    "age": 4
  }, {
    "id": 2,
    "first_name": "Arabele",
    "gender": "Female",
    "age": 12
  }, {
    "id": 3,
    "first_name": "Winnie",
    "gender": "Female",
    "age": 27
  }, {
    "id": 4,
    "first_name": "Nicolette",
    "gender": "Female",
    "age": 26
  }, {
    "id": 5,
    "first_name": "Spence",
    "gender": "Male",
    "age": 58
  }, {
    "id": 6,
    "first_name": "Jessy",
    "gender": "Female",
    "age": 18
  }, {
    "id": 7,
    "first_name": "Dare",
    "gender": "Male",
    "age": 35
  }, {
    "id": 8,
    "first_name": "Patric",
    "gender": "Male",
    "age": 25
  }, {
    "id": 9,
    "first_name": "Kelila",
    "gender": "Female",
    "age": 13
  }, {
    "id": 10,
    "first_name": "Camala",
    "gender": "Female",
    "age": 30
  }, {
    "id": 11,
    "first_name": "Tatiana",
    "gender": "Female",
    "age": 10
  }, {
    "id": 12,
    "first_name": "Oren",
    "gender": "Male",
    "age": 48
  }, {
    "id": 13,
    "first_name": "Price",
    "gender": "Male",
    "age": 62
  }, {
    "id": 14,
    "first_name": "Fidole",
    "gender": "Male",
    "age": 67
  }, {
    "id": 15,
    "first_name": "Maybelle",
    "gender": "Female",
    "age": 43
  }, {
    "id": 16,
    "first_name": "Agretha",
    "gender": "Female",
    "age": 66
  }, {
    "id": 17,
    "first_name": "Tabbatha",
    "gender": "Female",
    "age": 9
  }, {
    "id": 18,
    "first_name": "Gibbie",
    "gender": "Male",
    "age": 13
  }, {
    "id": 19,
    "first_name": "Deni",
    "gender": "Female",
    "age": 44
  }, {
    "id": 20,
    "first_name": "Gayel",
    "gender": "Female",
    "age": 16
  }, {
    "id": 21,
    "first_name": "Zarla",
    "gender": "Female",
    "age": 39
  }, {
    "id": 22,
    "first_name": "Linnell",
    "gender": "Female",
    "age": 23
  }, {
    "id": 23,
    "first_name": "Zea",
    "gender": "Female",
    "age": 64
  }, {
    "id": 24,
    "first_name": "Vonni",
    "gender": "Female",
    "age": 58
  }, {
    "id": 25,
    "first_name": "Rufus",
    "gender": "Male",
    "age": 58
  }, {
    "id": 26,
    "first_name": "Celinda",
    "gender": "Female",
    "age": 8
  }, {
    "id": 27,
    "first_name": "Cass",
    "gender": "Female",
    "age": 36
  }, {
    "id": 28,
    "first_name": "Huey",
    "gender": "Male",
    "age": 59
  }, {
    "id": 29,
    "first_name": "Gaylor",
    "gender": "Male",
    "age": 49
  }, {
    "id": 30,
    "first_name": "Rodge",
    "gender": "Male",
    "age": 67
  }, {
    "id": 31,
    "first_name": "Patrizio",
    "gender": "Male",
    "age": 51
  }, {
    "id": 32,
    "first_name": "Jo-ann",
    "gender": "Female",
    "age": 14
  }, {
    "id": 33,
    "first_name": "Sargent",
    "gender": "Male",
    "age": 29
  }, {
    "id": 34,
    "first_name": "Ruggiero",
    "gender": "Male",
    "age": 14
  }, {
    "id": 35,
    "first_name": "Hendrika",
    "gender": "Female",
    "age": 52
  }, {
    "id": 36,
    "first_name": "Hermia",
    "gender": "Female",
    "age": 9
  }, {
    "id": 37,
    "first_name": "Heriberto",
    "gender": "Male",
    "age": 33
  }, {
    "id": 38,
    "first_name": "Robena",
    "gender": "Female",
    "age": 54
  }, {
    "id": 39,
    "first_name": "Fidole",
    "gender": "Male",
    "age": 19
  }, {
    "id": 40,
    "first_name": "Isadora",
    "gender": "Female",
    "age": 23
  }, {
    "id": 41,
    "first_name": "Eran",
    "gender": "Female",
    "age": 49
  }, {
    "id": 42,
    "first_name": "Gibbie",
    "gender": "Male",
    "age": 42
  }, {
    "id": 43,
    "first_name": "Penny",
    "gender": "Male",
    "age": 12
  }, {
    "id": 44,
    "first_name": "Belicia",
    "gender": "Female",
    "age": 45
  }, {
    "id": 45,
    "first_name": "Amye",
    "gender": "Female",
    "age": 11
  }, {
    "id": 46,
    "first_name": "Letty",
    "gender": "Female",
    "age": 51
  }, {
    "id": 47,
    "first_name": "Lock",
    "gender": "Male",
    "age": 57
  }, {
    "id": 48,
    "first_name": "Cristionna",
    "gender": "Female",
    "age": 66
  }, {
    "id": 49,
    "first_name": "Jorie",
    "gender": "Female",
    "age": 16
  }, {
    "id": 50,
    "first_name": "Wang",
    "gender": "Male",
    "age": 21
  }, {
    "id": 51,
    "first_name": "Worthington",
    "gender": "Male",
    "age": 41
  }, {
    "id": 52,
    "first_name": "Rosemarie",
    "gender": "Female",
    "age": 65
  }, {
    "id": 53,
    "first_name": "Janeva",
    "gender": "Female",
    "age": 63
  }, {
    "id": 54,
    "first_name": "Enid",
    "gender": "Female",
    "age": 14
  }, {
    "id": 55,
    "first_name": "Tomlin",
    "gender": "Male",
    "age": 39
  }, {
    "id": 56,
    "first_name": "Lexis",
    "gender": "Female",
    "age": 38
  }, {
    "id": 57,
    "first_name": "Celina",
    "gender": "Female",
    "age": 12
  }, {
    "id": 58,
    "first_name": "Glynnis",
    "gender": "Female",
    "age": 25
  }, {
    "id": 59,
    "first_name": "Sutherlan",
    "gender": "Male",
    "age": 36
  }, {
    "id": 60,
    "first_name": "Amye",
    "gender": "Female",
    "age": 8
  }, {
    "id": 61,
    "first_name": "Drona",
    "gender": "Female",
    "age": 59
  }, {
    "id": 62,
    "first_name": "Sheridan",
    "gender": "Male",
    "age": 58
  }, {
    "id": 63,
    "first_name": "Letizia",
    "gender": "Female",
    "age": 19
  }, {
    "id": 64,
    "first_name": "Brynn",
    "gender": "Female",
    "age": 4
  }, {
    "id": 65,
    "first_name": "Jourdan",
    "gender": "Female",
    "age": 46
  }, {
    "id": 66,
    "first_name": "Penny",
    "gender": "Female",
    "age": 4
  }, {
    "id": 67,
    "first_name": "Elle",
    "gender": "Female",
    "age": 42
  }, {
    "id": 68,
    "first_name": "Gayle",
    "gender": "Male",
    "age": 60
  }, {
    "id": 69,
    "first_name": "Garwood",
    "gender": "Male",
    "age": 65
  }, {
    "id": 70,
    "first_name": "Roger",
    "gender": "Male",
    "age": 38
  }, {
    "id": 71,
    "first_name": "Pooh",
    "gender": "Female",
    "age": 16
  }, {
    "id": 72,
    "first_name": "Janella",
    "gender": "Female",
    "age": 17
  }, {
    "id": 73,
    "first_name": "Fonzie",
    "gender": "Male",
    "age": 57
  }, {
    "id": 74,
    "first_name": "Edwin",
    "gender": "Male",
    "age": 44
  }, {
    "id": 75,
    "first_name": "Artie",
    "gender": "Male",
    "age": 15
  }, {
    "id": 76,
    "first_name": "Rolf",
    "gender": "Male",
    "age": 43
  }, {
    "id": 77,
    "first_name": "Christen",
    "gender": "Female",
    "age": 55
  }, {
    "id": 78,
    "first_name": "Stoddard",
    "gender": "Female",
    "age": 45
  }, {
    "id": 79,
    "first_name": "Corene",
    "gender": "Female",
    "age": 32
  }, {
    "id": 80,
    "first_name": "Renado",
    "gender": "Male",
    "age": 42
  }, {
    "id": 81,
    "first_name": "Camey",
    "gender": "Male",
    "age": 18
  }, {
    "id": 82,
    "first_name": "Ninnetta",
    "gender": "Female",
    "age": 39
  }, {
    "id": 83,
    "first_name": "Cass",
    "gender": "Male",
    "age": 44
  }, {
    "id": 84,
    "first_name": "Rita",
    "gender": "Female",
    "age": 18
  }, {
    "id": 85,
    "first_name": "Reynard",
    "gender": "Male",
    "age": 68
  }, {
    "id": 86,
    "first_name": "Elberta",
    "gender": "Female",
    "age": 25
  }, {
    "id": 87,
    "first_name": "Flss",
    "gender": "Female",
    "age": 56
  }, {
    "id": 88,
    "first_name": "Garrot",
    "gender": "Male",
    "age": 41
  }, {
    "id": 89,
    "first_name": "Neil",
    "gender": "Male",
    "age": 37
  }, {
    "id": 90,
    "first_name": "Aldo",
    "gender": "Male",
    "age": 49
  }, {
    "id": 91,
    "first_name": "Janice",
    "gender": "Female",
    "age": 58
  }, {
    "id": 92,
    "first_name": "Christie",
    "gender": "Female",
    "age": 53
  }, {
    "id": 93,
    "first_name": "Melisse",
    "gender": "Female",
    "age": 41
  }, {
    "id": 94,
    "first_name": "Kendrick",
    "gender": "Male",
    "age": 55
  }, {
    "id": 95,
    "first_name": "Richie",
    "gender": "Male",
    "age": 55
  }, {
    "id": 96,
    "first_name": "Hilario",
    "gender": "Male",
    "age": 23
  }, {
    "id": 97,
    "first_name": "Ranice",
    "gender": "Female",
    "age": 32
  }, {
    "id": 98,
    "first_name": "Ramona",
    "gender": "Female",
    "age": 9
  }, {
    "id": 99,
    "first_name": "Yorke",
    "gender": "Male",
    "age": 55
  }, {
    "id": 100,
    "first_name": "Giacinta",
    "gender": "Female",
    "age": 10
  }]

  const STATUSES = {
    dospely: 'adult',
    nedospely: 'not an adult',
  }
  
  const GENDER = {
      'Female': 0,
      'Male': 0,
    }
  
// return new array with status adult and not adult
function mapStatus(person) {
  return {
    ...person,
    status: getStatus(person.age)
  }
}

const mappedPerson = people.map(mapStatus);

  function HowMany() {
    people.forEach(person => {
        GENDER[person.gender]++;
    });
    console.log(GENDER);
    console.log('Male: ' + Math.round(GENDER.Male/people.length*100 ) +'%');
    console.log('Female: ' + Math.round(GENDER.Female/people.length*100 ) +'%');
}

function getStatus(age) {
  if (typeof age !== 'number' || age <= 0) {
    return 0
  }
  if (age >= 18 ) {
    return STATUSES.dospely
  } else {
    return STATUSES.nedospely
  }
}

function isAdult(person) {
  return person.status === STATUSES.dospely
}

function getTargetGroup(users = people, gender = 'Male', minAge = 18, maxAge = 65) {

let ArrFilter, arrFinal = [];
  if (gender === 'Male') {
    ArrFilter = users.filter(filterMale);
      for(let i = 0; i < ArrFilter.length; i++) {
        if (ArrFilter[i].age >= minAge & ArrFilter[i].age <= maxAge ) {
          arrFinal.push(ArrFilter[i]);
          }
      }
      
   } else if( gender === 'Female') {
    ArrFilter = users.filter(filterFemale);
      for(let i = 0; i < ArrFilter.length; i++)
        if (ArrFilter[i].age >= minAge & ArrFilter[i].age <= maxAge ) {
          arrFinal.push(ArrFilter[i]);
     }
   }
   return arrFinal;
}

const baseURL = 'https://kamar.at/?id=';
const tinedzerky = getTargetGroup(people, 'Female', 13, 19) 

function sendMail() {
  tinedzerky.forEach(val => console.log(`Ahoj ${val.first_name}, nove vydanie kamarata najdes na ${baseURL}${val.id}`));
}

function filterMale(man) {
  return man.gender === 'Male';
}

function filterFemale(female) {
  return female.gender === 'Female';
}


/**
 * 
 Napíšte (pseudo) kód funkciu, 
 ktorá má argumenty hodnotu mincí a 
 množstvo a 
 
 nájde minimálny počet mincí, 
 ktoré presne zodpovedajú danemu mnozstvu.

 Alebo vráťte -1, ak to nie je možné.
 
for(let i = 0; i <= 10; i++) {
  setTimeout(() => {console.log(i)}, i*1000);
}
*/

const coins = [10, 8, 5, 2];
 function getMinCount(coins, amount = 14) {
    let minCount = [];

    if( amount >= coins[0])
      while (amount >= coins[0]){
        if (amount >= coins[coins.length - 1]){
           amount -= coins[coins.length - 1];
           minCount.push(coins[coins.length - 1]);
        } 
    } else minCount = -1;

    return minCount;
 }

 function clone(rest) {
 let arr1 = [rest];
   arr1.push(rest);

   return arr1;
}