//GLOBAL VARIABLES
var x;
var y;
var circles;
var circleSize;
var lineColor;
var game;
var turn;
//sound info
function preload(){
    mySound = loadSound('sourse/click.wav');
    //create jsonfile

}

function scrollWin() {
    window.scrollTo(0, 1000);
}

function setup() {
    //create drawing canvas
    createCanvas(windowWidth, windowHeight);
    background('darkgrey');
    //set soundVolue
    mySound.setVolume(0.5);
    var url = "js/data/game.json";
    //my jsonfile
    loadJSON(url,jsonLoaded);
    turn = true;
 //set array
    circles = [];
    //draw cirlces
    drawCircles();

    // set the circle size and colors
    circleSize = 40;


    // set check color
    lineColor = 'yellow';
    fill('black');
    ellipse (25,40,circleSize,circleSize);
    draw();
}//end set up

function jsonLoaded(Beginner){
    fill('black');
    textSize(24);
    text(Beginner.game[0].name[0],windowWidth/2,50);

}//end jsonLoaded


function ClickableCircle(sX,sY,cColor,sColor){
   this.x = sX;
   this.y = sY;
   this.r = 20;
   this.circleColor = cColor;
   this.strokeColor = sColor;
    this.clickOnce = 0;

   this.drawCircle = function(){
       fill(this.circleColor);
       stroke(this.strokeColor);
       ellipse(this.x, this.y, this.r*2, this.r*2);

   }

}//end ClickableCircle

function drawCircles(){
    //starting coordinates for the circles
    var x = 25;
    var y = 100;
    //use  loop to create the circles in a grid format
    for(var i=0; i<1000; i++){

        //create new circle
        var c = new ClickableCircle(x,y,color('lightgrey'),color('darkgrey'));
        c.drawCircle();
        //add the circle to the array
        circles.push(c);

        x += 60;
        if(x > width){
            y+= 60;
            x = 25;
        }
    }//end for
}//end drawCircles

function mousePressed(){
  mySound.play();
    var cColor;
    if (turn===true){
        cColor='white';
        turn=false;
    }else{
        cColor='black';
        turn=true;
    }

     //loop through the circle andd see if they are pressed

        for(var i=0; i<circles.length; i++){
        //check the dist between the mouse and the circle center
            var d = dist(mouseX, mouseY, circles[i].x, circles[i].y);

            if(d < circles[i].r){
               if(circles[i].clickOnce===0){
               circles[i].clickOnce =1
               circles[i].circleColor = color(cColor);
               circles[i].strokeColor = color('lightgrey');
               circles[i].drawCircle(i);
               }
            }//end if
            var redCheck = dist(mouseX,mouseY,25,40);

              if(redCheck<circleSize){
                    stroke('black');
                    textSize(50);
                    text("you win",windowWidth/2,windowHeight/2);

                }//end if
                }//end for loop

    }// end mouseClicked



function draw(){
        if(mouseIsPressed){
            stroke(lineColor);
        line(pmouseX,pmouseY,mouseX,mouseY);
        }
            else
               false;

    }//end draw










