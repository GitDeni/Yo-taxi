import Swiper from 'swiper';


var swiper1 = new Swiper ('.video-swiper', {
	slidesPerView: 2,
	spaceBetween: 30,
	simulateTouch: false,
	lazy: {
		loadPrevNext: true,
		loadOnTransitionStart: true,
	},
	breakpoints: {
		1024: {
			slidesPerView: 1,
			spaceBetween: 50,
		},
	},
	// Navigation arrows
	navigation: {
		nextEl: '.testim-next',
		prevEl: '.testim-prev',
	},
})

var swiper2 = new Swiper ('.photo-swiper', {
	slidesPerView: 2,
	spaceBetween: 30,
	simulateTouch: false,
	lazy: {
		loadPrevNext: true,
		loadOnTransitionStart: true,
	},
	breakpoints: {
		1024: {
			slidesPerView: 1,
			spaceBetween: 50,
		},
	},
	// Navigation arrows
	navigation: {
		nextEl: '.testim-next',
		prevEl: '.testim-prev',
	},
})

var swiper3 = new Swiper ('.written-swiper', {
	slidesPerView: 4,
	spaceBetween: 30,
	simulateTouch: false,
	lazy: {
		loadPrevNext: true,
		loadOnTransitionStart: true,
	},
	breakpoints: {
		1024: {
			slidesPerView: 1,
			spaceBetween: 50,
		},
	},
	// Navigation arrows
	navigation: {
		nextEl: '.testim-next',
		prevEl: '.testim-prev',
	},
})


var swiper4 = new Swiper ('.char-slider', {
	slidesPerView: 1,
	spaceBetween: 30,
	simulateTouch: false,
	lazy: {
		loadPrevNext: true,
		loadOnTransitionStart: true,
	},
	// Navigation arrows
	navigation: {
		nextEl: '.char-next',
		prevEl: '.char-prev',
	},
})


function tabs() {
	$('.video-swiper .swiper-slide-active').next().addClass('swiper-active-second');

	$('.written-swiper .swiper-slide-active').next().addClass('swiper-active-second');
	$('.written-swiper .swiper-slide-active').next().next().addClass('swiper-active-second');
	$('.written-swiper .swiper-slide-active').next().next().next().addClass('swiper-active-second');

	$('.photo-swiper .swiper-slide-active').next().addClass('swiper-active-second');

	$('.testim-next').click(function () {
		$('.video-swiper .swiper-slide').removeClass('swiper-active-second');
		$('.video-swiper .swiper-slide-active').next().addClass('swiper-active-second');

		$('.photo-swiper .swiper-slide').removeClass('swiper-active-second');
		$('.photo-swiper .swiper-slide-active').next().addClass('swiper-active-second');

		$('.written-swiper .swiper-slide').removeClass('swiper-active-second');
		$('.written-swiper .swiper-slide-active').next().addClass('swiper-active-second');
		$('.written-swiper .swiper-slide-active').next().next().addClass('swiper-active-second');
		$('.written-swiper .swiper-slide-active').next().next().next().addClass('swiper-active-second');
	});
	$('.testim-prev').click(function () {
		$('.video-swiper .swiper-slide').removeClass('swiper-active-second');
		$('.video-swiper .swiper-slide-active').next().addClass('swiper-active-second');

		$('.photo-swiper .swiper-slide').removeClass('swiper-active-second');
		$('.photo-swiper .swiper-slide-active').next().addClass('swiper-active-second');

		$('.written-swiper .swiper-slide').removeClass('swiper-active-second');
		$('.written-swiper .swiper-slide-active').next().addClass('swiper-active-second');
		$('.written-swiper .swiper-slide-active').next().next().addClass('swiper-active-second');
		$('.written-swiper .swiper-slide-active').next().next().next().addClass('swiper-active-second');
	});
}


export {swiper1, swiper2, swiper3, tabs}