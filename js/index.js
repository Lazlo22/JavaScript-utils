let teslaX = {};
teslaX.model = 'Model X';
teslaX.brand = 'Tesla';
teslaX.price = 1200000;
teslaX.beep = beep;
console.log(teslaX.model);
teslaX.beep();

let teslaS = {
    model: 'Model S',
    brand: 'Tesla',
    price: 80000,
    beep: beep
}
console.log(teslaS.model);
teslaS.beep();

function beep() {
    console.log(this.brand + ' ' + this.model + ' beep-beep!');
}

function Car(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    return this;
}
Car.prototype.beep = beep;

let tavria = new Car('ZAZ', '"Tavria"', 500);
console.dir(tavria);
tavria.beep();

let slavuta = Object.create(tavria);
console.dir(JSON.stringify(slavuta));
// Wrong beep behavior 
slavuta.beep();
// Fixing beep behavior
slavuta.model = 'Slavuta';
console.dir(JSON.stringify(slavuta));
slavuta.beep();

const tavriaJSON = JSON.stringify(tavria);
console.log(tavriaJSON);
let tavriaNova = JSON.parse(tavriaJSON);
console.log(tavriaNova);

class SuperCar extends Car {
    constructor(brand, model, price) {
        super(brand, model, price);
    }
    beep() {
        console.log(`SuperCar ${this.brand} ${this.model} beep-beep!`);
    }
}

const ferrariLaFerrari = new SuperCar('Ferrari', 'LaFerrari', 300000);
ferrariLaFerrari.beep();
console.dir(ferrariLaFerrari);


const nums = [1,2,3,33,44,42,1,2,42,5];

const uniqueSet = new Set(nums);

const uniqNums = [...uniqueSet];

console.log(uniqNums);

const odds = uniqNums.filter( el  => el % 2 );
console.log(odds);

// [1, 3, 33, 5]
const sum = odds.reduce( (acc, el) => acc + el, 0);

console.log(sum);



// Code below is from js repo which was deleted

const a = parseInt(prompt("Enter the number: "));
const resultSum = fibSum(a);
const resultArray = fibArray(a);
const resultRecurse = fibRecurse(a);
alert("Here is Fibonacci number by sum: " + resultSum);
alert("Here is Fibonacci number by array: " + resultArray);
alert("Here is Fibonacci number by recurse: " + resultRecurse);
function fibSum (a) {
    let fibFirst = 1;
    let fibSecond = 1;
    for (let i = 3; i <= a; i++){
        let fibNext = fibFirst + fibSecond;
        fibFirst = fibSecond;
        fibSecond = fibNext;
    }
    return fibSecond;
}
function fibRecurse(a) {
    if (a <= 1){
        return a;
    }
    return fibRecurse(a - 1) + fibRecurse(a - 2);
}
function fibArray(a) {
    let numberArray = [1 , 1];
    for (let i = 3; i <= a; i++) {
        let fibNext = numberArray[numberArray.length - 1] + numberArray[numberArray.length - 2];
        numberArray.push(fibNext);
    }
    return numberArray[numberArray.length - 1];
}

// Code above is from js repo which was deleted


// Code below is from js3 repo which was deleted

//First Task
function animal(obj){
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
  }
  
  //Second Task
  function circleCircumference(circle) {
    return Math.PI*circle.radius*2; ;
  }
  
  //Third Task
  var myObj = {};
  MyObject.__proto__ = myObj;

// Code above is from js3 repo which was deleted