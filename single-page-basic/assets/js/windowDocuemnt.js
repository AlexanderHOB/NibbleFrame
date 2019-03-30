// WINDOW / DOCUMENT EVENTS

// Completely Loaded
window.addEventListener('load', function() {
	// Header Height
	headerH = $header.offsetHeight;

	// Loading
	$loading.style.opacity = '0';
	setTimeout(()=>{
		$loading.style.display = 'none';
	}, 1000);
	NProgress.done();

	// Chat none
	chatNone();
});

//DOM Loaded
// window.addEventListener('DOMContentLoaded', function() {
// });


// Window resize
window.addEventListener('resize', function(){
	// ScrollSpy
	$section.forEach((e) => {
		sections[e.id] = e.offsetTop;
	});
	scrollSpy();
});

//Document Scroll
document.addEventListener('scroll', function(){
	// ScrollSpy
	scrollSpy();

	// Cambiar color
	if(scrollPosition > 0){
		$header.classList.add('header-active');
	}else{
		$header.classList.remove('header-active');
	}
})