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

function mutate_color(color) {
  let spot = {
    color: create_color(),
  };
  return spot;
}

function create_spot() {
  let spot = {
    color: create_color(),
  };
  return spot;
}

function create_spots(create_callback) {
  let spot = [];
  for (let i = 0; i < SPOT_COUNT; i++) {
    let spot = create_callback();
    spots.push(spot);
  }
  return spots;
}

function update() {
  const container = document.getElementById('container');
  let html = '';
  const width = 10;
  const height = 10;

  let color = create_color();
  spots.forEach(() => {

  });
  spots.forEach((color) => {
    let style = `background-color: rgb(${color.r}, ${color.g}, ${color.b}, ${opacity});`;
    let css_class = '';
    css_class = 'circle_in_out';
    html += `<span class="${css_class}" style="${style}"></span>`
  });
}

container.innerHTML = html;
}

//  Wait for document to load before defining event handlers
document.addEventListener('DOMContentLoaded', function () {

  // update();
  create_spots(create_spot)
  setInterval(update, INTERVAL);

});