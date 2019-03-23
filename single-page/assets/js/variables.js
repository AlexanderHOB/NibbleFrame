// VARIABLES

//Body
const $body = document.body;

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
$messengerFacebookM = document.querySelector('.messenger-facebook-m'),
$messengerChat = document.querySelector('.messenger-chat');