// Ex6: Créer une function qui prend en paramètre une chaine de caractères et un tableau de mot bannis.
// - Le type des valeurs en entrées doit être vérifier et lever une exception si nécessaire
// - La fonction retourne une la chaine de caracteres censurée en remplaçant les termes par des astérisques.
// - Le troisieme parametre (optionnel) doit être un caractère de remplacement, s'il n'est pas fourni, il doit être remplacé par des astérisques.
//
// # Tester la fonction avec les *payloads* suivants
//  - ("Tu es un gros naze qui pu la mort", ["naze", "mort"])
//  - ("T'es moche et ca me trou les origamis", ["moche", "origamis"], "x")
//  - ("Jamais je n'aurais cru que tu pouvais être si con", ["Jamais"], 254789954)
//  - ("Je suis un texte sans mot bannis", [])
//
// # Un peu d'aide
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace