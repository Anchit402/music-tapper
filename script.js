var sounds = $("audio");
$("body").keypress(function(event){
    if(event.which === 49) 
    {
        sounds[0].currentTime = 0;
        sounds[0].play();
    } 
});

$("body").keypress(function(event){
    if(event.which === 50)  
    {
        sounds[1].currentTime = 0;
        sounds[1].play();
    } 
});
$("body").keypress(function(event){
    if(event.which === 51)  
    {
        sounds[2].currentTime = 0;
        sounds[2].play();
    } 
});
$("body").keypress(function(event){
    if(event.which === 52)  
    {
        sounds[3].currentTime = 0;
        sounds[3].play();
    } 
});
$("body").keypress(function(event){
    if(event.which === 53)  
    {
        sounds[4].currentTime = 0;
        sounds[4].play();
    } 
});
$("body").keypress(function(event){
    if(event.which === 54)  
    {
        sounds[5].currentTime = 0;
        sounds[5].play();
    } 
});





$("#pad1").click(function(){
    sounds[0].currentTime = 0;
    sounds[0].play();
});

$("#pad2").click(function(){
    sounds[1].currentTime = 0;
    sounds[1].play();
});
$("#pad3").click(function(){
    sounds[2].currentTime = 0;
    sounds[2].play();
});
$("#pad4").click(function(){
    sounds[3].currentTime = 0;
    sounds[3].play();
});
$("#pad5").click(function(){
    sounds[4].currentTime = 0;
    sounds[4].play();
});
$("#pad6").click(function(){
    sounds[5].currentTime = 0;
    sounds[5].play();
});