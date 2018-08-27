// For clicking/highlight the users on the left sidebar
$('.person[data-chat=person1]').addClass('active');

$('.left .person').mousedown(function () {
	if ($(this).hasClass('.active')) {
		return false;
	} else {
		var personName = $(this).find('.name').text();
		$('.left .person').removeClass('active');
		$(this).addClass('active');
	}
});



// Side Panel switch
$(".heading-compose").click(function () {
	$(".side-two").css({
		"left": "0"
	});
});

$(".newMessage-back").click(function () {
	$(".side-two").css({
		"left": "-100%"
	});
});
