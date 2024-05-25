const canvas = document.querySelector("canvas");
// canvas에 그릴 브러쉬
const ctx = canvas.getContext("2d");
// canvas 사이즈 명시하기
const lineWidth = document.querySelector("#line-width");
const color = document.querySelector("#color");
// HTML 요소를 Array 로 만들어 가져오기
const colorOptions = Array.from(document.querySelectorAll(".color-option"));

canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value; // 선 굵기 초기값

let isPainting = false; // 그려지는 중인지 체크

function onMove(e) {
  if (isPainting) {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    // return;
  }
  // 이 라인을 if 위에 먼저 쓰면 그려지지 않음!!
  ctx.moveTo(e.offsetX, e.offsetY);
}
function startPainting(e) {
  isPainting = true;
}
function canclePainting(e) {
  isPainting = false;
  ctx.beginPath(); // 새로운 path 생성
}
function onLineChange(e) {
  ctx.lineWidth = e.target.value;
}
function onColorChange(e) {
  ctx.strokeStyle = e.target.value;
  ctx.fillStyle = e.target.value;
}
function onColorClick(e) {
  const colorValue = e.target.dataset.color;

  // console.log(e.target.dataset.color);
  ctx.strokeStyle = colorValue;
  ctx.fillStyle = colorValue;
  // 클릭한 색상을 color 인풋창에 표시하기
  color.value = colorValue;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", canclePainting);
// 마우스가 canvas 를 떠나도 그리기 종료
canvas.addEventListener("mouseleave", canclePainting);

lineWidth.addEventListener("change", onLineChange);
color.addEventListener("change", onColorChange);
colorOptions.forEach((item) => item.addEventListener("click", onColorClick));
