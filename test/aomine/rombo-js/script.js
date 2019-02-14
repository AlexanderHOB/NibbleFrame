//Variables
var box = document.querySelector('.box');
var box1 = document.querySelector('.box1');
var box2 = document.querySelector('.box2');
var box3 = document.querySelector('.box3');
var box4 = document.querySelector('.box4');
var text = document.querySelector('.text');
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
var alv = document.querySelector('.alv');

var x = {
  x: true
};

//Box 1
box1.addEventListener('mouseover', ()=>{
  box1.classList.add('effect');  
  setTimeout(()=>{
    title1.classList.add('vanished');
    content1.classList.add('vanished');
    alv.classList.add('block');
  }, 200);
  
  line1.classList.add('bg1');
  line2.classList.add('bg1');
  title1.classList.add('block');
  content1.classList.add('block');


});





// title1.addEventListener('mouseover', ()=>{effectOn(box1, title1, content1)});
// content1.addEventListener('mouseover', ()=>{effectOn(box1, title1, content1)});

alv.addEventListener('mouseout', ()=>{
  box1.classList.remove('effect');
  setTimeout(()=>{
    title1.classList.remove('block');
  }, 200);
  setTimeout(()=>{
    content1.classList.remove('block');   
  }, 200);
  line1.classList.remove('bg1');
  line2.classList.remove('bg1');
  title1.classList.remove('vanished');
  content1.classList.remove('vanished');
  alv.classList.remove('block');
}
);



// box.addEventListener('mouseout', ()=>{out(box1, title1, content1)});
// title1.addEventListener('mouseover', ()=>{effectOff(box1, title1, content1)});
// content1.addEventListener('mouseover', ()=>{effectOff(box1, title1, content1)});

// function effectOn(box, title, content){
//   box.classList.add('effect');
//   title.classList.add('vanished');
//   content.classList.add('vanished');
//   lineOn(title);
// }

//Box 2
// box2.addEventListener('mouseover', ()=>{over(box2, title2, content2)});

// box2.addEventListener('mouseout', ()=>{out(box2, title2, content2)});

// //Box 3
// box3.addEventListener('mouseover', ()=>{over(box3, title3, content3)});

// box3.addEventListener('mouseout', ()=>{out(box3, title3, content3)});

// //Box 4
// box4.addEventListener('mouseover', ()=>{over(box4, title4, content4)});

// box4.addEventListener('mouseout', ()=>{out(box4, title4, content4)});

//Funciones
// function over(box, title, content){
//   box.classList.add('effect');  
//   setTimeout(()=>{
//     title.classList.add('vanished');
//   }, 200);
//   setTimeout(()=>{
//     content.classList.add('vanished');
//   }, 200);
//   lineOn(title);
//   title.classList.add('block');
//   content.classList.add('block');
// }

// function out(box, title, content){
//   box.classList.remove('effect');
//   setTimeout(()=>{
//     title.classList.remove('block');
//   }, 200);
//   setTimeout(()=>{
//     content.classList.remove('block');   
//   }, 200);
//   lineOff(title);
//   title.classList.remove('vanished');
//   content.classList.remove('vanished');
// }

// function lineOn(title){
//   switch(title){
//     case title1:
//       line1.classList.add('bg1');
//       line2.classList.add('bg1');
//       break;
//     case title2:
//       line1.classList.add('bg2');
//       line2.classList.add('bg2');
//       break;
//     case title3:
//      line1.classList.add('bg3');
//      line2.classList.add('bg3');
//      break;
//     case title4:
//       line1.classList.add('bg4');
//       line2.classList.add('bg4');
//       break;
//   }
// }

// function lineOff(title){
//   switch(title){
//     case title1:
//       line1.classList.remove('bg1');
//       line2.classList.remove('bg1');
//       break;
//     case title2:
//       line1.classList.remove('bg2');
//       line2.classList.remove('bg2');
//       break;
//     case title3:
//      line1.classList.remove('bg3');
//      line2.classList.remove('bg3');
//       break;
//     case title4:
//      line1.classList.remove('bg4');
//      line2.classList.remove('bg4');
//      break;
//   }
// }