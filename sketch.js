function setup() {
    createCanvas(600, 600);
    background("white");
  }
  
  function draw() {
    
    
    stroke("lightblue");
    fill("blue");
    
    // console.log(mouseIsPressed);
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35); 
    }  
  }