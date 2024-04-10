function preload()
{

}

function setup()
{
canvas=createCanvas(800,700);
canvas.position(100,250);
video=createCapture(VIDEO);
video.hide();
}

function draw()
{
image(video,100,100,600,500);
stroke("orange");
fill("green");
circle(50,50,80);
stroke("orange");
fill("blue");
rect(90,40,700,20);
stroke("orange");
fill("green");
circle(750,50,80);
stroke("orange");
fill("blue");
rect(750,50,20,600);
stroke("orange");
fill("green");
circle(760,650,80);
stroke("orange");
fill("blue");
rect(80,640,700,20);
stroke("orange");
fill("green");
circle(50,640,80);
stroke("orange");
fill("blue");
rect(40,50,20,600);
}


function take_snapshot()
{
    save("my_Filteredimg.png");
}




