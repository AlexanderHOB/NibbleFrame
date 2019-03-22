// MEDIA QUERIES

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