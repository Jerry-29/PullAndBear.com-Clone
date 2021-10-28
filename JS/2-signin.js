function signin(e) {
    e.preventDefault();

    let myForm = document.getElementById("myForm");
    console.log(myForm);

    let email = myForm.email.value;
    let password = myForm.password.value;

    console.log("data", email, password);

    let existing_users = JSON.parse(localStorage.getItem("users"));


    //----- validation part-----------//

    var count = 0;
    existing_users.forEach(function (user) {

        if (email === user.email && password === user.password) {
            //alert ("Logged in successfully")

            window.location.href = "../HTML/4-MenOrWomen.html";
            count++;
        }

        else if (email === user.email && password !== user.password) {
            window.alert("Email or Password is incorrect");
        };

    });
    // if(count == 0) { window.alert("create your account.")}
    if (count > 0) { window.alert("logged in successfully") }
    else if (count == 0) { window.alert("This email is not registered with us.") }

    myForm.email.value = "";
    myForm.password.value = "";
    count = 0;

}
