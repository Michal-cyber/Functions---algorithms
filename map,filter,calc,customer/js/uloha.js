shirts = [{
  "id": 1,
  "price": 118,
  "size": "3XL"
}, {
  "id": 2,
  "price": 104,
  "size": "XL"
}, {
  "id": 3,
  "price": 92,
  "size": "S"
}, {
  "id": 4,
  "price": 98,
  "size": "2XL"
}, {
  "id": 5,
  "price": 114,
  "size": "3XL"
}, {
  "id": 6,
  "price": 81,
  "size": "XL"
}, {
  "id": 7,
  "price": 45,
  "size": "L"
}, {
  "id": 8,
  "price": 48,
  "size": "3XL"
}, {
  "id": 9,
  "price": 48,
  "size": "3XL"
}, {
  "id": 10,
  "price": 51,
  "size": "L"
}, {
  "id": 11,
  "price": 104,
  "size": "XL"
}, {
  "id": 12,
  "price": 113,
  "size": "M"
}, {
  "id": 13,
  "price": 64,
  "size": "L"
}, {
  "id": 14,
  "price": 95,
  "size": "S"
}, {
  "id": 15,
  "price": 98,
  "size": "XL"
}, {
  "id": 16,
  "price": 52,
  "size": "M"
}, {
  "id": 17,
  "price": 103,
  "size": "3XL"
}, {
  "id": 18,
  "price": 40,
  "size": "S"
}, {
  "id": 19,
  "price": 56,
  "size": "XS"
}, {
  "id": 20,
  "price": 63,
  "size": "M"
}]

const SIZES = {
    totalXS: '0',
    totalS: '0',
    totalM: '0',
    totalL: '0',
    totalXL: '0',
    total2XL: '0',
    total3XL: '0',
}

const SIZESFOREACH = {
  'XS': 0,
  'S': 0,
  'M': 0,
  'L': 0,
  'XL': 0,
  '2XL': 0,
  '3XL': 0,
}

// Mapujem pole a pridavam tam 15%
function mapStatusPrice(shirt) {
  
  const price = 1.15;
  if(shirt.size === 'M' || shirt.size === 'L'  ) {
    shirt.price = Math.round(shirt.price * price);
   } 

  return {
    ...shirt,
    price: shirt.price
  }
}

function FilterSizeStatusXL(shirt) {
  return (shirt.size === 'L' || shirt.size === 'XL' ); 
}

function Filter1Price80(shirt) {
  return (shirt.price <= 80); 
}


// kolko je triciek roznych velkosti 
// musi to mat rovnaky nazov!
function HowMany() {
 shirts.forEach(shirt => {
  SIZESFOREACH[shirt.size]++;
 });

 return SIZESFOREACH;
}

function HowManyForOf() {
  for(let val of shirts) {
    switch(val.size) {
      case 'XS':
        SIZES.totalXS++;
        break;
      case 'S':
        SIZES.totalS++;
        break;
      case 'M':
        SIZES.totalM++;
        break;
      case 'L':
        SIZES.totalL++;
        break;
      case 'XL':
        SIZES.totalXL++;
        break;
      case '2XL':
        SIZES.total2XL++;
        break;
      case '3XL':
        SIZES.total3XL++;
        break;
    }
  }
  return SIZES;
}

function HowManySwitchWhile() {
  let i = 0;

  while( i <= shirts.length) {
    switch(shirts[i].size) {
      case 'XS':
        SIZES.totalXS++;
        break;
      case 'S':
        SIZES.totalS++;
        break;
      case 'M':
        SIZES.totalM++;
        break;
      case 'L':
        SIZES.totalL++;
        break;
      case 'XL':
        SIZES.totalXL++;
        break;
      case '2XL':
        SIZES.total2XL++;
        break;
      case '3XL':
        SIZES.total3XL++;
        break;
    }
    i++;
  }

  return SIZES;

}

function HowManySwitchFor() {
  for(let i = 0; i < shirts.length; i++) {
    switch(shirts[i].size) {
      case 'XS':
        SIZES.totalXS++;
        break;
      case 'S':
        SIZES.totalS++;
        break;
      case 'M':
        SIZES.totalM++;
        break;
      case 'L':
        SIZES.totalL++;
        break;
      case 'XL':
        SIZES.totalXL++;
        break;
      case '2XL':
        SIZES.total2XL++;
        break;
      case '3XL':
        SIZES.total3XL++;
        break;
    }
  }
  return SIZES;
}

function refactor(cond) {
  let i = 0,
  sumPrice = 0;

  switch(cond) {
    case 'for':
      computedAvgPriceFor();
      break;
      case 'while':
        while( i < shirts.length) {
          sumPrice += shirts[i].price
          i++ 
        }
      break;
      case 'for of':
        for(let val of shirts) {
          sumPrice += val.price 
        }
      break;
      case 'foreach':
        computedAvgPriceForEach();
      break;
      default:
        console.log('zadaj hodnotu'); 
  }
return sumPrice/shirts.length;
}


// Priemerna cena roznymi sposobmi
function computedAvgPriceForEach() {
     let sumPrice = 0;
     shirts.forEach(val => sumPrice += val.price );
     return sumPrice/shirts.length;
}

function computedAvgPriceFor() {
  let sumPrice = 0;
  for(let i = 0; i < shirts.length; i++) {
      sumPrice += shirts[i].price;
  }
  return sumPrice/shirts.length;
}

function computedAvgPriceWhile() {
  let sumPrice = 0;
  let i = 0;
  while(i < shirts.length) {
      sumPrice += shirts[i].price
      i++
  }
  return sumPrice/shirts.length;
}

const mappedArray = shirts.map(mapStatusPrice);

console.log(mappedArray);
