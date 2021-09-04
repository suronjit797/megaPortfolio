const body = document.querySelector('body')
const navbar = document.querySelector('nav')
const navBtn = document.getElementById('bars')
const nav = document.querySelector('.nav')
const navClose = document.querySelector('.nav_close')
const navWhite = document.querySelector('.nav_white')
const preloader = document.querySelector('.preloader')

// aos
AOS.init();

// preloader
function loaderFunction() {
	preloader.classList.add('d-none')
}


// to-top

const toTop = document.querySelector('.to_top')


toTop.addEventListener('click', (e) => {
	e.preventDefault();
	window.scrollTo(0, 0)
})


// nav
window.addEventListener('scroll', () => {
	const scroll = window.scrollY;

	if (scroll > 250) {
		navbar.classList.add('scroll')
		toTop.classList.remove('d-none')
	} else {
		navbar.classList.remove('scroll')
		toTop.classList.add('d-none')

	}

})


navBtn.addEventListener('click', function () {
	nav.style.left = '0'
	body.style.overflowY = 'hidden'
})

navClose.addEventListener('click', function () {
	nav.style.left = '100%'
	body.style.overflowY = 'scroll'
})
navWhite.addEventListener('click', function () {
	nav.style.left = '100%'
	body.style.overflowY = 'scroll'
})



// portfolio swiper slider
const swiper = new Swiper('.portfolio .swiper-container', {
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

});

// review swiper slider
const reviewSwiper = new Swiper('.review .swiper-container', {
	loop: true,
	slidesPerView: 1,
	spaceBetween: 30,
	centeredSlides: true,
	clickable: true,
	pagination: {
		el: '.swiper-pagination',
	},
	breakpoints: {
		768: {
			slidesPerView: 2,
			spaceBetween: 30
		},
		991: {
			slidesPerView: 3,
			spaceBetween: 30
		}
	}

});



// video play
const play = document.getElementById('play')
const display = document.getElementById('display')
const dClose = document.getElementById('close')


play.addEventListener('click', ()=>{
	display.style.display = 'flex'
	body.style.overflowY = 'hidden'
})

dClose.addEventListener('click', ()=>{
	display.style.display = 'none'
	body.style.overflowY = 'visible'

})