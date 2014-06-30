$(document).ready(function(){
	$(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});
	$(".vimeo").colorbox({iframe:true, innerWidth:500, innerHeight:409});
	$('nav a').click(function(){
	    $('html, body').animate({
	        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top - 90
	    }, 500);
	    return false;
	});
	$.colorbox.settings.opacity = 0.8;
	$('.field-1').click(function(){
		$.colorbox({href:"field1.html"});
	});
	$('.crystal-brawl').click(function(){
		$.colorbox({href:"crystalbrawl.html"});
	});
	$('.nest').click(function(){
		$.colorbox({href:"nest.html"});
	});
	$('.foiled').click(function(){
		$.colorbox({href:"foiled.html"});
	});

	$('.mini-thumb-link').colorbox({rel:'group5', transition:'none'})
});