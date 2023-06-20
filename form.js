function verifyPassword() { 
    var password = document.getElementById("pwd").value; 
    var confirmPassword= document.getElementById("confirm-pwd").value;
    console.log(password);
    console.log(confirmPassword);
    if(pwd == "") {
        console.log("Fill plz"); 
        document.getElementById("message").innerHTML="Fill the password please!";
    }
}
verifyPassword()