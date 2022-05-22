//1.윤년구하기
//전제조건
//4로 나누어떨어지면서 100으로는 나누어떨어지지 않아야 윤년이다
//하지만 400으로 나누어떨어지는 해는 윤년이다

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 != 0) || year % 400 === 0;
}

console.log(`1994년은 윤년인가요? ${isLeapYear(1994)}`);
console.log(`1994년은 윤년인가요? ${isLeapYear(2020)}`);

//a부터 b까지 합구하기
function sumAll(a, b) {
  let output = 0; //초기화
  for (let i = a; i <= b; i++) {
    output += i;
  }
  return output;
}

console.log(sumAll(8, 12));

//3. [22,456,785,23,90]중에서 최솟값 구하기
function getMin(array) {
  let output = array[0]; //초기화
  for (let item of array) {
    if (output > item) {
      output = item;
    }
  }
  return output;
}

const myArray = [25, 456, 785, 23, 90];
console.log(`${myArray}중 가장 작은 숫자는 ${getMin(myArray)}`);

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

console.log(stringOrder());

//삼육구
function 삼육구(number) {
  let nums = number.toString().split('');
  let clap = [];

  for (let num of nums) {
    if (num === '3' || num === '6' || num === '9') {
      clap.push('짝👏');
    }
  }
  return clap;
}

console.log(삼육구(369));
console.log(삼육구(336699));
console.log(삼육구(12));
