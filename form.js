// function verifyPassword() { 
//     var password = document.getElementById("pwd").value; 
//     var confirmPassword= document.getElementById("confirm-pwd").value;
//     console.log(password);
//     console.log(confirmPassword);
//     if(pwd == "") {
//         console.log("Fill plz"); 
//         document.getElementById("message").innerHTML="Fill the password please!";
//     }
// }
// verifyPassword()


const form = document.querySelector("form");
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");
const firstNameError = document.querySelector("#first-name + span.error");
const firstName = document.getElementById("first-name");
const pwd = document.getElementById("pwd");
const confirmPwd = document.getElementById("confirm-pwd");
const pwdError = document.querySelector("#pwd + span.error");
const confirmPwdError = document.querySelector("#confirm-pwd + span.error"); 

email.addEventListener("input", (event) => { 
    
    if (email.value.length === 0) { 
        emailError.textContent = ""; 
        emailError.className = "error"; 
    } 
    else if(email.validity.valid) { 
        emailError.textContent = ""; 
        emailError.className = "error"; 
    } else { 
        showError();
    }

});

confirmPwd.addEventListener("input", (event) => { 
    if (confirmPwd.value.length === 0) { 
        confirmPwdError.textContent = ""; 
        confirmPwdError.className = "error";
    } else if (isValidPwd()) { 
        confirmPwdError.textContent = ""; 
        confirmPwdError.className = "error";
        pwdError.textContent = ""; 
        pwdError.className = "error"
    }
})

pwd.addEventListener("input", (event) => { 
    if (pwd.value.length === 0) { 
        pwdError.textContent = ""; 
        pwdError.className = "error"
    } else if (isValidPwd()){ 
        pwdError.textContent = ""; 
        pwdError.className = "error"
        confirmPwdError.textContent = ""; 
        confirmPwdError.className = "error";
    }
});

form.addEventListener("submit", (event) => { 

    if (pwd.value.length === 0) { 
        pwdError.textContent = "Please enter a password"; 
        pwdError.className = "error active"; 
        event.preventDefault(); 
    } else if (pwd.validity.tooShort) { 
            pwdError.textContent = `Password should be at least ${pwd.minLength} characters; you entered ${pwd.value.length}.`; 
            event.preventDefault(); 


    } else if (confirmPwd.value.length === 0) { 
        confirmPwdError.textContent = "Please enter a password"; 
        confirmPwdError.className = "error active"; 
        event.preventDefault(); 

    } else if (!isValidPwd()) { 
        pwdError.textContent = "Please enter matching passwords.";
        pwdError.className = "error active";
        confirmPwdError.textContent = "Please enter matching passwords.";
        confirmPwdError.className = "error active";
        event.preventDefault(); 
    }
    else if (!email.validity.valid) { 
        showError();
        event.preventDefault(); 
    } 

    else if (!firstName.validity.valid) { 
        namesShowError();
        event.preventDefault();
    }
});

firstName.addEventListener("input", (event) => { 
    var regexForName = /^[a-z ,.'-]+$/i;

    if (firstName.value.length === 0) { 
        firstNameError.textContent = ""; 
        firstNameError.className = "error"; 
    } 
    else if (regexForName.test(firstName.value)) { 
        firstNameError.textContent = ""; 
        firstNameError.className = "error"; 
    } 
    else { 
        namesShowError();
    }
    } 
);


function showError() { 
    if (email.validity.valueMissing) { 
        emailError.textContent = "You need to enter an email address.";
    } 
    else if (email.validity.typeMismatch) { 
        emailError.textContent = "Entered value needs to be an email address."
    } else if (email.validity.tooShort) { 
        emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`; 
    }

    emailError.className = "error active"; 
}

function namesShowError() { 
    var regexForName = /^[a-z ,.'-]+$/i;
    if (firstName.validity.valueMissing) { 
        firstNameError.textContent = "You need to enter a name.";
    } else if (!regexForName.test(firstName)) { 
            firstNameError.textContent = "Entered value needs to be a valid name."
    } 
    firstNameError.className = "error active"; 
}


function isValidPwd() { 
    if (pwd.value != confirmPwd.value) { 
        return false; 
    } else {
        return true;
    }
}


