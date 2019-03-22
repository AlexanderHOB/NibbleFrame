// EVENTS

// Messenger Service
$messengerToggle.addEventListener('click', function(){
	if($messenger.classList.contains('messenger-close')){
		$messenger.classList.contains('messenger-up') ? $messenger.classList.remove('messenger-up') : null;
		$messenger.classList.remove('messenger-close');
		if ($messengerChat.classList.contains('messenger-chat-up')) {
			$messengerChat.classList.remove('messenger-chat-up');
			$messengerChat.classList.add('messenger-chat-down');
			setTimeout(chatNone, 500);
		}
	}else{
		$messenger.classList.add('messenger-up');
		$messenger.classList.add('messenger-close');
	}
});
$messengerFacebookM.addEventListener('click', function(){
	$messenger.classList.remove('messenger-up');
	$messengerChat.classList.add('messenger-chat-up');
	$messengerChat.style.display = 'block';
});
$closeChat.addEventListener('click', function(){
	$messenger.classList.remove('messenger-close');
	$messengerChat.classList.remove('messenger-chat-up');
	$messengerChat.classList.add('messenger-chat-down');
	setTimeout(chatNone, 500);
});