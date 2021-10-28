setTimeout(function(){
    window.location.href = '../HTML/11-thankyou.html';
 }, 4000);
 var timeleft = 0;
var downloadTimer = setInterval(function(){
document.getElementById("timer").innerHTML = 3 - timeleft;
timeleft += 1;
}, 1000);