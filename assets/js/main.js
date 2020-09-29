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
    let scroll = document.querySelector(".scrollTop");
    scroll.classList.toggle("active", window.scrollY > 300)
})

// Scroll top button
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

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
    registerbtn.style.color = "var(--white-color)";
    loginbtn.style.color = "var(--text-color)";
}
function login() {
    x.style.left = "0%";
    y.style.left = "100%";
    z.style.left = "0";
    popupForm.style.transform = "translate(-50%, -50%)";
    formHeight.style.height = "500px";
    loginbtn.style.color = "var(--white-color)";
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

//ADMIN HANDLE
//Handle admin menu list
let emp = document.getElementById("employee");
let pol = document.getElementById("policy");
let med = document.getElementById("medical");
let com = document.getElementById("company");
let mng = document.getElementById("manager");
let empT = document.getElementById("empTable");
let polT = document.getElementById("polTable");
let buttonTogglee = document.getElementById("btn-toggle");

function switchColors(element) {
    links = document.getElementsByClassName(".container-header-menu-list-item");
    for (var i = 0; i < links.length; i++)
    links.item(i).style.color = "var(--text-color)";
    element.style.color='var(--white-color)';
}

function employee() {
    buttonTogglee.style.left = "0";
    emp.style.color = "var(--white-color)";
    pol.style.color = "var(--text-color)";
    med.style.color = "var(--text-color)";
    com.style.color = "var(--text-color)";
    mng.style.color = "var(--text-color)";
    empT.style.top = "50%";
    polT.style.top = "150%";
}
function policy() {
    buttonTogglee.style.left = "110px";
    emp.style.color = "var(--text-color)";
    pol.style.color = "var(--white-color)";
    med.style.color = "var(--text-color)";
    com.style.color = "var(--text-color)";
    mng.style.color = "var(--text-color)";
    polT.style.top = "50%";
    empT.style.top = "-100%";
}
function medical() {
    buttonTogglee.style.left = "220px";
    emp.style.color = "var(--text-color)";
    pol.style.color = "var(--text-color)";
    med.style.color = "var(--white-color)";
    com.style.color = "var(--text-color)";
    mng.style.color = "var(--text-color)";
}
function company() {
    buttonTogglee.style.left = "330px";
    emp.style.color = "var(--text-color)";
    pol.style.color = "var(--text-color)";
    med.style.color = "var(--text-color)";
    com.style.color = "var(--white-color)";
    mng.style.color = "var(--text-color)";
}
function request() {
    buttonTogglee.style.left = "440px";
    emp.style.color = "var(--text-color)";
    pol.style.color = "var(--text-color)";
    med.style.color = "var(--text-color)";
    com.style.color = "var(--text-color)";
    mng.style.color = "var(--white-color)";
}

//Search handle
function myFunction() {
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("myInput");
	filter = input.value.toUpperCase();
	table = document.querySelector(".supTable");
	tr = table.getElementsByTagName("tr");
	for (i = 0; i < tr.length; i++) {
	td = tr[i].getElementsByTagName("td")[1];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
			tr[i].style.display = "";
			} else {
			tr[i].style.display = "none";
			}
		}
	}
}

//Sort Handle
function sortTable(tableClass, n) {
	var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;

	table = document.getElementsByClassName(tableClass)[0];
	switching = true;
	dir = "asc";
	while (switching) {
		switching = false;
		rows = table.getElementsByTagName("TR");
		for (i = 1; i < (rows.length - 1); i++) {
			shouldSwitch = false;
			x = rows[i].getElementsByTagName("TD")[n];
			y = rows[i + 1].getElementsByTagName("TD")[n];
				var cmpX=isNaN(parseInt(x.innerHTML))?x.innerHTML.toLowerCase():parseInt(x.innerHTML);
				var cmpY=isNaN(parseInt(y.innerHTML))?y.innerHTML.toLowerCase():parseInt(y.innerHTML);
				cmpX=(cmpX=='-')?0:cmpX;
				cmpY=(cmpY=='-')?0:cmpY;
			if (dir == "asc") {
				if (cmpX > cmpY) {
					shouldSwitch= true;
					break;
				}
			} else if (dir == "desc") {
				if (cmpX < cmpY) {
					shouldSwitch= true;
					break;
				}
			}
		}
		if (shouldSwitch) {
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			switching = true;
			switchcount ++;
		} else {
			if (switchcount == 0 && dir == "asc") {
				dir = "desc";
				switching = true;
			}
		}
	}
}


// Validate form login
const form = document.getElementById("login");
const username = document.getElementById("username");
const password = document.getElementById("password");

form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    //get values from inputs
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if(usernameValue == "") {
        //show error
        //add error class
    } else {
        //add success class
    }
}
