$(function(){

    $('.home-slider').owlCarousel({
    items:1,
    loop:false,
    nav:false,
    lazyLoad:true,
    dots:false,
    autoplay:true,
    touchdrag:true,
    pulldrag:true,
    center:true,
    autowidth:true,
    
    responsiveClass:true,
     responsive:{
         0:{
             items:1,
             
         },
         600:{
             items:1,
             
         },
         1000:{
             items:1,
             
             
         }
     }
 
    });
 
 
 
 
  });

  $(function(){

    $('.Features_card').owlCarousel({
    items:5,
    loop:false,
    nav:false,
    margin:25,
    dots:false,
    
    touchdrag:true,
    pulldrag:true,
    
    responsiveClass:true,
     responsive:{
         0:{
             items:3,
             
         },
         600:{
             items:4,
             
         },
         1000:{
             items:5,
             
             
         }
     }
 
    });
 
 
 
 
  });

  