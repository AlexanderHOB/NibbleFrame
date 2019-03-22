// VARIABLES

// Loading
const $loading = document.querySelector('.loading');

//Nav
const $header = document.querySelector('.header'),
$nav = document.querySelector('.nav'),
$navLinks = document.querySelectorAll('.nav-link'),
$navItems = document.querySelectorAll('.nav-item'),
$section = document.querySelectorAll('section');
var headerH,
sections = [],
scrollPosition;

//ScrollSpy
$section.forEach((e) => {
	sections[e.id] = e.offsetTop;
});

// Messenger Service
const $messenger = document.querySelector('.messenger'),
$messengerToggle = document.querySelector('.messenger-toggle'),
$messengerFacebook = document.querySelector('.messenger-facebook'),
$messengerChat = document.querySelector('.messenger-chat'),
$closeChat = document.querySelector('.close-chat');