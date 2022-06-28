import axios from 'axios';
import React from 'react';

function Product() {
  const url = 'http//test.api.weniv.co.kr/mall';

  axios.get(url).then((res) => console.log(res.data[0].productName));

  fetch(url)
    .them((res) => {
      res.json();
    })
    .then((data) => console.log(data[1].productName));
}
