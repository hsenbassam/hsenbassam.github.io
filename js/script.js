(function($) {
  "use strict";

//------------------------------------- Waiting for the entire site to load ------------------------------------------------//


$(document).ready(function(){


//------------------------------------- Site slider ------------------------------------------------//

$("#testimonial-carousel").owlCarousel({
    navigation : false,
    slideSpeed : 300,
    paginationSpeed : 400,
    responsiveRefreshRate : 200,
    responsiveBaseWidth: window,
    pagination: true,
    singleItem: true
});


$("#block-slider").owlCarousel({
    navigation : false,
    slideSpeed : 300,
    paginationSpeed : 400,
    responsiveRefreshRate : 200,
    responsiveBaseWidth: window,
    pagination: false,
    singleItem: true,
    navigation:true,
    navigationText: ["<span class='icon-left-open-big'></span>","<span class='icon-right-open-big'></span>"]
});




//------------------------------------- End site slider------------------------------------------------//





//------------------------------------- Skills percentage setup------------------------------------------------//



$(".percentage").each(function(){
          var  width= $(this).text();
          $(this).css("width", width).empty();
});




//------------------------------------- End skills percentage setup------------------------------------------------//










//---------------------------------- Form validation-----------------------------------------//










$('.submit').on("click", function(){

	$('input#name').removeClass("errorForm");
	$('textarea#message').removeClass("errorForm");
	$('input#email').removeClass("errorForm");

	var error = false;
	var name = $('input#name').val();
	if(name == "" || name == " ") {
		error = true;
		$('input#name').addClass("errorForm");
	}


		var msg = $('textarea#message').val();
		if(msg == "" || msg == " ") {
			error = true;
			$('textarea#message').addClass("errorForm");

		}

	var email_compare = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
	var email = $('input#email').val();
	if (email == "" || email == " ") {
		$('input#email').addClass("errorForm");
		error = true;
	}else if (!email_compare.test(email)) {
		$('input#email').addClass("errorForm");
		error = true;
	}

	if(error == true) {
		return false;
	}

	var data_string = $('.contact-form').serialize();

	
	$.ajax({
		type: "POST",
		url: "../send.php",
		data: data_string,
		success: function(message) {
				$('#success').fadeIn('slow');
				$('.contact-form')[0].reset();
					},
		error: function(message) {
				$('#error').fadeIn('slow');
		}

	});
	
	
	
	return false;
	
});



//---------------------------------- End form validation-----------------------------------------//




});


})(jQuery);
