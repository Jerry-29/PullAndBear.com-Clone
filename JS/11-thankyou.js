var nam=document.getElementById("nam")
var userName=JSON.parse(localStorage.getItem("users"))
console.log(userName);
var uname=userName[userName.length-1].name
uname=uname.trim().split(" ")
Uname=uname[0]
if(userName!=null){
 nam.innerHTML="Thankyou "+Uname+" for Shopping with Us"
}
var Team=["Govind Singh ","Shivam Singh ","Avadesh Pal ","Subhaam Tamawar "]
var tm= document.getElementById("mem")
tm.innerHTML
tm.innerHTML="Team Members ~ "+ shuffleMem(Team);
function shuffleMem(Team) {
for (var i = Team.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = Team[i];
    Team[i] = Team[j];
    Team[j] = temp;
}
return Team
}
var git=document.getElementById("git")
git.onclick=function(){
    window.location.href="https://github.com/AvdheshPal/Pull-Bear"
}