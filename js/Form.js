class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('h3');
        this.title = createElement('h2');
        
    }

    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }


display(){
    this.title.html("[MONKEY RACER]");
    this.title.position(350, 50);
    this.title.style('font-size', '70px');
    this.title.style('color', 'brown');
    this.input.position(550,400);
    this.input.style('width', '200px');
    this.input.style('height', '20px');
    this.input.style('background', 'pink');
    this.button.position(550,500);
    this.button.style('width', '200px');
    this.button.style('height', '40px');
    this.button.style('background', 'orange');


    this.button.mousePressed(() => {
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount += 1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("HEY! " + player.name)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
        this.greeting.style('color', 'red');
        this.greeting.style('font-size', '100px');
      
    });


}


}