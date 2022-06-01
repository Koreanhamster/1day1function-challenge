// // 출석부

// let 출석부 = ['흥민', '영희', '철수', '재석', '영희'];

// function 이름찾기(name) {
//   for (let i = 0; i <= 출석부.length; i++)
//     if (name == 출석부[i]) {
//       console.log('있어요');
//       return; //출력이 일어나면 바로 함수 종료
//     }
// }

// 이름찾기('영희');

// // 구구단짜기

// function 구구단() {
//   for (let k = 2; k < 10; k++) {
//     for (let i = 1; i <= 9; i++) {
//       console.log(k * i);
//     }
//   }
// }

// 구구단();

//평균점수 계산기 만들기
//첫 인자 배열안의 평균을 구해서 average변수에 넣기
// average보다 두번째 인자가 크면 평균보다 몇점이 올랐네요 출력
// average보다 두번째 인자가 작으면 평균보다 몇점이 떨어졌네요 출력

function cal(array, b) {
  let average = 0;

  //   //점수합구하기
  for (let i = 0; i < array.length; i++) {
    average = average + array[i];
  }

  //   //평균값 구하기
  let result = average / array.length;

  //   //평균값과 b값 비교해서 출력하기
  if (result > b) {
    console.log(`${result - a}점이나 떨어졌네요!`);
  } else {
    console.log(`${b - result}점이나 올랐네요!`);
  }
}

cal([10, 20, 30], 50);
