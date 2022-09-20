const populations = [
    { "id": 0, "name": "Alan" },
    { "id": 1, "name": "Albert" },
    { "id": 2, "name": "Jhon" },
    { "id": 3, "name": "Brice" },
    { "id": 4, "name": "Alexendra" },
    { "id": 5, "name": "Brad" },
    { "id": 6, "name": "Carl" },
    { "id": 7, "name": "Dallas" },
    { "id": 8, "name": "Dennis" },
    { "id": 9, "name": "Edgar" },
    { "id": 10, "name": "Erika" },
    { "id": 11, "name": "Isaac" },
    { "id": 12, "name": "Ian" }
];

/*

- 1. Parcourez le tableau populations et ajoutez un champ count qui compte le nombre d'occurence(s) de a, dans les noms. Utilisez un for of.
*/

for (const pop of populations) {
    const { name } = pop;
    const letters = [...name];
    const count = letters.reduce((acc, curr) => { if (["a", "l"].includes( curr.toLowerCase() ) ) return acc += 1; else return acc; }, 0);

    pop.count = count;
}

console.log(populations);

// Ordonnez en fonction du nombre d'occurence

populations.sort((p1, p2) => p1.count - p2.count);
console.log(populations);
