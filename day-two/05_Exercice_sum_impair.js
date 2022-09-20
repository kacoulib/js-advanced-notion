const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumOdd = numbers.reduce((acc, curr) => curr % 2 ? curr + acc : acc , 0 );

console.log(sumOdd);