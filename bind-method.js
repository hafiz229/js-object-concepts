const student = {
  id: 101,
  money: 5000,
  name: "Rahim",
  major: "mathematics",
  treatDey: function (expense) {
    this.money = this.money - expense;
    console.log(this);
    return this.money;
  },
};
const heroBalam = {
  id: 102,
  money: 6000,
  name: "Hero Balam",
};

// student.treatDey(100);

const heroTreatDey = student.treatDey.bind(heroBalam);
heroTreatDey(500);
