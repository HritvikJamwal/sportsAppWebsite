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



  $('.slider1').slick({
    dots: false,
    infinite: false,
    speed: 700,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  });

var filtered = false;


$('.filter').on('click', function(){
  if (filtered === false) {
    $('.slider1').slick('slickFilter',':even');
    $(this).text('Unfilter Slides');
    filtered = true;
  } else {
    $('.slider1').slick('slickUnfilter');
    $(this).text('Filter Slides');
    filtered = false;
  }

  
});

//Slider2
$('.slider2').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: 600,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false

      }
    }
    
  ]
});

var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
  scale: 1.7,
  
});

