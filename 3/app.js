// @ts-nocheck

const SPOT_COUNT = 50;
const INTERVAL = 20 * 1000;
let spots = [];

function create_color() {
  return {
    r: Math.random() * 256,
    g: Math.random() * 256,
    b: Math.random() * 256
  }
}

function update() {
  const container = document.getElementById('container');
  let html = '';
  const width = 10;
  const height = 10;

  let color = create_color();
  for (let x = 0; x < SPOT_COUNT; x++) {
    let opacity = Math.random();
    let style = `background-color: rgb(${color.r}, ${color.g}, ${color.b}, ${opacity});`;
    let css_class = '';

    // if (Math.random() > 0.5) {
    //   css_class = 'circle_out';
    // } else {
    css_class = 'circle_in_out';
    // }

    html += `<span class="${css_class}" style="${style}"></span>`
  }

  container.innerHTML = html;
}

//  Wait for document to load before defining event handlers
document.addEventListener('DOMContentLoaded', function () {

  // console.log('Width: ' + window.innerWidth);
  // console.log('Height: ' + window.innerHeight);
  update();

  setInterval(update, INTERVAL);

});