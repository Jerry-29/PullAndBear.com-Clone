let PWCart=JSON.parse(localStorage.getItem("pullandbearProductCart"))
// console.log(PWCart.length);
let parnt=document.getElementById("flexitems")
function showprodcts(){
    PWCart.forEach(function(element){
let div1=document.createElement("div")
div1.setAttribute("id","div1")
let Pimg=document.createElement("img")
Pimg.setAttribute("id","Productimg")
Pimg.src=element.ProductImage1
let Pprice=document.createElement("p")
Pprice.innerText="Price : $"+element.ProductPrice
let Psize=document.createElement("p")
Psize.innerText="Size :"+element.ProductSize
let Procolor=document.createElement("p")
Procolor.innerText="Color :"+element.ProductColour
let Pname=document.createElement("p")
Pname.innerText="Product Name :"+element.ProductName
var remButton=document.createElement("button")
remButton.setAttribute("id","remButton")
remButton.innerText="Remove Item"
var div2=document.createElement("div")
div2.setAttribute("id","div2")
div2.append(Pimg)
div1.append(Pname,Procolor,Psize,Pprice,remButton)
parnt.append(div2,div1)
    });
// localStorage.setItem('cartItems', JSON.stringify(existingItems));

    // let hd1=document.getElementById("head1")
    // let bt1=document.getElementById("BtOrder")
    // let rt1=document.getElementById("rmbtn")
//         let prnt=document.getElementById("CartContainer")
//         // let Shopmore=document.getElementById("SHOPMORE")
//         if(PWCart.length==0){
//           hd1.innerText="YOUR CART IS EMPTY"
//          bt1.style.visibility="hidden"
//           rt1.style.visibility="hidden"
//         }
//         else{
//            Shopmore.style.visibility="hidden"
//         }
     // TO remove cart products
    //  var rmbutn=document.getElementById("remButton")
    // rmbutn.onclick=function(){
    //   if(PWCart.length>0) {PWCart.pop()
    //   }
    //   localStorage.setItem("pullandbearProductCart",JSON.stringify(PWCart))
    // }

    let total=document.getElementById("totalprice")
function sum(){
var PWCart=JSON.parse(localStorage.getItem("pullandbearProductCart"))
    let sum=0;
    for(let i=0;i<PWCart.length;i++){
       sum+=Number(PWCart[i].ProductPrice)
    }total.innerText="Toal Cart Value : $"+sum
    console.log(sum);
    // if(PWCart.length==0){
    //     total.innerText="Total Cart Value : $ 0"
    // }

   }sum()
var rem=document.getElementById("remButton")
console.log(rem.innerText);
   rem.onclick=function(){
    var existingItems = JSON.parse(localStorage.getItem('pullandbearProductCart'))
    // console.log(existingItems);
    // for(var m=0;m<existingItems.length;m++){
    //     // rem.innerText=i
    // // }
    //  var i=rem.innerText
    var i= existingItems.indexOf(rem)
    existingItems.splice(i,1)
    // var f=document.getElementById("addItem")
    // if(existingItems.length==0){
    // f.innerHTML="<h1>Cart is Empty</h1>"
    // }
        localStorage.setItem('pullandbearProductCart', JSON.stringify(existingItems));  
        // console.log(e);
    window.location.href="cartPage.html"
}
showprodcts(existingItems)

}
showprodcts()