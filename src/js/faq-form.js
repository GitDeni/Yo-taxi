$('body').on('click', '.next-question', function () {
	if ($('.main-textarea').val().length > 0) {
		$('.main-textarea').removeClass('errorr');
		$('.faq-tab-1').removeClass('active');
		$('.faq-tab-1').addClass('dn');
		$('.faq-tab-2').removeClass('dn');
		$('.faq-tab-2').addClass('active');
		setTimeout(function () {
			$('.faq-tab-2').addClass('in');
		}, 200);
	} else {
		$('.main-textarea').addClass('errorr');
	}
	
	return false;
});


$('.main-textarea').keyup(function(){
	if ($(this).val().length > 0) {
		$(this).addClass('introo');
		$(this).removeClass('errorr');
	} else {
		$(this).removeClass('introo');
	}
});