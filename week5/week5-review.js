// 1. make a string out of an array
const fruits = ['apple', 'banana', 'orange'];

let result = fruits.join();

console.log(result);

//2. make an array out of a string
const fruitsString = '🍎,🍏,🍊,🍓';

let makeArray = fruitsString.split(',', 2);

console.log(makeArray);

//3. make this array look like this: [5,4,3,2,1]
const reverse = [1, 2, 3, 4, 5];

let makeReverse = reverse.reverse();

console.log(reverse);

//4. make new array without the first two elements
const arraySplice = [1, 2, 3, 4, 5];

let newSplice = [...arraySplice];

console.log(newSplice.slice(2, 5));

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 18, true, 66),
  new Student('E', 18, true, 88),
];

// 05. find a student with the score 90

const over90 = students.find((students) => {
  return students.score === 90;
});

console.log(over90);

// 06. make an array of enrolled studends
const enrolled = students.filter((students) => {
  return students.enrolled === true;
});

console.log(enrolled);

// 07. make an array containing only the students' scores result sould be : [45, 80, 90, 66, 88]
const scores = students.map((students) => {
  return students.score;
});

console.log(scores);

// 08. check if there is a student with the score lower than 50
const lower50 = students.some((students) => {
  return students.score <= 50;
});

console.log(lower50);

//09. compute student's average score
const average = students.reduce((prev, curr) => {
  return prev + curr.score;
}, 0);

console.log(average / 5);

//10. make a string containin all the scores
// result should be: '45, 80, 90, 66, 88'
const makeString2 = students
  .map((students) => {
    return students.score;
  })
  .join();

console.log(makeString2);

//위 문제에서 string을 만들긴 만드는데 점수가 50점 이상인 애들로만 만들어보세요
const makeString3 = students
  .map((students) => {
    return students.score;
  })
  .filter((score) => {
    return score > 50;
  })
  .join();

console.log(makeString3);

// do Q.10 sorted in asending order and make it a string
// result should be: '45, 66, 80, 88, 90'

const asending = students
  .map((students) => {
    return students.score;
  })
  .sort((a, b) => {
    return a - b;
  })
  .join();

console.log(asending);

/**
 * *Falsy인 깂
 * 0
 * -1
 * null
 * undefined
 * NaN
''
 */

/**
 *Truthy인 값
 1
 -1
 []
 {}
 'false'
 '0'

 */

let check = '';

if (check) {
  console.log('true일때만 출력');
}
