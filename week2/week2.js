//5.23
//Dom - 5초부터 1초까지 세고 사라지는 알럿창 만들기

/* <div class="alert alert-danger" id="alert">
5<초 이내 구매시 사은품 증정
</div> */

// const alert = document.querySelector('#alert');
// const time = document.querySelector('#time');

// let count = 5;

// setInterval(function () {
//   count--;
//   if (count >= 0) {
//     time.textContent = count;
//   }
//   if (count == 0) {
//     alert.style.display = 'none';
//   }
// }, 1000);

// 5.24 퀴즈판독기

/* <body>
  <p>태조 이성계가 태어난 연도는?</p>
  <input type="text" id="answer" />
  <button id="send-answer" type="submit">제출</button>

  <script>
    const answerBtn = document.querySelector('#send-answer');
    let count = 0;

    // 버튼을 누를때마다 카운트를 올려주세요
    answerBtn.addEventListener('click', function () {
      count++;
      const answer = document.querySelector('#answer').value;
      console.log(answer);
      if (answer == 1335) {
        alert('정답');
      } else if (answer != 1335 && count < 3) {
        alert('땡');
      } else if (answer != 1335 && count >= 3) {
        alert('멍청아!');
      }
    });
  </script>
</body> */

// 5.26
// 할인가 계산기 (10프로 할인, 첫구매면 10프로 + 1.5달러 추가할인 )
// 소숫점 2자리에서 끊기
// 값은 type이 number여야함

// function cal(a, b) {
//   let discount = a * 0.1;
//   if (b == false) {
//     let output = a - discount;
//     return parseFloat(output.toFixed(2));
//   } else if (b == true) {
//     let output = a - discount - 1.5;
//     return parseFloat(output.toFixed(2));
//   }
// }

// console.log(typeof cal(70, false));
// console.log(cal(70, false));
// console.log(cal(10.3, true));

function cal(가격, 첫구매인가요) {
  let discount = 가격 * 0.1;
  if (첫구매인가요 == false) {
    let output = a - discount;
    return parseFloat(output.toFixed(2));
  } else if (첫구매인가요 == true) {
  }
}

//5.27
// 소수판별

function checkPrime(n) {
  for (i = 2; i < n; i++) {
    if (n % i === 0) {
      console.log('소수아님');
      return false;
    }
  }

  if (n === 1) {
    console.log('소수아님');
    return false;
  }
  console.log('소수임');
}

checkPrime(10);
checkPrime(7);
