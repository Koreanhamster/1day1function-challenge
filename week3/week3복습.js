// var products = [
//   { id: 0, price: 90000, title: 'Blossom Dress' },
//   { id: 1, price: 50000, title: 'Springfield Shirt' },
//   { id: 2, price: 60000, title: 'Black Monastery' },
// ];

// let title = document.querySelectorAll('#title');
// let price = document.querySelectorAll('#price');

// for (let i = 0; i <= products.length; i++) {
//   title[i].textContent = `${products[i].title}`;
//   price[i].textContent = `${products[i].price}`;
// }

let 출석부 = ['흥민', '영희', '철수', '재석', '영희'];

function isName(name) {
  for (let i = 0; i <= 출석부.length; i++) {
    if (name == 출석부[i]) {
      console.log('있어요');
      return;
    }
  }
}

isName('영희');

function gugudan(a) {
  for (let i = 1; i <= 9; i++) {
    console.log(a * i);
  }
}

// gugudan(2);

function gogodan() {
  for (let i = 2; i <= 9; i++) {
    for (let k = 1; k <= 9; k++) {
      console.log(i * k);
    }
  }
}

// gogodan();

// cal([20, 30, 40], 20);
// cal([40, 60, 80, 96], 76);

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

cal([40, 60, 80, 96], 76);
