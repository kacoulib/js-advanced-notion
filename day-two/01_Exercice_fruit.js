let fruits =  ['Apple', 'Orange'];

let newFruits = fruits;

newFruits.push('Banana')

console.log(newFruits === fruits);

// 2 nouveau tableau

newFruits = [];

for(const fruit of fruits){
    newFruits.push(fruit);
}

console.log(newFruits === fruits);

// Comme c'est un tableau de valeurs primitives simple, on peut faire une copie peu profonde à l'aide du spread operator

newFruit =[ ...fruits ];