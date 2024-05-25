const color = document.querySelector("#color");
// HTML 요소를 Array 로 만들어 가져오기
const colorOptions = Array.from(document.querySelectorAll(".color-option"));
const modeBtn = document.querySelector("#fill-btn");
const destroyBtn = document.querySelector("#destroy-btn");
const eraseBtn = document.querySelector("#erase-btn");
const fileInput = document.querySelector("#file");
const textInput = document.querySelector("#text");
const saveBtn = document.querySelector("#save");

// canvas 생성
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const lineWidth = document.querySelector("#line-width");
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
ctx.lineWidth = lineWidth.value; // 선 굵기 초기값
ctx.lineCap = "round"; // 선의 끝을 둥글게

let isPainting = false; // 그려지는 중인지 체크
let isFilling = false;

function onMove(e) {
  if (isPainting) {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
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
function onCanvasClick() {
  if (isFilling) {
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
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
function onModeClick() {
  if (isFilling) {
    isFilling = false;
    modeBtn.innerText = "Fill";
  } else {
    isFilling = true;
    modeBtn.innerText = "Draw";
  }
}
// 지우기 = 흰색으로 바탕 칠하기
function onDestroyClick() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}
function onEraserClick(e) {
  ctx.strokeStyle = "white";
  isFilling = false;
  modeBtn.innerText = "Fill";
}
function onFileChange(e) {
  const file = e.target.files[0];
  // file 의 url 얻어오기
  const url = URL.createObjectURL(file);
  const image = new Image();
  image.src = url;
  image.onload = function () {
    ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    fileInput.value = null; // 이미지 표시 후 input에 file 비움
  };
}
function onDoubleClick(e) {
  ctx.save(); // context의 현재 상태 저장해둠
  const text = textInput.value;
  ctx.lineWidth = 1;
  ctx.font = "68px serif";
  ctx.fillText(text, e.offsetX, e.offsetY);
  ctx.restore(); // save한 상태로 되돌리기
}
function onSaveClick() {
  const url = canvas.toDataURL();
  const a = document.createElement("a");
  // <a href=url download="myDrawing.png" />
  a.href = url;
  a.download = "myDrawing.png";
  a.click(); // a태그 클릭으로 download 실행
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", canclePainting);
// 마우스가 canvas 를 떠나도 그리기 종료
canvas.addEventListener("mouseleave", canclePainting);
canvas.addEventListener("click", onCanvasClick);
canvas.addEventListener("dblclick", onDoubleClick);

lineWidth.addEventListener("change", onLineChange);
color.addEventListener("change", onColorChange);
colorOptions.forEach((item) => item.addEventListener("click", onColorClick));
modeBtn.addEventListener("click", onModeClick);
destroyBtn.addEventListener("click", onDestroyClick);
eraseBtn.addEventListener("click", onEraserClick);
fileInput.addEventListener("change", onFileChange);
saveBtn.addEventListener("click", onSaveClick);
