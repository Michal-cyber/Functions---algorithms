// vypiseme dni v tyzdni, vrati mi den v tyzdni
function Tyzden(e) {
    let den = "";
    switch(e) {
        case 1:
            den = "Pondelok";
            break;
        case 2:
            den = "Utorok";
            break;  
        case 3:
            den = "Streda";
            break;  
        case 4:
            den = "Stvrtok";
            break;  
        case 5:
            den = "Piatok";
            break;  
        case 6:
            den = "Sobota";
            break;  
        case 7:
            den = "Nedela";
            break;
        default:
            den = "Nepoznam tento den";      
    }
    console.log(`Dnes je ${den}`);
}

function swap(tmp, index1, index2 ) {
 
    tmp = index1;
    index1 = index2;
    index2 = tmp;
  
  
}

// Usporiadanie pola cez for Bubble sort
function BubbleSort(n) {
  if(typeof n !== 'number') {
    return console.error;
  } 
  n = n.toString().split("");

    for(let i = 0; i < n.length; i++) {
      for(let j = 1; j < n.length; j++) {
        if(n[j] > n[j-1]) {
         tmp = parseInt(n[j]);
         n[j] = parseInt(n[j-1]);
         n[j-1] = parseInt(tmp);   
        }
       
      }
    }

     n = parseInt(n.join(""));
    return n;
}

//Usporiadanie pola Insertion sorting
function InsertionSort() {
  const arr = [9,8,5,1,4,2,10,15,13,25,18];
  for(let i = 1; i< arr.length; i++) {
    let current = arr[i];
    var j = i-1;
    while( j>= 0 && arr[j] > current) {
      arr[j+1] = arr[j];
      j--
    }
    arr[j+1] = current;
  }
}



function Sum(a,b,op = '+') {
    let x = 0;
     switch(op) {
        case '+':
          x = a+b;
         break;
        case '-':
           x = a-b;
           break;
         case '*':
           x = a*b;
           break;
        case '/':
        if(b === 0) {
          return Error;
        }
          x = a/b;
          break;
        default:
          return Error;
    }
    return x;
  }
  
const STATUSES = {
    dieta: 'dieta',
    tinedzer: 'tinedzer',
    dospely: 'dospely',
    dochodca: 'dochodca',
    mrtvola: "pravdepodobne mrtvy"
  }
  
  function humanAge(age) {
      if(age <= 12 && age >= 0) {
        age = STATUSES.dieta
    } else if(age >= 12 && age <= 19) {
      age = STATUSES.tinedzer
    } else if(age >= 20 && age < 65) {
      age = STATUSES.dospely
    } else if(age >= 65 && age <= 100) {
      age = STATUSES.dochodca
    } else if( age >= 100) {
      age = STATUSES.mrtvola
    } else if (age <= 0) {
      age = "nenarodeny";
    }
    console.log(age);
  }

