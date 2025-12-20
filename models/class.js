class Student {
  constructor(id, name, grade, hobby) {
    this.id = id;
    this.name = name;
    this.grade = grade;
    this.hobby = hobby;
  }
}

class Factory {
  static createStudent(item) {
    let { id, name, grade, hobby } = item;
    return new Student(id, name, grade, hobby);
  }
  static createManyStudent(items) {
    let item = items.map((it) => {
      return this.createStudent(it);
    });
    return item;
  }
}
module.exports = Factory;
