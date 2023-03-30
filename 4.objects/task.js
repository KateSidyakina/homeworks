function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

new Student('Даня', 'мужской', 20);
new Student('Катя', 'женский', 19);
new Student('Гоша', 'мужской', 21);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.hasOwnProperty('marks') === false) {
    return 0;
  } else {
    this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function () {
  if (this.hasOwnProperty('marks') === false || this.marks.length === 0) {
    return 0;
  } else {
    const average = this.marks.reduce((acc, item) => acc += item / this.marks.length, 0);
    return average;
  }
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
