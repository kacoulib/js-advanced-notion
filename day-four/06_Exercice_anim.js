// min and max included
const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/*
    Anim is a promise function that return a number between 1 and 9 and a char between A and X
*/
const anim = () => {
  return new Promise((resolve) => {
    const number = randomIntFromInterval(1, 9);
    const char = String.fromCharCode(randomIntFromInterval(65, 88));
    resolve({ number, char });
  });
};

async function init() {
  let concat = "";

  for (let i = 0; i < 10; i++) {
    const { number, char } = await anim();
    concat += number + char + " ";
  }
  console.log(concat);
}
init();

/*
    1.) Utilisez fetch pour récupérer les utilisateurs. Vous enregistrerez les noms et coordonnées GPS dans une structure de données.

    2.) Enregistrez ces données dans un fichier à part en utilisant le module fs.

*/

const fetch = require("node-fetch");
const fs = require("fs");

const url = "https://jsonplaceholder.typicode.com/users";

const filePromise = (url) => {
  return new Promise((resolve, reject) => {
    fs.readFile(url, { encoding: "utf8" }, (err, data) => {
      if (err) {
        reject(new Error("File read failed:"));
        return;
      }
      resolve(data);
    });
  });
};

const fileWrite = (url, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(url, data, (err) => {
      if (err) {
        reject(new Error("File write failed:"));
        return;
      }
      resolve(data);
    });
  });
};

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const { name, address } = data;
    const { lat, lng } = address.geo;
    const data = { name, lat, lng };
    return data;
  })
  .then((data) => {
    fileWrite("./data/users.json", data);
  });
