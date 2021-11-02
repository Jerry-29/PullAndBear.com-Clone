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
        Pprice.innerText = "Price : $ " + element.ProductPrice;
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
            window.location.href="../HTML/cartPage.html"
        }
        remButton.addEventListener("click", function () {
            deletItem(index);
            window.location.href = "../HTML/cartPage.html";
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
    // var homback=document.getElementById("backhomebutton")
    // homback.onclick=function(){
    //     window.location.href="../HTML/4-MenOrWomen.html"
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
        total.innerText = "Toal Cart Value : $ " + sum;
        console.log(sum);
        var tPay=document.getElementById("finalAmount")
        tPay.innerHTML="Pay $ "+sum
        // if(sum==0){
        //     var bk=document.getElementById("backhomebutton")
        //     bk.style.display="block"
        // }
    }
    sum();
    
    var home = document.getElementById("homeclicked");
    var add = document.getElementById("address");
    var hom2=document.getElementById("StoreDelDiv")
    var hom1=document.getElementById("home2")
    var homeclickdiv = document.getElementById("homeclickdiv");
    home.onclick = function () {
        if(PWCart.length==0){
            alert("Your Cart is empty")
            // Donot Change Me
            window.location.href="../HTML/4-MenOrWomen.html"
        }
       else{ add.style.visibility = "visible";
        homeclickdiv.style.visibility = "hidden";
        hub.style.visibility="visible"
        show.style.visibility = "hidden";
        hom1.style.border="hidden"
        hom2.style.border="1px solid grey"
    }
    };
    var hub = document.getElementById("storeHide");
    var show = document.getElementById("addressHub");
    var hubclicked = document.getElementById("storeclicked");
    // var pj = document.getElementById("storeclickedP");
    // var p2 = document.getElementById("P2");
    // var p3 = document.getElementById("p3");
    // var p4 = document.getElementById("p4");
    
    hubclicked.onclick = function () {
        if(PWCart.length==0){
            
            alert("Your Cart is empty")
           
            window.location.href="../HTML/4-MenOrWomen.html"
            // Donot Change Me
            
        }else{
            hub.style.visibility="hidden"
            show.style.visibility = "visible";
            add.style.visibility = "hidden";
            homeclickdiv.style.visibility = "visible";
            hom1.style.border="1px solid grey"
            hom2.style.border="hidden"
           
        }
      
       // homeclickdiv.style.visibility = "visible";
       // home.style.visibility = "visible";
    };

    var netb=document.getElementById("nbselect")
    var headpay=document.getElementById("payhead")
    var inp1=document.getElementById("inp1")
    var inp2=document.getElementById("inp2")
    var inp3=document.getElementById("inp3")
    var inp4=document.getElementById("inp4")
    netb.onclick=function(){
        paydetail.style.visibility="visible"
        payOption.style.visibility="hidden"
        headpay.innerHTML="Enter Your Net Banking Details"
        inp1.setAttribute("placeholder","Customer Relation Number CRN")
        inp2.setAttribute("placeholder","Net Banking Password")
        inp3.setAttribute("placeholder","Bank Name")
        inp4.style.display="none"
        inp2.setAttribute("type","password")
        var fclick=document.getElementById("finalAmount")
        fclick.onclick=function(){
            if(inp1.value==""||inp2.value==""||inp3.value==""){
                alert("Invalid details")
            }
            else{
                window.location.href="../HTML/paymentGateway.html"
        }
    }
}
var logoclick=document.getElementById("logodiv")
logoclick.onclick=function(){
    window.location.href="../HTML/4-MenOrWomen.html"
}

    var upiselected=document.getElementById("upiselected")
    var imgapp=document.getElementById("finalpaydetail")
    var img=document.createElement("img")
    upiselected.onclick=function(){
        paydetail.style.visibility="visible"
        payOption.style.visibility="hidden"
        headpay.innerText="Enter UPI Your Id or Scan QR Code"
        inp1.setAttribute("placeholder","Enter Your UPI ID abc@ybl")
        inp1.setAttribute("type","text")
        inp2.style.display="none"
        inp3.style.display="none"
        inp4.style.display="none"
        img.src="../Images/upilogop.jpg"
        img.style.width="20%"
        imgapp.append(img)
        var fclick=document.getElementById("finalAmount")
        fclick.onclick=function(){
       if(inp1.value=="" ||inp1.value.length<4){
           alert("Invalid Input")
       }else{
           window.location.href="../HTML/paymentGateway.html"
       }
        }
    }

    var Cod=document.getElementById("codselected")
    Cod.onclick=function(){
        window.location.href="../HTML/11-thankyou.html"
        // change Me To Thanks for Shopping
    }
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
     var paydetail=document.getElementById("paydetail")
     var proceed2=document.getElementById("subbtn2")
     var ad=document.getElementById("address")
     var store=document.getElementById("storeHide")
     var mainstore=document.getElementById("StoreDelDiv")
     var payOption=document.getElementById("paymentdetail")
     var step3=document.getElementById("step3")
     var ad1=document.getElementById("ad1")
     var ad2=document.getElementById("ad2")
     var ad3=document.getElementById("ad3")
     var ad4=document.getElementById("ad4")
     var ad5=document.getElementById("ad5")
     var ad6=document.getElementById("ad6")
     var ad7=document.getElementById("ad7")
     var ad8=document.getElementById("ad8")
     proceed1.onclick=function(){
         if(ad1.value==""||ad2.value==""||ad3.value==""||ad4.value==""||ad5.value==""||ad6.value==""){
             alert("Address field can not be empty")
          
         }
         else if(ad5.value.length!==6){
            alert("Incorrect Area Code")
        }
        else if(ad8.value.length!==10){
            alert("Invalid Mobile Number")
        }
         else{
            payOption.style.visibility="visible"
            paydetail.style.visibility="hidden"
            ad.style.visibility="hidden"
            store.style.visibility="hidden"
            mainstore.style.visibility="hidden"
            step3.style.background="black"
            step3.style.color="white"
          }
     }
     var carInp=document.getElementById("inp2")
     var cvvNum=document.getElementById("inp3")
     var debitcardclick=document.getElementById("dbt1click")
     debitcardclick.onclick=function(){
        paydetail.style.visibility="visible"
        payOption.style.visibility="hidden"
        carInp.setAttribute("type","number")
        cvvNum.setAttribute("type","password") 
        var userNam=document.getElementById("inp1")
        var cardnum=document.getElementById("inp2")
        console.log(cardnum);
        let cvc = document.getElementById("inp3")
        console.log(cvc);
        let Date =document.getElementById("inp4")
        console.log(Date);
        var tPay=document.getElementById("finalAmount")
        tPay.onclick=function(){
            console.log(cardnum.value);
            console.log(cvc.value);
            console.log(Date.value);
            var flag=true
            if(userNam.value=="" || cardnum.value==""||Date.value==""||cvc.value==""){
                flag=false
                alert("Fill Correct Details") 
            }
            else if(cardnum.value.length!=16){
                flag=false
                alert("Invalid Card Details")
            }
            else if(cvc.value.length!==3){
                flag=false
                alert("Invalid CVV")
            }
            else if(Date.value.length!=7){
                flag=false
                alert("Incorrect Date")
            }  
            if(flag==true){
                window.location.href="../HTML/paymentGateway.html"
            }
        }

     }
     var stordiv=document.getElementById("addressHub")
     proceed2.onclick=function(){
        payOption.style.visibility="visible"
        paydetail.style.visibility="hidden"
        ad.style.visibility="hidden"
        store.style.visibility="hidden"
        mainstore.style.visibility="hidden"
        step3.style.background="black"
        step3.style.color="white"
        homeclickdiv.style.visibility="hidden"
        stordiv.style.visibility="hidden"
        hom1.style.visibility="hidden"
    }
    var cancelPay=document.getElementById("CancelPay")
    cancelPay.onclick=function(){
        window.location.href="../HTML/cartPage.html"
    }
    var gobackOpt=document.getElementById("gobackopt")
    gobackOpt.onclick=function(){
        window.location.href="../HTML/trousersProducts.html"
    }
}
showprodcts();



