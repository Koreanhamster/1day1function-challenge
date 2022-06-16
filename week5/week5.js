//1. make a string out of an array
// const fruits = ['apple', 'banana', 'orange'];

//join API: 파라미터로 saperator를 넣을 수 있다.
// const string = fruits.join();
// const string = fruits.join('|');
// const string = fruits.join(', and ');

// console.log(string);

//2. make an array out of a string
// const fruitsString = '🍎,🍏,🍊,🍓';
//split API: 무엇을 기준으로 배열을 나눌건지 구분자를 정한다(필수)
//두번째 인자로 limit: 몇번째 인덱스까지 배열로 만들건지 정한다.
// const result = fruitsString.split(',');
// const result = fruitsString.split(',', 2);

// console.log(result);

//3. make this array look like this: [5,4,3,2,1]
// const reverse = [1, 2, 3, 4, 5];
// const resultReverse = reverse.reverse();
// console.log(resultReverse);
//원본매열 자체도 변화시키는걸 알 수 있다.
// console.log(reverse);

//4. make new array without the first two elements
// const arraySplice = [1, 2, 3, 4, 5];
// spice API: 첫번째 파라미터는 원본배열에서 어디서부터 지울건지, 두번째는 몇개를 지울건지
// const resultSplice = arraySplice.splice(0, 2);
// console.log(resultSplice);
//원본배열을 지우는것임!
// console.log(arraySplice);

// const arraySlice = [1, 2, 3, 4, 5];
//Returns a copy of a section of an array. (카피한 섹션을 리턴한다)
//This is exclusive of the element at the index 'end' (end파라미터는 배제된다)
// const resultSlice = arraySlice.slice(2, 5);
// console.log(resultSlice);
//원본배열은 바뀌지 않았다
// console.log(arraySlice);

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
// const findStudent = students.find((student) => {
//   return student.score === 90;
// });
// console.log(findStudent);

// 06. make an array of enrolled studends
// const enrolled = students.filter((student) => {
//   return student.enrolled === true;
// });
// console.log(enrolled);

// 07. make an array containing only the students' scores result sould be : [45, 80, 90, 66, 88]
// const containing = students.map((student) => {
//   return student.score;
// });
// console.log(containing);

// 08. check if there is a student with the score lower than 50
// const lower = students.some((student) => {
//   return student.score < 50;
// });
// console.log(lower);

//09. compute student's average score
const average = students.reduce((prev, curr) => {
  return prev + curr.score;
}, 0);
// console.log(average / students.length);

//10. make a string containin all the scores
// result should be: '45, 80, 90, 66, 88'
const makeString = students.map((student) => student.score).join();
// console.log(makeString);

//헷갈렸던거. students.score 자체에 join을 붙으면 당연히 먹지않는다.
// 왜? join은 배열에 붙는애고 score자체는 그냥 숫자니까!
const makeStringTest = students.map((students) => {
  return students.score;
});
// console.log(makeStringTest);
console.log(makeStringTest);

const getScore = students.map((student) => student.score);
// console.log(getScore.join());

//위 문제에서 string을 만들긴 만드는데 점수가 50점 이상인 애들로만 만들어보세요
const makeString2 = students
  .map((student) => student.score)
  .filter((score) => score >= 50)
  .join();

// console.log(makeString2);

// do Q.10 sorted in asending order and make it a string
// result should be: '45, 66, 80, 88, 90'
const asending = students
  .map((student) => student.score)
  .sort((a, b) => a - b)
  .join();
// console.log(asending);

const word = prompt('querty');

// function replaceAll(str, searchStr, replaceStr) {
//   return str.split(searchStr).join(replaceStr);
// }

// console.log(replaceAll(word, 'q', 'e'));

function replaceAll(str, searchStr, reaplaceStr) {
  console.log(str);
}

console.log(replaceAll('querty', 'q', 'e'));
