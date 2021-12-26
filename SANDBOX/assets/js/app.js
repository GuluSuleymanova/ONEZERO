$(function(){

   $('.home-slider').owlCarousel({

   margin:20,
   items:2,
   loop:true,
   nav:true,
   lazyLoad:true,
   
   responsiveClass:true,
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:2,
            
        },
        1000:{
            items:2,
            
            
        }
    }

   });




 });