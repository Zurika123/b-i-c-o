var số_player = 0;
var path = window.location.pathname;
// Chia đường dẫn thành mảng các phần tử dựa trên dấu /
var parts = path.split("/");
// Lấy phần tử cuối cùng của mảng, là tên của trang
var currentPage = parts.pop();
// Thông báo tên của trang
if (currentPage == "test.html") {
  số_player = 2;
}
if (currentPage == "1pvsbot.html") {
  số_player = 2;
}
if (currentPage == "home.html") {
  số_player = 1;
}
if (currentPage == "1player.html") {
  số_player = 1;
}
// Độ cao khung bài p1 p2
const image = document.querySelector(".imgaa");
const section = document.querySelector("#section");

function adjustSectionPosition() {
  const imageheight = image.clientHeight;
  if (số_player == 1) {
    section.style.height = imageheight + 40 + "px";
  } else if (số_player == 2) {
    section.style.height = imageheight * 2 + 60 + "px";
  }
}

adjustSectionPosition();

window.addEventListener("resize", function () {
  adjustSectionPosition();
});
