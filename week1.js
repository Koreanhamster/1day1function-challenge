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

// function sumAll(a, b) {
//   let output = 0;
//   for (let i = a; i <= b; i++) {
//     output += i;
//   }
//   return output;
// }

// console.log(sumAll(3, 5));

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
//3. [22,456,785,23,90]중에서 최솟값 구하기
// function getMin(array) {
//   let output = array[0];
//   for (let item of array) {
//     if (output > item) {
//       output = item;
//     }
//   }
//   return output;
// }

// const myArray = [22, 456, 785, 23, 90];
// console.log(`${myArray}중 가장 작은 숫자는 ${getMin(myArray)}`);

//5.18
//4. 가격낮은순으로 쏠팅하기

let products = [
  { id: 0, price: 70000, title: 'Blossom Dress' },
  { id: 1, price: 32000, title: 'Check Shirt' },
  { id: 2, price: 15000, title: 'Black Tie' },
  { id: 3, price: 67000, title: 'Springfield Shirt' },
  { id: 4, price: 82000, title: 'Red Mini Dress' },
];

// let lowToHigh = function () {
//   products.sort(function (a, b) {
//     return a.price - b.price;
//   });
//   console.log(products);
// };

// lowToHigh();

// title의 정렬도 시도해보기
// let stringOrder = function () {
//   products.sort(function (a, b) {
//     if (a.title < b.title) {
//       return -1;
//     } else if (a.title > b.title) {
//       return 1;
//     } else {
//       return 0;
//     }
//   });
//   console.log(products);
// };

// stringOrder();

//5월 19일
//369게임

// function 삼육구(number) {
//   let nums = number.toString().split('');
//   let clap = [];

//   for (let num of nums) {
//     if (num === '3' || num === '6' || num === '9') {
//       clap.push('짝👏');
//     }
//   }
//   return clap;
// }

// console.log(삼육구(369));
// console.log(삼육구(336699));
// console.log(삼육구(12));
// 삼육구(3);

//합격판독기

// function 그래서몇점인데(a, b) {
//   if (a < 0 || a > 100 || b < 0 || b > 100) {
//     console.log('장난치나');
//     return;
//   }

//   if (a < 40 || b < 40) {
//     console.log('불합격');
//   } else if (a + b >= 120) {
//     console.log('합격');
//   } else {
//     console.log('불합격');
//   }
// }

// 그래서몇점인데(70, 70);
// 그래서몇점인데(30, 100);
// 그래서몇점인데(50, 50);
// 그래서몇점인데(-10, 50);
// 그래서몇점인데(120, 50);
// 그래서몇점인데(70, 90);

//5.20
//정규식으로 이메일형식 검사하기
//알파벳@알파벳.알파벳 형식

// let input = function (email) {
//   if (/\S+@\S+\.\S+/.test(email) === false) {
//     console.log('유효한 이메일 아님');
//   } else {
//     console.log('유효합니다이!!');
//   }
// };

// input('ddd');
// input('ddd@ss');
// input('ddd@ddd.sss');
