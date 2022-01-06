canvas = document.getElementById("mycanvas");
color = "grey";
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 1;
ctx.rect(170 , 143 , 430 , 200 );
ctx.stroke();

canvas = document.getElementById("mycanvas");
color = "blue";
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(280 , 200 , 40 , 0 , 2 * Math.PI);
ctx.stroke();

canvas = document.getElementById("mycanvas");
color = "black";
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(380 , 200 , 40 , 0 , 2 * Math.PI);
ctx.stroke();

canvas = document.getElementById("mycanvas");
color = "red";
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(480 , 200 , 40 , 0 , 2 * Math.PI);
ctx.stroke();

canvas = document.getElementById("mycanvas");
color = "yellow";
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(330 , 250 , 40 , 0 , 2 * Math.PI);
ctx.stroke();

canvas = document.getElementById("mycanvas");
color = "green";
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(430 , 250 , 40 , 0 , 2 * Math.PI);
ctx.stroke();

