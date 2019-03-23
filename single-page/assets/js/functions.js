//FUNCIONES

// ScrollSpy

function scrollSpy(){
	scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
	for (let i in sections) {
		if (sections[i] <= scrollPosition + headerH) {
			document.querySelector('.nav-link-active').classList.remove('nav-link-active');
			document.querySelector('a[data-spy*=' + i + ']').classList.add('nav-link-active');
		}
	}
}

// Messenger Service
function chatNone(){
	$messengerChat.style.display = 'none';
	$messengerChat.classList.contains('messenger-chat-down') ? $messengerChat.classList.remove('messenger-chat-down'): null;
}

function bodyRemove(){
	$body.classList.remove('close-body', 'close-messenger-body', 'close-chat-body', 'close-helper-body');
}