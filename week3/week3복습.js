var products = [
  { id: 0, price: 90000, title: 'Blossom Dress' },
  { id: 1, price: 50000, title: 'Springfield Shirt' },
  { id: 2, price: 60000, title: 'Black Monastery' },
];

let title = document.querySelectorAll('#title');
let price = document.querySelectorAll('#price');

for (let i = 0; i <= products.length; i++) {
  title[i].textContent = `${products[i].title}`;
  price[i].textContent = `${products[i].price}`;
}
