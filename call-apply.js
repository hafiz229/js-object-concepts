const student = {
  id: 101,
  money: 5000,
  name: "Rahim",
  major: "mathematics",
  treatDey: function (expense, tips) {
    this.money = this.money - expense - tips;
    console.log(this);
    return this.money;
  },
};
const heroBalam = {
  id: 102,
  money: 6000,
  name: "Hero Balam",
};

// call
// student.treatDey.call(heroBalam, 500, 50);
// student.treatDey.call(heroBalam, 300, 100);

student.treatDey.apply(heroBalam, [500, 100]);
