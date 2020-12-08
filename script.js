function draw() {
  // canvas with id="myCanvas"
  let canvas = document.getElementById('myCanvas');
  if (canvas.getContext) {
    let ctx = canvas.getContext('2d');
    ctx.beginPath(); // note usage below 
    // triangle 1, at left
    ctx.fillStyle = "#15224a";
    ctx.moveTo(700, 520); // start at top left corner of canvas
    ctx.lineTo(660, 790); // go 200px to right (x), straight line from 0 to 0
    ctx.lineTo(430, 700); // go to horizontal 100 (x) and vertical 200 (y)
    ctx.fill(); // connect and fill  
    ctx.beginPath(); // note usage below 
    // triangle 1, at left
    ctx.fillStyle = "#123b6b";
    ctx.moveTo(700, 520); // start at top left corner of canvas
    ctx.lineTo(560, 750); // go 200px to right (x), straight line from 0 to 0
    ctx.lineTo(430, 700); // go to horizontal 100 (x) and vertical 200 (y)
    ctx.fill(); // connect and fill  
    ctx.beginPath(); // note usage below 
    // triangle 1, at left
    ctx.fillStyle = "#fff";
    // triangle 2, top center
    ctx.moveTo(300, 20); // pick up "pen," reposition at 300 (horiz), 0 (vert)
    ctx.lineTo(300, 800); // draw straight down (from 300,0) to 200px
    ctx.lineTo(850, 400); // draw up toward right (100 half of 200)
    ctx.fill(); // connect and fill
    // the outline
    ctx.lineWidth = 25;
    ctx.strokeStyle = 'rgba(143, 183, 214, 0.26)';
    ctx.stroke();
    // the Text Size & Font & Color & Align
    ctx.font = "30px IBM Plex Mono";
    ctx.fillStyle = "#747b88";
    ctx.textAlign = "center";
    // "log into" text
    ctx.fillText("LOG INTO ", 430, 320);
    ctx.font = "30px Gugi";
    ctx.fillStyle = "#747b88";
    ctx.textAlign = "center";
    // "system" text
    ctx.fillText("SYSTEM ", 425, 355);
    // first line
    ctx.fillStyle = "#79e6fb";
    ctx.fillRect(355, 360, 45, 5);
    // second line
    ctx.fillStyle = "#79e6fb";
    ctx.fillRect(355, 360, 160, 2);
    // shadow Around triangle [Calor & Blur]
    // ctx.shadowBlur = 70;
    // ctx.shadowColor = "#838995";
    // line under username filed
    ctx.fillStyle = "#e3e5e8";
    ctx.fillRect(355, 425, 300, 2);
    // line under password filed
    ctx.fillStyle = "#e3e5e8";
    ctx.fillRect(355, 470, 260, 2);

    // "log into" text
    ctx.fillText("ENTER", 590, 720);
    ctx.font = "30px IBM Plex Mono";
    ctx.fillStyle = "#fff";
    ctx.textAlign = "center";


  }
}

draw();