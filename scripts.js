let size=16;
const canvas = document.getElementById('canvas');
for (let i=0; i<size; i++){
  for (let i2=0; i2<size; i2++){
    let box = document.createElement('div');
    box.classList.add('canvas-box');
    box.style.width=`${(100/size)}%`;
    canvas.appendChild(box);
  }
}