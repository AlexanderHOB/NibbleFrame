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
var line1 = document.querySelector('.line1');
var line2 = document.querySelector('.line2');

//Box 1
box1.addEventListener('mouseover', over(title1, content1));

box1.addEventListener('mouseover', out(title1, content1));

//Box 2
box2.addEventListener('mouseover', over(title2, content2));

box2.addEventListener('mouseover', out(title2, content2));

//Box 3
box3.addEventListener('mouseover', over(title3, content3));

box3.addEventListener('mouseover', out(title3, content3));

//Box 4
box4.addEventListener('mouseover', over(title4, content4));

box4.addEventListener('mouseover', out(title4, content4));

//Funciones
function over(title, content){
  setTimeout(()=>{
    title.classList.add('vanished');
  }, 200);
  setTimeout(()=>{
    content.classList.add('vanished');
  }, 200);
  line1.classList.add('bg4');
  line2.classList.add('bg4');
  title.classList.add('block');
  content.classList.add('block');
}

function out(title, content){
  setTimeout(()=>{
    title.classList.remove('block');
  }, 200);
  setTimeout(()=>{
    content.classList.remove('block');   
  }, 200);
  line1.classList.remove('bg4');
  line2.classList.remove('bg4');
  title.classList.remove('vanished');
  content.classList.remove('vanished');
}