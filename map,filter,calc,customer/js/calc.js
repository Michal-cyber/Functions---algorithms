function factorialMultiply(first, num) {
       let result = 0,
            fac = 1,
            arr = [];
    if(num > 0) {
        if (num === 0 ) return 1;
      while (num >= 1) {
        result = first * num;
        fac = num * fac;
        arr.push(result);
        num--;
        }

    console.log(fac);
    console.log(arr[0]);
    console.log(arr.reverse());
    } else {
        console.error(`Neplatna hodnota ${num}`);
    }
}

function calc(op = '+', a, b) {
    let x;
    const min = -9999,
          max = 9999;
          
        if(typeof a !== 'number' || (typeof b !== 'number' && b != null)) {
            return console.error('Poprosim aby si sem daval len cisla');
        } else {
             if (op === '+' ) {
                     x = a+b;
              } else if (op === '-' ) {
                     x = a-b;
              } else if (op === '*' ) {
                     x = a*b;  
              } else if (op === '/' ) {
                  if(b === 0) {
                     x = console.error(`Delime hadaj cim: ${b}`);
                  } else {
                      x = a/b;
                  }     
              } else if (op === 'pow' ) {
                      x = Math.pow(a,b);
              } else if (op === 'sqrt' ) {
                  if(a > 0 ) {
                    if (b == null ) {
                        x = Math.sqrt(a);
                    } else if( b > 0) {
                                x = Math.sqrt(a) + ' ' +  Math.sqrt(b);
                            } else {
                                x = console.error(`Snazis sa urobit nemyslitelne, minusova hodnota v odmocnine: ${b}`);
                            }
                  } else {
                      x = console.error(`Snazis sa urobit nemyslitelne, minusova hodnota v odmocnine: ${a}`);;
                  }
                    
                  } else if (op === 'log' ) {

                      if (a === 0 ) {
                        x = NaN;
                      } else if (b == null) {
                         return x = Math.log(a);
                      } else {
                          x = Math.log(a) + ' ' +  Math.log(b);
                      }
                  } else if ( op === 'fac') {
                      x = factorialMultiply(a,b);
                    }
                else {
                        return console.error(`Koncime hadam, pretoze OP neexistuje: ${op}`);
                    }

                    // Osetrujeme vysledok aby bol v rozmedzi min a max
                  if ( x < min || x > max) {
                    return console.error(`Prepac, ale vysledok musi byt v rozmedzi ${min} a ${max}`);
                  } else {
                     return x;
                  }   
           }     
}


