let form = document.querySelector("form");
let email = document.querySelector("#email")
let pass = document.querySelector("#password")

form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    document.querySelector("#emailError").textContent= ""
    document.querySelector("#passError").style.display = ""

    const emailregex = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
    const passregex = /^.{6,}$/;

    let emailans =emailregex.test(email.value)
    let passAns =passregex.test(pass.value)

if(!emailans){
    document.querySelector("#emailError").textContent= "Email is invalid!"
    document.querySelector("#emailError").style.display = "initial"
    }

    if(!passAns){
    document.querySelector("#passError").textContent= ""
    document.querySelector("#passError").style.display = "initial"
    } 

//login

    let login = document.getElementById("signin");

    login.addEventListener("click", function(e){
    e.preventDefault()
    })

    let LoginEmail= document.getElementById("email")
    let LoginPass= document.getElementById("password")

    let Storedemail = localStorage.getItem("email", email.value)
    let Storedpass = localStorage.getItem("password", password.value)

    if(LoginEmail.value == Storedemail && LoginPass.value == Storedpass){
    let error =document.getElementById("error")

    error.style.display = "none";

    //redirect to student dashboard
    window.location.href= "StudentDash.html";
    }
    else{
    let error = document.getElementById("error");
    error.style.display = "block";
    } 
})