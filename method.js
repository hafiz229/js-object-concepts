const student = {
  id: 101,
  money: 5000,
  name: "Rahim",
  major: "mathematics",
  isRich: false,
  subjects: ["english", "economics", "math 101", "calculus"],
  bestFriend: {
    name: "Karim",
    major: "mathematics",
  },
  takeExam: function () {
    console.log(this.name, "Taking exam");
  },
  treatDey: function (expense, tips) {
    this.money = this.money - expense - tips;
    return this.money;
  },
};

// student.takeExam();
const remaining1 = student.treatDey(900, 100);
const remaining2 = student.treatDey(500, 50);
console.log(remaining2);
