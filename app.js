// @ts-nocheck

function create_color() {
  return {
    r: Math.random() * 256,
    g: Math.random() * 256,
    b: Math.random() * 256
  }
}

function update() {
    var container = document.getElementById('container');
    var html = '';

    for(let x=0; x < 50; x++) {
      var color = create_color();
      var style = `background-color: rgb(${color.r}, ${color.g}, ${color.b})`;
      html += `<span class="circle" style="${style}"></span>`
    }

    container.innerHTML = html;
}

//  Wait for document to load before defining event handlers
document.addEventListener('DOMContentLoaded',function() {

  console.log('Width: ' + window.innerWidth);
  console.log('Height: ' + window.innerHeight);
  update();

  setInterval(update, 1000);
  
}); 