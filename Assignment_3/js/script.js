
function animatethis(targetElement,img,img2) {
    var position = targetElement.position();
    var movementX = Math.random() * $(document).width() - $(targetElement).width();
    var movementY = Math.random() * $(document).height() - $(targetElement).height();
    
    if( position.left < movementX){
        $(targetElement).attr('src','images/'+img );
    }
    else{
        $(targetElement).attr('src','images/'+img2 );
    }
    
    $(targetElement).animate({left:movementX,top:movementY},2000);
    
    setTimeout(function(){
        animatethis(targetElement,img,img2);
    },2000);
}



animatethis( $('#fish1Id') , 'fish1.png ' , 'fish1-2.png' ); 
animatethis( $('#fish2Id') , 'fish2.png ' , 'fish2-2.png' );

$('#fish2Id').mouseenter(function() 
                        {     
                            $("#fish2Id").stop(true);
                            var Wi = $( window ).width();
                            var He = $( window ).height();
                            
                            var ML = Math.floor((Math.random() * Wi) - 0);
                            var MT = Math.floor((Math.random() * He) - 0);
    
                            $("#fish2Id").animate({ top: MT, left: ML},1000);
                            animatethis( $('#fish2Id') , 'fish2.png ' , 'fish2-2.png' );
                        }) ;

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

/* bubbles part beginning*/
console.log('bubbles working!');

var bubbleTable = document.getElementsByClassName("bubbleClass"); //get all the bubbles and put them in an array
var i = 0;

linkStart();

// move the bubble to the top
function upYouGo(elementId){
    var speed = $(document).height()/0.2;
    $(elementId).animate({top:"-100px"},speed,"linear");
}

// teleport the bubble bellow the screen
function downYouSpawn(elementId){
    var startingPoint = ($(document).height() + 100);
    $(elementId).animate({top: startingPoint},0);
    $(elementId).show();
    var randX = Math.random() * ($(document).width() - 100);
    $(elementId).animate({left:randX},0);
}

// chose a random X coordonate and teleport the bubble to it
function altenativeStart(elementId){
    
}

// concatenate the fonctions above and repeat
function bubblesFlow(bubbleNum){
    downYouSpawn(bubbleTable[bubbleNum]);
    altenativeStart(bubbleTable[bubbleNum]);
    upYouGo(bubbleTable[bubbleNum]);
    setTimeout(function(){
        bubblesFlow(bubbleNum);
    },2500);
}

// start the bubbles with a delay between them
function notAllAtOnce(){
    if(i < bubbleTable.length){
        bubblesFlow(i);
        setTimeout(function(){notAllAtOnce()},1200)
    }
    i++;
}

// hide the bubble and start the machine
function linkStart(){
    for(i = 0; i < bubbleTable.length; i++){
        downYouSpawn(bubbleTable[i]);
    }
    i = 0;
    notAllAtOnce();
}

// pops the bubbles
$(".bubbleClass").mousedown(function(){
    $(this).hide();
    console.log('hit');
    $(this).stop(true);
})
/* bubble part end */

