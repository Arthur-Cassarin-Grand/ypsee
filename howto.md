# INSTALLER LE MOTEUR

git clone https://github.com/Arthur-Cassarin-Grand/lp-engine-eleventy.git dans le dossier _includes

# AVANT DE LANCER LA PRODUCTION (TRACKING)

- Créer le compte Google Ads
- Créer une première conversion
- Inscrire l'ID conversion dans gads_tracking_id
- Inscrire le label conversion dans 7ZGeCPef6JMYEMHH8bkp
- Créer un GA4 : obligatoire pour avoir l'ID de balise (ga4_tag dans config)
- Fusionner les balises : GA4 > Flux web > Configurer les paramètres de la balise > Admin > Gestion des balises Google > Combiner des balises
- Toujours mettre la balise GA4 en prioritaire (pour la config)
- Bien mettre l'évènement "generate_lead" en conversion

# A SAVOIR

- Sécurité cookie anti-double conversion

Si erreur sh: node-sass: command not found :
> npm install -g node-sass

Si bug avec node-sass (sass not found) :
> npm rebuild node-sass