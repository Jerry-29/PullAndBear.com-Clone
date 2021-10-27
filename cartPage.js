let PWCart = JSON.parse(localStorage.getItem("pullandbearProductCart"));
// console.log(PWCart.length);
let parnt = document.getElementById("flexitems");
function showprodcts() {
    PWCart.forEach(function (element, index) {
        let div1 = document.createElement("div");
        div1.setAttribute("id", "div1");
        let Pimg = document.createElement("img");
        Pimg.setAttribute("id", "Productimg");
        Pimg.src = element.ProductImage1;
        let Pprice = document.createElement("p");
        Pprice.setAttribute("class", "pelement");
        Pprice.innerText = "Price : $" + element.ProductPrice;
        let Psize = document.createElement("p");
        Psize.setAttribute("class", "pelement");
        Psize.innerText = "Size :" + element.ProductSize;
        let Procolor = document.createElement("p");
        Procolor.setAttribute("class", "pelement");
        Procolor.innerText = "Color :" + element.ProductColour;
        let Pname = document.createElement("p");
        Pname.setAttribute("class", "pelement");
        Pname.innerText = "Product Name :" + element.ProductName;
        var remButton = document.createElement("button");
        remButton.setAttribute("id", "remButton");
        remButton.innerText = "Remove Item";
        var Addmore=document.createElement("button")
        Addmore.innerHTML="&#x2b;"
        Addmore.setAttribute("id","addmore")
        Addmore.onclick=function(){
            pushInCart(index)
            window.location.href="cartPage.html"
        }
        remButton.addEventListener("click", function () {
            deletItem(index);
            window.location.href = "cartPage.html";
        });
        var div2 = document.createElement("div");
        div2.setAttribute("id", "div2");
        div2.append(Pimg);
        div1.append(Pname, Procolor, Psize, Pprice, remButton,Addmore);
        parnt.append(div2, div1);
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
     function pushInCart(index){
         PWCart.push(PWCart[index])
         localStorage.setItem("pullandbearProductCart",JSON.stringify(PWCart))
         showprodcts(PWCart)
     }
    let total = document.getElementById("totalprice");
    var itemNo=document.getElementById("itemNo")
    itemNo.innerText="Items :"+PWCart.length
    console.log(itemNo);
    function sum() {
        var PWCart = JSON.parse(localStorage.getItem("pullandbearProductCart"));
        if(PWCart.length==0){
            total.innerText="Total Cart Value : $ 0"
        }
      
        let sum = 0;
        for (let i = 0; i < PWCart.length; i++) {
            sum += Number(PWCart[i].ProductPrice)
        }
        total.innerText = "Toal Cart Value : $" + sum;
        console.log(sum);
        
    }
    sum();

    var home = document.getElementById("homeclicked");
    var add = document.getElementById("address");
    var hom2=document.getElementById("StoreDelDiv")
    var hom1=document.getElementById("home2")
    var homeclickdiv = document.getElementById("homeclickdiv");
    home.onclick = function () {
        add.style.visibility = "visible";
        homeclickdiv.style.visibility = "hidden";
        hub.style.visibility="visible"
        show.style.visibility = "hidden";
        hom1.style.border="hidden"
        hom2.style.border="1px solid grey"
    };
    var hub = document.getElementById("storeHide");
    var show = document.getElementById("addressHub");
    var hubclicked = document.getElementById("storeclicked");
    // var pj = document.getElementById("storeclickedP");
    // var p2 = document.getElementById("P2");
    // var p3 = document.getElementById("p3");
    // var p4 = document.getElementById("p4");
    hubclicked.onclick = function () {
        hub.style.visibility="hidden"
        show.style.visibility = "visible";
        add.style.visibility = "hidden";
        homeclickdiv.style.visibility = "visible";
        hom1.style.border="1px solid grey"
        hom2.style.border="hidden"
       // homeclickdiv.style.visibility = "visible";
       // home.style.visibility = "visible";
    };

    var arr=["Sunday","Monday","TuesDay","Wednesday","Thrusday","Friday","Saturday"]
    var delday=document.getElementById("delday")
    delday.innerHTML=arr[Math.floor(Math.random() * arr.length)];
    var day=document.getElementById("p3")
    day.innerHTML=arr[Math.floor(Math.random() * arr.length)];
    //    var check=document.getElementById("mobile")
    //    var span3=document.getElementById("step3")
    //    if(check.innerText!=""){
    //     span3.style.background="black"
    //     span3.style.color="white"
    //    }
    // var rem=document.getElementById("remButton")
    // console.log(rem.innerText);
    //    rem.onclick=function(){
    //     var existingItems = JSON.parse(localStorage.getItem('pullandbearProductCart'))
    function deletItem(index) {
        PWCart.splice(index, 1);
        localStorage.setItem("pullandbearProductCart", JSON.stringify(PWCart));
        showprodcts(PWCart);
    }
    // console.log(existingItems);
    // for(var m=0;m<existingItems.length;m++){
    //     // rem.innerText=i
    // // }
    //  var i=rem.innerText
    // var i= existingItems.indexOf(rem)
    // existingItems.splice(i,1)
    // var f=document.getElementById("addItem")
    // if(existingItems.length==0){
    // f.innerHTML="<h1>Cart is Empty</h1>"
    // }
    //     localStorage.setItem('pullandbearProductCart', JSON.stringify(existingItems));
    //     // console.log(e);
    // window.location.href="cartPage.html

     // Onclick to Proceed button
     var proceed1=document.getElementById("subbtn1")
     var proceed2=document.getElementById("subbtn2")
     proceed1.onclick=function(){
         window.location.href="paymentGateway.html"
         //Change me to Payment Page href
     }
     proceed2.onclick=function(){
        window.location.href="paymentGateway.html"
        //Change me to Payment Page href
    }
}
showprodcts();
