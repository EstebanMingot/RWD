/*           RWD assignment 3
Carton Samuel, Ponthoreau Mathieu, Mingot Estéban
                2017-2018                     */
//Random Fish movement
function animatethis(targetElement,img,img2) {
    var position = targetElement.position();
    var movementX = Math.random() * ($(document).width() - $(targetElement).width() );
    var movementY = Math.random() * ($(document).height() - $(targetElement).height());
    //Fish direction
    if( position.left < movementX){
        $(targetElement).attr('src','images/'+img );
    }
    else{
        $(targetElement).attr('src','images/'+img2 );
    }
    //Fish move speed
    var distance = Math.sqrt(Math.abs(position.left - movementX)^2+Math.abs(position.top - movementY)^2)
    var duration = distance / 0.01;

    $(targetElement).animate({left:movementX,top:movementY},duration);

    setTimeout(function(){
        animatethis(targetElement,img,img2);
    },duration);
}

animatethis( $('#fish1Id') , 'fish1.png ' , 'fish1-2.png' ); 
animatethis( $('#fish2Id') , 'fish2.png ' , 'fish2-2.png' );

// Red Fish ( Angry Fish )
$('#fish1Id').dblclick(function() 
                       {   
    $('#fish1Id').stop(true);
    $('#fish1Id').animate({  "width": 350, "height": 350 }, 750,'swing');
    $('#fish1Id').animate({  "width": 250, "height": 250 }, 750,'swing');
    animatethis( $('#fish1Id') , 'fish1.png ' , 'fish1-2.png' ); 
}) ;

// Red Fish ( Bull Fish )
$(window).click(function()
                { 
    $('#fish1Id').stop(true);
    var ML = event.pageX - 125;
    var MT = event.pageY - 125;

    $("#fish1Id").animate({ top: MT, left: ML},1000,'swing');
    animatethis( $('#fish1Id') , 'fish1.png ' , 'fish1-2.png' ); 
} );

// Blue Fish (Avoid cursor)
$('#fish2Id').mouseenter(function() 
                         {     
    $("#fish2Id").stop(true);
    var movementX = Math.random() * ($(document).width() - $("#fish2Id").width() );
    var movementY = Math.random() * ($(document).height() - $("#fish2Id").height());

    $("#fish2Id").animate({ top: movementY, left: movementX},500 ,'swing');
    animatethis( $('#fish2Id') , 'fish2.png ' , 'fish2-2.png' );
}) ;

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
}

// chose a random X coordonate and teleport the bubble to it
function altenativeStart(elementId){
    var randX = Math.random() * ($(document).width() - 100);
    $(elementId).animate({left:randX},0);
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

