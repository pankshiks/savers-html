$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});

$(window).scroll(function() {
  if($(window).scrollTop() > 75){
    $('.main-header').addClass('stuck');
  }else{
    $('.main-header').removeClass('stuck');
  }
});

$(window).scroll(function() {
  if($(window).scrollTop() > 75){
    $('.mobile-header').addClass('stuck-new');
  }else{
    $('.mobile-header').removeClass('stuck-new');
  }
});

$(function(){

  /*Mobile menu slide */
  $(".mobile-header .menu-close-btn .inner").click(function(){
    $(".mobile-header .mobile-menu").toggleClass("is-active");
    $(".mobile-header").toggleClass("active");
  });

  $(".mobile-header .mobile-toggle").click(function(){
    $(".mobile-header .mobile-menu").toggleClass("is-active");
    $(".mobile-header").toggleClass("active");
  });


   /* Find store toggle dropdown*/
  $(".mobile-header .right-store-btn").click(function(){
    $(".mobile-header .mobile-store-search").toggleClass("active");
    $(".mobile-header").toggleClass("active");
  });
  $(".mobile-store-search .close-btn").click(function(){
    $(".mobile-store-search").toggleClass("active");
    $(".mobile-header").toggleClass("active");
  });

  /*selectbox 2 */
  $('.langauage-block select').select2();

});


$(".thrift-top-head .category-dropdwon").click(function(){
  $(".thrift-mobile-header .listing-row").slideToggle();
});	


$(".mobile-header .mobile-find-store .find-store-btn").click(function(){
  $(".mobile-menu").removeClass("is-active");
  $(".mobile-header").removeClass("active");
}); 


$(".mobile-find-store .find-store-btn").click(function(){
  $(".find-store-collapse-block").toggleClass("open");
}); 

$(".find-store-collapse-block .close-icon").click(function(){
  $(".find-store-collapse-block").removeClass("open");
});


$(".facility-wrap .mob-title").click(function(){
  $(".facility-wrap ul").slideToggle();
});	

$(".facility-wrap .mob-title").click(function(){
  $(".facility-wrap .mob-title").toggleClass("open");
}); 

$(".non-profit-block .mob-title").click(function(){
  $(".non-profit-block .non-proft-inner").slideToggle();
});	

$(".non-profit-block .mob-title").click(function(){
  $(".non-profit-block .mob-title").toggleClass("open");
}); 

$(".store-offer .mob-title").click(function(){
  $(".store-offer .store-inner").slideToggle();
});	

$(".store-offer .mob-title").click(function(){
  $(".store-offer .mob-title").toggleClass("open");
}); 


$("#carousel").owlCarousel({
  autoplay: true,
  lazyLoad: true,
  rewind: true,
  margin: 44,
   /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  responsive: {
    0: {
      items: 1,
      margin: 15,
    },

    600: {
      items: 2
    },

    1024: {
      items: 3
    },

    1366: {
      items: 3
    }
  }
});


$("#next-prvs").owlCarousel({
  autoplay: true,
  lazyLoad: true,
  rewind: true,
  margin: 20,
   /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  responsive: {
    0: {
      items: 2,
    },

    600: {
      items: 2
    },

    1024: {
      items: 2
    },

    1366: {
      items: 2
    }
  }
});

$(".next-pre-slider .owl-carousel").owlCarousel({
  autoplay: true,
  lazyLoad: true,
  rewind: true,
  margin: 20,
  loop: true,
   /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  responsive: {
    0: {
      items: 1,
      margin: 0,
    }, 767: {
      items: 1,
      margin: 20,
    },
  }
});


$("#media-carousel").owlCarousel({
  autoplay: true,
  lazyLoad: true,
  rewind: true,
  margin: 20,
   /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },

    600: {
      items: 2
    },

    1024: {
      items: 2
    },

    1366: {
      items: 2
    }
  }
});


$("#full-width-media-carousel,#full-width-media-carouse2").owlCarousel({
  stagePadding: 100,	
  autoplay: true,
  lazyLoad: true,
  rewind: true,
  margin: 20,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },

    600: {
      items: 2
    },

    1024: {
      items: 3
    },

    1366: {
      items: 4
    }
  }
});







 


