const read = require('readline-sync');
// 1: Primitív típusok
// number
const a = 1;
// string
const string = 'valami';
// boolean
const ok = true;
Összetett típusok:
// 1D array
const arr = [1, 2, 3, 4, 5];
// object
const student = {
  name: name,
  adress: adress
};

// a primitív típusok (number, boolean) érték szerint adódik át, az array, az object referencia szerint
// a refencia szerinti átadáskor a formális paraméter címe adódik át, így ha függvényen belül változik a paraméter, akkor
minden más helyen is
// érték szerinti paraméter átadáskor az aktuális paraméter a formális paraméter értékét kapja meg, a függyvény scope-ján kívül a
változó értéke nem változik meg
// példa referencia szerinti átadásra:
// const ref =(sourcearray) => {
//  for (let i = 0; i < sourcearray.length; i++) {
      sourcearray[i] += 5;
}
}
// const array = [1,2,3]
// ref(array) ---> a tömb tartalma megváltozik

// const val = (data) => {
    data += 5;
    return data
}
// const number =1;
// consol.log(val(number)) ---> 6
// consol.log(number) ---> 1
// 3
// Összeadás tétele: adot egy tömb, ennek a tömbnek az eleminek az összegét kell megadnunk.
const summary = (source) => {
  let sum = 0;
  for (let i=0;i<source.length; i++) {
    sum += source[i];
  }
  return sum;
}
// 4
// Megszámlálás tétele: adott egy tömb és egy keresett tulajdonság, a feladat, hogy megadjuk,
// hány db olyan elem van a tömbben, amely rendelkezik ezzel a tulajdonsággal

// pl. hány db páros szám van a tömbben
const counting =(source) => {
  let counter = 0;
  for (let i=0;i<source.length; i++) {
    if (source[i] % 2 === 0) {
      counter++;
    }
  }
  return counter;
}
// 5
const task5 = (item) => {
  switch item {
    case 1:
    // code1
    break;
    case 2:
      // code2
      break;
    default:
    // code defaults
  }
}
// 6
// metszet tétele: két tömb közös elemeinek megkeresése és tárolása

const section =(source1, source2) => {
  let solution =[];
  for (let i=0; i< source1.length;i++) {
    let j =0;
    while (j <= source2.length && source1[i] !== source2[j]) {
      j++;
    }
    if (j <= source2.length) {
      solution.push(source1[i])
    }
  }
  return solution
}
 const arr1 = [1,2,3,4,5,6,7]
const arr2 = [4,5,6,7,8,9]
console.log(section(arr1, arr2))

// 7
const add = (number1, number2) => {
  return number1 + number2
}
const subtract = (number1, number2) => {
  return number1 - number2
}
const mult = (number1, number2) => {
  return number1 * number2
}
const div = (number1, number2) => {
  return number1 / number2
}

modele.exports = {
  add: add,
  subtract: subtract,
  mult: mult,
  div: div
}

// 8
const task5 = (n, m) => {
  const matrix = [];
  let exponent = -1;
  for (let i = 0; i < n; i++) {
    const sor = [];
    for (let j = 0; j < m; j++) {
      exponent++;
      sor[j] = Math.pow(2, exponent);
    }
    matrix.push(sor);
  } return matrix;
};

const number1 = read.question('Első szám: ');
const number2 = read.question('Második szám: ');

console.log(task5(number1, number2))
; 
