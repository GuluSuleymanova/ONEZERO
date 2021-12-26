$(function(){

   $('.home-slider').owlCarousel({
   items:1,
   loop:true,
   nav:false,
   lazyLoad:true,
   dots:true,
   
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

    $('.shop-slider').owlCarousel({
    items:3,
    loop:true,
    nav:false,
    lazyLoad:true,
    dots:true,
    margin:30,
    
    responsiveClass:true,
     responsive:{
         0:{
             items:1,
             
         },
         600:{
             items:2,
             
         },
         1000:{
             items:3,
             
             
         }
     }
 
    });
 
 
 
 
  });





  $(function(){

    $('.card-slider').owlCarousel({
    items:3,
    loop:true,
    nav:false,
    lazyLoad:true,
    dots:true,
    margin:30,
    
    responsiveClass:true,
     responsive:{
         0:{
             items:1,
             
         },
         600:{
             items:2,
             
         },
         1000:{
             items:3,
             
             
         }
     }
 
    });
 
 
 
 
  });