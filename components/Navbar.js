//nav handling
const nav = document.querySelector(".navbar");
const navItems = document.querySelector(".nav-items");
const anchors = document.getElementsByClassName("nav-link");
const hamburger = document.querySelector(".hamburger");
const hamburgerDiv = document.getElementsByClassName("hamburgerDiv");

hamburger.addEventListener("click", function(){
    navItems.classList.toggle("slide");
})

if(window.scrollY <= 100) {
    nav.style.backgroundColor = "transparent";
    for(let i = 0; i < 3; i++){
        anchors[i].style.color = "black";
        hamburgerDiv[i].style.backgroundColor = "black"
    }
}

window.addEventListener("scroll", () => {
    if(window.scrollY > 100) {
        nav.style.backgroundColor = "#1687A7";
        for(let i = 0; i < 3; i++){
            anchors[i].style.color = "white";
            hamburgerDiv[i].style.backgroundColor = "white";
        }
    }
    else {
        nav.style.backgroundColor = "transparent";
        for(let i = 0; i < 3; i++){
            anchors[i].style.color = "black";
            hamburgerDiv[i].style.backgroundColor = "black";
        }
    }
})