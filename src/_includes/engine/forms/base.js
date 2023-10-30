const DEBUG = {{ DEBUG }};
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
if (urlParams.has('gclid')) {
    let gclid = urlParams.get('gclid');
    document.querySelector("#gclid").value=gclid;
}

const regex_telephone = /^(\+33|0)[0-9]{9}$/;
const form_client = document.getElementById('form_client');
var tel_client = "";

document.addEventListener('keypress', function (e) {
    if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault();
        return false;
    }
});