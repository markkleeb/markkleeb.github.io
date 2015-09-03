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
		$.colorbox({href:"previous_games/field1.html"});
	});
	$('.crystal-brawl').click(function(){
		$.colorbox({href:"previous_games/crystalbrawl.html"});
	});
	$('.nest').click(function(){
		$.colorbox({href:"previous_games/nest.html"});
	});
	$('.foiled').click(function(){
		$.colorbox({href:"previous_games/foiled.html"});
	});

	$('.pb88').click(function(){
		$.colorbox({href:"pb88.html"});
	});

	$('.particle-mace').click(function(){
		$.colorbox({href:"particle-mace.html"});
	});

	$('.futbol-forever').click(function(){
		$.colorbox({href:"futbol-forever.html"});
	});

	$('.ngccot').click(function(){
		$.colorbox({href:"ngccot.html"});
	});
	
	$('.sco').click(function(){
		$.colorbox({href:"previous_games/sco.html"});
	});

	$('.gameOneGallery').colorbox({rel:"mygallery", maxWidth: 800, transition:"none"})
	$('.gameTwoGallery').colorbox({rel:"mygalleryTwo", maxWidth: 800, transition:"none"})
	// $('a.colorbox').colorbox({rel:"mygallery", transition:"none"})
});