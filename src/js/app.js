

/*var rub = new SuperGif({ gif: $('#img-gif')[0] } );

// rub.load(function() {

// })

// $('.jsgif').addClass('hide')
console.log(rub.get_auto_play)
rub.load()*/

//var gifr = new GifPlayer($('.gifplayer')[0], { label: 'play' })

//console.log($('#img-gif')[0].gifplayer())

// $('img').removeData()


// $('#img-gif').removeAttr('src', '');
// $('#img-gif').attr('src', 'src/image/logoweb.gif');

// setTimeout(function() {
// 	$('#loading').addClass('hide')
// }, 6500)

$(document).ready(function(){


	redimecionar()

	$(window).resize(function() {
		redimecionar()		
	})

	function redimecionar() {
		if ($(window).width() < 620 || $(document).width() < 620) {
			$('#idmenu').removeClass('center-menu')	
		}

		if($(window).width() > 620 || $(document).width() > 620) {
			$('#idmenu').addClass('center-menu')
		}
	}

	$('.parallax').parallax();

	function posicionarSomos(e) {
		e.preventDefault()
		var posicion = $("#idsomos").offset().top;
		$("html, body").animate({
    		scrollTop: posicion
		}, 	700);
	}


	// $('#up-somos').click(function(e) {
	// 	posicionarSomos(e)
	// })

	$('#btnsomos').click(function(e) {
		posicionarSomos(e)
	})

	$('#btnestudios').click(function(e) {
		posicionarEstadisticas(e)
	})

	function posicionarEstadisticas(e) {
		e.preventDefault()
		var posicion = $("#idestudios").offset().top;
		$("html, body").animate({
    		scrollTop: posicion
		}, 	700);
	}


	$('#btndatahub').click(function(e) {
		posicionarDataHub(e)
	})

	function posicionarDataHub(e) {
		e.preventDefault()
		var posicion = $("#iddatahub").offset().top;
		$("html, body").animate({
    		scrollTop: posicion
		}, 	700);
	}

	$('#btnboletin').click(function(e) {
		posicionarBoletin(e)
	})

	function posicionarBoletin(e) {
		e.preventDefault()
		var posicion = $("#idnoticias").offset().top;
		$("html, body").animate({
    		scrollTop: posicion
		}, 	700);
	}


	$('#btncontacto').click(function(e) {
		posicionarContacto(e)
	})

	function posicionarContacto(e) {
		e.preventDefault()
		var posicion = $("#idcontacto").offset().top;
		$("html, body").animate({
    		scrollTop: posicion
		}, 	700);
	}

	$('#iddatahub').click(function() {
		var changefondo = `<iframe class="iframe-map" allowfullscreen 
								src="http://159.203.182.38/visualizadorV2/" 
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

	$('#more-data').click(function() {

		var template_estadistica = `<div class="parallax-container height-vh align-vertical-horizontal" id="idestudios">
		<div class="container-fluid margin-top-all" id="slide-estadistica">
			<div class="row altura-estadistica margin-botton">
				<div class="col s12">
					<div class="row altura-estadistica-up">
						<div class="col s3">
							<a href="estadistica.html"><img src="src/image/image-estadisticas/cuadrado.jpg" width="100%"></a>
						</div>
						<div class="col s2">
							<a href="estadistica.html"><img src="src/image/image-estadisticas/height-large.jpg" width="100%"></a>
						</div>
						<div class="col s5 altura-estadistica-down-total">
							<div class="row altura-up-porcion">
								<div class="col s7 ">
									<a href="#!"><img src="src/image/image-estadisticas/horizontal1.jpg" width="100%"></a>
								</div>
								<div class="col s5">
									<a href="#!"><img src="src/image/image-estadisticas/featured31.jpg" width="100%"></a>
								</div>
							</div>
							<div class="row altura-down-porcion">
								<div class="col s5">
									<a href="#!"><img src="src/image/image-estadisticas/featured31.jpg" width="100%"></a>
								</div>
								<div class="col s7">
									<a href="#!"><img src="src/image/image-estadisticas/horizontal1.jpg" width="100%"></a>
								</div>
							</div>
						</div>
						<div class="col s2">
							<a href="#!"><img src="src/image/image-estadisticas/height-large.jpg" width="100%"></a>
						</div>
					</div>

					<div class="row">
						<div class="col s10 altura-estadistica-down-total">
							<div class="row altura-estadistica-middle">
								<div class="col s3">
									<a href="estadistica.html"><img src="src/image/image-estadisticas/featured31.jpg" width="100%"></a>
								</div>
								<div class="col s3">
									<a href="#!"><img src="src/image/image-estadisticas/horizontal1.jpg" width="100%"></a>
								</div>
								<div class="col s3">
									<a href="#!"><img src="src/image/image-estadisticas/horizontal1.jpg" width="100%"></a>
								</div>
								<div class="col s3">
									<a href="#!"><img src="src/image/image-estadisticas/horizontal1.jpg" width="100%"></a>
								</div>
							</div>
							<div class="row altura-estadistica-middle">
								<div class="col s2">
									<a href="#!"><img src="src/image/image-estadisticas/height-large.jpg" width="100%"></a>
								</div>
								<div class="col s3">
									<a href="#!"><img src="src/image/image-estadisticas/cuadrado.jpg" width="100%"></a>
								</div>
								<div class="col s2">
									<a href="#!"><img src="src/image/image-estadisticas/height-large.jpg" width="100%"></a>
								</div>
								<div class="col s3">
									<a href="#!"><img src="src/image/image-estadisticas/cuadrado.jpg" width="100%"></a>
								</div>
								<div class="col s2">
									<a href="#!"><img src="src/image/image-estadisticas/height-large.jpg" width="100%"></a>
								</div>
							</div>
						</div>
						<div class="col s2 altura-estadistica-down-total">
							<a href="#!"><img src="src/image/image-estadisticas/height-large.jpg" width="100%"></a>
						</div>
					</div>
				</div>
			</div>
		</div>		
	</div>`

		$('.remove-option').addClass('hide')
		$('#idestudios').addClass('volcado')
		$('#idestudios').replaceWith(template_estadistica)


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

	$('#option-1').mouseout(function() {
		opacidadMenuOne()
	})

	$('#option-1').mouseover(function() {
		opacidadMenuOne()
	})

	function opacidadMenuOne() {
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
	}

	$('#option-2').mouseover(function() {
		opacidadMenuTwo()
	})

	$('#option-2').mouseout(function() {
		opacidadMenuTwo()
	})

	function opacidadMenuTwo(){
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
	}


	$('#option-3').mouseover(function() {
		menuOpacidadThree()
	})

	$('#option-3').mouseout(function() {
		menuOpacidadThree()
	})

	function menuOpacidadThree() {
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
	}

	$('#option-4').mouseout(function() {
		menuOpacidadFour()
	})

	$('#option-4').mouseover(function() {
		menuOpacidadFour()
	})

	function menuOpacidadFour() {
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
	}


	$('#option-5').mouseover(function() {
		menuOpacidadFive()
	})

	$('#option-5').mouseout(function() {
		menuOpacidadFive()
	})

	function menuOpacidadFive() {
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
	}

	$('#modal-1').click(function() {
		$('#modal1').openModal()
	})

	$('#modal-2').click(function() {
		$('#modal1').openModal()	
	})

	$('#modal-3').click(function() {
		$('#modal1').openModal()
	})

	$('#modal-4').click(function() {
		$('#modal1').openModal()
	})

	$('#modal-5').click(function() {
		$('#modal1').openModal()
	})

	$('#modal-6').click(function() {
		$('#modal1').openModal()
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