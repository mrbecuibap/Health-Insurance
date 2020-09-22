function showHideElement() {
    let show = document.getElementById('show-hide');

    if (show.style.display === "block") {
        show.style.display = "none";
    } else {
        show.style.display = "block";
    }
}

// Header scroll
window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 50);
})


//Handle login & register form (2 part)
//1: show hide popup
function openLoginForm(){
    document.body.classList.add("showLoginForm");
}
function closeLoginForm(){
    document.body.classList.remove("showLoginForm");
}
//2: swap between 2 form
let x = document.getElementById("login");
let y = document.getElementById("register");
let z = document.getElementById("btn");
let popupForm = document.querySelector(".popup");
let formHeight = document.getElementById("registerFormActive");
let loginbtn = document.getElementById("loginButton");
let registerbtn = document.getElementById("registerButton");

function register() {
    x.style.left = "-100%";
    y.style.left = "0%";
    z.style.left = "110px";
    popupForm.style.transform = "translate(-50%, -35%)";
    formHeight.style.height = "950px";
    registerbtn.style.color = "#fff";
    loginbtn.style.color = "var(--text-color)";
}
function login() {
    x.style.left = "0%";
    y.style.left = "100%";
    z.style.left = "0";
    popupForm.style.transform = "translate(-50%, -50%)";
    formHeight.style.height = "500px";
    loginbtn.style.color = "#fff";
    registerbtn.style.color = "var(--text-color)";
}


// Parallax mouse move
document.addEventListener("mousemove", parallax);
function parallax(e) {
    this.querySelectorAll(".layer").forEach(layer => {
        const speed = layer.getAttribute("data-speed");

        const x = (window.innerWidth - e.pageX*speed)/100;
        const y = (window.innerHeight - e.pageY*speed)/100;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}


// Scroll lazy loading
function scrollAppear() {
    let element = document.querySelector(".lazy-loading");
    let elementPosition = element.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.5;

    if(elementPosition < screenPosition) {
        element.classList.add("element-appear");
    }
}
window.addEventListener("scroll", scrollAppear);