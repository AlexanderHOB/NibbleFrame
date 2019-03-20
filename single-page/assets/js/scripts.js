// Loading
// var loading = document.querySelector('.loading');
// window.onload = () => {
// 	loading.classList.add('loadingOpacity');
// 	setTimeout(()=>{
// 		loading.classList.add('loadingGhost');
// 	}, 500);
// };

//Nav

const header = document.querySelector('.header'),
nav = document.querySelector('.nav'),
navLinks = document.querySelectorAll('.nav-link');
section = document.querySelectorAll('section');
var headerH,
sections = [],
scrollPosition;

// Window Load
window.onload = ()=>{
	headerH = header.offsetHeight;
	section.forEach((e) => {
		sections[e.id] = e.offsetTop;
	});
}

// Window resize
window.onresize = ()=>{
	headerH = header.offsetHeight;
	section.forEach((e) => {
		sections[e.id] = e.offsetTop;
	});
}

//Document Scroll
document.onscroll = () => {
	scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
	for (let i in sections) {
		if (sections[i] <= scrollPosition + headerH) {
			document.querySelector('.active').classList.remove('active');
			document.querySelector('a[data-spy*=' + i + ']').classList.add('active');
		}
	}

	// Cambiar color
	// if(scrollPosition > headerH){
	// 	header.classList.add('');
	// }else{
	// 	header.classList.remove('');
	// }
};

const breakpoint = window.matchMedia('only screen and (max-width: 767px)');

// function validation(e) {  //const mql = e => {
// 	if (e.matches) {

// 	}else{

// 	}
// }

// breakpoint.addListener(mql);
// mql(breakpoint);

