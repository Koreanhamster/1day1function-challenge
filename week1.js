//2022.5.16
//1.윤년구하기
//전제조건
//4로 나누어떨어지는 해는 윤년이다
//하지만 100으로 나누어떨어지는 해는 윤년이 아니다
//하지만 400으로 나누어떨어지는 해는 윤년이다
// function isLeapYear(year) {
//   return (year % 4 === 0 && year % 100 != 0) || year % 400 === 0;
// }

// console.log(`2020년은 윤년인가요? ${isLeapYear(2020)}`);

// //2.a부터 b까지 합 구하기
// function sumAll(a, b) {
//   let output = 0;
//   for (let i = a; i <= b; i++) {
//     output += i;
//   }
//   return output;
// }

// console.log(sumAll(5, 19));

// //곱도 구해보자
// function multiflyAll(a, b) {
//   let output = 1;
//   for (let i = a; i <= b; i++) {
//     output *= i;
//   }
//   return output;
// }

// console.log(multiflyAll(4, 12));

//5.17
//[22,456,785,23,90]중에서 최솟값 구하기
function getMin(array) {
  let output = array[0];
  for (let item of array) {
    if (output > item) {
      output = item;
    }
  }
  return output;
}

const myArray = [22, 456, 785, 23, 90];
console.log(`${myArray}중 가장 작은 숫자는 ${getMin(myArray)}`);
