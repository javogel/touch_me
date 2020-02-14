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
import { Presence, Socket } from "phoenix"

const userId = Math.random().toString()
let socket = new Socket("/socket", {params: { userId }})

socket.connect()

let users = {}

let sketch = function(p) {
console.log("hey")
  let x = 100,
    y = 100,
    angle1 = 0.0,
    segLength = 50;


p.setup = function() {
  p.createCanvas(window.innerWidth, window.innerHeight);
  p.strokeWeight(20.0);
  p.stroke(255, 100);
  p.background(0);
}

p.draw = function() {


  // let dx = p.mouseX - x;
  // let dy = p.mouseY - y;
  // angle1 = p.atan2(dy, dx);
  // x = p.mouseX - p.cos(angle1) * segLength;
  // y = p.mouseY - p.sin(angle1) * segLength;
  x = p.mouseX;
  y = p.mouseY;

  // p.segment(x, y, angle1);
  p.ellipse(x, y, 50, 50);
  Object.values(users).forEach((user)=>{
    p.ellipse(user.x, user.y, 50, 50)
  })
}

p.segment =  function(x, y, a) {
  p.push();
  p.translate(x, y);
  p.rotate(a);
  p.line(0, 0, segLength, 0);
}

}
new p5(sketch);

var channel = socket.channel('page:canvas', {});

let presence = new Presence(channel)

presence.onJoin((id, current, newPres) => {
  if(!current){
    console.log("user has entered for the first time", newPres)
  } else {
    console.log("user additional presence", newPres)
  }
})

channel.join()

channel.on('other_position', (payload) => {
  if(Math.random() > 0.6) return
  users[payload.userId] = payload
})

var wholeBody = document.getElementsByTagName('body')[0];

wholeBody.addEventListener('mousemove', (event) => {
  channel.push('other_position', { userId, x: event.x, y: event.y})
})


