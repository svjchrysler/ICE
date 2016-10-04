
// $('#img-gif').removeAttr('src', '');
// $('#img-gif').attr('src', 'src/image/logoweb.gif');

// setTimeout(function() {
// 	$('#loading').addClass('hide')
// }, 6500)

$(document).ready(function(){

	redimecionar()
	scrollPage()

	$(window).resize(function() {
		redimecionar()		
	})

	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});
 
	function redimecionar() {
		if ($(window).width() < 620 || $(document).width() < 620) {
			$('#idmenu').removeClass('center-menu')	
			$('#img-datahub').attr('src', 'ICE/src/image/vertical.jpg')
		}

		if($(window).width() > 620 || $(document).width() > 620) {
			$('#idmenu').addClass('center-menu')
			$('#img-datahub').attr('src', 'ICE/src/image/datahub.png')
		}
	}

	$('.parallax').parallax();

	function posicionarSomos(e) {

		e.preventDefault()
		var posicion = $("#idsomos").offset().top;
		$("html, body").animate({
    		scrollTop: posicion
		}, 	500);
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
		}, 	500);
	}


	$('#btndatahub').click(function(e) {
		posicionarDataHub(e)
	})

	function posicionarDataHub(e) {
		e.preventDefault()
		var posicion = $("#iddatahub").offset().top;
		$("html, body").animate({
    		scrollTop: posicion
		}, 	500);
	}

	$('#btnboletin').click(function(e) {
		posicionarBoletin(e)
	})

	function posicionarBoletin(e) {
		e.preventDefault()
		var posicion = $("#idnoticias").offset().top;
		$("html, body").animate({
    		scrollTop: posicion
		}, 	500);

		$('#idnoticias').removeClass('slideInUp')
    	$('#idnoticias').addClass('slideInUp')
	}


	$('#btncontacto').click(function(e) {
		posicionarContacto(e)
	})

	function posicionarContacto(e) {
		e.preventDefault()
		var posicion = $("#idcontacto").offset().top;
		$("html, body").animate({
    		scrollTop: posicion
		}, 	500);
	}

	$('#iddatahub').click(function() {
		var changefondo = `<iframe class="iframe-map animated slideInUp padding-top-datahub" allowfullscreen 
								src="http://159.203.182.38/visualizadorV2/" 
								></iframe>`

		var antiguofondo = `<img id="img-datahub" src="ICE/src/image/datahub.png" style="transform: display: block;" />`

		// if ($('#iddatahub').hasClass('volcado')){
		// 	$('#iddatahub').removeClass('volcado')
		// 	$('#iddatahub').addClass('inverso')
		// 	$('#iddatahub .parallax img').replaceWith(antiguofondo)
		// }
		// else{
			$('#iddatahub div').removeClass('padding-top-datahub')
			$('#iddatahub').removeClass('inverso')
			$('#iddatahub').addClass('volcado')
			$('#iddatahub .parallax img').replaceWith(changefondo)
		// }
	})

	$('#more-data').click(function() {

		var template_estadistica = `<div class="parallax-container animated bounceInDown height-vh" onclick="regresarMenuAnterior()" id="idestudios">
  		
		<a href="#!" id="btn-atras-estadisticas" class="background-btn-back tamano-icon-back position-abs align-vertical-horizontal color-icon-back margin-top-back">
			<i class="large material-icons color-icon-back">keyboard_arrow_left</i>	
		</a>
  		
		<div class="container-fluid padding-top-estadisticas-option" id="slide-estadistica">
			<div class="row altura-estadistica margin-botton">
				<div class="col s12 m12">
					<div class="row altura-estadistica-up">
						<div class="col s12 m3 altura-estadistica-up">
							<a href="estadistica.html">
								<img src="ICE/src/image/image-estadisticas/cuadrado.jpg" class="responsive-img" width="100%">
							</a>
						</div>
						<div class="col s12 m2 altura-estadistica-up">
							<a href="estadistica.html">
								<img src="ICE/src/image/image-estadisticas/height-large.jpg" class="responsive-img" width="100%">
							</a>
						</div>
						<div class="col s12 m5 altura-estadistica-up">
							<div class="row altura-up-porcion">
								<div class="col s12 m7 ">
									<a href="#!">
										<img src="ICE/src/image/image-estadisticas/horizontal1.jpg" class="responsive-img" width="100%">
									</a>
								</div>
								<div class="col s12 m5">
									<a href="#!">
										<img src="ICE/src/image/image-estadisticas/featured31.jpg" class="responsive-img" width="100%">
									</a>
								</div>
							</div>
							<div class="row altura-down-porcion">
								<div class="col s12 m5">
									<a href="#!">
										<img src="ICE/src/image/image-estadisticas/featured31.jpg" class="responsive-img" width="100%">
									</a>
								</div>
								<div class="col s12 m7">
									<a href="#!">
										<img src="ICE/src/image/image-estadisticas/horizontal1.jpg" class="responsive-img" width="100%">
									</a>
								</div>
							</div>
						</div>
						<div class="col s12 m2 altura-estadistica-up">
							<a href="#!">
								<img src="ICE/src/image/image-estadisticas/height-large.jpg" class="responsive-img" width="100%" />
							</a>
						</div>
					</div>

					<div class="row altura-estadistica-up">
						<div class="col s12 m10">
							<div class="row altura-estadistica-middle">
								<div class="col s12 m12">
									<div class="row">
										<div class="col s12 m3">
											<a href="estadistica.html">
												<img src="ICE/src/image/image-estadisticas/featured31.jpg" class="responsive-img" width="100%">
											</a>
										</div>
										<div class="col s12 m3">
											<a href="#!">
												<img src="ICE/src/image/image-estadisticas/horizontal1.jpg" class="responsive-img" width="100%">
											</a>
										</div>
										<div class="col s12 m3">
											<a href="#!">
												<img src="ICE/src/image/image-estadisticas/horizontal1.jpg" class="responsive-img" width="100%">
											</a>
										</div>
										<div class="col s12 m3">
											<a href="#!">
												<img src="ICE/src/image/image-estadisticas/horizontal1.jpg" class="responsive-img" width="100%">
											</a>
										</div>		
									</div>
								</div>

								<div class="col s12 m12">
									<div class="row">
										<div class="col s12 m2">
											<a href="#!">
												<img src="ICE/src/image/image-estadisticas/height-large.jpg" class="responsive-img" width="100%">
											</a>
										</div>
										<div class="col s12 m3">
											<a href="#!">
												<img src="ICE/src/image/image-estadisticas/cuadrado.jpg" class="responsive-img" width="100%">
											</a>
										</div>
										<div class="col s12 m2">
											<a href="#!">
												<img src="ICE/src/image/image-estadisticas/height-large.jpg" class="responsive-img" width="100%">
											</a>
										</div>
										<div class="col s12 m3">
											<a href="#!">
												<img src="ICE/src/image/image-estadisticas/cuadrado.jpg" class="responsive-img" width="100%">
											</a>
										</div>
										<div class="col s12 m2">
											<a href="#!">
												<img src="ICE/src/image/image-estadisticas/height-large.jpg" class="responsive-img" width="100%">
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col s12 m2 altura-estadistica-down-total">
							<a href="#!">
								<img src="ICE/src/image/image-estadisticas/height-large.jpg" class="responsive-img" width="100%">
							</a>
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
		scrollPage()
	});

	function scrollPage() {

		if( $(this).scrollTop() > 0 ){
			$('#hide-show').addClass('hide')
			$('#nav-menu').addClass('shadow-nav')
			$('.ir-arriba').slideDown(300)
		} else {
			$('#hide-show').removeClass('hide')
			$('#nav-menu').removeClass('shadow-nav')
			$('.ir-arriba').slideUp(300)
		}

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
	}

	// $('#option-1').mouseout(function() {
	// 	opacidadMenuOne()
	// })

	// $('#option-1').mouseover(function() {
	// 	opacidadMenuOne()
	// })

	$('#option-1').click(function() {
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

	// $('#option-2').mouseover(function() {
	// 	opacidadMenuTwo()
	// })

	// $('#option-2').mouseout(function() {
	// 	opacidadMenuTwo()
	// })

	$('#option-2').click(function () {
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


	// $('#option-3').mouseover(function() {
	// 	menuOpacidadThree()
	// })

	// $('#option-3').mouseout(function() {
	// 	menuOpacidadThree()
	// })

	$('#option-3').click(function() {
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

	// $('#option-4').mouseout(function() {
	// 	menuOpacidadFour()
	// })

	// $('#option-4').mouseover(function() {
	// 	menuOpacidadFour()
	// })

	$('#option-4').click(function() {
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


	// $('#option-5').mouseover(function() {
	// 	menuOpacidadFive()
	// })

	// $('#option-5').mouseout(function() {
	// 	menuOpacidadFive()
	// })

	$('#option-5').click(function() {
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

 	$('.carousel.carousel-slider').carousel({full_width: true, indicators: true});

 	$(document).keydown(function(e) {
		
 		var height = $(window).scrollTop();

	    if(height <= ($("#iddatahub").offset().top - 100)) {
	    	//Right
			if (e.keyCode == 39) {
				$('.carousel').carousel('next');
			}	

			//Left
			if (e.keyCode == 37) {
				$('.carousel').carousel('prev');
			}		
	    }
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

function regresarMenuAnterior() {
	$('#btn-atras-estadisticas').click(function() {
		var template_estadistica = `<div class="parallax-container height-vh align-vertical-horizontal background-somos" id="idestudios">
    	<div id="content-option" class="row width-full custom-box">

    		<div class="col m1 l1 hide-on-small-only"></div>

    		<div class="col s12 m2 l2 margin-top-menu-1" id="content-option-1">
    			<div class="c-circle-menu js-menu-4 align-circle">
					
					<div class="c-circle-menu__toggle js-menu-toggle position-relative display-block align-mp elevacion-option" id="option-1" >
						<img src="ICE/src/image/icons/agricultura.png" class="position-abs custom-circle">
					</div>
				  	<ul class="c-circle-menu__items">
				    	<li class="c-circle-menu__item" id="sub-1-option-1">
				      		<a href="#!" class="c-circle-menu__link">
			        			<img src="ICE/src/image/icons/agricultura.png" class="position-abs custom-circle" />
				      		</a>
				    	</li>
				    	<li class="c-circle-menu__item" id="sub-2-option-1">
				      		<a href="#!" class="c-circle-menu__link">
			        			<img src="ICE/src/image/icons/agricultura.png" class="position-abs custom-circle" />
				      		</a>
				    	</li>
				    	<li class="c-circle-menu__item" id="sub-3-option-1">
				      		<a href="#!" class="c-circle-menu__link">
			        			<img src="ICE/src/image/icons/agricultura.png" class="position-abs custom-circle" />
				      		</a>
				    	</li>
				  	</ul>
				  	<div class="c-circle-menu__mask js-menu-mask"></div>
				</div>
    		</div>

    		<div class="col s12 m2 l2 margin-top-menu-2" id="content-option-2">
				<div class="c-circle-menu js-menu-3 align-circle">
					<div class="c-circle-menu__toggle js-menu-toggle position-relative display-block align-mp elevacion-option" id="option-2" >
						<img src="ICE/src/image/icons/exportacion.png" class="position-abs custom-circle">
					</div>
				  	<ul class="c-circle-menu__items">
				    	<li class="c-circle-menu__item">
				      		<a href="#!" class="c-circle-menu__link">
			        			<img src="ICE/src/image/icons/exportacion.png" />
				      		</a>
				    	</li>
				    	<li class="c-circle-menu__item">
				      		<a href="#!" class="c-circle-menu__link">
			        			<img src="ICE/src/image/icons/exportacion.png" />
				      		</a>
				    	</li>
				    	<li class="c-circle-menu__item">
				      		<a href="#!" class="c-circle-menu__link">
			        			<img src="ICE/src/image/icons/exportacion.png" />
				      		</a>
				    	</li>
				  	</ul>
				  	<div class="c-circle-menu__mask js-menu-mask"></div>
				</div>
    		</div>

    		<div class="col s12 m2 l2 margin-top-menu-3" id="content-option-3">
				<div class="c-circle-menu js-menu-2 align-circle">
					<div class="c-circle-menu__toggle js-menu-toggle position-relative display-block align-mp elevacion-option" id="option-3">
						<img src="ICE/src/image/icons/people.png" class="position-abs custom-circle">
					</div>
				  	<ul class="c-circle-menu__items">
				    	<li class="c-circle-menu__item">
				      		<a href="#!" class="c-circle-menu__link">
			        			<img src="ICE/src/image/icons/sub-icons/person_1.png" />
				      		</a>
				    	</li>
				    	<li class="c-circle-menu__item">
				      		<a href="estadistica.html" class="c-circle-menu__link">
			        			<img src="ICE/src/image/icons/sub-icons/person_2.png" />
				      		</a>
				    	</li>
				    	<li class="c-circle-menu__item">
				      		<a href="#!" class="c-circle-menu__link">
			        			<img src="ICE/src/image/icons/sub-icons/person_3.png" />
				      		</a>
				    	</li>
				  	</ul>
				  	<div class="c-circle-menu__mask js-menu-mask"></div>
				</div>
    		</div>

    		<div class="col s12 m2 l2 margin-top-menu-2" id="content-option-4">
				<div class="c-circle-menu js-menu-1 align-circle">
					<div class="c-circle-menu__toggle js-menu-toggle position-relative display-block align-mp elevacion-option" id="option-4" >
						<img src="ICE/src/image/icons/ganaderia.png" class="position-abs custom-circle">
					</div>
				  	<ul class="c-circle-menu__items">
				    	<li class="c-circle-menu__item">
				      		<a href="#!" class="c-circle-menu__link">
			        			<img src="ICE/src/image/icons/ganaderia.png" />
				      		</a>
				    	</li>
				    	<li class="c-circle-menu__item">
				      		<a href="#!" class="c-circle-menu__link">
			        			<img src="ICE/src/image/icons/ganaderia.png" />
				      		</a>
				    	</li>
				    	<li class="c-circle-menu__item">
				      		<a href="#!" class="c-circle-menu__link">
			        			<img src="ICE/src/image/icons/ganaderia.png" />
				      		</a>
				    	</li>
				  	</ul>
				  	<div class="c-circle-menu__mask js-menu-mask"></div>
				</div>
    		</div>

    		<div class="col s12 m2 l2 margin-top-menu-1" id="content-option-5">
				<div class="c-circle-menu js-menu align-circle">
					<div class="c-circle-menu__toggle js-menu-toggle position-relative display-block align-mp elevacion-option" id="option-5">
						<img src="ICE/src/image/icons/industria.png" class="position-abs custom-circle">
					</div>
				  	<ul class="c-circle-menu__items">
				    	<li class="c-circle-menu__item">
				      		<a href="#!" class="c-circle-menu__link">
			        			<img src="ICE/src/image/icons/industria.png" />
				      		</a>
				    	</li>
				    	<li class="c-circle-menu__item">
				      		<a href="#!" class="c-circle-menu__link">
			        			<img src="ICE/src/image/icons/industria.png" />
				      		</a>
				    	</li>
				    	<li class="c-circle-menu__item">
				      		<a href="#!" class="c-circle-menu__link">
			        			<img src="ICE/src/image/icons/industria.png" />
				      		</a>
				    	</li>
				  	</ul>
				  	<div class="c-circle-menu__mask js-menu-mask"></div>
				</div>
    		</div>

    		<div class="col m1 l1 hide-on-small-only"></div>
    	</div>
  	</div>`

  		$('.remove-option').removeClass('hide')
  		$('#idestudios').addClass('volcado')
  		$('#idestudios').replaceWith(template_estadistica)

	})
}

// (function(i,s,o,g,r,a,m) {
// 	i['GoogleAnalyticsObject']=r;
// 	i[r]=i[r]||function(){
// 			(i[r].q=i[r].q||[]).push(arguments)
// 		},i[r].l=1*new Date();
// 		a = s.createElement(o),m=s.getElementsByTagName(o)[0];
// 		console.log(a)
// 		a.async = 1;
// 		a.src = g;
// 		m.parentNode.insertBefore(a, m)
// 	})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

// ga('create', 'UA-85219502-1', 'auto');
// ga('send', 'pageview');
