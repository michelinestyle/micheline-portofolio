document.getElementById('register-form').addEventListener("submit", function(event) {
    event.preventDefault();

    let pwField = document.getElementById('password')
    let emailField = document.getElementById('email')
    let confirmPwField = document.getElementById('confirmPassword')
    let termBox = document.getElementById('terms')

    let pw = pwField.value
    let email = emailField.value
    let confirmPw = confirmPwField.value
    let terms = termBox.checked

    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        alert('Email must be valid')
        return
    }

    if(pw.length < 8){
        alert('Password must contain at least 8 characters')
        return
    }

    if(confirmPw !== pw){
        alert('Confirm password must be the same as the password')
        return
    }

    if(!terms){
        alert('Please agree to the terms and conditions')
        return
    }

    alert('Data is valid')
    this.reset()
    window.location.href = "../pages/home.html"
})

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

function changeColor() {
    var target = document.getElementsByClassName("right-side")[0]
    var current = window.getComputedStyle(target).backgroundColor
    if (current === "rgb(250, 186, 38)"){
         target.style.backgroundColor = "#EF2346"
     } else if (current === "rgb(239, 35, 70)") {
        target.style.backgroundColor = "#7073EE"
      } else {
        target.style.backgroundColor = "#FABA26"
     }
}
setInterval(changeColor, 6000)