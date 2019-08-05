let rent = 0,
		sell = 0,
		marka = '',
		dayy = 16,
		monthh = 18;

function declOfNum(number, titles) {
	let cases = [2, 0, 1, 1, 1, 2];
	return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function getDayInMonth(day) {
	if (day > 31) {
		return `31 день`;
	} else {
		let dayText = declOfNum(day, ['день', 'дня', 'дней']);
		return `${day} ${dayText}`;
	}
}

function getMonth(month) {
	let monthText = declOfNum(month, ['месяц', 'месяца', 'месяцев']);
	return `${month} ${monthText}`;
}

$("#ui1").slider({
	animate: "slow",
	range: "min",
	value: 49,
	slide: function (event, ui) {
		let value = ui.value;
		let day = Math.round(100 / 31);

		let d = Math.round(value / day);

		dayy = d;

		let returnDay = getDayInMonth(d);
		
		$('.left-days-count').text(returnDay);

		console.log(dayy)

		if (dayy > 31) {
			dayy = 31;
		}

		calc(rent, sell, dayy, monthh, marka);
	}
});

$("#ui2").slider({
	animate: "slow",
	range: "min",
	value: 49,
	slide: function (event, ui) {
		let value = ui.value;
		let month = 100 / 36;

		let d = Math.round(value / month);

		monthh = d;

		let returnMonth = getMonth(d);

		$('.right-days-count').text(returnMonth);

		calc(rent, sell, dayy, monthh, marka);
	}
});

// days init
let returnDay = getDayInMonth(Math.round(49 / (Math.round(100 / 31))));

$('.left-days-count').text(returnDay);

// month init
let returnMonth = getMonth(Math.round(49 / (100 / 36)));

$('.right-days-count').text(returnMonth);

// calc function
function calc(rent, sell, day = 16, month = 18, marka) {
	let noYouwheelsRent = rent * day * month;

	noYouwheelsRent = numberWithCommas(noYouwheelsRent);

	$('.red-price').text(noYouwheelsRent);

	let youwheelsRent = sell - (rent * day * month);

	youwheelsRent = numberWithCommas(youwheelsRent);

	sell = numberWithCommas(sell);

	$('.green-price').text(sell);

	$('.green-discount').text(noYouwheelsRent);

	$('.green-total').text(youwheelsRent);

	// $('.calculator__output .green .sub').text(`Вы постепенно выкупаете свой ${marka}`);
	$('.month-count').text(` ${month} `);
	$('.calculator__output .red .text').text(`Ваши платежи за ${month} мес. аренды`);
}

$('.calc-slider .swiper-slide').on('click', function(e){
	e.preventDefault();

	$('.slider.dis').removeClass('dis');

	$('.calc-slider .swiper-slide').removeClass('active');
	$(this).addClass('active');

	rent = parseInt($(this).attr('data-rent'));
	sell = parseInt($(this).attr('data-sell'));
	marka = $(this).find('.model').text();

	calc(rent, sell, dayy, monthh, marka);
});

$('.calc-slider .swiper-slide-next').next().addClass('act');

$('.calc-next').click(function(){
	$('.calc-slider .swiper-slide').removeClass('act');
	$('.calc-slider  .swiper-slide-next').next().addClass('act');
});

$('.calc-prev').click(function () {
	$('.calc-slider .swiper-slide').removeClass('act');
	$('.calc-slider  .swiper-slide-next').next().addClass('act');
});