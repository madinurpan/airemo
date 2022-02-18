$(document).ready(function() {
     $("#phone").mask("+7 (999) 999-99-99");
});




const menuBurger = document.querySelector('.menu__burger');
const menuLink = document.querySelectorAll('.menu__link');
if (menuBurger) {
	const headerMenu = document.querySelector('.header__menu');
	const headerContacts = document.querySelector('.header__contacts');

	menuBurger.addEventListener("click", function (e) {
		menuBurger.classList.toggle('_active');
		headerMenu.classList.toggle('_active');
		headerContacts.classList.toggle('_active');
	});
	menuLink.forEach((event) => {
		event.addEventListener('click', (e) => {
			headerMenu.classList.remove('_active');
			headerContacts.classList.remove('_active');
			menuBurger.classList.remove('_active');
		});
	});
};




$(document).ready(function () {
	$('.slider').slick({
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 2000,
		easing: 'linear',
		infinite: true,
		initialSlide: 0,
		autoplay: true,
		autoplaySpeed: 800,
		touchThreshold: 10,
		touchMove: true,
		waitForAnimate: true,
		centerMode: false,
		varibleWidth: true,
		rows: 1,
		responsive: [
			{
				breakpoint: 480,
				settings: {
					arrows: false,
				}
			}
		]
	});
});


const buttonMouseOne = document.querySelector('.row_one');
const modalButtonOne = document.querySelector('.btn_one');
const buttonMouseTwo = document.querySelector('.row_two');
const modalButtonTwo = document.querySelector('.btn_two');
const buttonMouseThree = document.querySelector('.row_three');
const modalButtonThree = document.querySelector('.btn_three');

buttonMouseOne.addEventListener('mouseenter', function () {
	modalButtonOne.classList.add('active');
});
buttonMouseOne.addEventListener('mouseleave', function () {
	modalButtonOne.classList.remove('active');
});
buttonMouseTwo.addEventListener('mouseenter', function () {
	modalButtonTwo.classList.add('active')
});
buttonMouseTwo.addEventListener('mouseleave', function () {
	modalButtonTwo.classList.remove('active')
});
buttonMouseThree.addEventListener('mouseenter', function () {
	modalButtonThree.classList.add('active');
});
buttonMouseThree.addEventListener('mouseleave', function () {
	modalButtonThree.classList.remove('active');
});


const btns = document.querySelectorAll('.modal__link');
const modalOverlay = document.querySelectorAll('.popup__close');
const modals = document.querySelectorAll('.popup');

btns.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');
		modals.forEach((el) => {
			el.classList.remove('active');
		});

		document.querySelector(`[data-target="${path}"]`).classList.toggle('active');
		document.body.classList.add('_lock');
	});
});

modalOverlay.forEach((elem) => {
	elem.addEventListener('click', (e) => {
		modals.forEach((el) => {
			el.classList.remove('active');
			document.body.classList.remove('_lock');
		});
	});
});

