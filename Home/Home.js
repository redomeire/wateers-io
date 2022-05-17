//initialize emailjs with public token
(function () {
    emailjs.init("w4VKdzMIzXS3aP1Dl");
})();

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

//form handling
const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetchingData();
});

const fetchingData = () => {
    let template_params = {
        to_name: "Wateers.io",
        from_name: document.querySelector(".form-input-name").value,
        from_email: document.querySelector(".form-input-email").value,
        message: document.querySelector(".form-input-textarea").value
    }
    
    emailjs.send('service_b1jo2ig', 'template_uwih5iy', template_params)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Success sending email!!');
     }, function(error) {
        console.log('FAILED...', error);
        alert("Sending email failed!");
     });
}

//submit email form
const submitEmailButton = document.querySelector(".subscribe-button");
const forms = document.forms['email-subscription'];
const input = document.querySelector(".subscribe-input");

forms.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(input.value);
    forms.reset();
})

