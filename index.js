// General utils
const compose = (...fns) => (arg) => fns.reduceRight((res, fn) => fn(res), arg);

const pipe = (...fns) => (arg) => fns.reduce((res, fn) => fn(res), arg);

const deepClone = (itemToClone) => JSON.parse(JSON.stringify(itemToClone));

const randomNumberInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const randomChar = () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
  
    return alphabet[Math.floor(Math.random() * alphabet.length)];
};

const randomString = (length) => {
    let result = '', characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

   return result;
};


// Arrays utils
const uniqueItemsArray = (array) => [...new Set(array)];

const oddsItemsArray = (array) => array.filter(el => el % 2);

const evenItemsArray = (array) => array.filter(el => !(el % 2));

const sumItemsArray = (array) => array.reduce((sum, curr) => sum + curr, 0);

const randomItemArray = (array) => array[Math.floor(Math.random() * array.length)];

const clearArray = (array) => array.length = 0;

const maxItemArray = (array) => Math.max(...array);

const minItemArray = (array) => Math.min(...array);

const mergeArrays = (...arrays) => [].concat(...arrays);

const mergeUniqueArrays = (...arrays) => [...new Set(mergeArrays(...arrays))];

const fibArray = (length) => {
    const numberArray = [0 , 1];

    for (let i = 3; i <= length; i++) {
        const fibNext = numberArray[numberArray.length - 1] + numberArray[numberArray.length - 2];

        numberArray.push(fibNext);
    }

    return numberArray;
};


// Math utils
const isPowOfTwo = (num) => (Math.log(num)/Math.log(2)) % 1 === 0;

const powOfTwo = (power) => Math.pow(2, power);

const pow = (num, power) => Math.pow(num, power);

const radsToDegrees = (radians) => radians * (180/Math.PI);

const degreesToRads = (degrees) => degrees * (Math.PI/180);

const fibSum = (length) => fibArray(length).reduce((sum, curr) => sum + curr, 0);
