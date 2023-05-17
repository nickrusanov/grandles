const locBtn = document.querySelector('.location__btn');
const locReset = document.querySelector('.location__reset');
const locInput = document.querySelector('.location__input');
const locBox = document.querySelector('.location__box');

locBtn.addEventListener('click', () => {
	if (locBtn.classList.contains('location__btn--active')) {
		locBtn.classList.remove('location__btn--active');
		locBox.classList.remove('location__box--visible');
	} else {
		locBtn.classList.add('location__btn--active');
		locBox.classList.add('location__box--visible');
	}
});
