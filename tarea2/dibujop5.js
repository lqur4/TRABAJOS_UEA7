function setup() {
  createCanvas(400, 400);
  background("#cce8ff");
}


function draw() {
  background("#cce8ff");

  // --- pasto ---
  fill("#7ed957");
  noStroke();
  rect(0, 300, 450, 100);

  // --- pared de la casa ---
  fill("#ffe3b3"); 
  stroke("#d59f6c");
  strokeWeight(3);
  rect(120, 180, 160, 140);

  // --- el techo ---
  fill("#ff6b6b");
  stroke("#c73e3e");
  triangle(100, 180, 300, 180,200, 100);

  // --- puerta ---
  fill("#b8895e");
  stroke("#704f31");
  rect(185, 240, 50, 80);

  // --- ventana 1 ---
  fill("#ffffff");
  stroke("#7aa0b7");
  rect(140, 210, 40, 40);

  // --- ventana 2 ---
  rect(220, 210, 40, 40);
}
