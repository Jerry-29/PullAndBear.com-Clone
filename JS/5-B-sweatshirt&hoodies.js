list1=[{
    name:"Premium fabric oversize hoodie",
    price:15,
    colour:"blue",
    img:"https://static.pullandbear.net/2/photos//2021/I/0/2/p/8591/541/711/8591541711_2_6_8.jpg?t=1631031900741&imwidth=563",
},
{name:"Brown hoodie with STWD",
price:16,
colour:"red",
img:"https://static.pullandbear.net/2/photos//2021/I/0/2/p/8591/565/707/8591565707_2_6_8.jpg?t=1632241067355&imwidth=563",},
{name:"Hoodie with sleeve lettering",
colour:"blue",
img:"https://static.pullandbear.net/2/photos//2021/I/0/2/p/8591/550/251/8591550251_2_6_8.jpg?t=1632238961026&imwidth=563",
price:17,},
{name:"Basic colourful hoodie",
price:18,
colour:"blue",
img:"https://static.pullandbear.net/2/photos//2021/I/0/2/p/8591/913/402/8591913402_2_6_8.jpg?t=1632318502338&imwidth=563",},
{name:"Brown hoodie with slogan",
img:"https://static.pullandbear.net/2/photos//2021/I/0/2/p/8591/547/700/8591547700_2_6_8.jpg?t=1632238350488&imwidth=563",
price:19,},
{name:"Basic colourful hoodie",
price:20,
colour:"blue",
img:"https://static.pullandbear.net/2/photos//2021/I/0/2/p/8591/913/400/8591913400_2_6_8.jpg?t=1632318502283&imwidth=563",},
{name:"Colour block hoodie with slogan",
colour:"orangered",
img:"https://static.pullandbear.net/2/photos//2021/I/0/2/p/8591/548/712/8591548712_2_6_8.jpg?t=1632238353830&imwidth=563",
price:21,},
{name:"Basic colourful hoodie",
price:22,
colour:"blue",
img:"https://static.pullandbear.net/2/photos//2021/I/0/2/p/8591/913/716/8591913716_2_6_8.jpg?t=1632318502718&imwidth=563",    },
{name:"Basic colourful hoodie",
price:24,
colour:"blue",
img:"https://static.pullandbear.net/2/photos//2021/I/0/2/p/8591/913/606/8591913606_4_1_8.jpg?t=1632842960984&imwidth=563",    },
{name:"Black hoodie",
price:26,
colour:"gold",
img:"https://static.pullandbear.net/2/photos//2021/I/0/2/p/8591/515/800/8591515800_1_1_8.jpg?t=1627311534901&imwidth=563",},
{name:"Pouch pocket hoodie",
price:28,
colour:"blue",
img:"https://static.pullandbear.net/2/photos//2021/I/0/2/p/8591/513/712/8591513712_2_6_8.jpg?t=1630414968227&imwidth=563",},
{name:"Basic zip-up hoodie",
colour:"green",
img:"https://static.pullandbear.net/2/photos//2021/I/0/2/p/8591/501/710/8591501710_4_1_8.jpg?t=1632734665638&imwidth=563",
price:30,},
];
var parent=document.getElementById("main");
function showproducts(arr) {
parent.innerHTML=null;
list1.forEach (function (products){
    
let div= document.createElement("div");
let img=document.createElement("img");
img.src=products.img;
let product_price=document.createElement("p");
product_price.textContent="$"+products.price;
let product_name=document.createElement("p");
product_name.textContent=products.name;
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
var arr=list1.sort(function (a,b) {
    return a.price-b.price;
});
showproducts(arr);
}
function shl() {
var arr=list1.sort(function (a,b) {
    return b.price-a.price;
    
});
showproducts(arr);
}
var find=document.getElementById("slh1");
find.innerHTML="price_lowtohigh";
var find1=document.getElementById("shl2");
find1.innerHTML="price_hightolow";