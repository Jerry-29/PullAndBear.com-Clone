function signup(e) {
    e.preventDefault();

    let myForm = document.getElementById("myForm");
    console.log(myForm);

    var name = myForm.name.value;
    var mobile = myForm.mobile.value;
    var email = myForm.email.value;
    var password = myForm.password.value;
    var address = myForm.address.value;


    //------------all field required......//
    if (name.length < 1 || mobile.length < 10 || email.length < 1 || password.length < 1 || address.length < 1) { window.alert("Input invalid") }

    //--------------------------------all  field finished-------//

    else {

        console.log("data", name, email, password, mobile, address);


        //---check data in local storage--//
        console.log(localStorage.getItem("users"));


        if (localStorage.getItem("users") === null) {
            localStorage.setItem("users", JSON.stringify([]));
        }

        //1. grab and prepare users data..//

        let user = {
            name: name,
            email: email,
            mobile: mobile,
            address: address,
            password: password,
        };

        //2-  get array of existing users from local storage first

        let x = JSON.parse(localStorage.getItem("users"));

        // check if already this user exist..
        var count = 0;
        x.forEach(function check(u) {

            if (u.email === user.email && user.email.length > 0) {
                window.alert("This Email is already resgistered with us!");
                count++;
            }

        });

        if (user.password.length < 8) { window.alert("Password should be more than 8 charecter.") }

        //3- push new user to the array.

        if (count === 0 && user.email.length > 0 && user.password.length > 7) { x.push(user) }  // added a new user

        localStorage.setItem("users", JSON.stringify(x));
        console.log("x", x)


    }

    myForm.name.value = "";
    myForm.mobile.value = "";
    myForm.email.value = "";
    myForm.password.value = "";
    myForm.address.value = "";

}