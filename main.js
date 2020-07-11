const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', moveCursor);

function moveCursor(e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const cursorPosX = mouseX - cursor.clientWidth / 2;
  const cursorPosY = mouseY - cursor.clientHeight / 2;

  cursor.style.transform = `translate(${cursorPosX}px, ${cursorPosY}px)`;
}

const canvas = document.querySelector('#canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext('2d');
context.fillStyle = 'black';
context.fillRect(0, 0, window.innerWidth, window.innerHeight);

let x = 0;
let y = 0;
let isDrawing = true;

// canvas.addEventListener('mousedown', (e) => {
//   x = e.offsetX;
//   y = e.offsetY;
//   isDrawing = true;
// });

canvas.addEventListener('mousemove', (e) => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
});

// window.addEventListener('mouseup', (e) => {
//   if (isDrawing === true) {
//     drawLine(context, x, y, e.offsetX, e.offsetY);
//     x = 0;
//     y = 0;
//     isDrawing = false;
//   }
// });

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = '#ff0000';
  context.lineWidth = 80;
  context.lineCap = 'round';
  context.globalCompositeOperation = 'destination-out';
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}
