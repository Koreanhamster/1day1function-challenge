// 요일 확인 함수
// 월 a, 일 b를 입력받아 무슨 요일인지 리턴하는 함수를 완성하세요.

// getDay() : 일~토 (0~6)로 표현하기 때문에 "SUN"부터 배열에 넣기
// getMonth()도 0부터 시작
const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

function checkDay(a, b) {
  const theDay = new Date(`2022-${a}-${b}`);
  console.log(day[theDay.getDay()]);
}

// checkDay(6, 7);
// checkDay(6, 8);

// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

const array = ['🍌', '🍓', '🍇', '🍓'];

function replace(array, from, to) {
  const newReplace = Array.from(array);
  for (let i = 0; i <= newReplace.length; i++) {
    if (newReplace[i] === from) {
      newReplace[i] = to;
    }
  }
  return newReplace;
}

const result = replace(array, '🍌', '🥝');
console.log(result);
