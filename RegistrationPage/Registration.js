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
