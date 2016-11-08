(function($){

	"use strict";

	$(function(){

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
		});

		console.log("functions.js");

    	$('article').fitVids();
    	// $('#map1').parallax();

    	$(document).on('mousemove', function(e){
    	    //$('.info_box').css({left:  e.pageX-120,top:   e.pageY-165});
    	});

		$(document).on('click', '.notas li.more', function(e) {
			$(this).hide();
			$('.notas .hides').show();
		});

		$(document).on('click', '.notas_nt li.more', function(e) {
			$(this).hide();
			$('.notas_nt .hides').show();
		});

		$(document).on('click', '.grid_item.contexto', function(e) {
            var position = $('#iframe').offset().top-90;
            $('body').animate({scrollTop: position}, 600);
            $('#iframe').attr('src',"https://www.youtube.com/embed/"+$(this).attr('data')+"?autoplay=1");
        });

        $(document).on('click', '.grid_item.breaking', function(e) {
        	$('.frame_container').show();
            var position = $('#iframe1').offset().top-90;
            $('body').animate({scrollTop: position}, 600);
            $('#iframe1').attr('src',"https://www.youtube.com/embed/"+$(this).attr('data')+"?autoplay=1");
        });

    	$("#map1 .state").on( "click", function(e) {
    		var tip = $('.info_box.map1').height()+45;
    		$('.info_box.map1').css({left:  e.pageX - 120,top:   e.pageY - tip});
    		$('.info_box.map1 h3').html($(this).attr('full-name'));
    		$('.info_box.map1 th.ve').html($(this).attr('votos'));
    		$('.info_box.map1 th.peso').html($(this).attr('peso')+'%');
    		$('.info_box.map1 th.hora').html($(this).attr('hora'));
    		$('.info_box.map1').show();
    		setTimeout(function() {
				$('.info_box.map1').addClass('active');
			}, 10);
    	});

    	$("#map1 .state").on( "mouseleave", function() {
    		$('.info_box.map1').removeClass('active');
    		setTimeout(function() {
				$('.info_box.map1').hide();
			}, 300);
    	});

    	$("#map2 .state").on( "click", function(e) {
    		var tip = $('.info_box.map2').height()+45;
    		$('.info_box.map2').css({left:  e.pageX - 120,top:   e.pageY - tip});
    		$('.info_box.map2 h3').html($(this).attr('full-name'));
    		$('.info_box.map2 th.ve').html($(this).attr('votos'));
    		$('.info_box.map2 span.demo').html($(this).attr('democrata'));
    		$('.info_box.map2 span.repu').html($(this).attr('republicano'));
    		$('.info_box.map2').show();
    		setTimeout(function() {
				$('.info_box.map2').addClass('active');
			}, 10);
    	});

    	$("#map2 .state").on( "mouseleave", function() {
    		$('.info_box.map2').removeClass('active');
    		setTimeout(function() {
				$('.info_box.map2').hide();
			}, 300);
    	});

    	$("div.over_iframe").click(function(){
            $(this).hide();
        });

        $("div.barra div").click(function(){
    		$('.big_bar').hide();
        	if ($(this).parent().parent().hasClass('hc')) {
        		$('.big_bar.hc').show();
        	} else {
        		$('.big_bar.dt').show();
        	}
        });

        $("div.iframe").mouseout(function() {
			setTimeout(function() {
				$(this).find('div.over_iframe').show();
				console.log('out-full');
			}, 3000);
		});

		var total = 538;
		var suma_hc = 0;
		var suma_dt = 0;

		$.ajax({
        		url: 'http://lisa.mx/clientes/elecciones/presidencia.php',
         		type: 'get',
         		dataType: 'json'
		      })
		   		.done(function(data) {
		   			$.each(data, function(key, value) {
			   			var etdo = '';
			   			var abre = '';
			   			var voto = '';
			   			var peso = '';
			   			var hora = '';
			   			var demo = '';
			   			var repu = '';
			   			var tend = '';
			   			var siva1 = false;
			   			var siva2 = false;
			   			var peso_hc = 0;
						var peso_dt = 0;
			   			console.log(value);
   			   			$.each(value, function(key, value) {
   				   			if (key == 'Estado') { etdo = value }
   				   			if (key == 'Abr') { abre = value }
   				   			if (key == 'Ve') { voto = value }
   				   			if (key == 'Porcentaje') { peso = parseFloat(value); peso = peso * 100; peso = peso.toFixed(2); }
   				   			if (key == 'Hora') { hora = value }
   				   			if (key == 'Tendencia') { tend = value }
   				   			if (key == 'Democratas') { demo = value }
   				   			if (key == 'Republicanos') { repu = value }
   				   			if (key == 'Votos_d') { suma_hc += parseInt(value); peso_hc=value; if (value!=0) { siva1=true } }
   				   			if (key == 'Votos_r') { suma_dt += parseInt(value); peso_dt=value; if (value!=0) { siva2=true } }
   			   			});

   			   			if (abre=='NE' || abre=='ME') {
   			   				if (siva1) {
   			   					var nuevo = (peso*peso_hc)/voto;
	   			   				$('.big_bar.hc').append('<div data-name="'+abre+'" style="width:'+nuevo+'%;"></div>');
	   			   			}
	   			   			if (siva2) {
	   			   				var nuevo = (peso*peso_dt)/voto;
	   			   				$('.big_bar.dt').append('<div data-name="'+abre+'" style="width:'+nuevo+'%;"></div>');
	   			   			}

   			   				if (peso_hc>peso_dt) {
   			   					$('#map1 .state[data-name="'+abre+'"]').css('fill','#003594');
   			   				} else {
   			   					$('#map1 .state[data-name="'+abre+'"]').css('fill','#EB0029');
   			   				}
   			   				$('#map2 g.state[data-name="'+abre+'"] polygon').css('fill','#EB0029');
		   					for (var i = 1; i <= peso_hc; i++) {
		   						$('#map2 g.state[data-name="'+abre+'"] polygon:nth-of-type('+i+')').css('fill','#003594');
		   					}
   			   			} else {
	   			   			if (siva1) {
	   			   				$('.big_bar.hc').append('<div data-name="'+abre+'" style="width:'+peso+'%;"></div>');
	   			   				$('#map1 .state[data-name="'+abre+'"]').css('fill','#003594');
	   			   				$('#map2 g.state[data-name="'+abre+'"] polygon').css('fill','#003594');
	   			   				$('#map2 g.state[data-name="'+abre+'"] polyline').css('fill','#003594');
	   			   			}
	   			   			if (siva2) {
	   			   				$('.big_bar.dt').append('<div data-name="'+abre+'" style="width:'+peso+'%;"></div>');
	   			   				$('#map1 .state[data-name="'+abre+'"]').css('fill','#EB0029');
	   			   				$('#map2 g.state[data-name="'+abre+'"] polygon').css('fill','#EB0029');
	   			   				$('#map2 g.state[data-name="'+abre+'"] polyline').css('fill','#EB0029');
	   			   			}
   			   			}


   			   			$(".big_bar.hc div").each(function(){
		   			        if ($(this).attr('data-name') === '') {
		   			            $(this).remove();
		   			        }                               
		   			    });
   			   			

   			   			$('#map1 .state[data-name="'+abre+'"]').attr('full-name',etdo);
   			   			$('#map1 .state[data-name="'+abre+'"]').attr('votos',voto);
   			   			$('#map1 .state[data-name="'+abre+'"]').attr('peso',peso);
   			   			$('#map1 .state[data-name="'+abre+'"]').attr('hora',hora);
   			   			$('#map1 .state[data-name="'+abre+'"]').attr('democrata',demo);
   			   			$('#map1 .state[data-name="'+abre+'"]').attr('republicano',repu);
   			   			$('#map1 .state[data-name="'+abre+'"]').attr('tendencia',tend);

   			   			$('#map2 .state[data-name="'+abre+'"]').attr('full-name',etdo);
   			   			$('#map2 .state[data-name="'+abre+'"]').attr('votos',voto);
   			   			$('#map2 .state[data-name="'+abre+'"]').attr('peso',peso);
   			   			$('#map2 .state[data-name="'+abre+'"]').attr('hora',hora);
   			   			$('#map2 .state[data-name="'+abre+'"]').attr('democrata',demo);
   			   			$('#map2 .state[data-name="'+abre+'"]').attr('republicano',repu);
   			   			$('#map2 .state[data-name="'+abre+'"]').attr('tendencia',tend);
		   			});

		   			var calculo1 = (suma_hc/270)*100;
		   			$('.middle.hc .barra div').width(calculo1+'%');
		   			$('.middle.hc h5').html(calculo1.toFixed(1)+'%');
		   			$('.middle.hc span strong').html(suma_hc);

		   			var calculo2 = (suma_dt/270)*100;
		   			$('.middle.dt .barra div').width(calculo2+'%');
		   			$('.middle.dt h5').html(calculo2.toFixed(1)+'%');
		   			$('.middle.dt span strong').html(suma_dt);

		   			var calculo3 = total - suma_hc - suma_dt;
		   			$('.versus p strong').html(calculo3);

			   }).fail(function() {
			      	console.log("fail");

			   }).always(function() {
			      	console.log("complete");
   		});

        $.ajax({
         		url: 'http://static-feeds.esmas.com/awsfeeds/noticieros/mix/eleccionesEstadosUnidos2016.js',
        		//url: './js/json_news.json',
         		type: 'get',
         		dataType: 'jsonp',
         		jsonpCallback: 'elecccionesUSA',
        		jsonp: false,
         		//dataType: 'json'
		      })
		   		.done(function(data) {
		   			var fecha_actual = new Date();

		   			// console.log(data);
		   			var j = JSON.stringify(data);
		   			data = j.replace('elecccionesUSA(', '');
		   			data = j.replace(')', '');
		   			data = JSON.parse(data);
		   			var contador = 1;

		   			$.each(data, function(index, value) {
		   				var title = '';
   						var fecha = '';
   						var link  = '';
   						var image  = '';
   						var d  = new Date;


		   				$.each(value, function(index, value){

		   					if(index == 'title'){
		   						title = value;
		   					}

		   					if(index == 'link'){
		   						link = value;
		   					}
		   					
		   					if(index == 'images'){
		   						$.each(value, function(index, value){
		   							if(index === 'img_624x468'){
										image = value;
									}	
		   						});	
		   					}

		   					if(index == 'pubdate'){
		   						fecha = value;
		   						d = new Date(fecha);
		   						d = fecha_actual - d;
		   						d = ((d/1000)/60)/60;
		   						d = Math.round(d);

		   						if(d > 24){
		   							d =  d / 24;
		   							d = Math.round(d);
		   							if (d==1) {
		   								d+= ' día';
		   							} else {
		   								d+= ' días';
		   							}
		   						}else{
		   							if (d==1) {
		   								d+= ' hora';
		   							} else {
		   								d+= ' horas';
		   							}
		   						}
		   					}
		   					
		   				});
		   				if (contador < 11) {
		   					$('.notas').append('<li class="clearfix"><a href="' + link + '"><div class="img_frame"><img src="' + image +'"></div></a><div class="_info"><h5><a href="' + link + '">' + title +'</a></h5><span class="_time">hace ' + d + '</span></div></li>');
		   				} else {
		   					$('.notas').append('<li class="hides clearfix"><a href="' + link + '"><div class="img_frame"><img src="' + image +'"></div></a><div class="_info"><h5><a href="' + link + '">' + title +'</a></h5><span class="_time">hace ' + d + '</span></div></li>');
		   				}
		   				if (contador == 10) {
		   					$('.notas').append('<li class="more clearfix"><a><div class="img_frame">+</div></a><div class="_info"><h5><a>Ver más notas relacionadas</a></h5></div></li>');
		   				}
		   				contador++;
		   			});

		   			
		   })
		   		.fail(function() {
		      	console.log("fail");
		   })
		   		.always(function() {
		      	console.log("complete");
   });
});

})(jQuery);
