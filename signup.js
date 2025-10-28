let form = document.querySelector("form");
let email = document.querySelector("#email")
let pass = document.querySelector("#password")

form.addEventListener("submit", function(dets) {
    dets.preventDefault();

    document.querySelector("#emailError").textContent= ""
    document.querySelector("#passError").style.display = ""

    const emailregex = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
    const passregex = /^.{6,}$/;

    
    let emailans =emailregex.test(email.value)
    let passAns =passregex.test(pass.value)

    if(!emailans){
    document.querySelector("#emailError").textContent= "Email a valid email"
    document.querySelector("#emailError").style.display = "initial"
    }

    if(!passAns){
    document.querySelector("#passError").textContent= "Invalid password format!"
    document.querySelector("#passError").style.display = "initial"
    }

//Signup

let signup = document.getElementById('signup')

signup.addEventListener('click',function(e){
e.preventDefault();

let Fname = document.getElementById("First").value
let Lname = document.getElementById("Last").value
let mob = document.getElementById("mobile").value
let signEmail = document.getElementById('email').value
let signPass = document.getElementById('password').value

    localStorage.setItem('fname', Fname);
    localStorage.setItem('lname', Lname);
    localStorage.setItem('Mobile', mob);
    localStorage.setItem('email', signEmail);
    localStorage.setItem('password', signPass);

    let flash =document.getElementById("flash")
    flash.style.display("inital")

    window.location.href = "SignIn.html"
})
})