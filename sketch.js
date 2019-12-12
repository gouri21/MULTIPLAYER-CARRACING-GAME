var canvas, background;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var car1, car2, car3, car4, cars, car1img,car2img, car3img, car4img, trackimg, grdimg;

function preload(){
car1img = loadImage("images/car1.png");
car2img = loadImage("images/car2.png");
car3img = loadImage("images/car3.png");
car4img = loadImage("images/car4.png");
trackimg = loadImage("images/track1.png");
grdimg = loadImage("images/ground.png");


}
function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-2);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    gameState = 0;
    game.end();
    
  }
}
