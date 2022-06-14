let sketch = function(p) {
  let x = 100;
  let y = 100;
  let song1, song2, song3, song4;
  let quitar1, quitar2, quitar3, quitar4 = 0;
  let analyzer1, analyzer2, analyzer3, analyzer4;
  

  p.preload = function() {
      song1 = p.loadSound('audios/md.mp3');
      song2 = p.loadSound('audios/star.mp3');
      song3 = p.loadSound('audios/world.mp3');
      song4 = p.loadSound('audios/ls.mp3');
  }

  p.setup = function() {
    //p.createCanvas(1920, 1080);
    p.createCanvas(p.windowWidth, p.windowHeight);
    analyzer1 = new p5.Amplitude();
    analyzer1.setInput(song1);

    analyzer2 = new p5.Amplitude();
    analyzer2.setInput(song2);

    // por falta de memoria del programa no se muestran los demás botones aunque esté bien el código


    p.rectMode(p.CENTER)
  }
  p.draw = function() {
    p.background(252,243,235, 50);
   
    //md

    let rms1 = analyzer1.getLevel();
    let tamanio1 = p.map(rms1, 0, 1, 100, 10000); 
    p.stroke(109, 0, 18);
    p.strokeWeight(2)
     p.fill(216, 57, 57, 90);

     if (quitar1 == 1) {
       tamanio1 = 0; 
     } else {
      tamanio1 = p.map(rms1, 0, 1, 100, 10000); 
     }

     p.circle(650,940, tamanio1);


     p.playMiAudio1 = function() {
       if (song1.isPlaying()) {
        


         song1.stop();
         quitar1 = 1; 

       } else {
         
         song2.stop(); 
         quitar2 = 1; 
         song3.stop(); 
         quitar3 = 1;
         song4.stop(); 
         quitar4 = 1;

          song1.play();
          quitar1 = 0; 
       }

     }
     
     
     p.stopMiAudio1 = function() {
       song1.stop();

     }

    //star

    let rms2 = analyzer2.getLevel();
    let tamanio2 = p.map(rms2, 0, 1, 100, 10000); 
    p.stroke(109, 0, 18);
    p.strokeWeight(2)
     p.fill(59, 154, 183, 90);

     if (quitar2 == 1) {
       tamanio2 = 0; 
     } else {
      tamanio2 = p.map(rms2, 0, 1, 100, 10000); 
     }

     p.circle(980,940, tamanio2);


   }

     p.playMiAudio2 = function() {
       if (song2.isPlaying()) {
        

         song2.stop();
         quitar2 = 1; 

       } else {
         
          song1.stop(); 
          quitar1 = 1; 
          song3.stop(); 
          quitar3 = 1;
          song4.stop(); 
          quitar4 = 1;
        
         
          song2.play();
          quitar2 = 0;

       }

     }
     
     
     p.stopMiAudio2 = function() {
       song2.stop();

     }
     
     /*
    // world 

     let rms3 = analyzer3.getLevel();
     let tamanio3 = p.map(rms3, 0, 1, 100, 10000); 
     p.stroke(109, 0, 18);
     p.strokeWeight(2)
     p.fill(216, 57, 57, 90);

      if (quitar3 == 1) {
    tamanio3 = 0; 
     } else {
      tamanio3 = p.map(rms3, 0, 1, 100, 10000); 
      }
    
     p.circle(1450,940, tamanio3);
    
    
     p.playMiAudio3 = function() {
        if (song3.isPlaying()) {
        
        
      song3.stop();
        
      quitar3 = 1; 
        
       } else {

          song1.stop(); 
         quitar1 = 1;
         song2.stop(); 
         quitar2 = 1; 
         song4.stop(); 
         quitar4 = 1;

          song3.play();
          quitar3 = 0; 
       }
     
     }


      p.stopMiAudio3 = function() {
       song3.stop();
      
     }

     // ls

     let rms4 = analyzer1.getLevel();
     let tamanio4 = p.map(rms4, 0, 1, 100, 10000); 
     p.stroke(109, 0, 18);
     p.strokeWeight(2)
     p.fill(216, 57, 57, 90);
   
      if (quitar4 == 1) {
        tamanio4 = 0; 
      } else {
       tamanio4 = p.map(rms4, 0, 1, 100, 10000); 
     }
   
      p.circle(1700,940, tamanio4);
   
   
      p.playMiAudio4 = function() {
        if (song4.isPlaying()) {
        
        
          song4.stop();
        
          quitar4 = 1; 
        
        } else {
        
        
         song1.stop(); 
         quitar1 = 1;
         song2.stop(); 
         quitar2 = 1; 
         song3.stop(); 
          quitar3 = 1;

          song4.play();
       quitar4 = 0; 
       }

     }
  

  p.stopMiAudio4 = function() {
        song4.stop();

     } 
     */
}; 


let myp5 = new p5(sketch,"playeraudio");

function playaudio1() {
    myp5.playMiAudio1();
}

function stopaudio1() {
  myp5.stopMiAudio1();
}

function playaudio2() {
myp5.playMiAudio2();
}

function stopaudio2() {
myp5.stopMiAudio2();
}

/* 
function stopaudio3() {
myp5.stopMiAudio3();
}

function playaudio4() {
  myp5.playMiAudio4();
}

function stopaudio4() {
myp5.stopMiAudio4();
}
*/
