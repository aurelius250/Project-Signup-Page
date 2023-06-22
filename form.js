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

email.addEventListener("input", (event) => { 
    if(email.validity.valid) { 
        emailError.textContent = ""; 
        emailError.className = "error"; 
    } else { 
        showError();
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
        emailError.textContent = "You need ot enter an email address.";
    } else if (email.validity.typeMismatch) { 
        emailError.textContent = "Entered value needs to be an email address."
    }
}

