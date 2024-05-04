// # Ex2: Ecrire une function executant une autre function si un Array est vide
// - La fonction prend deux parametres (un tableau, une fonction a executer - callback)
// - La fonction vérifie que le tableau est bien un tableau vide
// - La fonction vérifie que le deuxieme parametre est bien une fonction
// - La fonction execute la fonction callback si le tableau est vide
//
// # Tester la fonction avec les *payloads* suivants
//  executeIfEmpty([], () => console.log("Tableau vide, la fonction est executée"))
//  executeIfEmpty([1, 2, 3], () => console.log("Tableau non vide, la fonction ne doit pas être executée"))
//  executeIfEmpty([], "Je ne suis pas une fonction")
//  executeIfEmpty("Je ne suis pas un tableau", () => console.log("Je ne suis pas un tableau"))
//
// # Un peu d'aide
// - https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Inequality
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length