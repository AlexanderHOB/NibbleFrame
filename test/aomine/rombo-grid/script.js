//
var box1 = document.querySelector('.box1');
var box2 = document.querySelector('.box2');
var box3 = document.querySelector('.box3');
var box4 = document.querySelector('.box4');
var title1 = document.querySelector('.title1');
var title2 = document.querySelector('.title2');
var title3 = document.querySelector('.title3');
var title4 = document.querySelector('.title4');
var content1 = document.querySelector('.content1');
var content2 = document.querySelector('.content2');
var content3 = document.querySelector('.content3');
var content4 = document.querySelector('.content4');
var raya1 = document.querySelector('.raya1');
var raya2 = document.querySelector('.raya2');

//
box1.addEventListener('mouseover', ()=>{
  setTimeout(()=>{
    title1.classList.add('vanished');
  }, 200);
  setTimeout(()=>{
    content1.classList.add('vanished');
  }, 200);
  title1.classList.add('block');
  content1.classList.add('block');
  raya1.classList.add('bg1');
  raya2.classList.add('bg1');
});

box1.addEventListener('mouseout', ()=>{
  setTimeout(()=>{
  title1.classList.remove('block');
  }, 200);
  setTimeout(()=>{
  content1.classList.remove('block');   
  }, 200);
  raya1.classList.remove('bg1');
  raya2.classList.remove('bg1');
  title1.classList.remove('vanished');
  content1.classList.remove('vanished');
});

//
box2.addEventListener('mouseover', ()=>{
  setTimeout(()=>{
    title2.classList.add('vanished');
  }, 200);
  setTimeout(()=>{
    content2.classList.add('vanished');
  }, 200);
  raya1.classList.add('bg2');
  raya2.classList.add('bg2');
  title2.classList.add('block');
  content2.classList.add('block');
});

box2.addEventListener('mouseout', ()=>{
  setTimeout(()=>{
  title2.classList.remove('block');
  }, 200);
  setTimeout(()=>{
  content2.classList.remove('block');   
  }, 200);
  raya1.classList.remove('bg2');
  raya2.classList.remove('bg2');
    title2.classList.remove('vanished');
    content2.classList.remove('vanished');
});

//
box3.addEventListener('mouseover', ()=>{
  setTimeout(()=>{
    title3.classList.add('vanished');
  }, 200);
  setTimeout(()=>{
    content3.classList.add('vanished');
  }, 200);
  raya1.classList.add('bg3');
  raya2.classList.add('bg3');
  title3.classList.add('block');
  content3.classList.add('block');
});

box3.addEventListener('mouseout', ()=>{
  setTimeout(()=>{
  title3.classList.remove('block');
  }, 200);
  setTimeout(()=>{
  content3.classList.remove('block');   
  }, 200);
  raya1.classList.remove('bg3');
  raya2.classList.remove('bg3');
    title3.classList.remove('vanished');
    content3.classList.remove('vanished');
});

//
box4.addEventListener('mouseover', ()=>{
  setTimeout(()=>{
    title4.classList.add('vanished');
  }, 200);
  setTimeout(()=>{
    content4.classList.add('vanished');
  }, 200);
  raya1.classList.add('bg4');
  raya2.classList.add('bg4');
  title4.classList.add('block');
  content4.classList.add('block');
});
box4.addEventListener('mouseout', ()=>{
  setTimeout(()=>{
  title4.classList.remove('block');
  }, 200);
  setTimeout(()=>{
  content4.classList.remove('block');   
  }, 200);
  raya1.classList.remove('bg4');
  raya2.classList.remove('bg4');
    title4.classList.remove('vanished');
    content4.classList.remove('vanished');
});