//new WOW().init();

let navbarMain = document.getElementById('navbar_main');
navbarMain ? navbarMain.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();

    toggleMobileSidebar();
}) : null;

let offcanvasHeade = document.querySelector('.offcanvas-header .fa-times')
offcanvasHeade ? offcanvasHeade.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();

    toggleMobileSidebar();
}) : null;

let screenOverlay = document.querySelector('.screen-overlay');
screenOverlay ? screenOverlay.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();

    toggleMobileSidebar();
}) : null;

document.addEventListener("DOMContentLoaded", () => {
    if (document.documentElement.clientWidth <= 991) {
        let navTop = document.getElementById('navBar');
        navTop.style.marginTop = '0px';
    }
});

function toggleMobileSidebar() {
    let body = document.body;
    body.classList.contains('offcanvas-active')
        ? body.classList.remove('offcanvas-active')
        : body.classList.add('offcanvas-active');

    let screenOverlay = document.querySelector('.screen-overlay');
    screenOverlay.classList.contains('show')
        ? screenOverlay.classList.remove('show')
        : screenOverlay.classList.add('show');

    let mobileOffcanvas = document.querySelector('.mobile-offcanvas');
    mobileOffcanvas.classList.contains('show')
        ? mobileOffcanvas.classList.remove('show')
        : mobileOffcanvas.classList.add('show');
}

if (document.documentElement.clientWidth > 991) {
    let navItem = document.querySelectorAll('.nav-item.dropdown');
    navItem.forEach(item => {
        item.addEventListener('mouseover', (event) => {
            let target = event.currentTarget;
            target.querySelector('.dropdown-menu').classList.add('show');
        })
        item.addEventListener('mouseout', (event) => {
            let target = event.currentTarget;
            target.querySelector('.dropdown-menu').classList.remove('show');
        })
    })
}

if (document.documentElement.clientWidth <= 991) {
    let navItem = document.querySelectorAll('.nav-item.dropdown');
    navItem.forEach(item => {
        item.addEventListener('click', (event) => {
            let target = event.currentTarget;
            target.querySelector('.dropdown-menu').classList.add('show');
        })
        item.addEventListener('click', (event) => {
            let target = event.currentTarget;
            target.querySelector('.dropdown-menu').classList.remove('show');
        })
    })
}

/*
var myicon = document.getElementById("myicon");
var mypopup = document.getElementById("mypopup");

myicon.addEventListener("mouseover", showPopup);
myicon.addEventListener("mouseout", hidePopup);

function showPopup(evt) {
    var iconPos = myicon.getBoundingClientRect();
    mypopup.style.left = (iconPos.right + 20) + "px";
    //mypopup.style.top = (window.scrollY + iconPos.top - 60) + "px";
    mypopup.style.top = 0 + "px";
    mypopup.style.display = "block";
}

function hidePopup(evt) {
    //mypopup.style.display = "none";
} */

/*
// When the user scrolls the page, execute myFunction
window.onscroll = function() {navBarFixed()};

// Get the navbar
let navbar = document.getElementById("navbar");

// Get the offset position of the navbar
let sticky = navbar ? navbar.offsetTop : null;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navBarFixed() {
    if (!navbar || !sticky)
        return;

    if (window.pageYOffset >= sticky)
        navbar.classList.add("sticky");
    else
        navbar.classList.remove("sticky");
}

let aboutCount = document.getElementById('about-count');
aboutCount.onscroll = function(e) {
    console.log(e)
} */
//aboutCount.onscroll()