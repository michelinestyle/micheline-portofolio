function validateAll() {
    const form = document.getElementById("register-form");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const genderMale = document.getElementById("genderMale");
    const genderFemale = document.getElementById("genderFemale");
    const dob = document.getElementById("dob");
    const terms = document.getElementById("terms");

    if (username.value.trim() === "") {
        alert("Username must be filled out!");
        return false;
    }

    if (email.value.trim() === "") {
        alert("Email must be filled out!");
        return false;
    }

    if (!email.value.endsWith("@gmail.com")) {
        alert("Email must end with @gmail.com");
        return false;
    }

    if (password.value === "") {
        alert("Password must be filled out!");
        return false;
    }

    if (password.value.length < 8) {
        alert("Password must be at least 8 characters long");
        return false;
    }

    if (confirmPassword.value === "") {
        alert("Confirm Password must be filled out!");
        return false;
    }

    if (password.value !== confirmPassword.value) {
        alert("Password and Confirm Password do not match");
        return false;
    }

    if (!genderMale.checked && !genderFemale.checked) {
        alert("Please select a gender");
        return false;
    }

    if (dob.value === "") {
        alert("Date of Birth must be filled out!");
        return false;
    }

    if (!terms.checked) {
        alert("Please agree to the terms and conditions");
        return false;
    }

    form.submit();
    return true;
}





// function validateAll(){

//     const form = document.getElementById("register-form");
//     const username = document.getElementById("username");
//     const email = document.getElementById("email");
//     const password = document.getElementById("password");
//     const confirmPassword = document.getElementById("confirmPassword");
//     const gender = document.getElementById("gender");
//     const dob = document.getElementById("dob");
//     const terms = document.getElementById("terms");


//     if(username.value.trim() ==="" || 
//     email.value.trim() === "" || 
//     password.value === "" || 
//     confirmPassword.value === "" || 
//     gender.value === "none" || 
//     dob.value === "" || 
//     !terms.checked){
//         alert("All fieldsmust be filled!")
//     } else if(!email.value.endsWith("@gmail.com")){
//         alert ("Email must end with @gmail.com");
//     } else if(password.value !== confirmPassword.value){
//         alert("Password and Confirm Password do not match");
//     } else if(password.value.length < 8){
//         alert("Password must be at least 8 characters long");
//     }  else {
//         form.submit();
//     }



    // form.addEventListener('submit', e => {
    //     e.preventDefault();

    //     validateInputs();
    // });

    // const setError = (element, message) => {
    //     const inputControl = element.parentElement;
    //     const errorDisplay = inputControl.querySelector('.error')

    //     errorDisplay.innerText = message;
    //     inputControl.classList.add('.error');
    //     inputControl.classList.remove('.success');
    // }

    // const setSuccess = (element, message) => {
    //     const inputControl = element.parentElement;
    //     const errorDisplay = inputControl.querySelector('.error')

    //     errorDisplay.innerText = '';
    //     inputControl.classList.add('.success');
    //     inputControl.classList.remove('.error');
    // };

    // const validateInputs = () => {
    //     const usernameValue = username.value.trim();
    //     const emailValue = email.value.trim();
    //     const confirmPasswordValue = confirmPassword.value.trim();
    //     const genderValue = gender.value.trim();
    //     const dobValue = dob.value.trim();
    //     const termsValue = terms.value.trim();

    //     if(usernameValue === ""){
    //         setError(username, 'Username is required')
    //     } else {
    //         setSuccess(username)
    //     }

    // }



document.getElementById("showPassword").addEventListener("click", function() {
    var passwordField = document.getElementById("password")
    if (passwordField.type === "password") {
        passwordField.type = "text"
        this.textContent = "Hide"
    } else {
        passwordField.type = "password"
        this.textContent = "Show"
        }
});

document.getElementById("showPassword2").addEventListener("click", function() {
    var confirmPwField = document.getElementById("confirmPassword")
    if (confirmPwField.type === "password") {
        confirmPwField.type = "text"
        this.textContent = "Hide"
    } else {
        confirmPwField.type = "password"
        this.textContent = "Show"
    }
});