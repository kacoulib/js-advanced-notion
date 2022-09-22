const fs = require("fs");

const filePromise = (url) =>
  new Promise((resolve, reject) => {
    fs.readFile(url, { encoding: "utf8" }, (err, data) => {
      if (err) {
        reject(new Error("File read failed:"))
        return;
      }
     
      resolve(data);
    });
  });

  filePromise('./data/dragons.json').then( data => {
    const { dragons } =  JSON.parse(data);

    let oldDragon = { age : 0, name : null } ;
    for(const dragon of dragons){
        const { age, name  } = dragon;
        if(age > oldDragon.age){
            oldDragon.age = age;
            oldDragon.name = name;
        }
    }
    console.log(oldDragon);

    dragons.sort( (d1, d2) => d1.age - d2.age ) ;

    console.log(dragons.slice(-1));
    const { age: ageY, name : nameY } = dragons.slice(-1).shift(); 
    const { age: ageO, name : nameO } = dragons.slice(0,1).shift(); 

    console.log(`Le plus jeune : ${ageY} age ${nameY}`)
    console.log(`Le plus vieux : ${ageO} age ${nameO}`);

    dragons.sort( (d1, d2) => d2.age - d1.age ) ;

    console.log(dragons)

  });