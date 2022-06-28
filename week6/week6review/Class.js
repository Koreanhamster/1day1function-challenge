class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    return `안녕 나는 ${String(this.name)}이야`;
  }
}

let 학생1 = new Student('허지현', 15);

console.log(학생1.sayHi());
