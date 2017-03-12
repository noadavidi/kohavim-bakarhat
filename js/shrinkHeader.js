$(window).scroll(function () {
	if($(window).width() > 768) {
	
		var $this = $(this);
		$navbar = $('.navbar');
		$link = $('#override .navbar-default .navbar-nav>li>a');
		$brandImg = $(' #override .navbar-brand');
		
		if ($this.scrollTop() > 150) {
			$link.addClass("shrinkHight");
			$navbar.addClass("shrinkHight");
			$brandImg.addClass("shrinkHight");
			// backTop button
			$("#backTop").css( "display","block" );
		} 
		else {
			$navbar.removeClass("shrinkHight");
			$link.removeClass("shrinkHight");
			$brandImg.removeClass("shrinkHight");
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