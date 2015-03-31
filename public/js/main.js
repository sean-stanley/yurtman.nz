/* global $ */
 $(document).ready(function() {
	 $('#menu-toggle').click(function() {
	 	$('.push-menu-left, .site-wrap, .menu-toggle').toggleClass('show')
	 	console.log('show Menu')
	 });
	 
	 $('.home-slider').slick({
		 infinite: true,
		 centerMode: true,
		 centerPadding: '80px',
		 slidesToShow: 3,
		 autoplay: true,
		 dots: true,
		 arrows: false,
		 responsive: [
			 {
				 breakpoint: 768,
				 settings: {
					 arrows: false,
					 centerMode: true,
					 centerPadding: '40px',
					 slidesToShow: 3,
				 }
			 },
			 {
				 breakpoint: 480,
				 settings: {
					 arrows: false,
					 centerMode: true,
					 centerPadding: '40px',
					 slidesToShow: 1,
				 }
			 }
		 ]
	  });
	 
 });
