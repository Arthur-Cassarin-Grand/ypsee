let form = document.forms['form_client'];
let first_required_field_empty = "";
Array.from(form.elements).forEach((element) => {
    if (element.getAttribute("type") == "text" || element.getAttribute("type") == "number") {
        if (element.hasAttribute('required')) {
            if (element.value == "") {
                element.setAttribute("style","border: 3px solid red;");
                if (first_required_field_empty == "") {
                    first_required_field_empty = element;
                }
            }
        }
    }
});

if (first_required_field_empty != "") {
    activer("#validation_code_sms");
    first_required_field_empty.scrollIntoView();
    return 1;
}