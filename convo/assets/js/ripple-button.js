$(function() {

	$(".ripple").on('click', function(e) {

		if ($(this).find('span').length === 0) {

			$(this).append('<span></span>');

			var ripple = $(this).find('span'),
				size = ( $(this).innerWidth() > $(this).innerHeight() ) ? $(this).innerWidth()*2 : $(this).innerHeight()*2,
				clickY = $(this).offset().top,
				clickX = $(this).offset().left,
				x = e.pageX - clickX,
				y = e.pageY - clickY;

			ripple.css({
				'top': y +'px',
				'left': x +'px',
			});

			ripple.animate({
				'width': size +'px',
				'height': size +'px',
				'margin-top': -size/2 +'px',
				'margin-left': -size/2 +'px',
				'opacity': 0,
			}, 450, function() {
				$(this).remove();
			});

		}
		
	});

});