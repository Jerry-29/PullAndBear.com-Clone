var data=[{   
    ProductName:"Casual Jeans", 
    ProductPrice:38,
    ProductSize:"XL",
    ProductColour:"blue",
    ProductImage1:"https://static.pullandbear.net/2/photos//2021/I/0/2/p/8676/519/712/8676519712_2_1_8.jpg?t=1632235002775&imwidth=750",
    ProductImage2:"https://static.pullandbear.net/2/photos//2021/I/0/2/p/8676/519/712/8676519712_2_2_8.jpg?t=1632235002775&imwidth=750",
    ProductImage3:"https://static.pullandbear.net/2/photos//2021/I/0/2/p/8676/519/712/8676519712_2_3_8.jpg?t=1632236244266&imwidth=750",
    ProductImage4:"https://static.pullandbear.net/2/photos//2021/I/0/2/p/8676/519/712/8676519712_2_4_8.jpg?t=1632236244266&imwidth=750",
    ProductImage5:"https://static.pullandbear.net/2/photos//2021/I/0/2/p/8676/519/712/8676519712_2_5_8.jpg?t=1632235002775&imwidth=750",
    ProductImage6:"https://static.pullandbear.net/2/photos//2021/I/0/2/p/8676/519/712/8676519712_2_7_8.jpg?t=1632728523154&imwidth=750",
},
];
function showprodcts(){
data.forEach(function(element){
let name=document.getElementById("productname")
name.innerText=element.ProductName;
let Pprice=document.getElementById("productprice")
Pprice.innerText="$"+element.ProductPrice;

let size=document.getElementById("productsize")
let sizeopt=document.getElementById("selectingSizep")
let selectbtn=document.getElementById("sizeselection")
let Pcolor=document.getElementById("selectcolorbutton")
let Pcolor1=document.getElementById("selectcolorbutton2")
let Pcolor2=document.getElementById("selectcolorbutton3")
Pcolor.style.backgroundColor=element.ProductColour
Pcolor1.style.backgroundColor=element.ProductColour1
Pcolor2.style.backgroundColor=element.ProductColour2
//selecting Products colour
let cmsg=document.getElementById("cmsg")
let csbt=document.getElementById("selectcolor")
let cs=document.getElementById("SColour")
csbt.onclick=function(){
    if(cs.value==element.ProductColour){
       // cs.style.background="lightgreen"
        cmsg.innerText="Available"
        cmsg.style.color="green"
        //alert("Products Colour Selected ")
       
    }else{
        //alert("Sorry ! Product is not available in this colour .Please, select different Colour")
        cs.value=""
       // cs.style.background="lightred"
        cmsg.innerText="Not Available"
        cmsg.style.color="red"
    }
} 
// products Size
let smsg=document.getElementById("smsg")
let sizebt=document.getElementById("sizeselection")
let sizec=document.getElementById("selectingSizep")
sizebt.onclick=function(){
    if(sizec.value==element.ProductSize ){
        // sizec.style.background="lightgreen"
        // alert("This Size is Available")
        smsg.innerText="Available"
        smsg.style.color="green"
       
    }else{
        // alert("Sorry ! This size is Not avilable. Select differnet sizes. ")
        sizec.value=""
        // sizex.style.backgroundColor="lightred"
        smsg.innerText="Not Available"
        smsg.style.color="red"
        smsg.style.border="2px"
    }
} 

var logoclick=document.getElementById("logoclick")
logoclick.onclick=function(){
    window.location.href="../HTML/4-MenOrWomen.html"
}
  
// var back=document.getElementById("goback")
// back.onclick=function(){
//     window.location.href="../HTML/trousersProducts.html"
// }
  
// let addwishlist=document.getElementById("wishlistbutton")
// addwishlist.onclick=function(){
//     wishList(element);
// }
let addingInCart=document.getElementById("addtoshopbag")
addingInCart.onclick=function(){
    if(sizec.value!==element.ProductSize ||cs.value!==element.ProductColour){
        
         alert("Seleced Prodouct is Out Of Stock !")
        
    }
    else{
        ADD(element);
        addingInCart.style.background="green"
        addingInCart.innerText="Product Added in Cart"
        window.location.href="../HTML/trouser3.html"
    }
    
}

     let click=0;
let wish=document.getElementById("wishlistbutton")
wish.onclick=function(){
    if(click%2==0){
        wish.innerHTML="<span style='font-size:100%;color:red;'>&hearts;</span>";

    }
    else{
        wish.innerHTML="&#9825";
    }
    click++;
   
}

let image1=document.getElementById("item1")
image1.src=element.ProductImage1
let image2=document.getElementById("item2")
image2.src=element.ProductImage2
let image3=document.getElementById("item3")
image3.src=element.ProductImage3
let image4=document.getElementById("item4")
image4.src=element.ProductImage4
let image5=document.getElementById("item5")
image5.src=element.ProductImage5
let image6=document.getElementById("item6")
image6.src=element.ProductImage6
 
});


// let wishlistopt=document.getElementById("wishlistbutton")
// wishlistopt.addEventListener("click",wishopt)
// let anchor2=document.getElementById("checklist")
// let anchor4=document.getElementById("anchor3")

// function wishopt(){
//     if(wishlistopt.innerText=="" ){
//         alert ("Your Wish List is Empty")
//     }
//     else{
//         anchor4.setAttribute("href","wishList.html")
//     }
// }
// wishopt()
}
showprodcts()

if(localStorage.getItem("pullandbearProductCart")===null){
    localStorage.setItem("pullandbearProductCart",JSON.stringify([]))
}


//var count=0;
// let orderAddmsg=document.getElementById("orderAdded")
var cartTxt=document.getElementById("cartItemNumber")
let RetriveData=JSON.parse(localStorage.getItem("pullandbearProductCart"))
// cartTxt.innerText=RetriveData.length 
window.addEventListener("load",load)
function load(){
    if(RetriveData.length>0){
        cartTxt.innerText=RetriveData.length 
    }else{
        cartTxt.innerText=""
    }
   
}
var main=document.getElementById("main")
function ADD(element){
    
    RetriveData.push(element)
    // count++;
   localStorage.setItem("pullandbearProductCart",JSON.stringify(RetriveData));

}
var cartTxtn=document.getElementById("cartItemNumber")
var cartBody=document.getElementById("notxt")
 cartBody.onclick=function(){
    if(RetriveData.length==0){
        alert("Cart is Empty")
    }else{
        window.location.href="../HTML/cartPage.html"
    }
 }
 var id=Math.floor(Math.random()*1291738)
 var refid=document.getElementById("refid")
 refid.innerHTML="Ref "+ id

 var n1txt=document.getElementById("men1")
var n2txt=document.getElementById("women1")
var popOut=document.getElementById("popout")
var poptxt=document.getElementById("poptext1")
var p1=document.getElementById("showdiv")
var n1=document.getElementById("line2")
poptxt.onmouseover=function(){
    popOut.style.width="50%"
    popOut.style.backgroundColor="white"
    poptxt.style.marginTop="9%"
    poptxt.style.marginLeft="1%"
    poptxt.style.color="black"
    n1txt.style.color="black"
    n2txt.style.color="black"
    n1.style.backgroundColor="black"
}
poptxt.onpointerout=function(){
    popOut.style.width="20%"
    popOut.style.backgroundColor="inherit"
    poptxt.style.marginTop="25%"
    poptxt.style.marginLeft="4%"
    // poptxt.style.color="white"
    // n1txt.style.color="whitesmoke"
    // n2txt.style.color="whitesmoke"
    n1.style.backgroundColor="black"
}
var Newclick=document.getElementById("Newclick")
var Clothingclick=document.getElementById("Clothingclick")
var shoesclick=document.getElementById("shoesclick")
var accessoriesclick=document.getElementById("accessoriesclick")
var joinLife=document.getElementById("joinLife")
Newclick.onclick=function(){
    alert("Welcome to New Arrival Page")
}
Clothingclick.onclick=function(){
    window.location.href="../HTML/4-MenOrWomen.html"
}
shoesclick.onclick=function(){
    alert("Welcome to Shoes Page")
}
accessoriesclick.onclick=function(){
    alert("Welcome to Accessiories Page")
}
joinLife.onclick=function(){
    alert("Welcome to  Join Life Page")
}