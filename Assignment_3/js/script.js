/* bubbles part beginning*/
console.log('bubbles working!');

var bubbleTable = document.getElementsByClassName("bubbleClass");
var i = 0;

linkStart();


function upYouGo(elementId){
    var speed = $(document).height()/0.2;
    $(elementId).animate({top:"-100px"},speed,"linear");
}

function downYouSpawn(elementId){
    var startingPoint = ($(document).height() + 100);
    $(elementId).animate({top: startingPoint},0);
    $(elementId).show();
}

function altenativeStart(elementId){
    var randX = Math.random() * ($(document).width() - 100);
    $(elementId).animate({left:randX},0);
}

function bubblesFlow(bubbleNum){
    downYouSpawn(bubbleTable[bubbleNum]);
    altenativeStart(bubbleTable[bubbleNum]);
    upYouGo(bubbleTable[bubbleNum]);
    setTimeout(function(){
        bubblesFlow(bubbleNum);
    },2500);
}

function notAllAtOnce(){
    if(i < bubbleTable.length){
        bubblesFlow(i);
        setTimeout(function(){notAllAtOnce()},1200)
    }
    i++;
}

function linkStart(){
    for(i = 0; i < bubbleTable.length; i++){
        downYouSpawn(bubbleTable[i]);
    }
    i = 0;
    notAllAtOnce();
}

$(".bubbleClass").mousedown(function(){
    $(this).hide();
    console.log('hit');
    $(this).stop(true);
})
/* bubble part end */