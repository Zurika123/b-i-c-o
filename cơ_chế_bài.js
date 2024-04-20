var deck = [];
var rank_la = [];
var suit_la = [];
var nut = [];
function trộn_bài(player1, player2) {
  // Tạo một bộ bài
  var suits = ["Cơ", "Rô", "Chuồn", "Bích"];
  var ranks = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  deck = [];
  rank_la = [];
  suit_la = [];
  nut = [];
  // Trộn bộ bài

  for (var suit of suits) {
    for (var rank of ranks) {
      deck.push("lá bài/" + rank + " " + suit + ".jpg");
    }
  }
  deck.sort(() => Math.random() - 0.5);
  for (var i = 0; i < 6; i++) {
    var rank_and_suit = deck[i].split("/")[1].split(".")[0];
    rank_la.push(rank_and_suit.split(" ")[0]);
    suit_la.push(rank_and_suit.split(" ")[1]);
    var nut_i = parseInt(rank_la[i]); // Chuyển đổi giá trị của suit[i] thành số nguyên và gán vào biến nut_i
    if (isNaN(nut_i)) {
      switch (rank_la[i]) {
        case "J":
          nut_i = 10;
          break;
        case "Q":
          nut_i = 10;
          break;
        case "K":
          nut_i = 10;
          break;
        case "A":
          nut_i = 1;
          break;
        default:
          break;
      }
    }
    nut.push(nut_i); // Thêm giá trị của nut_i vào mảng nut
  }

  var kết_quả = xet_ket_qua(nut, suit_la, player1, player2);

  return [deck, kết_quả];
}

//xét kết quả bài
function xet_ket_qua(nut, suit, player1, player2) {
  let tổng_nút_1 = 0;
  let tổng_nút_2 = 0;
  let tên_nút1 = "";
  let tên_nút2 = "";

  // Tính tổng nút của player1
  if ((rank_la[0] == rank_la[1]) & (rank_la[0] == rank_la[2])) {
    if (
      [0] == "A" ||
      rank_la[0] == "J" ||
      rank_la[0] == "Q" ||
      rank_la[0] == "K"
    ) {
      if (rank_la[0] == "A") {
        tổng_nút_1 = 24;
        tên_nút1 = "Ba Cào";
      } else if (rank_la[0] == "J") {
        tổng_nút_1 = 21;
        tên_nút1 = "Ba Tiên";
      } else if (rank_la[0] == "Q") {
        tổng_nút_1 = 22;
        tên_nút1 = "Ba Tiên";
      } else if (rank_la[0] == "K") {
        tổng_nút_1 = 23;
        tên_nút1 = "Ba Tiên";
      }
    } else {
      tổng_nút_1 = nut[0] + 10;
      tên_nút1 = "Tam " + nut[0];
    }
  } else {
    tổng_nút_1 = (nut[0] + nut[1] + nut[2]) % 10;
  }

  // Tính tổng nút của player2
  if ((rank_la[3] == rank_la[4]) & (rank_la[3] == rank_la[5])) {
    if (
      rank_la[3] == "A" ||
      rank_la[3] == "J" ||
      rank_la[3] == "Q" ||
      rank_la[3] == "K"
    ) {
      if (rank_la[3] == "A") {
        tổng_nút_2 = 24;
        tên_nút2 = "Ba Cào";
      } else if (rank_la[3] == "J") {
        tổng_nút_2 = 21;
        tên_nút2 = "Ba Tiên";
      } else if (rank_la[3] == "Q") {
        tổng_nút_2 = 22;
        tên_nút2 = "Ba Tiên";
      } else if (rank_la[3] == "K") {
        tổng_nút_2 = 23;
        tên_nút2 = "Ba Tiên";
      }
    } else {
      tổng_nút_2 = nut[3] + 10;
      tên_nút2 = "Tam " + nut[3];
    }
  } else {
    tổng_nút_2 = (nut[3] + nut[4] + nut[5]) % 10;
  }

  // Tạo kết quả
  let ket_qua = ""; // Khởi tạo biến kết quả
  if (tổng_nút_1 < 11) {
    if (tổng_nút_1 == 0) {
      tên_nút1 = "Bù";
    } else {
      tên_nút1 = tổng_nút_1 + " nút";
    }
  }
  if (tổng_nút_2 < 11) {
    if (tổng_nút_2 == 0) {
      tên_nút2 = "Bù";
    } else {
      tên_nút2 = tổng_nút_2 + " nút";
    }
  }
  if (tổng_nút_1 > tổng_nút_2) {
    ket_qua =
      "<span style='color: white;font-weight: bold'>" +
      player1 +
      " (" +
      tên_nút1 +
      ") --<span style='color: yellow'>Win</span>-- " +
      player2 +
      " (" +
      tên_nút2 +
      ")</span>";
  } else if (tổng_nút_1 === tổng_nút_2) {
    ket_qua =
      "<span style='color: white;font-weight: bold'>" +
      player1 +
      " (" +
      tên_nút1 +
      ") --<span style='color: yellow'>Hòa</span>-- " +
      player2 +
      " (" +
      tên_nút2 +
      ")</span>";
  } else if (tổng_nút_2 > tổng_nút_1) {
    ket_qua =
      "<span style='color: white;font-weight: bold'>" +
      player2 +
      " (" +
      tên_nút2 +
      ") --<span style='color: yellow'>Win</span>-- " +
      player1 +
      " (" +
      tên_nút1 +
      ")</span>";
  }
  return [ket_qua];
}

/*  // Hiển thị thông báo
 Player1 (4 nút) --Hòa-- Player2 (2 nút)
 var matsau = "latmat.jpg"
 
var elementAnh = document.getElementById("image2"); 
 elementAnh.src = matsau;
var elementAnh = document.getElementById("image3"); 
 elementAnh.src = matsau;
var elementAnh = document.getElementById("image4"); 
 elementAnh.src = matsau;
var elementAnh = document.getElementById("image5"); 
 elementAnh.src = matsau;
var elementAnh = document.getElementById("image6"); 
 elementAnh.src = matsau;
  document.getElementById("number1").innerHTML = number1+".jpg";     
  document.getElementById("number2").innerHTML = number2+".jpg"; 
  document.getElementById("number3").innerHTML = number3+".jpg";  
  document.getElementById("number4").innerHTML = number4+".jpg";    
  document.getElementById("number5").innerHTML = number5+".jpg"; 
  document.getElementById("number6").innerHTML = number6+".jpg";
  setTimeout(function () {  
  var elementAnh = document.getElementById("image1"); 
  var duongDanAnh = document.getElementById("number1").innerHTML;
  elementAnh.src = duongDanAnh;
  var elementAnh = document.getElementById("image4"); 
  var duongDanAnh = document.getElementById("number4").innerHTML;
  elementAnh.src = duongDanAnh;
  }, 1000);
  setTimeout(function () {
  var elementAnh = document.getElementById("image2"); 
  var duongDanAnh = document.getElementById("number2").innerHTML;
  elementAnh.src = duongDanAnh;
  var elementAnh = document.getElementById("image5"); 
  var duongDanAnh = document.getElementById("number5").innerHTML;
  elementAnh.src = duongDanAnh;
  }, 2000);
  setTimeout(function () {
  var elementAnh = document.getElementById("image3"); 
  var duongDanAnh = document.getElementById("number3").innerHTML;
  elementAnh.src = duongDanAnh;
  var elementAnh = document.getElementById("image6"); 
  var duongDanAnh = document.getElementById("number6").innerHTML;
  elementAnh.src = duongDanAnh;
  }, 3000);
    if (number1 == number2 && number1 ==number3){
        if (number1 >= 2 && number1 <= 9){    
          document.getElementById('kq').innerHTML = "Ba cào " + number1;
           var trugbinh = number1 + 8;    
       }     
         else if (number1 == 0){
          trugbinh = 21;
          document.getElementById('kq').innerHTML = "Ba cào " + number1;
        }else{      
          var number =document.getElementById("number1").innerHTML;
          var kkk= number.charAt(0);
          if (kkk.toUpperCase() === "J"){
              var trugbinh = 18;    
          }
          if (kkk.toUpperCase() === "Q"){
              var trugbinh = 19;
          }
          if (kkk.toUpperCase() === "K"){
              var trugbinh = 20;
          }
          document.getElementById('kq').innerHTML = "Ba tiên " + kkk;
  
        }
     }     
     else{
        // Lấy dữ liệu từ ô đầu tiên (span)
var number = document.getElementById("number1").innerHTML;
var number1 = parseInt(number, 10);
if (isNaN(number1)) {
  var kkk = number.charAt(0);
if (kkk.toUpperCase() === "J" || kkk.toUpperCase() === "Q" || kkk.toUpperCase() === "K") {
number1 = 10;
}else {
number1 = 1;
}
}
var number = document.getElementById("number2").innerHTML;
var number2 = parseInt(number, 10);
if (isNaN(number2)) {
  var kkk = number.charAt(0);
if (kkk.toUpperCase() === "J" || kkk.toUpperCase() === "Q" || kkk.toUpperCase() === "K") {
number2 = 10;
}else {
number2 = 1;
}
}
var number = document.getElementById("number3").innerHTML;
var number3 = parseInt(number, 10);
if (isNaN(number3)) {
  var kkk = number.charAt(0);
if (kkk.toUpperCase() === "J" || kkk.toUpperCase() === "Q" || kkk.toUpperCase() === "K") {
number3 = 10;
}else {
number3 = 1;
}
}
    var trugbinh = (number1+number2+number3) % 10;
    if(trugbinh == 0){
   document.getElementById('kq').innerHTML = "Bù";
    }
   else{          
    document.getElementById('kq').innerHTML = trugbinh + " Nút";
    }
    }        
if (number4 == number5 && number4 ==number6){
        if (number4 >= 2 && number4 <= 9){    
  document.getElementById('kq2').innerHTML = "Ba cào " + number4;
  var trugbinh = number4 + 8;    
}     
else if (number4 == 0){
   trugbinh = 21;
   document.getElementById('kq2').innerHTML = "Ba cào " + number4;
}else{      
var number =document.getElementById("number4").innerHTML;
var kkk= number.charAt(0);
if (kkk.toUpperCase() === "J"){
  var trugbinh = 18;    
}
if (kkk.toUpperCase() === "Q"){
  var trugbinh = 19;
}
if (kkk.toUpperCase() === "K"){
  var trugbinh = 20;
}
 document.getElementById('kq2').innerHTML = "Ba tiên " + kkk;
  
}
}   else{
  var number =document.getElementById("number4").innerHTML;
  var number4 = parseInt(number, 10);
  if (isNaN(number4)) {
      var kkk = number.charAt(0);
    if (kkk.toUpperCase() === "J" || kkk.toUpperCase() === "Q" || kkk.toUpperCase() === "K") {
    number4 = 10;
  }else {
    number4 = 1;
  }
  }
  var number = document.getElementById("number5").innerHTML;
  var number5 = parseInt(number, 10);
  if (isNaN(number5)) {
      var kkk = number.charAt(0);
    if (kkk.toUpperCase() === "J" || kkk.toUpperCase() === "Q" || kkk.toUpperCase() === "K") {
    number5 = 10;
  }else {
    number5 = 1;
  }
  }
  var number = document.getElementById("number6").innerHTML;
  var number6 = parseInt(number, 10);
  if (isNaN(number6)) {
      var kkk = number.charAt(0);
    if (kkk.toUpperCase() === "J" || kkk.toUpperCase() === "Q" || kkk.toUpperCase() === "K") {
    number6 = 10;
  }else {
    number6 = 1;
  }
  }
  
   var trugbinh2 = (number4+number5+number6) % 10;
  if(trugbinh2 == 0){
  document.getElementById('kq2').innerHTML = "Bù";
  }
  else{
document.getElementById('kq2').innerHTML = trugbinh2 + " Nút";
  
  }
  }
  if (trugbinh > trugbinh2){
  document.getElementById("kq").innerHTML += " (Thắng)";
  }
  else if(trugbinh == trugbinh2){
  document.getElementById("kq").innerHTML += " (Hoà)";
  document.getElementById("kq2").innerHTML += " (Hoà)";
  }
  else{
  document.getElementById("kq2").innerHTML += " (Thắng)";
  }
  setTimeout(function () {
  var kqht = document.getElementById("kq").innerHTML;    document.getElementById("kqht").innerHTML= kqht;
var kq2ht= document.getElementById("kq2").innerHTML;  
document.getElementById("kq2ht").innerHTML= kq2ht
  }, 3000);
  } */
