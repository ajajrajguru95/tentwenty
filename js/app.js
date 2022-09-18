
jQuery(document).ready(function($){  
	$('.nav-icon').on('click', function(event){
       $(this).toggleClass('active');
       $('body').toggleClass('nav-active overflow-hidden');
    });
});