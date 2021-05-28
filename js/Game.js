class Game{
    constructor(){
         }

         getState() {
            var gameStateRef = database.ref('gameState');
            gameStateRef.on("value", function (data) {
                gameState = data.val();
            })
    
        }


        update(state) {
            database.ref('/').update({
                gameState: state
            });
        }


        async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
            ground=createSprite(0,740,200000,300)
            ground.shapeColor = "brown";
          //  ground.x = ground.width/2;
         //   ground.velocityX = -5 ;


    player1 = createSprite(200,500);
    player1.addImage("player1",playerImage);
    player1.scale = 0.3;
    
    player2 = createSprite(800,500);
    player2.addImage("player2",playerImage);
    player2.scale = 0.3;
    players=[player1,player2];

        }

        play(){
        
            form.hide();
    
            Player.getPlayerInfo();
            image(backgroundImage, 0,-displayHeight*1,displayWidth, displayHeight*2);
                var x =100;
            var y=200;
            var index =0;
            drawSprites();
    
            for(var plr in allPlayers){
            
                index = index+1;
                x = 500-allPlayers[plr].distance;
                y=500;
                
                players[index -1].x = x;
                players[index - 1].y = y;
    
                // Differentiate the main player by printing
                // the name of the player on the basket. 
    if(index  ===  player.index){
        fill("black")
        textSize(25)
        text(allPlayers[plr].name,x-25,y+25);
    }
       if(index === player.index){
        camera.x = players[index - 1].x;
       } 
   
// camera.x = player1.x;
  // camera.x = player2.x;

    text(40)
    fill("white")
    text(allPlayers["player1"].name+ " :- "+allPlayers["player1"].score,50,50);
    text(allPlayers["player2"].name+ " :- "+allPlayers["player2"].score,50,100);


   
            
            }

           
         //   if(World.frameCount%200===0){
         //       fruits()
         //    }
              
              if(World.frameCount%300===0){
                stones()
             }

  


            if(keyDown(RIGHT_ARROW)&& player.index !== null){
                player.distance-=10;
                player.update();
            }

           
        }


       // fruits(){
       //     banana=createSprite(camera.x+width/2,120,10,10)
        //    banana.y = Math.round(random(170,230))
       //     banana.addImage(bananaImage)
      //      banana.scale=0.1
      //      banana.velocityX=-3
      //     FoodGroup.add(banana)
     //   }
     stones(){
        obstacle=createSprite(camera.x+width/2,560,10,10)
            //  obstacle.y = Math.round(random(10,20))
             obstacle.addImage(obstaceImage)
               obstacle.velocityX=-4
               obstacle.scale=0.2
               obstacleGroup.add(obstacle)
        }


}