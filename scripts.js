//Initialize canvas
const canvas = document.getElementById('canvas');
let previousSize=0,size=16;
let color='#000000';
changeGridSize();

//Get inputs
const colorInput = document.getElementById('color-input');
const penToggle = document.getElementById('pen-toggle');
const eraserToggle = document.getElementById('eraser-toggle');
const rainbowToggle = document.getElementById('rainbow-toggle');
const gridSizeRange = document.getElementById('grid-size-range');
const clearButton = document.getElementById('clear-button');

//Input event listeners
colorInput.addEventListener('change', ()=>{if(penToggle.checked) color=colorInput.value;});
penToggle.addEventListener('click', ()=>{color=colorInput.value;});
eraserToggle.addEventListener('click', ()=>{color=null;});
rainbowToggle.addEventListener('click', ()=>{color=getRandomColor();});
gridSizeRange.addEventListener('input', ()=>{
  previousSize=size;
  size=Number(gridSizeRange.value);
  changeGridLabel();
  changeGridSize();
});
clearButton.addEventListener('click', ()=>{
  Array.from(canvas.children).forEach(box => {box.style.backgroundColor=null;});
});

function getRandomColor(){
  const r=Math.floor((Math.random() * 255))+1;  
  const g=Math.floor((Math.random() * 255))+1;
  const b=Math.floor((Math.random() * 255))+1;  
  return `rgb(${r},${g},${b})`;
}

//Grid change functions
function changeGridLabel(){
  const gridSizeLabel=Array.from(document.getElementsByClassName('grid-size-label'));
  gridSizeLabel.forEach(label=>label.textContent=size);
}
function changeGridSize(){
  const addingBoxes = canvas.childElementCount**.5<size; 
  const boxesDifference = addingBoxes ? size**2-previousSize**2:previousSize**2-size**2;
  
  for (let i=0; i<boxesDifference;i++){
    if (addingBoxes) addBox();
    else canvas.removeChild(canvas.lastChild);
  }
  
  Array.from(canvas.children).forEach(box=>{box.style.width = `${(100/size)}%`;});
}

//Box styles and functions
function addBox(){
  let box = document.createElement('div');
  box.classList.add('canvas-box');
  box.draggable=false;
  box.addEventListener('mousedown', paintColor);
  box.addEventListener('mouseenter', function(e){
    if (e.buttons===1) paintColor(e);
  });
  canvas.appendChild(box);
}
function paintColor(e){
  if (rainbowToggle.checked) color=getRandomColor();
  e.target.style.backgroundColor=color;
}