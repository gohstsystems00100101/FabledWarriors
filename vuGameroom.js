//On HTML Page Load
var gameCanvas = document.getElementById("gameCanvas");
var ctx = gameCanvas.getContext("2d");
ctx.beginPath();
ctx.rect(0, 0, 700, 300);
ctx.fillStyle = "#00aaff";
ctx.fill();
ctx.closePath();

ctx.font = "44px Arial";
ctx.fillStyle = "#2311ff";
ctx.fillText("Select A Game", 10, 50);

var homeScreenBkgd = new Image();
homeScreenBkgd.src = "Images/homeScreenBkgd.png";



/***********************************************
************************************************
************************************************
GAME 1: Mystic Warriors
************************************************
************************************************
***********************************************/
function loadGame1() 
{
 //document.getElementById("gameArea").innerHTML='<object type="text/html" data="gameAreaTest.html" ></object>';
 loadMainMenu();
}

function loadMainMenu()
{
 //Main menu background image	
 ctx.drawImage(homeScreenBkgd, 0, 0, 700, 300);  
	
 //Main menu title heading
 ctx.font = "44px Arial";
 ctx.fillStyle = "#23bbff";
 ctx.fillText("Mystic Warriors", 10, 50);
 
 //Main menu buttons
 ctx.font = "24px Arial";
 ctx.fillText("Story Mode", 10, 250);
 
 ctx.fillStyle = "#aaf";
 ctx.fillRect(0, 220, 140, 50);
 ctx.fillStyle = "#fff";
 ctx.fillText("Story Mode", 10, 250);
 
 ctx.fillStyle = "#aaf";
 ctx.fillRect(170, 220, 150, 50);
 ctx.fillStyle = "#fff";
 ctx.fillText("Level Select", 180, 250);
 
 ctx.fillStyle = "#aaf";
 ctx.fillRect(350, 220, 150, 50);
 ctx.fillStyle = "#fff";
 ctx.fillText("Mini-Games", 360, 250);
 
 ctx.fillStyle = "#aaf";
 ctx.fillRect(520, 220, 110, 50);
 ctx.fillStyle = "#fff";
 ctx.fillText("Settings", 530, 250);
 
 /* Outdated click test
 gameCanvas.addEventListener("click",function(){
     ctx.fillStyle = "#fff";
     ctx.fillText("Loading Story Mode!!", 130, 150);   
    });
 */

 //Updated button click 
 function getCursorPosition(canvas, event) 
 {
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    //alert("x: " + x + " y: " + y);
	
	if ( x >= 0 && x <= 140 && y >= 220 && y <= 270 ) //Story mode button  
	{
	 loadStoryMode()
	}
	else if ( x >= 170 && x <= 320 && y >= 220 && y <= 270) //Level select button
	{
	 loadLevelSelectMenu();
	}
	else if ( x >= 350 && x <= 500 && y >= 220 && y <= 270) //Mini-game button
	{
	 loadMinigameMenu()
	}
	else if ( x >= 520 && x <= 630 && y >= 220 && y <= 270) //Settings button
	{
	 loadSettingsMenu();
	}
	else //Outside buttons area
	{
      //
	}
 }

 document.getElementById('gameCanvas').onclick = function(e) 
 {
  getCursorPosition(this, e)
 };
}




/***********************************************
************************************************
************************************************
Settings Menu
************************************************
************************************************
***********************************************/
function loadStoryMode()
{
 //Add code to load saved level
 
 ctx.fillStyle = "#aaf";
 ctx.fillRect(0, 0, 700, 300);
 ctx.fillStyle = "#fff";
 ctx.fillText("Story Mode", 10, 100);
}

function loadLevelSelectMenu()
{
 //Add code to load unlocked level
 
 ctx.fillStyle = "#aaf";
 ctx.fillRect(0, 0, 700, 300);
 ctx.fillStyle = "#fff";
 ctx.fillText("Select A Level", 0, 100);
 
 ctx.fillStyle = "#1df";
 ctx.fillRect(10, 250, 220, 40);
 ctx.fillStyle = "#fff";
 ctx.fillText("Back to main menu", 15, 275); 
 
 document.getElementById('gameCanvas').onclick = function(e) 
 {
  getCursorPositionSettingsMenu(this, e)
 };
 
 function getCursorPositionSettingsMenu(canvas, event) 
 {
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
	
	if ( x >= 15 && x <= 230 && y >= 250 && y <= 290 ) //Back to main menu button  
	{
	 loadMainMenu();
	}
	else //Outside buttons area
	{
      //
	}
 }
}

function loadMinigameMenu()
{
 //Add code to load unlocked minigames
 
 ctx.fillStyle = "#aaf";
 ctx.fillRect(0, 0, 700, 300);
 ctx.fillStyle = "#fff";
 ctx.fillText("Select a minigame", 10, 100);
 
 ctx.fillStyle = "#1df";
 ctx.fillRect(10, 250, 220, 40);
 ctx.fillStyle = "#fff";
 ctx.fillText("Back to main menu", 15, 275); 
 
 document.getElementById('gameCanvas').onclick = function(e) 
 {
  getCursorPositionMinigameMenu(this, e)
 };
 
 function getCursorPositionMinigameMenu(canvas, event) 
 {
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
	
	if ( x >= 15 && x <= 230 && y >= 250 && y <= 290 ) //Back to main menu button  
	{
	 loadMainMenu();
	}
	else //Outside buttons area
	{
      //
	}
 }
}

function loadSettingsMenu()
{
 //Add code to load current settings
 
 ctx.fillStyle = "#aaf";
 ctx.fillRect(0, 0, 700, 300);
 ctx.fillStyle = "#fff";
 ctx.fillText("Settings", 10, 100);
 
 ctx.fillStyle = "#1df";
 ctx.fillRect(10, 250, 220, 40);
 ctx.fillStyle = "#fff";
 ctx.fillText("Back to main menu", 15, 275); 
 
 document.getElementById('gameCanvas').onclick = function(e) 
 {
  getCursorPositionSettingsMenu(this, e)
 };
 
 function getCursorPositionSettingsMenu(canvas, event) 
 {
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
	
	if ( x >= 15 && x <= 230 && y >= 250 && y <= 290 ) //Back to main menu button  
	{
	 loadMainMenu();
	}
	else //Outside buttons area
	{
      //
	}
 }
}
