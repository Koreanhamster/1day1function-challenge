//5.23
//Dom - 5초부터 1초까지 세고 사라지는 알럿창 만들기
{
  /* <div class="alert alert-danger" id="alert">
5<초 이내 구매시 사은품 증정
</div> */
}

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
{
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
}
