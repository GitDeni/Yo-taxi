import './vendor';
import './anchor-links';
import './faq';
import './map';
import './popups';
import './slider';
import './tabs';
import './input-mask';
import './how-tabs';
import './faq-form';


import validate from 'jquery-validation';

// eslint-disable-next-line func-names
$('form').each(function () {
	$(this).validate({
		// eslint-disable-next-line no-unused-vars
		errorPlacement(error, element) {
			return true;
		},
		focusInvalid: false,
		rules: {
			Телефон: {
				required: true,
			},
		},
		submitHandler(form) {
			let th = $(form);

			$.ajax({
				type: 'POST',
				url: 'mail.php',
				data: th.serialize(),
				// eslint-disable-next-line func-names
			}).done(() => {
				th.find('input[type="tel"]').addClass('done');

				setTimeout(() => {
					th.find('input[type="tel"]').removeClass('done');
				}, 2000);

				$.magnificPopup.open({
					removalDelay: 500, //delay removal by X to allow out-animation
					callbacks: {
						beforeOpen: function () {
							this.st.mainClass = 'mfp-zoom-in';
						},
					},
					items: {
						src: '#thanks-modal',
						type: 'inline',
					},
					closeBtnInside: true,
				});
				th.trigger('reset');
			});

			return false;
		}
	});
});

$('.main-input').keyup(function(){
	$(this).addClass('intro');
});


var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

$('.what-else').each(function(){
	let index = 1;

	

	$(this).click(function (e) {
		e.preventDefault();

		index = index + 1;

		if (index > $(this).parents('.consult__main').find('.middle-tab').length) {
			index = 1;
		}


		$(this).parents('.consult__main').find('.middle-tab').addClass('hidden');

		$(this).parents('.consult__main').find('.middle-tab[data-index="' + index + '"').removeClass('hidden');
	});
});

let currentDate = new Date().getHours();

let hour = 18;

function declOfNum(number, titles) {
	var cases = [2, 0, 1, 1, 1, 2];
	return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

if (currentDate < hour) {
	let ost = hour - currentDate;

	let text = declOfNum(ost, ['час', 'часа', 'часов']);

	$('#closing-hour').text(ost);
	$('#closing-text').text(' ' + text);
	$('#closing-hour1').text(ost);
	$('#closing-text1').text(' ' + text);
} else {
	$('#closing-hour').text('сегодня закрыт');
	$('.c-sub .txt').hide();
	$('#closing-text').text('');
	$('#closing-hour1').text('сегодня закрыт');
	$('#closing-text1').text('');
}
