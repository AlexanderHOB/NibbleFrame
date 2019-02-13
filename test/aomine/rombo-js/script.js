var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
var box4 = document.getElementById('box4');

box1.addEventListener('mouseover', ()=>{
  if(!box2.classList.contains('index')){
    box1.classList.add('effect');
  box1.classList.add('index');
  }
});
box1.addEventListener('mouseout', ()=>{
  box1.classList.remove('effect');
  setTimeout(()=>{
    box1.classList.remove('index');
    },300);
});

box2.addEventListener('mouseover', ()=>{
  box2.classList.add('effect');
  box2.classList.add('index');
});
box2.addEventListener('mouseout', ()=>{
  box2.classList.remove('effect');
  setTimeout(()=>{
  box2.classList.remove('index');
  },300);
});

box3.addEventListener('mouseover', ()=>{
  box3.classList.add('effect');
  box3.classList.add('index');
});
box3.addEventListener('mouseout', ()=>{
  box3.classList.remove('effect');
  setTimeout(()=>{
    box3.classList.remove('index');
    },300);
});

box4.addEventListener('mouseover', ()=>{
  box4.classList.add('effect');
  box4.classList.add('index');
});
box4.addEventListener('mouseout', ()=>{
  box4.classList.remove('effect');
  setTimeout(()=>{
    box4.classList.remove('index');
    },300);
});