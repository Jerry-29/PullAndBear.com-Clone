var popOut=document.getElementById("popout")
var icon=document.getElementById("homeicon")
var popIn=document.getElementById("popin")
var clothes2=document.getElementById("clothes")
clothes2.onclick=function(){
secodnCat.style.visibility="visible"
}
icon.onpointermove=function(){
    popOut.style.visibility="visible"
}
popIn.onpointerover=function(){
    popOut.style.visibility="hidden"
    secodnCat.style.visibility="hidden"
}


var New=document.getElementById("new")
var clothes=document.getElementById("clothes")
var Color=document.getElementById("color")
var Shoes=document.getElementById("shoes")
var Bags=document.getElementById("bag")
var Access=document.getElementById("access")
var Pacific=document.getElementById("pacific")
var joinlife=document.getElementById("joinlife")
var secodnCat=document.getElementById("secondcat")


New.onclick=function(){
    alert("New Products Page")
}
// clothes.onclick=function(){
//    window.location.href="../HTML/5-Men.html"
// }
Color.onclick=function(){
    alert("19.91 Colour Page")
}
Shoes.onclick=function(){
    alert("Shoes Page")
}
Access.onclick=function(){
    alert("Accessories Page")
}
Bags.onclick=function(){
    alert("Bags Page")
}
Pacific.onclick=function(){
    alert("Pascific Page")
}
joinlife.onclick=function(){
    alert("Join Life Page")
}

var trouser=document.getElementById("trouser")
var swtshirt=document.getElementById("sweatshirt")
var coatjack=document.getElementById("coat&jacket")
var narrival=document.getElementById("newarrvial")
trouser.onclick=function(){
    window.location.href="../HTML/trousersProducts.html"
}

swtshirt.onclick=function(){
    window.location.href="../HTML/5-B-sweatshirt&hoodies.html"
}
coatjack.onclick=function(){
    window.location.href="../HTML/5-C-coats&jackets.html"
}
narrival.onclick=function(){
    window.location.href="../HTML/5-A-new.html"
}



