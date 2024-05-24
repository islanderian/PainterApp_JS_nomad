const canvas = document.querySelector("canvas");
// canvas에 그릴 브러쉬
const ctx = canvas.getContext("2d");
// canvas 사이즈 명시하기
canvas.width = 800;
canvas.height = 800;

// 채워진 직사각형 그리기 (rect()와 fill()을 단축한 함수)
// ctx.fillRect(50, 50, 100, 200);
ctx.rect(50, 50, 100, 100);
ctx.rect(150, 150, 100, 100);
ctx.rect(250, 250, 100, 100);
ctx.fill();

ctx.beginPath(); // 새로운 경로 만들기
ctx.rect(350, 350, 100, 100);
ctx.fillStyle = "red";
ctx.fill();
