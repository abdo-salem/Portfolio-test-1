$(function(){
   
    'use strict';
    
    $('.toggle').click(function(){
       
        $(this).toggleClass('active');
        $('nav ul').toggleClass('active-menue');
        
    });
    
});