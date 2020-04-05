$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut();
	$("#preloder").delay(400).fadeOut("slow");



});

(function($) {
	$("#scrolldown").click(function() {
		$('html, body').animate({
			scrollTop: $("#scrollhere").offset().top
		}, 400);
	});

	$("#scrolldown2").click(function() {
		$('html, body').animate({
			scrollTop: $("#donate").offset().top
		}, 800);
	});

	$("#scrolldown3").click(function() {
		$('html, body').animate({
			scrollTop: $("#printsettings").offset().top
		}, 400)
	})
	$(".main-menu").slicknav({
        appendTo: '.header-section',
		allowParentLinks: true,
		closedSymbol: '<i class="fa fa-angle-right"></i>',
		openedSymbol: '<i class="fa fa-angle-down"></i>'
	});
	$('.slicknav_nav').prepend('<li class="header-right-warp"></li>');
    $('.header-right').clone().prependTo('.slicknav_nav > .header-right-warp');
	/*------------------
		Background Set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});

	
	$('.hero-slider').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		mouseDrag: false,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		items: 1,
		autoplay: true
	});


})(jQuery);

