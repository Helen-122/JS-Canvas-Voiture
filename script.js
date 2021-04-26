var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(80, 200);
ctx.lineTo(400, 200);
ctx.lineTo(400, 250);
ctx.lineTo(80, 250);
ctx.lineTo(80, 200);
ctx.fillStyle = "#DA70D6";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(130, 160);
ctx.lineTo(350, 160);
ctx.lineTo(350, 200);
ctx.lineTo(130, 200);
ctx.lineTo(130, 160);
ctx.fillStyle = "#DA70D6";
ctx.fill();
ctx.closePath();
//les roues
ctx.beginPath();
ctx.lineWidth = '5';
ctx.fillStyle = 'green';
ctx.arc(150, 250, 40, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.lineWidth = '5';
ctx.fillStyle = 'green';
ctx.arc(330, 250, 40, 0, 2 * Math.PI);
ctx.fill();
