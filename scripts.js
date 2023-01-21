const canvas = document.getElementById('canvas');

let size=16;
let color='#000000';
let boxes = [];
for (let i=0; i<size; i++){
  for (let i2=0; i2<size; i2++){
    let box = document.createElement('div');
    box.classList.add('canvas-box');
    box.draggable=false;
    box.style.width=`${(100/size)}%`;
    boxes.push(box);
    canvas.appendChild(box);
  }
}

function paintColor(e){e.target.style.backgroundColor=color;}
boxes.forEach(box=>{
  box.addEventListener('mousedown', paintColor);
  box.addEventListener('mouseenter', function(e){
    if (e.buttons===1){paintColor(e);}
  });
});

const colorInput = document.getElementById('color-input');
const penToggle = document.getElementById('pen-toggle');
const eraserToggle = document.getElementById('eraser-toggle');

colorInput.addEventListener('change', function(){if(penToggle.checked) color=colorInput.value;});
penToggle.addEventListener('click', function(){color=colorInput.value;});
eraserToggle.addEventListener('click', function(){color='#ffffff'});
