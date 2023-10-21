// vocal, drum, bass, and other are volumes ranging from 0 to 100
let firstRun = true
let paper = [];

function draw_one_frame(words, vocal, drum, bass, other, counter) 
{
   background(255);

if (firstRun) {
   rectMode(CENTER)
   paper.push(loadImage('paper_0.png'));

   firstRun= false;
}

   var ballSize = map(other, 0, 10, 0, 20);
   var ballSize2 = map(vocal, 0, 10, 0, 20);
   var ballSize3 = map(drum, 0, 10, 0, 20);
   var ballSize4 = map(bass, 0, 10, 0, 20);

   if(song.currentTime()<3){
   noStroke();
   fill(255, 60, 0);
   ellipse(500,400,ballSize,ballSize);
   fill(255, 106, 13);
   ellipse(500,400,ballSize/1.25, ballSize/1.25);
   fill(126, 255, 71);
   ellipse(500,400,ballSize/2, ballSize/2);
   fill(13, 17, 255);
   ellipse(500,400,ballSize/3.5, ballSize/3.5);

   noStroke();
   fill(255, 60, 0);
   ellipse(1200,400,ballSize2,ballSize2);
   fill(255, 106, 13);
   ellipse(1200,400,ballSize2/1.25, ballSize2/1.25);
   fill(126, 255, 71);
   ellipse(1200,400,ballSize2/2, ballSize2/2);
   fill(13, 17, 255);
   ellipse(1200,400,ballSize2/3.5, ballSize2/3.5);

   noStroke();
   fill(255, 60, 0);
   ellipse(500,800,ballSize3,ballSize3);
   fill(255, 106, 13);
   ellipse(500,800,ballSize3/1.25, ballSize3/1.25);
   fill(126, 255, 71);
   ellipse(500,800,ballSize3/2, ballSize3/2);
   fill(13, 17, 255);
   ellipse(500,800,ballSize3/3.5, ballSize3/3.5);

   noStroke();
   fill(255, 60, 0);
   ellipse(1200,800,ballSize4,ballSize4);
   fill(255, 106, 13);
   ellipse(1200,800,ballSize4/1.25, ballSize4/1.25);
   fill(126, 255, 71);
   ellipse(1200,800,ballSize4/2, ballSize4/2);
   fill(13, 17, 255);
   ellipse(1200,800,ballSize4/3.5, ballSize4/3.5);
}

if(song.currentTime()>3){
 

let BG = int(map(0,100,0,1));
   console.log(BG);
   push();
   scale(3);
   image(paper[BG],width/2, height/2);
   pop();
}}