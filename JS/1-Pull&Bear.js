
let c=document.getElementById("c")
let p=document.getElementById("p")
let l=document.getElementById("l")
let bt=document.querySelector("a")
function check(){
if(c.value==="0" ||l.value==="0"|| p.value==="0"){
   alert("select valid input")
}else{
    bt.href="../HTML/2-signin.html"
}
}