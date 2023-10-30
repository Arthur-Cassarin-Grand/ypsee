function tel_eligible_validation_sms() {
    let tel_eligible_validation_sms = true;
    let tel_client_typing = document.forms['form_client']['phone'].value;
    tel_client_typing = tel_client_typing.replace("+33","0");
    if (!regex_telephone.test(tel_client_typing)) {
        afficher("#err_phone_invalide");
    } else {
        cacher("#err_phone_invalide");
    }
    let tel_client_indicatif = tel_client_typing.substring(0, 2);
    if (tel_client_indicatif != "06" && tel_client_indicatif != "07") {
        tel_eligible_validation_sms = false;
    }

    if (tel_client_typing == "") {
        tel_eligible_validation_sms = true;
    }

    if (!tel_eligible_validation_sms) {
        cacher("#validation_code_sms");
        document.querySelector("#verif_sms_status").value=true;
    } else {
        afficher("#validation_code_sms");
        document.querySelector("#indication_validation_sms").innerHTML="Merci de valider votre numéro de téléphone avant de soumettre votre demande.";
        document.querySelector("#verif_sms_status").value=false;
    }
}

function valider_telephone() {
    if (document.forms['form_client']['url'].value == "") {
        tel_client = document.forms['form_client']['phone'].value;

        if (!regex_telephone.test(tel_client)) {
            afficher("#err_phone_invalide");
            return 1;
        } else {
            cacher("#err_phone_invalide");
        }

        desactiver("#validation_code_sms");
        cacher("#err_code_sms_invalide");

        if (tel_client.substring(0,3) != "+33") {
            if (tel_client.substring(0,1) == "0") {
                tel_client = "+33" + tel_client.substring(1);
            }
        }

        if (regex_telephone.test(tel_client)) {
            if (DEBUG) {
                console.log("DEBUG : Validation SMS passée.")
                document.forms['form_client']['verif_sms_status'].value = true;
                valider_formulaire();
                return true;
            } else {
                axios.post('https://hook.eu1.make.com/rgkqcm0pjt5uje80ya3tvayk9o40ongk', {
                    tel: tel_client
                })
                .then(function (response) {
                    cacher("#indication_validation_sms");
                    afficher("#verif_sms");
                    desactiver("#validation_code_sms");
                })
                .catch(function (error) {
                    activer("#validation_code_sms");
                    activer("#valider_code_sms");
                    afficher("#err_code_sms_invalide");
                });
            }
        }
    }
}

function valider_code_sms() {
    desactiver("#valider_code_sms");
    axios.post('https://hook.eu1.make.com/xu0dwsl7xw8hyifre3jskko7bt2nqcoa', {
        tel: tel_client,
        code: document.forms['form_client']['code_sms'].value
    })
    .then(function (response) {
        if (response.data == true) {
            document.querySelector("#verif_sms_status").value=true;
            afficher("#block_tel_valide");
            cacher("#verif_sms");
            desactiver("#validation_code_sms");
            document.querySelector("#phone").readOnly=true;
            document.querySelector("#indication_validation_sms").innerHTML="Votre demande est en cours d'envoi...";
            document.forms['form_client']['verif_sms_status'].value = true;
            valider_formulaire();
        } else {
            afficher("#err_code_sms_invalide");
            activer("#valider_code_sms");
            document.forms['form_client']['verif_sms_status'].value = false;
        }
    })
    .catch(function (error) {
        afficher("#err_code_sms_invalide");
        activer("#valider_code_sms");
    });
}