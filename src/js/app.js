$(document).ready(function(){
	$('.parallax').parallax();

	$('#btnsomos').click(function(e) {

		e.preventDefault()
		var posicion = $("#idsomos").offset().top;
		$("html, body").animate({
    		scrollTop: posicion
		}, 	1000);
	})

	$('#btnestudios').click(function(e) {

		e.preventDefault()
		var posicion = $("#idestudios").offset().top;
		$("html, body").animate({
    		scrollTop: posicion
		}, 	1000);
	})


	$('#btndatahub').click(function(e) {

		e.preventDefault()
		var posicion = $("#iddatahub").offset().top;
		$("html, body").animate({
    		scrollTop: posicion
		}, 	1000);
	})

	$('#btnboletin').click(function(e) {

		e.preventDefault()
		var posicion = $("#idnoticias").offset().top;
		$("html, body").animate({
    		scrollTop: posicion
		}, 	1000);
	})


	$('#btncontacto').click(function(e) {

		e.preventDefault()
		var posicion = $("#idcontacto").offset().top;
		$("html, body").animate({
    		scrollTop: posicion
		}, 	2000);
	})

	$('#iddatahub').click(function() {
		var changefondo = `<iframe class="iframe-map" 
								src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15197.103211478841!2d-63.17920027905273!3d-17.778730439584365!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbo!4v1473089921364" 
								></iframe>`

		var antiguofondo = `<img id="img-datahub" src="src/image/datahub.png" style="transform: display: block;" />`

		if ($('#iddatahub').hasClass('volcado')){
			$('#iddatahub').removeClass('volcado')
			$('#iddatahub').addClass('inverso')
			$('#iddatahub .parallax img').replaceWith(antiguofondo)
		}
		else{

			$('#iddatahub').removeClass('inverso')
			$('#iddatahub').addClass('volcado')
			$('#iddatahub .parallax img').replaceWith(changefondo)
		}
	})

	$(window).scroll(function() {

	    var height = $(window).scrollTop();

	    if(height >= ($("#idsomos").offset().top - 100)) {
	    	
			$('.option-1').addClass('option-active')
			$('.option-1').addClass('option-color-active')

			$('.option-3').removeClass('option-active')
			$('.option-3').removeClass('option-color-active')

			$('.option-2').removeClass('option-active')
			$('.option-2').removeClass('option-color-active')

			$('.option-4').removeClass('option-active')
			$('.option-4').removeClass('option-color-active')

			$('.option-5').removeClass('option-active')
			$('.option-5').removeClass('option-color-active')        
	    }

	    if (height >= ($("#iddatahub").offset().top - 100)) {

    		$('.option-2').addClass('option-active')
			$('.option-2').addClass('option-color-active')

			$('.option-1').removeClass('option-active')
			$('.option-1').removeClass('option-color-active')

			$('.option-3').removeClass('option-active')
			$('.option-3').removeClass('option-color-active')

			$('.option-4').removeClass('option-active')
			$('.option-4').removeClass('option-color-active')

			$('.option-5').removeClass('option-active')
			$('.option-5').removeClass('option-color-active')
	    }

	    if (height >= ($("#idestudios").offset().top - 100)) {
	    	
    		$('.option-3').addClass('option-active')
			$('.option-3').addClass('option-color-active')

			$('.option-1').removeClass('option-active')
			$('.option-1').removeClass('option-color-active')

			$('.option-2').removeClass('option-active')
			$('.option-2').removeClass('option-color-active')

			$('.option-4').removeClass('option-active')
			$('.option-4').removeClass('option-color-active')

			$('.option-5').removeClass('option-active')
			$('.option-5').removeClass('option-color-active')
	    }
	    
	    if(height >= ($("#idnoticias").offset().top - 100)) {
	    	
			$('.option-4').addClass('option-active')
			$('.option-4').addClass('option-color-active')

			$('.option-1').removeClass('option-active')
			$('.option-1').removeClass('option-color-active')

			$('.option-3').removeClass('option-active')
			$('.option-3').removeClass('option-color-active')

			$('.option-2').removeClass('option-active')
			$('.option-2').removeClass('option-color-active')

			$('.option-5').removeClass('option-active')
			$('.option-5').removeClass('option-color-active')	        
	    }

	    if (height >= ($("#idcontacto").offset().top - 100)) {

    		$('.option-5').addClass('option-active')
			$('.option-5').addClass('option-color-active')

			$('.option-1').removeClass('option-active')
			$('.option-1').removeClass('option-color-active')

			$('.option-3').removeClass('option-active')
			$('.option-3').removeClass('option-color-active')

			$('.option-4').removeClass('option-active')
			$('.option-4').removeClass('option-color-active')

			$('.option-2').removeClass('option-active')
			$('.option-2').removeClass('option-color-active')
	    }

	});

	$('#option-1').click(function() {

		if (!$('#content-option-2').hasClass('opacity')) {

			$('#content-option-2').addClass('opacity')
			$('#content-option-3').addClass('opacity')
			$('#content-option-4').addClass('opacity')
			$('#content-option-5').addClass('opacity')

		} else {

			$('#content-option-2').removeClass('opacity')
			$('#content-option-3').removeClass('opacity')
			$('#content-option-4').removeClass('opacity')
			$('#content-option-5').removeClass('opacity')

		}
	})

	$('#option-2').click(function() {
		
		if (!$('#content-option-1').hasClass('opacity')) {

			$('#content-option-1').addClass('opacity')
			$('#content-option-3').addClass('opacity')
			$('#content-option-4').addClass('opacity')
			$('#content-option-5').addClass('opacity')

		} else {

			$('#content-option-1').removeClass('opacity')
			$('#content-option-3').removeClass('opacity')
			$('#content-option-4').removeClass('opacity')
			$('#content-option-5').removeClass('opacity')

		}
	})

	$('#option-3').click(function() {

		if (!$('#content-option-1').hasClass('opacity')) {

			$('#content-option-1').addClass('opacity')
			$('#content-option-2').addClass('opacity')
			$('#content-option-4').addClass('opacity')
			$('#content-option-5').addClass('opacity')

		} else {

			$('#content-option-1').removeClass('opacity')
			$('#content-option-2').removeClass('opacity')
			$('#content-option-4').removeClass('opacity')
			$('#content-option-5').removeClass('opacity')

		}
	})

	$('#option-4').click(function() {
		if (!$('#content-option-1').hasClass('opacity')) {

			$('#content-option-1').addClass('opacity')
			$('#content-option-3').addClass('opacity')
			$('#content-option-2').addClass('opacity')
			$('#content-option-5').addClass('opacity')

		} else {

			$('#content-option-1').removeClass('opacity')
			$('#content-option-3').removeClass('opacity')
			$('#content-option-2').removeClass('opacity')
			$('#content-option-5').removeClass('opacity')

		}
	})

	$('#option-5').click(function() {
		if (!$('#content-option-1').hasClass('opacity')) {

			$('#content-option-1').addClass('opacity')
			$('#content-option-3').addClass('opacity')
			$('#content-option-4').addClass('opacity')
			$('#content-option-2').addClass('opacity')

		} else {

			$('#content-option-1').removeClass('opacity')
			$('#content-option-3').removeClass('opacity')
			$('#content-option-4').removeClass('opacity')
			$('#content-option-2').removeClass('opacity')

		}
	})

	$('#modal-1').click(function() {
		$('#modal1').openModal()
	})

	$('#modal-2').click(function() {
		$('#modal2').openModal()	
	})

	$('#modal-3').click(function() {
		$('#modal3').openModal()
	})

	$('#modal-4').click(function() {
		$('#modal4').openModal()
	})

	$('#modal-5').click(function() {
		$('#modal5').openModal()
	})

	$('#modal-6').click(function() {
		$('#modal6').openModal()
	})

	var el = '.js-menu';
  	var myMenu = cssCircleMenu(el);

  	var el1 = '.js-menu-1';
  	var myMenu = cssCircleMenu(el1)

  	var el2 = '.js-menu-2';
  	var myMenu = cssCircleMenu(el2)

  	var el3 = '.js-menu-3';
  	var myMenu = cssCircleMenu(el3)

  	var el4 = '.js-menu-4';
  	var myMenu = cssCircleMenu(el4)
});