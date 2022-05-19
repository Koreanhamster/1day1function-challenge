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
//3. [22,456,785,23,90]중에서 최솟값 구하기
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

let lowToHigh = function () {
  products.sort(function (a, b) {
    return a.price - b.price;
  });
  console.log(products);
};

lowToHigh();

//title의 정렬도 시도해보기
let stringOrder = function () {
  products.sort(function (a, b) {
    if (a.title < b.title) {
      return -1;
    } else if (a.title > b.title) {
      return 1;
    } else {
      return 0;
    }
  });
  console.log(products);
};

stringOrder();

//5월 19일
//369게임

function 삼육구(a) {
  //마지막숫자가 3,6,9로 끝나면 박수를 치고싶었다.
  //마지막숫자를 구하려면 일단 a를 문자열로 바꿔주자.
  let numbers = a.toString();
  if (
    //문자열.charAt메소드는 문자열에서 원하는 인덱스에 있는 문자를 돌려준다고 한다. 새로배움
    //원래 string.charAt(0)형태로 치면 처음부터 요소를 뽑아주지만
    //내가 원하는건 맨 마지막 문자의 인덱스를 가져고오고싶기 때문에 string.charAt(string.length -1)형태로 써야한다.
    numbers.charAt(numbers.length - 1) == 3 ||
    numbers.charAt(numbers.length - 1) == 6 ||
    numbers.charAt(numbers.length - 1) == 9
  ) {
    console.log('박수쳐');
  }
}

삼육구(16);
삼육구(3);
