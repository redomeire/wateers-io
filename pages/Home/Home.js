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
        createCustomDialog("Notification", "Kritik dan saran sudah diterima dengan baik. Terima kasih!!", "./Assets/circle-check-fill.png", "rgb(22, 135, 167)");
     }, function(error) {
        console.log('FAILED...', error);
        createCustomDialog("Notification", "Terdapat kesalahan. Coba lagi nanti", "./Assets/circle-cross-fill.png", "#E70000");
     });
}

