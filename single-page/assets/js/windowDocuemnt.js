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
});

//Document Scroll
document.addEventListener('scroll', function(){
	// ScrollSpy
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