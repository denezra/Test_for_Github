// Variable Global
var csAd = {};
// Window Load
window.onload = function() {
	// Check if the Enabler is Iniatialized
	if (Enabler.isInitialized()) {
		// Begin Page Loaded function
		enablerInitHandler();
	} else {
		// Manually Page Loaded function
		Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
	}
}
// Enabler Initialize function
function enablerInitHandler(){
	// Check if page is fully loaded
	if (Enabler.isPageLoaded()) {
		// Begin show ad
    pageLoadedHandler();
  } else {
  	// Manually show ad
    Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, pageLoadedHandler);
  }
}
// Enabler Page Loader function
function pageLoadedHandler() {
	// Assign Variable
	csAd.container							= document.getElementById('container');
	csAd.logo 									= document.getElementById('logo');
	csAd.eczema_text						= document.getElementById('eczema_text');
	csAd.eczema_scratch					= document.getElementById('eczema_scratch');
	csAd.hand_product						= document.getElementById('hand_product');
	csAd.stop_the_itch_box			= document.getElementById('stop_the_itch_box');
	csAd.hand_one								= document.getElementById('hand_one');
	csAd.hand_two								= document.getElementById('hand_two');
	csAd.hand_three							= document.getElementById('hand_three');
	csAd.hand_four							= document.getElementById('hand_four');
	csAd.hand_five							= document.getElementById('hand_five');
	csAd.hand_six								= document.getElementById('hand_six');
	csAd.blue_curtain						= document.getElementById('blue_curtain');
	csAd.frame_one							= document.getElementById('frame_one');
	csAd.frame_two							= document.getElementById('frame_two');
	csAd.frame_three						= document.getElementById('frame_three');
	csAd.frame_three_text				= document.getElementById('frame_three_text');
	csAd.frame_four_text				=	document.getElementById('frame_four_text');
	csAd.text_holder						= document.getElementById('text_holder');
	csAd.circle_holder					= document.getElementById('circle_holder');
	csAd.product_one						= document.getElementById('product_one');
	csAd.product_two						= document.getElementById('product_two');
	csAd.product_three					= document.getElementById('product_three');
	csAd.cta_button							= document.getElementById('cta_button');
	csAd.legal_text							= document.getElementById('legal_text');
	csAd.eczema_container 			= document.getElementById('eczema_container');
	csAd.frame_three_text_three	= document.getElementById('frame_three_text_three');
	csAd.frame_three_text_four	=	document.getElementById('frame_three_text_four');
	csAd.frame_four_text_one		= document.getElementById('frame_four_text_one');
	csAd.frame_four_text_two		= document.getElementById('frame_four_text_two');

	// Embed Image
	csAd.logo.style.background 		 								= "url('logo.png')";
	csAd.logo.style.backgroundSize 								= "127px 35px";
	csAd.logo.style.width 			 									= "127px";
	csAd.logo.style.height 			 									= "35px";

	csAd.eczema_scratch.style.background 		 			= "url('ecz2.png')";
	csAd.eczema_scratch.style.backgroundSize 			= "281px 105px";
	csAd.eczema_scratch.style.width 			 				= "281px";
	csAd.eczema_scratch.style.height 			 				= "105px";

	csAd.hand_product.style.background 		 				= "url('hand.png')";
	csAd.hand_product.style.backgroundSize 				= "139px 132px";
	csAd.hand_product.style.width 			 					= "139px";
	csAd.hand_product.style.height 			 					= "132px";

	csAd.stop_the_itch_box.style.background 		 	= "url('stop.png')";
	csAd.stop_the_itch_box.style.backgroundSize 	= "255px 106px";
	csAd.stop_the_itch_box.style.width 			 			= "255px";
	csAd.stop_the_itch_box.style.height 			 		= "106px";

	csAd.hand_one.style.background 		 						= "url('h1.png')";
	csAd.hand_one.style.backgroundSize 						= "150px 52px";
	csAd.hand_one.style.width 			 							= "150px";
	csAd.hand_one.style.height 			 							= "52px";

	csAd.hand_two.style.background 		 						= "url('h2.png')";
	csAd.hand_two.style.backgroundSize 						= "42px 122px";
	csAd.hand_two.style.width 			 							= "42px";
	csAd.hand_two.style.height 			 							= "122px";

	csAd.hand_three.style.background 		 					= "url('h3.png')";
	csAd.hand_three.style.backgroundSize 					= "101px 33px";
	csAd.hand_three.style.width 			 						= "101px";
	csAd.hand_three.style.height 			 						= "33px";

	csAd.hand_four.style.background 		 					= "url('h4.png')";
	csAd.hand_four.style.backgroundSize 					= "173px 53px";
	csAd.hand_four.style.width 			 							= "173px";
	csAd.hand_four.style.height 			 						= "53px";

	csAd.hand_five.style.background 		 					= "url('h5.png')";
	csAd.hand_five.style.backgroundSize 					= "59px 169px";
	csAd.hand_five.style.width 			 							= "59px";
	csAd.hand_five.style.height 			 						= "169px";

	csAd.hand_six.style.background 		 						= "url('h6.png')";
	csAd.hand_six.style.backgroundSize 						= "53px 150px";
	csAd.hand_six.style.width 			 							= "53px";
	csAd.hand_six.style.height 			 							= "150px";

	csAd.text_holder.style.background 		 				= "url('enz.png')";
	csAd.text_holder.style.backgroundSize 				= "206px 67px";
	csAd.text_holder.style.width 			 						= "206px";
	csAd.text_holder.style.height 			 					= "67px";

	csAd.circle_holder.style.background 		 			= "url('roundLgo.png')";
	csAd.circle_holder.style.backgroundSize 			= "92px 93px";
	csAd.circle_holder.style.width 			 					= "92px";
	csAd.circle_holder.style.height 			 				= "93px";

	csAd.product_one.style.background 		 				= "url('p1.png')";
	csAd.product_one.style.backgroundSize 				= "90px 67px";
	csAd.product_one.style.width 			 						= "90px";
	csAd.product_one.style.height 			 					= "67px";

	csAd.product_two.style.background 		 				= "url('p2.png')";
	csAd.product_two.style.backgroundSize 				= "53px 136px";
	csAd.product_two.style.width 			 						= "53px";
	csAd.product_two.style.height 			 					= "136px";

	csAd.product_three.style.background 		 			= "url('p3.png')";
	csAd.product_three.style.backgroundSize 			= "57px 133px";
	csAd.product_three.style.width 			 					= "57px";
	csAd.product_three.style.height 			 				= "133px";
	// Preload Function by MJ Espiritu
	// Image Array
	csAd.images_load = new Array("logo.png", "hand.png", "stop.png", "h1.png", "h1.png",
															 "h2.png", "h3.png", "h4.png", "h5.png", "h6.png", 
															 "ecz2.png", "enz.png", "roundLgo.png", "p1.png",
															 "p2.png", "p3.png")
	// Image counter
	var loadedImage = 0;
	for(var i=0; i <= csAd.images_load.length - 1 ; i++) {
		imageObj 			= new Image();
		imageObj.src 	= csAd.images_load[i];
		imageObj.addEventListener("load", iLoad);
	}
	// Function that image is loaded
	function iLoad(){
		// Counter _plus one
		loadedImage++;
		// All image cached in completely
		if(csAd.images_load.length == loadedImage){
			animate_loaded();
		}
	}
	// Animation Start here
	function animate_loaded(argument) {
		csAd.container.style.visibility = "visible";
		csAd.hand_six.className += " hand_six-move";
		console.log('Classname ', csAd.hand_six.className);
		setTimeout(function() {
			csAd.hand_one.className += "hand_one-move";
			setTimeout(function() {
				csAd.hand_five.className += "hand_five-move";
				setTimeout(function() {
					csAd.hand_four.className 				+= "hand_four-move";
					csAd.eczema_scratch.className 	+= " eczema_scratch-fade-in-fifty";
					csAd.eczema_container.className += " eczema_container-shake";
					setTimeout(function() {
						csAd.hand_two.className += "hand_two-move";
						setTimeout(function() {
							csAd.eczema_scratch.className += " eczema_scratch-fade-in-hundred";
							csAd.hand_three.className 		+= "hand_three-move";
							setTimeout(function() {
								csAd.stop_the_itch_box.className += "stop_the_itch_box-drop-in";
								setTimeout(function() {
									csAd.blue_curtain.className += "blue_curtain-fade-in-fifty";
									setTimeout(function() {
										csAd.frame_one.className += "frame_one-fade-out-hundred";
										setTimeout(function() {
											csAd.hand_product.className += "hand_product-fade-in";
											setTimeout(function() {
												csAd.frame_three_text.className	+= " frame_three_text-move-left"
												setTimeout(function() {
													csAd.frame_three_text_three.className += " frame_three_text_three-fade-down"
													setTimeout(function() {
														csAd.frame_three_text_four.className += " frame_three_text_four-fade-down"
														setTimeout(function() {
															csAd.frame_three_text.className	+= " frame_three_text-fade-out"
															setTimeout(function() {
																csAd.frame_four_text_one.className 	+= " frame_four_text_one-fade-in-up"
																csAd.frame_four_text_two.className 	+= " frame_four_text_two-fade-in-down"
																setTimeout(function() {
																	csAd.frame_three.className += "frame_three-move-up";
																	setTimeout(function() {
																		csAd.frame_two.className	 += " frame_two-fade-out";
																	}, 200)
																	setTimeout(function() {
																		csAd.text_holder.className	+= " text_holder-move-down";
																		csAd.circle_holder.className += " circle_holder-delay-move-up";
																		setTimeout(function() {
																			csAd.frame_three.className += " frame_three-move-up-again";
																			setTimeout(function() {
																				csAd.product_one.className += " product_one-move-right";
																				csAd.cta_button.className  += " cta_button-pop-up";
																				csAd.legal_text.className	 += " legal_text-fade-in-up";
																				setTimeout(function() {
																					csAd.product_two.className += " product_two-move-right";
																					setTimeout(function() {
																						csAd.product_three.className += " product_three-move-right";
																						addEvents();
																					}, 200)
																				}, 200)
																			}, 500)
																		}, 1500)
																	}, 300)
																}, 1000)
															}, 400)
														},1500)
													}, 200)
												}, 500)
											}, 250)
										},600)	
									}, 1500)
								}, 200)
							},1500)
						}, 100);
					}, 700)
				}, 100)
			}, 100)
		}, 100)
	}
	// Add Event Listener of object
	function addEvents() {
		csAd.cta_button.addEventListener("mouseover", function() {
			csAd.cta_button.className += " cta_button-pop-up-more"
		});			
		csAd.cta_button.addEventListener("mouseout", function() {
			csAd.cta_button.classList.remove('cta_button-pop-up-more');
		});			
	}
}

function tracking(id, pos) {
	switch(id) {
		case 'exit':
			switch(pos) {
				case 0: Enabler.exit('Test Exit'); break;
			}
		break;
		case 'counter':
			switch(pos) {
				case 0: Enabler.counter('Test Counter'); break;
			}
		break;
		case 'special':
			switch(pos) {
				case 0: Enabler.requestExpand(); break;
				case 1: Enabler.requestCollapse(); break;
				case 2: Enabler.reportManualClose(); break;
				case 3: Enabler.finishExpand(); break;
				case 4: Enabler.finishCollapse(); break;
			}
		break;
	}
}