
jQuery(document).ready(function($){  
	// Query variable to differenciate between mobile and desktop
	let mq = window.matchMedia( "(max-width: 991px)" );

	// Navigation icon click
	$('.nav-icon').on('click', function(event){
       $(this).toggleClass('active');
       $('body').toggleClass('nav-active overflow-hidden');
    });

	// Scrollbar init
	if(!mq.matches){
	    $('.slides-wrapper').mCustomScrollbar({
	          axis:"x",
	          theme:"dark-3",
	          scrollInertia: 1000,
	          setWidth: "100%",
	          scrollButtons:{
	              enable:true,
	              scrollType:"stepped",
	              scrollAmount: 260
	          },
	          mouseWheel:{ enable: true },
	          advanced:{ autoExpandHorizontalScroll: true },
	      });
	}


});