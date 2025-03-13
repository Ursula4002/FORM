
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const loginContainer = document.getElementById("loginContainer");
const registerContainer = document.getElementById("registerContainer");



// Menu-list

function myMenuFunction(){
    const navMenu = document.getElementById("navMenu");
    // Checking is the list
    if (navMenu.className === "nav-menu"){
        navMenu.className += " responsive";
    }else{
        navMenu.className = "nav-menu";
    }
}



console.log(loginBtn, registerBtn, loginContainer, registerContainer);
// console.log(a, b, x, y);

function login() {
    // Display Login Form
    loginContainer.style.left = "4px";
    registerContainer.style.right = "-520px"
    // Change Button Color
    loginBtn.className += " white-btn";
    registerBtn.className = "btn";
    // Opacity
    loginContainer.opacity = 1;
    registerContainer.opacity = 0;
}

function register() {
    loginContainer.style.left = "-510px";
    registerContainer.style.right = "5px";
    // Change Button Color
    loginBtn.className = "btn";
    registerBtn.className += " white-btn";
    // Opacity
    loginContainer.opacity = 0;
    registerContainer.opacity = 1;
}