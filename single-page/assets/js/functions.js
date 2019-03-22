//FUNCIONES

// Messenger Service
function chatNone(){
	$messengerChat.style.display = 'none';
	$messengerChat.classList.contains('messenger-chat-down') ? $messengerChat.classList.remove('messenger-chat-down'): null;
}

function bodyRemove(){
	body.classList.remove('close-body', 'close-messenger-body', 'close-chat-body', 'close-helper-body');
}