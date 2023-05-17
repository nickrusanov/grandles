// window.addEventListener('scroll', () => {
// 	if (window.scrollY > 58) {
// 		document.querySelector('.nav-desktop').classList.add('nav-desktop--fixed');
// 		document
// 			.querySelector('.nav-desktop__logo')
// 			.classList.add('nav-desktop__logo--small');
// 		document.querySelector('.header').classList.add('header--space');
// 	} else {
// 		document
// 			.querySelector('.nav-desktop')
// 			.classList.remove('nav-desktop--fixed');
// 		document
// 			.querySelector('.nav-desktop__logo')
// 			.classList.remove('nav-desktop__logo--small');
// 		document.querySelector('.header').classList.remove('header--space');
// 	}
// });

window.addEventListener('scroll', () => {
	if (window.scrollY > 58) {
		document.querySelector('.nav-mobile').classList.add('nav-mobile--fixed');
		document.querySelector('.header').classList.add('header--space');
	} else {
		document.querySelector('.nav-mobile').classList.remove('nav-mobile--fixed');
		document.querySelector('.header').classList.remove('header--space');
	}
});
