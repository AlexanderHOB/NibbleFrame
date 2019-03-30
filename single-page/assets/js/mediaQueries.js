// MEDIA QUERIES

const mql = e => {
	var instances;
	if (e.matches) {
		$nav.style.transform = 'translateX(-105%)';
		instances = M.Sidenav.init($nav);
		for(let i of $navItems){
			i.classList.add('waves');
		}
	}else{
		$body.style.overflow = '';
		$nav.style.transform = 'translateX(0px)';
		instances = M.Sidenav.init(null);
		for(let i of $navItems){
			i.classList.remove('waves');
		}
	}
}

$breakpoint.addListener(mql);
mql($breakpoint);