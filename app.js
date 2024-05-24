const canvas = document.querySelector("canvas");
// canvas에 그릴 브러쉬
const ctx = canvas.getContext("2d");
// canvas 사이즈 명시하기
canvas.width = 800;
canvas.height = 800;

// 몸통
ctx.fillRect(210 - 40, 200 - 20, 15, 100);
ctx.fillRect(350 - 40, 200 - 20, 15, 100);
ctx.fillRect(260 - 40, 200 - 20, 60, 200);

ctx.arc(250, 100, 50, 0, 2 * Math.PI); // 원형 그리기 (얼굴)
ctx.fill();

ctx.beginPath(); // 새로운 Path
ctx.fillStyle = "red"; // 색상 바꾸기
ctx.arc(260 + 10, 80, 8, 0, 2 * Math.PI); // 붉은 원형 그리기 (눈)
ctx.arc(220 + 10, 80, 8, Math.PI, 2 * Math.PI);
ctx.fill();
