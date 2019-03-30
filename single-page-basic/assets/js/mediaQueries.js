// MEDIA QUERIES

const mql = e => {
	if (e.matches) {
		for(let i of $navItems){
			i.classList.add('waves');
		}
		for(let i of $navLinks){
			i.addEventListener('click', navRemove);
			console.log(i);
		}
	}else{
		for(let i of $navItems){
			i.classList.remove('waves');
			i.removeEventListener('click', navRemove);
		}
	}
}

$breakpoint.addListener(mql);
mql($breakpoint);