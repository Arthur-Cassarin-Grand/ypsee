var final_tel_client = document.forms['form_client']['phone'].value;
var final_mail_client = document.forms['form_client']['mail'].value;
var final_id = Date.now();
var final_date = get_date();

if (est_hors_zone()) {
    cacher("#form_submit_loader");
    afficher("#indication_validation_sms");
    document.querySelector("#indication_validation_sms").innerHTML="Nous n'intervenons pas dans votre département, nous ne pouvons traiter votre demande.";
    return 1;
}
afficher("#form_submit_loader");
const form_data = new FormData(form_client);
// ----
const checkboxes = document.forms['form_client'].querySelectorAll('input[type=checkbox]');
checkboxes.forEach((checkbox) => {
    form_data.append(checkbox.getAttribute('id'), checkbox.checked);
});
// ----
const form_data_json = Object.fromEntries(form_data.entries());