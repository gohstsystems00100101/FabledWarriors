//On HTML Page Load
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var canvasW = 700, canvasH = 432;

ctx.beginPath();
ctx.rect(0, 0, canvasW, canvasH);
ctx.fillStyle = "#aaaaff";
ctx.fill();
ctx.closePath();

ctx.font = "44px Arial";
ctx.fillStyle = "#2311ff";

var homeScreenBkgd = new Image();
homeScreenBkgd.src = "Images/sunnyDayBkgd.png";

var mainSpritesheet = new Image();
mainSpritesheet.src = "Images/mainSpritesheet.png";

var 
 canvasW = 700,
 canvasH = 432,
 enemyTotal = 5,
 enemies = [],
 enemyX = 50,
 enemyY = canvasH - 100,
 enemyW = 32,
 enemyH = 32,
 speed = 3,
 rightKey = false,
 leftKey = false,
 upKey = false,
 downKey = false,
 playerX = (canvasW / 2) - 25, 
 playerY = canvasH - 110, 
 playerW = 50, 
 playerH = 50,
 playerHealth = 100,
 gravity = 2
 friction = 0
 score = 0;



enemies.push([enemyX, enemyY, enemyW, enemyH, speed]);

function clearCanvas() 
{
 ctx.fillStyle = "#aaaaff";
 ctx.fillRect(0, 0, canvasW, canvasH);
 ctx.drawImage(homeScreenBkgd, 0, 0, 700, 432);
}

function drawEnemies() {
 for (var i = 0; i < enemies.length; i++) {
  ctx.fillStyle = '#f00';
  ctx.drawImage(mainSpritesheet, 0, 128, 32, 32, enemies[i][0], enemies[i][1], 32, 32);
  //context.drawImage(img,sx,sy, scanvasW,scanvasH, x,y, canvasW,canvasH);
 }
}

function drawplayer() {
 playerY += gravity;
 
 if (rightKey) playerX += 5;
 else if (leftKey) playerX -= 5;
 if (upKey) playerY -= 5;
 else if (downKey) playerY += 5;
 if (playerX <= 0) playerX = 0;
 if ((playerX + playerW) >= canvasW) playerX = canvasW - playerW;
 if (playerY <= 0) playerY = 0;
 if ((playerY + playerH) >= canvasH - 70) playerY = canvasH - playerH - 70;
  
 ctx.drawImage(mainSpritesheet, 0, 0, 32, 32, playerX, playerY, playerW, playerH);

}
  
  
  
function moveEnemies() 
{
 
	 
 for (var i = 0; i < enemies.length; i++) 
 {
  if (enemies[i][0] < canvasW) 
  {
   enemies[i][0] += enemies[i][4];
  } 
  else if (enemies[i][0] > canvasW - 1) 
  {
   enemies[i][0] = -32;
  if(enemies[i][4] <= 40)
   {
    enemies[i][4] += 1;
	}
   }
   ctx.font = "30px Arial";
   ctx.fillStyle = "black";
   ctx.fillText("Enemy Speed: " + enemies[i][4], 10, 80);
  }
}

function drawInfoText() 
{
 ctx.font = "30px Arial";
 ctx.fillText("Score: " + score,10,50);
} 

function init() 
{
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  setInterval(gameLoop, 25);
  document.addEventListener('keydown', keyDown, false);
  document.addEventListener('keyup', keyUp, false);
}

function gameLoop() 
{
  clearCanvas();
  moveEnemies();
  drawEnemies();
  drawplayer();
  drawInfoText();
}

function keyDown(e) 
{
  if (e.keyCode == 39) rightKey = true;
  else if (e.keyCode == 37) leftKey = true;
  if (e.keyCode == 38) upKey = true;
  else if (e.keyCode == 40) downKey = true;
}

function keyUp(e) 
{
  if (e.keyCode == 39) rightKey = false;
  else if (e.keyCode == 37) leftKey = false;
  if (e.keyCode == 38) upKey = false;
  else if (e.keyCode == 40) downKey = false;
}

window.onload = init;