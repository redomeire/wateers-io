//nav handling
const nav = document.querySelector(".navbar");
const navItems = document.querySelector(".nav-items");
const anchors = document.getElementsByClassName("nav-link");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function(){
    navItems.classList.toggle("slide");
})

window.addEventListener("scroll", () => {
    if(window.scrollY > 100) {
        nav.style.backgroundColor = "#1687A7";
        anchors[0].style.color = "white";
        anchors[1].style.color = "white";
        anchors[2].style.color = "white";
    }
    else {
        nav.style.backgroundColor = "transparent";
        anchors[0].style.color = "black";
        anchors[1].style.color = "black";
        anchors[2].style.color = "black";
    }
})
