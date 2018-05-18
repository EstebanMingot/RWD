function animatethis(targetElement,img,img2) {
    
    var movement = Math.floor((Math.random() * 600) - 300);
    var movement2 = Math.floor((Math.random() * 350) - 175);
    var speed = 1500+ Math.floor((Math.random() * 1000) - 500);
    
    var position = targetElement.position();
    var Wi = $( window ).width();
    var He = $( window ).height();
    
    var WiE = $( targetElement ).width()*2;
    var HeE = $( targetElement ).height()*2;
    
    if( position.left+movement < Wi-WiE || position.left+movement > 0+WiE || position.top + movement < He-HeE || position.top + movement >0+HeE )
    {    
        if(movement>0)
                {$(targetElement).attr('src','images/'+img );}
            else
                {$(targetElement).attr('src','images/'+img2 );}  
    
    $(targetElement).animate({ left: "+="+movement,top:"+="+movement2 }, speed,
        function ()
        {
            if(movement>0)
                {$(targetElement).attr('src','images/'+img2 );}
            else
                {$(targetElement).attr('src','images/'+img );}  
        
        targetElement.animate( { left: "-="+movement,top:"-="+movement2 }, speed,  function ()
                                                            {
                                                                animatethis(targetElement,img,img2);
                                                            } 
        ); }
    );
    }
    else { animatethis(targetElement,img,img2); }
};

animatethis( $('#fish1Id') , 'fish1.png ' , 'fish1-2.png' ); 
animatethis( $('#fish2Id') , 'fish2.png ' , 'fish2-2.png' );


$('#fish1Id').dblclick(function() 
                        {       
                        $('#fish1Id').animate({  "width": 350, "height": 350 }, 750);
                        $('#fish1Id').animate({  "width": 250, "height": 250 }, 750);
                        }) ;

 $(window).click(function()
                { 
                    var ML = event.pageX - 125;
                    var MT = event.pageY - 125;
     
                    $("#fish1Id").animate({ top: MT, left: ML},1000);
                } );  