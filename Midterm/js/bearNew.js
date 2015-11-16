//global variable

var earColor; // change bear's ear color
var faceColor; // change bear's face color
var eyecircleColor;//change bear's eye color
var x; //bear's x location
var y; //bear's y location
var circleSize;//the color circle size

//set colors
var black,white, pink,brown,colorCircle;

function setup(){
//create the canvas
 createCanvas(windowWidth,windowHeight);

    drawBears();// the bear's location
    bearLoops(); // the loops of bear
    bearShapes(); // the shapes of bear

//set the colors
    colorSets();

// set the circle size and colors
    circleSize = 50;

    fill(black);
    ellipse (windowWidth/2,40,circleSize,circleSize);

    fill(pink);
    ellipse (windowWidth/2-140,40,circleSize,circleSize);

    fill(brown);
    ellipse (windowWidth/2-70,40,circleSize,circleSize);

    fill(colorCircle);
    ellipse (windowWidth/2+70,40,circleSize,circleSize);


}
 //end setup

//set the color function
function colorSets(){

    black=color(0,0,0);
    white=color(255,255,255);
    pink = color(255,165,165);
    brown=color(199,119,73);
colorCircle=color(random(255),random(255),random(255));

                    }

// drawBears
function drawBears(){
//starting coordinates for the bears
    x=100;
    y=160;

    colorSets();
    earColor = (black);
    faceColor = (white);
    eyecircleColor = (white);
}
//end drawBears

 //draw shapes
function bearShapes(){
//draw left ear
    strokeWeight(3);
    fill(earColor);
    var leftearWidth = 60;
    var leftearHeight = 60;
    ellipse(x-60,y-60,leftearWidth,leftearHeight);

//draw right ear
    strokeWeight(3);
    fill(earColor);
    var rightearWidth = 60;
    var rightearHeight = 60;
    ellipse(x+60,y-60,leftearWidth,leftearHeight);


//draw bear face
    fill(faceColor);
    var bearWidth = 180;
    var bearHeight = 150;
    ellipse(x, y, bearWidth, bearHeight);

//lefteye circle
    fill(eyecircleColor);
    var lefteyeWidth = 60;
    var lefteyeHeight = 60;
    ellipse(x-50,y,lefteyeWidth,lefteyeHeight);

//righteye circle
    fill(eyecircleColor);
    var righteyeWidth =60;
    var righteyeHeight = 60;
    ellipse(x+50,y,righteyeWidth,righteyeHeight);


//left eyeball
    fill(black);
    var lefteyeballWidth = 20;
    var lefteyeballHeight = 20;
    ellipse(x-50,y,lefteyeballWidth,lefteyeballHeight);

//right eyeball
    fill(black);
    var righteyeballWidth = 20;
    var righteyeballHeight = 20;
    ellipse(x+50,y,righteyeballWidth,righteyeballHeight);


//nose and mouse
    stroke(2);
    fill(black);
    line(x-15,y+5,x+15,y+30);
    line(x+12,y+5,x-15,y+30);

}// end bearShapes



//bearLoops
function bearLoops(){
  for (var i = 0; i < 1000; i++) {
        console.log(i);
        bearShapes();


       //increment x
        x += 200; // same as x = x+200
       // check if x is past the width
        if(x > windowWidth)
           // set x back to the beginning
        {
            x=100;
         // move y down
          y += 180;
        }// end if
    }//end for loop
}//end BearLoops


function mousePressed(){

    x=100;
    y=160;


    //set the change when you click the color circle
            var pinkBear= dist(mouseX,mouseY,windowWidth/2-140,40);
            var pandaBear= dist(mouseX,mouseY,windowWidth/2,40);
            var randomBear= dist(mouseX,mouseY,windowWidth/2+70,40);
            var brownBear= dist(mouseX,mouseY,windowWidth/2-70,40)
    //decide when the bears change color to pink
            if(pinkBear < circleSize) {
                earColor = (pink) ;
                faceColor = (pink);
                eyecircleColor = (pink);
            }

       //decide when the bears change color to brown
            if(brownBear < circleSize){
                earColor = (brown);
                faceColor = (brown);
                eyecircleColor = (brown);
              }
       //decide when the bears change color to black and white
             if(pandaBear < circleSize) {
                earColor = (black);
                faceColor = (white);
                eyecircleColor = (white);
            }

       //decide when the bears change color to random color
             if(randomBear < circleSize) {

    fill(colorCircle);
    ellipse (windowWidth/2+70,40,circleSize,circleSize);

    earColor  =color(random(255),random(255),random(255));
    faceColor = color(random(255),random(255),random(255));
    eyecircleColor = color(random(255),random(255),random(255));

}// end if

   bearShapes();//the shapes of bear
   bearLoops();  // the loop of bears
   colorSets();  //the colors set
} //end mousePressed








