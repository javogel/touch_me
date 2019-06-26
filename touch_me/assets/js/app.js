// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import css from "../css/app.css"

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import dependencies
//
import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative paths, for example:
// import socket from "./socket"





let sketch = function(p) {
console.log("hey")

let x = 100,
  y = 100,
  angle1 = 0.0,
  segLength = 50;

p.setup = function() {
  p.createCanvas(710, 400);
  p.strokeWeight(20.0);
  p.stroke(255, 100);
}

p.draw = function() {

  p.background(0);

  let dx = p.mouseX - x;
  let dy = p.mouseY - y;
  angle1 = p.atan2(dy, dx);
  x = p.mouseX - p.cos(angle1) * segLength;
  y = p.mouseY - p.sin(angle1) * segLength;

  p.segment(x, y, angle1);
  p.ellipse(x, y, 20, 20);
}

p.segment =  function(x, y, a) {
  p.push();
  p.translate(x, y);
  p.rotate(a);
  p.line(0, 0, segLength, 0);
  p.pop();
}


}
new p5(sketch);