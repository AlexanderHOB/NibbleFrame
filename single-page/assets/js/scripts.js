//Loading
var loading = document.querySelector('.loading');
window.onload = () => {
  loading.classList.add('loadingOpacity');
  setTimeout(()=>{
    loading.classList.add('loadingGhost');
  }, 500);
};

// ScrollSpy
(function() {
	var section = document.querySelectorAll('section'),
	sections = [],
	navH = document.querySelectorAll('nav'),
	pushLink = document.querySelectorAll('.push-li'),
	navLink;
	Array.prototype.forEach.call(section, function(e) {
		sections[e.className] = e.offsetTop;
	});
	document.onscroll = () => {
		var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
		for (let i in sections) {
			if (sections[i] <= scrollPosition + navH[0].clientHeight) {
				document.querySelector('.active').classList.remove('active');
				document.querySelector('.activePush').classList.remove('activePush');
				navLink = document.querySelector('a[href*=' + i + ']');
				navLink.classList.add('active');
				for(let i in pushLink){
					if (navLink.innerHTML == pushLink[i].innerHTML) {
						pushLink[i].classList.add('activePush');
					}
				}

			}
		}
	};
})();

 //Cambiar color navbar
 var nav = document.getElementById('nav');
 var dropdown = document.getElementById('dropdown');
 window.onscroll = () => {
 	if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
 		nav.classList.add('bg-blue');
 		dropdown.classList.add('bgBlue');
 	}else{
 		nav.classList.remove('bg-blue');
 		dropdown.classList.remove('bgBlue');
 	}
 }

//Pushbar
var pushbar = new Pushbar({
	blur: true,
	overlay: true
});
