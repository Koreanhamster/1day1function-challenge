// 출석부

let 출석부 = ['흥민', '영희', '철수', '재석', '영희'];

function 이름찾기(name) {
  for (let i = 0; i <= 출석부.length; i++)
    if (name == 출석부[i]) {
      console.log('있어요');
      return; //출력이 일어나면 바로 함수 종료
    }
}

이름찾기('영희');

// 구구단짜기

function 구구단() {
  for (let k = 2; k < 10; k++) {
    for (let i = 1; i <= 9; i++) {
      console.log(k * i);
    }
  }
}

구구단();
