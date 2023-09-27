// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
   background(0);

   var ballSize = map(other, 0, 100, 0, 200);
   var ballSize2 = map(vocal, 0, 100, 0, 200);
   var ballSize3 = map(drum, 0, 100, 0, 200);
   var ballSize4 = map(bass, 0, 100, 0, 200);

   noStroke();
   fill(255, 60, 0);
   ellipse(150,150,ballSize,ballSize);
   fill(255, 106, 13);
   ellipse(150,150,ballSize/1.25, ballSize/1.25);
   fill(126, 255, 71);
   ellipse(150,150,ballSize/2, ballSize/2);
   fill(13, 17, 255);
   ellipse(150,150,ballSize/3.5, ballSize/3.5);

   noStroke();
   fill(255, 60, 0);
   ellipse(400,280,ballSize2,ballSize2);
   fill(255, 106, 13);
   ellipse(400,280,ballSize2/1.25, ballSize2/1.25);
   fill(126, 255, 71);
   ellipse(400,280,ballSize2/2, ballSize2/2);
   fill(13, 17, 255);
   ellipse(400,280,ballSize2/3.5, ballSize2/3.5);

   noStroke();
   fill(255, 60, 0);
   ellipse(170,500,ballSize3,ballSize3);
   fill(255, 106, 13);
   ellipse(170,500,ballSize3/1.25, ballSize3/1.25);
   fill(126, 255, 71);
   ellipse(170,500,ballSize3/2, ballSize3/2);
   fill(13, 17, 255);
   ellipse(170,500,ballSize3/3.5, ballSize3/3.5);

   noStroke();
   fill(255, 60, 0);
   ellipse(440,580,ballSize4,ballSize4);
   fill(255, 106, 13);
   ellipse(440,580,ballSize4/1.25, ballSize4/1.25);
   fill(126, 255, 71);
   ellipse(440,580,ballSize4/2, ballSize4/2);
   fill(13, 17, 255);
   ellipse(440,580,ballSize4/3.5, ballSize4/3.5);

   // noStroke();
   // fill(255,60,0);
   // ellipse(265,500,ballSize,ballSize);

   // fill(255,106,13);
   // ellipse(265,500,ballSize2/1,ballSize2/1);

   // fill(126,255,71);
   // ellipse(265,500,ballSize3/2, ballSize3/2);

   // fill(13,17,255);
   // ellipse(265,500,ballSize4/3, ballSize4/3);
}