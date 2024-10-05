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

/*
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


// challenge 2
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, total);

const arafat = {
    firstName: 'Arafat',
    lastName: 'Hossain',
    birthYear: 2002,
    job: 'student',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriverLicense: true,

    // calcAge: function (birthYear) {
    //     return 2021 - birthYear;
    // }

    calcAge: function () {
        this.age = 2021 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license`;
    }
}

console.log(arafat.getSummary());
*/

/*
// Challenge 3

const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    },
};

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    },
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
    console.log(
        `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`
    );
} else if (john.bmi > mark.bmi) {
    console.log(
        `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`
    );
}


const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
    }
  };
   
  const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
    }
  };
   
  mark.calcBMI();
  john.calcBMI();
   
  if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`)
  } else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)
  }
*/

/*
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

const Arafat = [
  "Arafat",
  "Hossain",
  2037 - 2002,
  "programmer",
  ["Michael", "Peter", "Steven"],
  true,
];

for (let i = 0; i < Arafat.length; i++){
    console.log(Arafat[i], typeof Arafat[i]);
}


const years = [1991, 2007, 1969, 2020];
const ages = [];

for(let i = 0; i < years.length; i++){ 
    ages.push(2037-years[i]);
}

console.log(ages);

// continue and break
console.log('---ONLY STRINGS---');

for (let i = 0; i < Arafat.length; i++){
    if (typeof Arafat[i] !== 'string') continue;
    console.log(Arafat[i], typeof Arafat[i]);
};

console.log('---BREAK WITH NUMBER---');

for (let i = 0; i < Arafat.length; i++){
    if (typeof Arafat[i] === 'number') break;
    console.log(Arafat[i], typeof Arafat[i]);
};
*/

const Arafat = [
    "Arafat",
    "Hossain",
    2037 - 2002,
    "programmer",
    ["Michael", "Peter", "Steven"],
    true,
  ];
