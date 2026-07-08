document.getElementById('login-form').addEventListener("submit", function(event) {
    event.preventDefault();

    let pwField = document.getElementById('password')
    let emailField = document.getElementById('email')

    let pw = pwField.value
    let email = emailField.value

    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        alert('Email must be valid')
        return
    }

    if(pw.length < 8){
        alert('Password must contain at least 8 characters')
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