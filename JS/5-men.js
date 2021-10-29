
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
    alert("denim page")
}