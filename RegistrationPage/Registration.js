//initialize emailjs with public token
(function () {
    emailjs.init("w4VKdzMIzXS3aP1Dl");
})();

//form handling
const form = document.querySelector(".jumbotron-form form");
const scriptURL = "https://script.google.com/macros/s/AKfycbxmdt5FOfW-2yW3sKl2kthThwplq-fAtzAMrjnfyrsruPFEI2-bYrWHta03jlrLHflw3A/exec";

form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetchingData();
    form.reset();
})

const fetchingData = () => {
    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(document.forms['submit-to-google-sheet'])
    })
    .then(res => {
        alert('form sent')
        console.log("success! ", res);
    })
    .catch(err => {
        alert('error : ', err.message);
    })
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
