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
        createCustomDialog("Notification", "Kami sudah mengirimi anda email. Terima kasih", "./Assets/circle-check-fill.png", "rgb(22, 135, 167)");
     }, function(error) {
        console.log('FAILED...', error);
        createCustomDialog("Notification", "Terdapat kesalahan. Coba lagi nanti", "./Assets/circle-cross-fill.png", "#E70000");
     });
}