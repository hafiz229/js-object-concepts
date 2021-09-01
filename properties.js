const bottle = {
  color: "yellow",
  hold: "water",
  price: 50,
  isCleaned: true,
};
// get all properies names
const keys = Object.keys(bottle);
// console.log(keys);
// get all values
const values = Object.values(bottle);
// console.log(values);
// get all key,value pair
const pairs = Object.entries(bottle);
// console.log(pairs);
// seal an object that it's properties can't be deleted
// Object.seal(bottle);
Object.freeze(bottle);
bottle.price = 100;
// delete a property from an object
delete bottle.isCleaned;
console.log(bottle);
