'use strict';

const toggleBtn = document.querySelector('.m-nav-btn');
const menu = document.querySelector('.m-nav_menu');


toggleBtn.addEventListener('click',(e)=>{
	e.preventDefault();
	menu.classList.toggle('on');
});