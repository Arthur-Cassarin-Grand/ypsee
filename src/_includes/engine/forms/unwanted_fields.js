let unwanted_fields = document.querySelectorAll('[data-unwanted]');
unwanted_fields.forEach(function (field) {
    field.addEventListener('click', function() {
        console.log(field);
        let container = document.createElement("div");
        container.setAttribute("class", "form_error_text");
        container.innerHTML = field.getAttribute("data-unwanted");
        field.before(container);
    });
});