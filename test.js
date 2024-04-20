const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");
const card5 = document.getElementById("card5");
const card6 = document.getElementById("card6");

const anhlaso1 = document.getElementById("lásố1");
const anhlaso2 = document.getElementById("lásố2");
const anhlaso3 = document.getElementById("lásố3");
const anhlaso4 = document.getElementById("lásố4");
const anhlaso5 = document.getElementById("lásố5");
const anhlaso6 = document.getElementById("lásố6");

function flipButton(num, p1, p2) {
  var lá_bài = trộn_bài(p1, p2);
  var lá1 = lá_bài[0][0];
  var lá2 = lá_bài[0][1];
  var lá3 = lá_bài[0][2];
  var lá4 = lá_bài[0][3];
  var lá5 = lá_bài[0][4];
  var lá6 = lá_bài[0][5];

  var kết_quả = lá_bài[1];

  card1.classList.toggle("flipped");
  card2.classList.toggle("flipped");
  card3.classList.toggle("flipped");
  card4.classList.toggle("flipped");
  card5.classList.toggle("flipped");
  card6.classList.toggle("flipped");
  setTimeout(function () {
    card1.style.animation = "Thu_phát_bài1 3s linear alternate";
    card2.style.animation = "Thu_phát_bài2 3s linear alternate";
    card3.style.animation = "Thu_phát_bài3 3s linear alternate";
    card4.style.animation = "Thu_phát_bài4 3s linear alternate";
    card5.style.animation = "Thu_phát_bài5 3s linear alternate";
    card6.style.animation = "Thu_phát_bài6 3s linear alternate";
    anhlaso1.src = lá1;
    anhlaso2.src = lá2;
    anhlaso3.src = lá3;
    anhlaso4.src = lá4;
    anhlaso5.src = lá5;
    anhlaso6.src = lá6;
    document.getElementById("kq").innerHTML = "---";
    if (num == 3) {
    } else if (num == 2) {
    } else {
    }
  }, 500);
  setTimeout(function () {
    card1.classList.toggle("flipped");
    card4.classList.toggle("flipped");
  }, 3500);
  setTimeout(function () {
    card2.classList.toggle("flipped");
    card5.classList.toggle("flipped");
  }, 4000);
  setTimeout(function () {
    card3.classList.toggle("flipped");
    card6.classList.toggle("flipped");
    card1.style.animation = "none";
    card2.style.animation = "none";
    card3.style.animation = "none";
    card4.style.animation = "none";
    card5.style.animation = "none";
    card6.style.animation = "none";
    document.getElementById("kq").innerHTML = kết_quả;
  }, 4500);
}
