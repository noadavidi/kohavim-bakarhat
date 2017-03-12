$(window).scroll(function () {
	if($(window).width() > 768) {
	
		var $this = $(this);
		
		if ($this.scrollTop() > 350) {
			// backTop button
			$("#backTop").css( "display","block" );
		} 
		else {
			$("#backTop").css( "display","none" );
		}

	}
})

$('.link_top').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			  var target = $(this.hash);
			  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			  if (target.length) {
				$('html, body').animate({
				  scrollTop: target.offset().top
				}, 1200);
				return false;
			  }
			}
		  });