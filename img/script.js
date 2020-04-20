$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

window.onscroll = function() {
    growShrinkLogo()
  };
  
  function growShrinkLogo() {
      document.getElementById("Logo").style.transition = "all 0.3s";
    var Logo = document.getElementById("Logo")
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      Logo.style.width = '50px';
      Logo.style.height = '50px'
    } else {
      Logo.style.width = '90px';
      Logo.style.height = '90px'
    }
  }

  $(document).ready(function(){
    $(this).scrollTop(0);
});



$('.parallax').parallax({imageSrc: '/img/boxingnew.jpg'});