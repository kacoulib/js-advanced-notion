/**
 * 04 Reprenez l'objet numbers (array) de numériques et utilisez la méthode reduce pour calculer le max.
 */

 const numbers = [1, 2, 3, 4, 50, 6, 7, 8, 9, 10];

 const maxNumber = numbers.reduce((acc, curr) => curr > acc ? curr : acc , 0);
 
 console.log(maxNumber);