//initialize emailjs with public token
(function () {
    emailjs.init("w4VKdzMIzXS3aP1Dl");
})();

//form handling
const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetchingData();
    form.reset();
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
    fetchingDataFooter();
    forms.reset();
})

const fetchingDataFooter = () => {
    let template_params = {
        to_email: input.value,
        from_name: 'Wateers.io',
        message: `We would like to thank you for subscribing to our newsletter. We're looking forward to someone like you who likes to contributing more to the world. We'll inform you whenerver new program was created.`
    }

    emailjs.send('service_b1jo2ig', 'template_rxz09ls', template_params)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Success sending email!!');
     }, function(error) {
        console.log('FAILED...', error);
        alert("Sending email failed!");
     });
}

