var parent=document.getElementById("main");
   
    
var list2=[{name:"Parka with nylon details",
           price:80,
           colour:"blue",
           img:"https://static.pullandbear.net/2/photos//2021/I/0/2/p/4751/501/800/4751501800_4_1_8.jpg?t=1608561845124&imwidth=563",},
           {name:"Coloured puffer gilet",
           price:78,
           colour:"red",
           img:"https://static.pullandbear.net/2/photos//2021/I/0/2/p/8711/542/800/8711542800_4_1_8.jpg?t=1630923409469&imwidth=563",},
           {name:"Dark blue denim jacket",
           price:30,
           colour:"aqua",
           img:"https://static.pullandbear.net/2/photos//2021/I/0/2/p/8711/527/407/8711527407_4_1_8.jpg?t=1627894228617&imwidth=563",},
           {name:"Basic comfort fit coat",
           price:35,
           colour:"green",
           img:"https://static.pullandbear.net/2/photos//2021/I/0/2/p/8751/500/707/8751500707_4_1_8.jpg?t=1632734606143&imwidth=563",},
           {name:"Basic quilted bomber jacket",
           price:30,
           colour:"violet",
           img:"https://static.pullandbear.net/2/photos//2021/I/0/2/p/8711/507/401/8711507401_4_1_8.jpg?t=1632752355434&imwidth=563",},
           {name:"Lightweight puffer jacket",
           price:35,
           colour:"violet",
           img:"https://static.pullandbear.net/2/photos//2021/I/0/2/p/8711/519/401/8711519401_4_1_8.jpg?t=1632737796591&imwidth=563",},
           {name:"Basic high collar puffer jacket",
           price:40,
           colour:"violet",
           img:"https://static.pullandbear.net/2/photos//2021/I/0/2/p/8711/531/505/8711531505_4_1_8.jpg?t=1632752492591&imwidth=563",},
           {name:"Thermo-sealed puffer jacket",
           price:46,
           colour:"red",
           img:"https://static.pullandbear.net/2/photos//2021/I/0/2/p/8711/545/800/8711545800_4_1_8.jpg?t=1631108255272&imwidth=563",},
           {name:"Basic quilted bomber jacket",
           price:48,
           colour:"green",
           img:" https://static.pullandbear.net/2/photos//2021/I/0/2/p/8711/513/506/8711513506_4_1_8.jpg?t=1631178807005&imwidth=563",},  
           {name:"Black 3M Thinsulate anorak jacket",
            colour:"green",
            img:"https://static.pullandbear.net/2/photos//2021/I/0/2/p/8711/568/800/8711568800_4_1_8.jpg?t=1632155575678&imwidth=563",
            price:50,},
           {name:"Reversible faux shearling jacket",
            colour:"aqua",
            img:"https://static.pullandbear.net/2/photos//2021/I/0/2/p/4711/528/505/4711528505_4_1_8.jpg?t=1629297515305&imwidth=563",
            price:55,},
           {name:"Coloured puffer gile",
            colour:"violet",
            img:"https://static.pullandbear.net/2/photos//2021/I/0/2/p/8711/542/600/8711542600_4_1_8.jpg?t=1632390942972&imwidth=563",
            price:36,}, 
];
function showproducts(arr) {
    parent.innerHTML=null;
list2.forEach(function(product){

let div= document.createElement("div");
let img=document.createElement("img");
img.src=product.img;
let product_price=document.createElement("p");
product_price.textContent="$"+product.price;
let product_name=document.createElement("p");
product_name.textContent=product.name;
product_name.style.textAlign="center";
product_price.style.textAlign="center";
let addtocart_btn=document.createElement("button");
addtocart_btn.innerText="Add to Cart";
addtocart_btn.style.marginLeft="35%";
addtocart_btn.onclick= function() {
    
   addtoCart(products);
};
div.append(img,product_name,product_price);
parent.append(div);
});
}
showproducts();
if (localStorage.getItem("cart5")===null) {
localStorage.setItem("cart5",JSON.stringify([]));
};

var logoclick=document.getElementById("logoclick")
logoclick.onclick=function(){
    window.location.href="../HTML/4-MenOrWomen.html"
}

var red=document.getElementById("main")
red.onclick=function(){
    alert("Visit Trouser Section .This Page is Static")
}
var backg=document.getElementById("backbtn")
backg.onclick=function(){
    window.location.href="../HTML/5-men.html"
}


function addtoCart(p) {
products_cart=JSON.parse(localStorage.getItem("cart5"));
products_cart.push(p);
localStorage.setItem("cart5",JSON.stringify(products_cart));
console.log("product_cart:",products_cart);
};
function slh() {
var arr=list2.sort(function (a,b) {
    return a.price-b.price;
});
showproducts(arr);
}
function shl() {
var arr=list2.sort(function (a,b) {
    return b.price-a.price;
    
});
showproducts(arr);
}
var find=document.getElementById("slh1");
find.innerHTML="price_lowtohigh";
var find1=document.getElementById("shl2");
find1.innerHTML="price_hightolow"; 