const canvas = document.querySelector("canvas");
// canvas에 그릴 브러쉬
const ctx = canvas.getContext("2d");
// canvas 사이즈 명시하기
canvas.width = 800;
canvas.height = 800;

// 채워진 직사각형 그리기
ctx.fillRect(50, 50, 100, 200);
