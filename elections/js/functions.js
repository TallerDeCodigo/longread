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

    	$("#map1 .state").on( "click", function(e) {
    		var tip = $('.info_box.map1').height()+45;
    		$('.info_box.map1').css({left:  e.pageX - 120,top:   e.pageY - tip});
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

        $("div.iframe").mouseout(function() {
			setTimeout(function() {
				$(this).find('div.over_iframe').show();
				console.log('out-full');
			}, 3000);
		});


        $.ajax({
         	//url: 'http://static-feeds.esmas.com/awsfeeds/noticieros/mix/eleccionesEstadosUnidos2016.js',
        		url: './js/json_news.json',
         		type: 'get',
         		dataType: 'jsonp',
         		jsonpCallback: 'elecccionesUSA',
        		jsonp: false,
         		//dataType: 'json'
		      })
		   		.done(function(data) {
		   			var fecha_actual = new Date();

		   			console.log(data);
		   			var j = JSON.stringify(data);
		   			data = j.replace('elecccionesUSA(', '');
		   			data = j.replace(')', '');
		   			data = JSON.parse(data);

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
<<<<<<< HEAD
		   							d+= ' Días';
		   						}else{
		   							d+= ' Horas'
=======
		   							if (d == 1) {
		   								d+= ' día';
		   							} else {
		   								d+= ' días';
		   							}
		   						}else{
		   							if (d == 1) {
		   								d+= ' hora';
		   							} else {
		   								d+= ' horas';
		   							}
>>>>>>> 255e8577dbf9596baa15cf2969125e0e3a817a31
		   						}
		   					}
		   					
		   				});
		   				$('.notas').append('<li class="clearfix"><a href="' + link + '"><div class="img_frame"><img src="' + image +'"></div></a><div class="_info"><h5><a href="' + link + '">' + title +'</a></h5><span class="_time">hace ' + d + '</span></div></li>');
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
