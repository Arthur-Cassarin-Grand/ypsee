function cacher(element) {
    let element_tested = document.querySelector(element);
    if (element_tested != null) {
        element_tested.style.display="none";
    }
}

function afficher(element) {
    let element_tested = document.querySelector(element);
    if (element_tested != null) {
        element_tested.style.display="block";
    }
}

function desactiver(element) {
    let element_tested = document.querySelector(element);
    if (element_tested != null) {
        element_tested.disabled=true;
    }
}

function activer(element) {
    let element_tested = document.querySelector(element);
    if (element_tested != null) {
        element_tested.disabled=false;
    }
}

function get_date() {
    let date = new Date();
    let currentDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' +  date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    return currentDate;
}