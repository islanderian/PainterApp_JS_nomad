const canvas = document.querySelector("canvas");
// canvas에 그릴 브러쉬
const ctx = canvas.getContext("2d");
// canvas 사이즈 명시하기
canvas.width = 800;
canvas.height = 800;

ctx.moveTo(50, 50); // 해당 좌표로 이동 (그리지 않으면서)
ctx.lineTo(150, 50); // 해당 좌표로 이동 (그리면서)
ctx.lineTo(150, 150);
ctx.lineTo(50, 150);
ctx.lineTo(50, 50);
ctx.stroke(); // 선으로 그리기
ctx.fill(); // 채우기
