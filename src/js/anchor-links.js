$('.anchor').click((e) => {
	e.preventDefault();
	let href = $(e.currentTarget).attr('href');

	let top = $(href).offset().top;

	$('body,html').animate({
		scrollTop: top,
	}, 700);
});