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

email.addEventListener("input", (event) => { 
    if(email.validity.valid) { 
        emailError.textContent = ""; 
        emailError.className = "error"; 
    } else { 
        showError();
    }
});

firstName.addEventListener("input", (event) => { 
    if(firstName.validity.valid) { 
        firstNameError.textContent = ""; 
        firstNameError.className = "error"; 
    } else { 
        showErrorFirstName();
    }
});
form.addEventListener("submit", (event) => { 
    if (!email.validity.valid) { 
        showError();
        event.preventDefault(); 
    }
});

function showError() { 
    if (email.validity.valueMissing) { 
        emailError.textContent = "You need to enter an email address.";
    } else if (email.validity.typeMismatch) { 
        emailError.textContent = "Entered value needs to be an email address."
    } else if (email.validity.tooShort) { 
        emailError.textContent = "Email should be at least ${email.minLength} characters; you entered ${email.value.length}."; 
    }

    emailError.className = "error active"; 
}

function showErrorFor(inputType) { 
    if (inputType.valdiity.valueMissing) { 
        
    }
}


    var regexForName = /^[a-zA-Z]+ [a-zA-Z]+$/; 
    if (!regexForName.test(firstName)) { 
        firstNameError.textContent = "Entered value needs to be a valid name."
    }
}
