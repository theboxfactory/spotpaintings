// @ts-nocheck

const SPOT_COUNT = 50;
const INTERVAL = 1 * 50;
let spots = [];

function create_color() {
  return {
    r: Math.random() * 256,
    g: Math.random() * 256,
    b: Math.random() * 256,
  };
}

function mutate_color(spot, threshold) {
  if (Math.random() > threshold) {
    let increment = Math.round(Math.random() * 4) + -2;
    spot.color.r += increment;
    // console.log("Increment R " + increment);

    if (spot.color.r > 255) {
      spot.color.r = 255;
    }

    if (spot.color.r < 0) {
      spot.color.r = 0;
    }

    // console.log("Mutate R " + spot.color.r);
  }

  if (Math.random() > threshold) {
    let increment = Math.round(Math.random() * 4) + -2;
    spot.color.g += increment;
    // console.log("Increment G " + increment);

    if (spot.color.g > 255) {
      spot.color.g = 255;
    }

    if (spot.color.g < 0) {
      spot.color.g = 0;
    }

    // console.log("Mutate G " + spot.color.g);
  }

  if (Math.random() > threshold) {
    let increment = Math.round(Math.random() * 4) + -2;
    spot.color.b += increment;
    // console.log("Increment B " + increment);

    if (spot.color.b > 255) {
      spot.color.b = 255;
    }

    if (spot.color.b < 0) {
      spot.color.b = 0;
    }

    // console.log("Mutate B " + spot.color.b);
  }

  return spot;
}

function create_spot() {
  let spot = {
    color: {
      r: Math.round(Math.random() * 256, 0),
      g: Math.round(Math.random() * 256, 0),
      b: Math.round(Math.random() * 256, 0),
    },
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
  const container = document.getElementById("container");
  let html = "";
  const width = 10;
  const height = 10;

  spots.forEach((spot) => {
    spot = mutate_color(spot, 0.5);
    return spot;
  });

  spots.forEach((spot) => {
    let opacity = 1;
    let style = `background-color: rgb(${spot.color.r}, ${spot.color.g}, ${spot.color.b}, ${opacity});`;
    let css_class = "";
    css_class = "circle";
    html += `<span class="${css_class}" style="${style}"></span>`;
  });

  container.innerHTML = html;
}

//  Wait for document to load before defining event handlers
document.addEventListener("DOMContentLoaded", function () {
  spots = create_spots(create_spot);
  setInterval(update, INTERVAL);
});