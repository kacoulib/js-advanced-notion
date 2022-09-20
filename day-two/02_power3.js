const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumbers = numbers.map( num => num % 3 ? num**3 : num );

console.log(newNumbers);
