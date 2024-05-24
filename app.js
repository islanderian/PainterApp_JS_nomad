const canvas = document.querySelector("canvas");
// canvas에 그릴 브러쉬
const ctx = canvas.getContext("2d");
// canvas 사이즈 명시하기
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 2;

let isPainting = false; // 그려지는 중인지 체크
function onMove(e) {
  if (isPainting) {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    // return;
  }
  ctx.moveTo(e.offsetX, e.offsetY); // 이 라인을 if 위에 먼저 쓰면 그려지지 않음!!
}
function startPainting(e) {
  isPainting = true;
}
function canclePainting(e) {
  isPainting = false;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", canclePainting);
canvas.addEventListener("mouseleave", canclePainting); // 마우스가 canvas 를 떠나도 그리기 종료
