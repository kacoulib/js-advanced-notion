const fs = require("fs");

const filePromise = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: "utf8" }, (err, data) => {
      // impossible de lire le fichier
      if (err) {
        reject(err);
        return;
      }
      // success
      // JSON.parse permet de transformer un fichier JSON en un objet JSON JS
      resolve(data);
    });
  });
};

/*
- Changez le code ci-dessus et utilisez une promesse pour gérer la récupération des données au format JSON Object dans JS.
- Quel est le nom du dragon le plus agé ? Faite un script pour répondre à cette question.
- Quel est le nom du dragon le plus jeune ? Faite un script pour répondre à cette question.
- Récupérez les dragons et ordonnez les par age décroissant.
*/

// filePromise("./data/dragons.json").then((data) => {
//   const { dragons } = JSON.parse(data);

//   let oldDragon = { age: 0, name: null };

//   for (const dragon of dragons) {
//     if (dragon.age > oldDragon.age) {
//       oldDragon = dragon;
//     }
//   }
//   dragons.sort((a, b) => b.age - a.age);
//   console.log(oldDragon, dragons.slice(-1));
// });
async function fn() {
  try {
    const res = await Promise.all([
      filePromise("./data/dragons.json"),
      filePromise("./data/dragons.json"),
      3,
    ]);
    const { dragons } = JSON.parse(res[0]);

    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
fn();
