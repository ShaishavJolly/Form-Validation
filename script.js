function clearErrors(){
    errors = document.getElementsByClassName("formerror");
    for(let item of errors){
        item.innerHTML = "";
    }
    box = document.getElementsByClassName("formdesign")
    for(let item of box){
        item.style.border = "1px solid green"
    }
}
function showerror(id,error){
    element = document.getElementById(id);
    element.innerHTML = error;
}
function validation(){
    var returnval=true;
    clearErrors();

    let name = document.forms["myform"]["full_name"].value;
    console.log(name);
    if(name.length < 5){
        showerror("name_error","*name should not be less than 5 characters");
        document.getElementById("full_name").style.border = "2px solid red"
        returnval =  false;
    }

    let email = document.forms["myform"]["email"].value;
    console.log(email);
    if(email.includes("@") == false){
        showerror("email_error","*Enter valid email");
        document.getElementById("email").style.border = "2px solid red"
        returnval =  false;
    }
    
    let phone = document.forms["myform"]["phone_number"].value;
    console.log(phone);
    if(phone.length != 10){
        showerror("phone_error","*Enter 10 digit phone number");
        document.getElementById("phone_number").style.border = "2px solid red"
        returnval =  false;
    }
    let password = document.forms["myform"]["password"].value;
    console.log(password);
    if(password.length<8){
        showerror("password_error","*password is not strong");
        document.getElementById("password").style.border = "2px solid red"
        returnval =  false;
    }
    if(password == name){
        showerror("password_error","*password should not be the name");
        document.getElementById("password").style.border = "2px solid red"
        returnval =  false;
    }
    if(password == "password"){
        showerror("password_error","*password should not be 'password'");
        document.getElementById("password").style.border = "2px solid red"
        returnval =  false;
    }
    let cpassword = document.forms["myform"]["confirm_password"].value;
    console.log(cpassword);
    if(cpassword != password || cpassword.length == 0){
        showerror("cpassword_error","*passwords do not match");
        document.getElementById("confirm_password").style.border = "2px solid red"
        returnval =  false;
    }
    return returnval;
}
