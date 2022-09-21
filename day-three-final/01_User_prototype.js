class User {
  constructor(name, lastname, age, notes) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.notes = notes;
  }
}

const Alan = new User("Alan", "Phi", 45, [15, 17, 13]);
const Bernad = new User("Bernad", "Lu", 78, [11, 12, 9]);
const Sophie = new User("Sophie", "Boo", 56, [10, 15, 11]);
const Alice = new User("Alice", "Car", 45, [5, 18, 20]);

// On ajoute sur le constructeur lui-même la propriété
User.prototype.fullName = function () {
  return this.name + " " + this.lastname;
};
// On ajoute sur le constructeur lui-même la propriété
User.prototype.average = function () {
  return this.notes.reduce((acc, curr) => acc + curr) / this.notes.length;
};

console.log(Alan.fullName(), Alan.average());
