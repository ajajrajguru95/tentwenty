
// Query variable to differenciate between mobile and desktop
let mq = window.matchMedia( "(max-width: 991px)" );

jQuery(document).ready(function($){  

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
	              scrollAmount: 300
	          },
	          mouseWheel:{ enable: true },
	          advanced:{ autoExpandHorizontalScroll: true },
	      });
	}
});

// Intersection Observer to observe the scroll events

const sections = document.querySelectorAll('.tt-main__section');

let config = {
  rootMargin: '0px',
  threshold: .5
};

let observer = new IntersectionObserver((entries) => {
    // console.log(entries);
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      intersectionHandler(entry);
    } 
   console.log(entry);
  });
}, config);

sections.forEach(section => {
  observer.observe(section);
});

function intersectionHandler(entry) {
   const current = document.querySelector('.tt-main__section.active');
  const next = entry.target;
  // Current Positive color
  const positive = getComputedStyle(document.body).getPropertyValue('--positive');
  // Current Negative color
  const negative = getComputedStyle(document.body).getPropertyValue('--negative');


  if (current) {
    current.classList.remove('active');
  }
  if (next) {
    next.classList.add('active');
    // document.body.style.setProperty("--color-bg", next.dataset.bgcolor);
    if((next.classList.contains('section-absolute')) && !(mq.matches)){
    	document.querySelector('.tt-header').classList.add('negative');
    	document.body.style.setProperty("--positive", negative);
    	document.body.style.setProperty("--negative", positive);
    	document.querySelector('.tt-header').classList.add('negative');
    }
    else{
    	document.body.style.setProperty("--positive", '#fff');
    	document.body.style.setProperty("--negative", '#000');
    	document.querySelector('.tt-header').classList.remove('negative');	
    }
  }
}
