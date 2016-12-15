(function($) {

	"use strict";

	$(function() {


		// LECTURA - IMAGE SIZE
		$(window).on("load resize", function() {
			var ancho = document.documentElement.clientWidth;
			var alto = document.documentElement.clientHeight;
			var ancho_img = $('.single-lectura .single_foto_container .img_frame img').attr('width');
			var alto_img = $('.single-lectura .single_foto_container .img_frame img').attr('height');
			var calculo1 = (alto_img * ancho) / ancho_img;


			if (ancho > 979) {
				// $('.s_wp').hide();
				$('.container.lectura').css('marginTop', alto + 'px');

				if (calculo1 < alto) {
					console.log('entra');
					$('.single-lectura .single_foto_container .img_frame img').addClass('vertical_img');
				} else {
					$('.single-lectura .single_foto_container .img_frame img').removeClass('vertical_img');
				}
			} else {
				$('.container.lectura').css('marginTop', 'auto');
				$('.single-lectura .single_foto_container .img_frame img').removeClass('vertical_img');
			}

			if (ancho > 960) {
				$('.seccion_lo_mas_visto').show();
			} else {
				$('.seccion_lo_mas_visto').hide();
				$('.seccion_lo_mas_visto.sec_visto').show();
				$('.botones_cambio span').removeClass('active');
				$('.botones_cambio span.visto').addClass('active');
			}

			$("header ul.social li form input[type=text]").animate({
				'width': '0px'
			}, 300);
			$("header .header_center").animate({
				'margin-right': '0px'
			}, 300);

		});

		var url = window.location.href;

		$(window).on("load", function() {
			var number = $('article.destacado_home.barra-alt').length;
			console.log(number);
			if (number=='6') { $('body').addClass('six-elem'); }
			if (number=='5') { $('body').addClass('five-elem'); }
			if (number=='4') { $('body').addClass('four-elem'); }
			if (number=='3') { $('body').addClass('tree-elem'); }
			if (number=='2') { $('body').addClass('two-elem'); }

			if (url.indexOf("#") != -1) {
				if ($(window).scrollTop() > 0) {
					setTimeout(function() {
						$('body').animate({
							scrollTop: $(window).scrollTop() - 10
						}, 10);
					}, 10);
				}
			}

			$('.bx-wrapper').css('opacity','1');
			$('.bx_slider').css('opacity','1');

		});

		console.log('hello from functions.js');

		var mywindow = $(window);
		var mypos = mywindow.scrollTop();
		mywindow.scroll(function() {
			if (mywindow.scrollTop() > 60) {
				if (mywindow.scrollTop() > mypos) {
					$('header').removeClass('visual');
				} else {
					$('header').addClass('visual');
				}
				mypos = mywindow.scrollTop();
			}
			if ($('body').hasClass('single-lectura') || $('body').hasClass('page-template-page-por-el-planeta')) {
				if (mywindow.scrollTop() > document.documentElement.clientHeight / 2) {
					$('header').addClass('abajo');
				} else {
					$('header').removeClass('abajo');
				}
				if (mywindow.scrollTop() > document.documentElement.clientHeight) {
					$('header').addClass('fijo');
				} else {
					$('header').removeClass('visual');
					setTimeout(function() {
						$('header').removeClass('fijo');
					}, 500);
				}
				if (mywindow.scrollTop() < document.documentElement.clientHeight / 2) {
					$('header').addClass('visual');
				}
			}

			if ($('body').hasClass('page-template-page-por-el-planeta')) {
				if (mywindow.scrollTop() > document.documentElement.clientHeight) {
					// $('.main_video').css('top', 'auto');
					// $('.main_video').css('bottom', '0px');
				}
			}
		});

		/**
		 * Validación de emails
		 */
		window.validateEmail = function(email) {
			var regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return regExp.test(email);
		};

		function validate(){
			var check = $('.mc-field-group input[type="checkbox"]').attr('checked');
			if(check == 'checked'){

			}else{
				alert('Debes aceptar los términos y condiciones de uso para continuar');
			}
		}


		$('#mc-embedded-subscribe').click(function(){
			validate();
		});

		/**
		 * Regresa todos los valores de un formulario como un associative array 
		 */
		window.getFormData = function(selector) {
			var result = [],
				data = $(selector).serializeArray();

			$.map(data, function(attr) {
				result[attr.name] = attr.value;
			});
			return result;
		}

		/* SHOWS */

		$('.shows_pool').isotope({
			itemSelector: '.show',
			masonry: {
				columnWidth: 20,
				gutter: 20
			}
		});

		$('.show').children('.show_over').hide();

		$('.show').hover(function() {
			$(this).find('.show_over').show();
		}, function() {
			$(this).find('.show_over').hide();
		});

		$(".nav_action").click(function() {
			$(".nav_action").toggleClass('open');
			if (!$('.overscreen').is(':visible')) {
				$(".overscreen").toggle();
				setTimeout(function() {
					$(".overscreen").toggleClass('active');
				}, 100);
				$('body').css('overflow', 'hidden');
			} else {
				$(".overscreen").toggleClass('active');
				$('body').css('overflow', 'auto');
				setTimeout(function() {
					$(".overscreen").toggle();
				}, 400);
			}
		});

		$(".en_vivo").click(function() {
			if ($('body').hasClass('home')) {
				if (!$(".live_stream").is(":visible")) {

					//$('#akamaiPlayer').attr('src', 'http://amp.televisa.com/embed/embed_jw.php?id=163226');

					$("html, body").animate({
						scrollTop: 0
					}, 300);
					setTimeout(function() {
						$(".live_stream").css('padding-bottom', '0%');
						$(".live_stream").show();
						$(".live_stream").animate({
							'padding-bottom': '59.8%'
						}, 500);
						$(".destacado_uno.home_page").animate({
							'margin-top': '0px'
						}, 500);
					}, 200);
				}
			}
		});

		$(".showm_btn").click(function() {
			var opcion = $(this).html();
			console.log(opcion);
			$('.showm_btn').removeClass('active');
			$(this).addClass('active');
			if (opcion == 'PERFIL') {
				$('.perfil').show();
				$('.playlists_').hide();
				$('.emisiones_1').hide();
				$('.emisiones_').hide();
			} else if (opcion == 'PLAYLIST') {
				$('.playlists_').show();
				$('.perfil').hide();
				$('.emisiones_1').hide();
				$('.emisiones_').hide();
			} else {
				$('.emisiones_1').show();
				$('.emisiones_').show();
				$('.playlists_').hide();
				$('.perfil').hide();
			}
		});

		$(".over_filler").click(function() {
			$(".nav_action").toggleClass('open');
			$(".overscreen").toggleClass('active');
			$('body').css('overflow', 'auto');
			setTimeout(function() {
				$(".overscreen").toggle();
			}, 400);
		});

		var actual = 0;

		$('div.gal_frame').click(function() {
			var index = $('ul.bx_slider li').index($(this).parent());
			index = parseInt(index)+1;
			console.log('image '+index);
			$('img.lb_img').attr('src',$('ul.bx_slider li:nth-of-type('+index+') img').attr('src'));
			$("._lightbox").toggle();
			setTimeout(function() {
				$("._lightbox").toggleClass('active');
			}, 100);
			$('body').css('overflow', 'hidden');
			actual = index;
		});

		$(".lb_filler").click(function() {
			$("._lightbox").toggleClass('active');
			$('body').css('overflow', 'auto');
			setTimeout(function() {
				$("._lightbox").toggle();
			}, 400);
		});

		$(".lb_close").click(function() {
			$("._lightbox").toggleClass('active');
			$('body').css('overflow', 'auto');
			setTimeout(function() {
				$("._lightbox").toggle();
			}, 400);
		});

		$('div.lb_arrow.prev').click(function() {
			actual = actual - 1;
			$('img.lb_img').attr('src',$('ul.bx_slider li:nth-of-type('+actual+') img').attr('src'));
		});

		$('div.lb_arrow.next').click(function() {
			actual = actual + 1;
			$('img.lb_img').attr('src',$('ul.bx_slider li:nth-of-type('+actual+') img').attr('src'));
		});

		$(".view_gallery").click(function() {
			if (!$('.overscreen1').is(':visible')) {
				$(".overscreen1").toggle();
				setTimeout(function() {
					$(".overscreen1").toggleClass('active');
				}, 100);
			} else {
				$(".overscreen1").toggleClass('active');
				setTimeout(function() {
					$(".overscreen1").toggle();
				}, 400);
			}
		});

		$(".close").click(function() {
			if (!$('.overscreen1').is(':visible')) {
				$(".overscreen1").toggle();
				setTimeout(function() {
					$(".overscreen1").toggleClass('active');
				}, 100);
			} else {
				$(".overscreen1").toggleClass('active');
				setTimeout(function() {
					$(".overscreen1").toggle();
				}, 500);
			}
		});

		$(".over_filler1").click(function() {
			if (!$('.overscreen1').is(':visible')) {
				$(".overscreen1").toggle();
				setTimeout(function() {
					$(".overscreen1").toggleClass('active');
				}, 100);
			} else {
				$(".overscreen1").toggleClass('active');
				setTimeout(function() {
					$(".overscreen1").toggle();
				}, 500);
			}
		});

		$('body').fitVids();

		/*** SINGLE VIDEO ***/

		$('.featured_video').hide();
		$('.single_foto_container span.play').on('click', function() {
			$(this).hide();
			$('.single_foto_container').find('.featured').hide();
			$('.featured_video').show();
			// $(".featured_video iframe").contents().find("div.vjs-big-play-button").click();
		});

		$('#cycle').cycle({
			fx: 'scrollHorz',
			prev: '#prev',
			next: '#next',
			speed: 500,
			timeout: 0,
			after: function() {
				console.log('cambiado');
				$('span.cambiado').html($(this).attr('data'));
			}
		});

		/*SEARCH FORM*/
		$('header ul.social li span.search_action form div input[type=submit]').attr('value', '');

		$('a.search').click(function() {
			$(this).addClass('opened');
			if ($("header ul.social li form input[type=text]").width() == 0) {
				$("header ul.social li form input[type=text]").animate({
					'width': '150px'
				}, 300);
				$("header .header_center").animate({
					'margin-right': '120px'
				}, 300);
				$("header ul.social li form input[type=text]").focus();
			} else {
				$("header ul.social li form input[type=text]").animate({
					'width': '0px'
				}, 300);
				$("header .header_center").animate({
					'margin-right': '0px'
				}, 300);
			}
		});

		/** WEATHER YAHOO **/

		$.getJSON({
			url: "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (SELECT woeid FROM geo.places WHERE text='(19.39068,-99.2836971)') and u='c'&format=json",
		}).done(function(response) {

			var temp = response.query.results.channel.item.forecast;
			var tempHigh = temp[0].high;

			$('.weather_degree').html(temp[0].high + "ºC");

		});

		$("div.breaking_feed")
			.mouseover(function() {
				$('body').css('overflow', 'hidden');
			})
			.mouseout(function() {
				$('body').css('overflow', 'auto');
			});

		// Geolocation

		$(window).on("load", function() {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(showPosition, showError);
			} else {
				console.log("Geolocation is not supported by this browser.");
			}

			function showPosition(position) {

				console.log("Latitud: " + position.coords.latitude + " Longitud: " + position.coords.longitude);

				var latitud = position.coords.latitude;
				var longitud = position.coords.longitude;

				if (typeof(Storage) !== "undefined") {

					localStorage.setItem("coords", latitud + "," + longitud);

					$('#waze').attr('src', 'https://embed.waze.com/iframe?zoom=15&lat=' + latitud + '&lon=' + longitud + '&width=1280&height=520');

				} else {

					document.cookie = "latitud=" + latitud + "; longitud=" + longitud;
				}
			}

			function showError(error) {
				switch (error.code) {
					case error.PERMISSION_DENIED:
						console.log("User denied the request for Geolocation.");
						break;
					case error.POSITION_UNAVAILABLE:
						console.log("Location information is unavailable.");
						break;
					case error.TIMEOUT:
						console.log("The request to get user location timed out.");
						break;
					case error.UNKNOWN_ERROR:
						console.log("An unknown error occurred.");
						break;
				}
			}
		});

		$('.menu_foro').click(function(){
			window.location.assign('http://televisa.news/programas/');
		});


		//STREAMING

		$('._live').click(function() {

			console.log($(this).attr('data'));

			$('#akamaiPlayer').attr('src', 'http://amp.televisa.com/embed/embed.php?id=338997&evento=' + $(this).attr('data'));

			setTimeout(function() {
				$("html, body").animate({
					scrollTop: 0
				}, 500);
			}, 500);

		});

		$('.botones_cambio span').click(function() {
			if (!$(this).hasClass('active')) {
				var option = $(this).attr("class");
				$('.botones_cambio span').removeClass('active');
				$(this).addClass('active');

				$('.seccion_lo_mas_visto').hide();
				if (option=='visto') {
					$('.seccion_lo_mas_visto.sec_visto').show();
				}
				if (option=='video') {
					$('.seccion_lo_mas_visto.sec_video').show();
				}
				if (option=='infografias') {
					$('.seccion_lo_mas_visto.sec_info').show();
				}
				if (option=='tendencias') {
					$('.seccion_lo_mas_visto.sec_trend').show();
				}
			}

		});

		

	});

	// $(document).ready(function(){
	//   $('.bx_slider').bxSlider({
	//     slideWidth: 141,
	//     minSlides: 2,
	//     maxSlides: 6,
	//     moveSlides: 2,
	//     slideMargin: 10
	//   });
	// });

})(jQuery);

// ERROR EN IMAGEN

function imgError(image) {
	console.log('error');
	image.remove();
	return true;
}