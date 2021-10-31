
var itemInCart=document.getElementById("noItemInCart")
itemInCart.onclick=function(){
    var cart= JSON.parse(localStorage.getItem("pullandbearProductCart"));
    if(cart.length==0){
        alert("Cart is Empty")
    }
    else{
        window.location.href="../HTML/cartPage.html"
    }
}


let new_in = document.getElementById("full_img")
new_in.addEventListener("click", newpage)

function newpage() {
    window.location.href = "../HTML/5-A-new.html";
}

let SWEATSHIRTS = document.querySelector("#SWEATSHIRTS")
SWEATSHIRTS.addEventListener("click", SWEATSHIRT)

function SWEATSHIRT() {
    window.location.href = "../HTML/5-B-sweatshirt&hoodies.html";
}

let JACKETS = document.querySelector("#JACKETS")
    .addEventListener("click", JACKET)

function JACKET() {
    window.location.href = "../HTML/5-C-coats&jackets.html";
}

let TROUSERS = document.querySelector("#TROUSERS")
    .addEventListener("click", TROUSER)

function TROUSER() {
    window.location.href = "../HTML/trousersProducts.html"
}

let denim_collection = document.querySelector("#full_img2")
denim_collection.addEventListener("click", denimpage)

function denimpage() {
    alert("Visit Trouser Category")
}
var n1txt=document.getElementById("men1")
var n2txt=document.getElementById("women1")
var popOut=document.getElementById("popout")
var poptxt=document.getElementById("poptext")
var p1=document.getElementById("showdiv")
var n1=document.getElementById("line2")
poptxt.onmouseover=function(){
    popOut.style.width="50%"
    popOut.style.backgroundColor="white"
    poptxt.style.marginTop="12%"
    poptxt.style.marginLeft="5%"
    poptxt.style.color="black"
    n1txt.style.color="black"
    n2txt.style.color="black"
    n1.style.backgroundColor="black"
}
poptxt.onpointerout=function(){
    popOut.style.width="20%"
    popOut.style.backgroundColor="inherit"
    poptxt.style.marginTop="30%"
    poptxt.style.marginLeft="12%"
    poptxt.style.color="white"
    n1txt.style.color="whitesmoke"
    n2txt.style.color="whitesmoke"
    n1.style.backgroundColor="white"
}
var Newclick=document.getElementById("Newclick")
var Clothingclick=document.getElementById("Clothingclick")
var shoesclick=document.getElementById("shoesclick")
var accessoriesclick=document.getElementById("accessoriesclick")
var joinLife=document.getElementById("joinLife")
Newclick.onclick=function(){
    alert("Visit Clothing Catgeory")
}
Clothingclick.onclick=function(){
    window.location.href="../HTML/4-MenOrWomen.html"
}
shoesclick.onclick=function(){
    alert("Visit Clothing Catgeory")
}
accessoriesclick.onclick=function(){
    alert("Visit Clothing Catgeory")
}
joinLife.onclick=function(){
    alert("Visit Clothing Catgeory")
}