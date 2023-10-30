function est_hors_zone() {
    let hors_zone = true;
    let code_postaux_ok = [{{ variante.codes_postaux_ok | safe }}];
    if (code_postaux_ok.includes('*')) {
        return false;
    } else {
        let code_postal_dpt = document.forms['form_client']['code_postal'].value.substring(0, 2);
        code_postaux_ok.forEach((cp_verif) => {
            if (cp_verif == code_postal_dpt) {
                hors_zone = false;
                cacher("#err_code_postal_hors_zone");
            }
        });
        if (hors_zone == true) {
            afficher("#err_code_postal_hors_zone");
        }
        return hors_zone;
    }
}