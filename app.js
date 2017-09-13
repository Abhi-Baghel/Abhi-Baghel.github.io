$(document).ready(function(){
   
   // for navbar  close on click
   $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

   // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

});

