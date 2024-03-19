function makeBubble (){
    var clutter = "";
for(var i = 1;i<=96;i++){
    var rn = Math.floor(Math.random()*20);
    clutter +=`<div class="bubble">${rn}</div>`;
}
document.querySelector(".panel_bottom").innerHTML = clutter;
}
var timer = 6;
function runTimer (){
   var timerint =  setInterval(function(){
        if (timer>0){
        timer--;
        document.querySelector("#Timer").textContent = timer
        }
        else{
            clearInterval(timerint);
            document.querySelector(".panel_bottom").innerHTML = `<h1>Game Over </h1>`;
           
        }
    },1000);

}
var hitrn = 0;
function getNewHit (){
     hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent = hitrn ;
}
var score =0;
function increaseScore(){
    score += 10;
    document.querySelector("#score").textContent = score;
}

document.querySelector(".panel_bottom").addEventListener("click",function(dets){
 var clickednum = (Number(dets.target.textContent));
 if(clickednum === hitrn){
    increaseScore();
    makeBubble();
    getNewHit();
 }
})
increaseScore();
getNewHit();
runTimer();
makeBubble();