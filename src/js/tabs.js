import { nfapply } from "q";
import {swiper1} from "../js/slider";
import {swiper2} from "../js/slider";
import {swiper3} from "../js/slider";
import {tabs} from './slider';

tabs()

// табы в модалке
$('body').on('click', '.tab-nav a', function () {
	$('.tab-nav a').removeClass('active');
	$(this).addClass('active');
	var href = $(this).attr('href');
	$('.modal-pane').removeClass('active').removeClass('in');
	$(href).addClass('active');
	$('.credit-leasing').attr('data-id', href);
	setTimeout(function () {
		$(href).addClass('in');
	}, 200);
	return false;
});

// табы в отзывах
$('body').on('click', '.testim-tab-nav a', function () {

	$('.testim-tab-nav a').removeClass('active');
	$(this).addClass('active');
	var href = $(this).attr('href');
	$('.testim-tab-pane').removeClass('active').removeClass('in');
	$(href).addClass('active');
	swiper1.update();
	swiper2.update();
	swiper3.update();
	tabs();
	setTimeout(function () {
		$(href).addClass('in');
	}, 200);

	return false;
});

// табы в модалке по характеристикам
$('body').on('click', '.complect-tab-nav a', function () {
	$('.complect-tab-nav a').removeClass('active');
	$(this).addClass('active');
	var href = $(this).attr('href');
	$('.charact-pane').removeClass('active').removeClass('in');
	$(href).addClass('active');
	setTimeout(function () {
		$(href).addClass('in');
	}, 200);
	return false;
});