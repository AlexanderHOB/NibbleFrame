// Loading
const loading = document.querySelector('.loading');


//Nav
const $header = document.querySelector('.header'),
$nav = document.querySelector('.nav'),
$navLinks = document.querySelectorAll('.nav-link'),
$navItems = document.querySelectorAll('.nav-item'),
$section = document.querySelectorAll('section');
var headerH,
sections = [],
scrollPosition;

//ScrollSpy
$section.forEach((e) => {
	sections[e.id] = e.offsetTop;
});

// Completely Loaded
window.addEventListener('load', function() {
	headerH = $header.offsetHeight;
	loading.classList.add('loading-opacity');
	setTimeout(()=>{
		loading.classList.add('loading-none');
	}, 500);	
});

//DOM Loaded
// window.addEventListener('DOMContentLoaded', function() {
// });


// Window resize
window.addEventListener('resize', function(){
	$section.forEach((e) => {
		sections[e.id] = e.offsetTop;
	});
});

//Document Scroll
document.addEventListener('scroll', function(){
	scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
	for (let i in sections) {
		if (sections[i] <= scrollPosition + headerH) {
			document.querySelector('.nav-link-active').classList.remove('nav-link-active');
			document.querySelector('a[data-spy*=' + i + ']').classList.add('nav-link-active');
		}
	}

	// Cambiar color
	if(scrollPosition > 0){
		$header.classList.add('header-active');
	}else{
		$header.classList.remove('header-active');
	}
})

// Media Queries
const breakpoint = window.matchMedia('only screen and (max-width: 767px)');
const mql = e => {
	if (e.matches) {
		$nav.style.transform = 'translateX(-105%)';
		var instances = M.Sidenav.init($nav);
		for(let i of $navItems){
			i.classList.add('waves');
		}
	}else{
		$nav.style.transform = 'translateX(0px)';
		for(let i of $navItems){
			i.classList.remove('waves');
		}
	}
}
breakpoint.addListener(mql);
mql(breakpoint);