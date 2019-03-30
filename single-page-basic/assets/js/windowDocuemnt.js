// WINDOW / DOCUMENT EVENTS

// Completely Loaded
window.addEventListener('load', function() {
	// Loading
	$loading.style.opacity = '0';
	setTimeout(()=>{
		$loading.style.display = 'none';
	}, 1000);
	NProgress.done();

	// Nav slide down
	const validation = e => {
		if (e.matches) {
			navH = $nav.scrollHeight + 'px'; 
			$nav.style.height = '0px';
			$navToggle.addEventListener('click', navToggle);
		}else{
			$nav.style.height = 'auto';
			$nav.classList.remove('drop');
			$navToggle.classList.remove('open', 'close');
			$navToggle.removeEventListener('click', navToggle);
		}
	}
	$breakpoint.addListener(validation);
	validation($breakpoint);

	// Header Height
	headerH = $header.offsetHeight;
	console.log(headerH);

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
})