
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var score =0;
var ground;
var gameState = 0;
var playerCount = 0;
var survivalTime;
var database;
var backgroundImage;
var allPlayers;
var player, form,game;
var player1,player2;
var players;
var player1score =0;
var player2score =0;
var playerImage;
var a,b;


function preload(){
  
  
  monkey_running =            loadAnimation("images/sprite_0.png","images/sprite_1.png","images/sprite_2.png","images/sprite_3.png",
  "images/sprite_4.png","images/sprite_5.png","images/sprite_6.png","images/sprite_7.png","images/sprite_8.png");
  playerImage = loadImage("images/sprite_0.png");

  bananaImage = loadImage("images/banana.png");
  obstaceImage = loadImage("images/obstacle.png");
  backgroundImage = loadImage("images/forest.jpg")
 

  
  gameOver = loadImage("images/gameover.jpg")
  FoodGroup = new Group();
  obstacleGroup = new Group();

}



function setup() {
  createCanvas(displayWidth,displayHeight);

  
database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
  
 
}


function draw() {
  background(backgroundImage);
  
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}