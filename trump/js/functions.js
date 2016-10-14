(function($){

	"use strict";

	$(function(){

		var mywindow = $(window);
		var mypos = mywindow.scrollTop();
		mywindow.scroll(function() {
			if (mywindow.scrollTop() > 60) {
			    if(mywindow.scrollTop() > mypos) {
			    	$('header').removeClass('visual');
			    } else {
			        $('header').addClass('visual');
			    }
			    mypos = mywindow.scrollTop();
			}
			// if (mywindow.scrollTop() > $('nav.share').offset().top) {}
		 });

		$(document).on('click', '.grid_item', function(e) {
            var position = $('iframe').offset().top-90;
            $('body').animate({scrollTop: position}, 600);
            $('iframe').attr('src',"https://www.youtube.com/embed/"+$(this).attr('data')+"?autoplay=1");
        });

		$("a.send_tweet").click(function(){
			var share = $('#tweet_ta').val();
            window.open('https://twitter.com/intent/tweet?url=http%3A%2F%2Fwww.entucaratrump.com&text='+share+' %23entucaratrump','Comparte tu opinión','width=600,height=400');
        });

		console.log("functions.js");

		/**
		 * Validación de emails
		 */
		window.validateEmail = function (email) {
			var regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return regExp.test(email);
		};

		/**
		 * Regresa todos los valores de un formulario como un associative array 
		 */
		window.getFormData = function (selector) {
			var result = [],
				data   = $(selector).serializeArray();

			$.map(data, function (attr) {
				result[attr.name] = attr.value;
			});
			return result;
		}

    	$('article').fitVids();

    	$("div.over_iframe").click(function(){
            $(this).hide();
        });

        $("div.iframe").mouseout(function() {
			setTimeout(function() {
				$(this).find('div.over_iframe').show();
				console.log('out-full');
			}, 3000);
		});

	});

})(jQuery);
