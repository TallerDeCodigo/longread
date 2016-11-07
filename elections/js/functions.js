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
         	//dataType: 'jsonp'
         	dataType: 'json'
		      })
		   		.done(function(data) {

		   			$.each(data, function(index, value) {
		   				var title = '';
   						var fecha = '';
   						var link  = '';
   						var image  = '';

		   				$.each(value, function(index, value){
		   					//console.log(index);
		   					
		   					//console.log(index + ' ' + value);

		   					if(index == 'title'){
		   						// add title to html
		   						title = value;


		   					}
		   					if(index == 'link'){
		   						// add link to html	
		   						link = value;
		   						//console.log(link);
		   					}
		   					
		   					if(index == 'images'){
		   						// add img to html
		   						$.each(value, function(index, value){
		   							//console.log(index + ' --- ' + value);
		   							if(index === 'img_624x468'){
										image = value;
									}	
		   						});	
		   					}
		   					console.log(link + '<== AQUI') ;
		   					

		   				});
		   				$('#read_json').append('<div><a href="' + link + '" target="_blank"><img src="' + image + '"/></a>' + title +  '</div>');
		   			});

		      	console.log("success");
		   })
		   		.fail(function() {
		      	console.log("error");
		   })
		   		.always(function() {
		      	console.log("complete");
   });


	});

	

})(jQuery);
