$(document).ready(function () {
$('.ryu').mouseenter(function() {
	$('.ryu-still').hide();
	$('.ryu-ready').show();
	})
	.mouseleave(function() {
	$('.ryu-ready').hide();
	$('.ryu-still').show();	
	$('.ryu-throwing').hide();
	$('.hadouken').hide();
	});
$('.ryu').click(function() {
	$('.ryu-still').hide();
	$('.ryu-ready').hide();
	$('.ryu-throwing').show();
	$('.hadouken').show();
	});
});