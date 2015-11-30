/*Create your p5 project folder as either a separate GitHub repo or as part of an existing GitHub repo
Write a p5 program that has a drawWindow() function and uses a for loop to display at least 10 windows.
The windows must have at least 6 shapes. Each rect() or line() or ellipse() counts as a shape
Make sure you have committed your code and pushed the commits up to GitHub
Copy the URL for the repo and paste it in to the comments to compelete the assignment.
*/
//global variables;
var x;
var y;


function setup(){
    createCanvas(windowWidth,windowHeight);
    background("pink");
    drawWindow();
    windowShapes();
    loops();

}

function drawWindow(){
x=150;
y=120;

}//end drawWindow

function windowShapes(){
    strokeWeight(3);
    fill("lightyellow");
    var circle1Width = 210;
    var circle1Height = 220;
    ellipse(x+3,y,circle1Width,circle1Height);

    strokeWeight(3);
    fill("lightyellow");
    var circle2Width = 180;
    var circle2Height = 180;
    ellipse(x+3,y,circle2Width,circle2Height);

    strokeWeight(3);
    fill("lightyellow");
    var rec1Width = 260;
    var rec1Height = 60;
    rect(x-125,y,rec1Width,rec1Height);

    strokeWeight(3);
    fill("lightyellow");
    var rec2Width = 220;
    var rec2Height = 300;
    rect(x-107,y+60,rec2Width,rec2Height);

    strokeWeight(3);
    line(x-90,y+60,x-90,y+360);

    strokeWeight(3);
    line(x+95,y+60,x+95,y+360);

    strokeWeight(3);
    fill("lightblue");
    var circle2Width = 150;
    var circle2Height = 150;
    ellipse(x+3,y+150,circle2Width,circle2Height);

    strokeWeight(3);
    fill("grey");
    var rec3Width = 150;
    var rec3Height = 210;
    rect(x-72,y+150,rec3Width,rec3Height);

    line(x-72,y+220,x+75,y+220);
    line(x,y+76,x,y+360);

    fill("green");
    var plant1Width = 100;
    var plant1Height=150;
    ellipse(x-60,y+360,plant1Width,plant1Height);

    fill("green");
    var plant1Width = 100;
    var plant1Height=150;
    ellipse(x,y+360,plant1Width,plant1Height);

    fill("green");
    var plant1Width = 100;
    var plant1Height=150;
    ellipse(x+60,y+360,plant1Width,plant1Height);

    strokeWeight(3);
    fill("lightyellow");
    var rec3Width = 260;
    var rec3Height = 80;
    rect(x-125,y+360,rec3Width,rec3Height);









}//end windowShapes

function loops(){
for (var i=0;i<1000;i++){
   console.log(i);
    windowShapes();
    x+=280;

    if(x>windowWidth){
    x=150
    y+=600
    }
}
}//end loops

