"use strict";

/*
let hasDriverLicense = false;
const passTest = true; 

if (passTest){
    hasDriverLicense = true;
    console.log('I can drive now');
}
*/
/*
function logger(){
    console.log('My name is Arafat')
}

logger();

function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(54, 0);
console.log(appleJuice);
*/

/*
// Function Declaration
const age1 = calcAge1(1991);

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

// You can call a function declaration before it is declared.

//  Function Expression

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age2, age1);

// You can't call a function expression before it is declared

function cutFruitPieces(fruit) {
  return fruit * 3;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/

/*
function calcAge1(birthYear) {
    let year = new Date().getFullYear();
    // console.log(year);
    return year - birthYear;
  }

  function retirementYear(age) {
    return 65 - age;
  }

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge1(birthYear);
    const retirement = retirementYear(age);
    
    if (retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
}

console.log(yearsUntilRetirement(2002, 'Arafat'));
console.log(yearsUntilRetirement(1950, 'Mike'));

*/

// Challenge 1
// function storeData(score1, score2, score3){
    //     const avg = calcAverage(score1, score2, score3);
    //     return avg;
    // }

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);


const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins...');
    }
}; 

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(avgDolphins2, avgKoalas2);
