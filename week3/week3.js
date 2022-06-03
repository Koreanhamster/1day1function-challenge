// let 출석부 = ['흥민', '영희', '철수', '재석', '영희'];

// function isName(name) {
//   for (i = 0; i <= 출석부.length; i++) {
//     if (name == 출석부[i]) {
//       console.log('있어요!');
//       return;
//     }
//   }
// }

// isName('영희');

// 구구단짜기

// 인자값으로 받은 숫자의 구구단 출력
// function gogodan(a) {
//   for (let i = 1; i <= 9; i++) {
//     console.log(i * a);
//   }
// }

// gogodan(2)

//모든 구구단 출력
// function gogodan() {
//   for (let k = 2; k <= 9; k++) {
//     for (let i = 1; i <= 9; i++) {
//       console.log(i * k);
//     }
//   }
// }

// gogodan();

//평균점수 계산기 만들기

function cal(arr, b) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result = result + arr[i];
  }

  if (result / arr.length > b) {
    console.log(`${result / arr.length - b}만큼 떨어졌네요! 아쉽`);
  } else {
    console.log(`${b - result / arr.length}만큼 올랐네요! 축하`);
  }
}

cal([20, 30, 40], 20);
cal([40, 60, 80, 96], 76);
