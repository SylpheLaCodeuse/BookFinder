# Challenge Javascript 01
Bon, on a bien rigolé mais maintenant il va faloir mettre en pratique. 
- Les exercices suivants sont a réaliser dans un fichier `.js` par exercice.
  - Execute ton code avec node `node exercice1.js`
  - Utilise `console.log()` pour avoir un retour et verifier ce qu'il se passe dans ton code.
- Les exercices vont monter en difficulté et traiterons de sujets non expliqué dans l'index, il faudra donc chercher sur internet.
  - https://www.google.com/
  - https://learnxinyminutes.com/docs/javascript/
  - https://developer.mozilla.org/en-US/docs/Web/javascript
  - https://chatgpt.com/c
- Ne pas hesiter a mettre des commentaires pour expliquer l'intention (ou simplement t'aider a relire ton code)
- Ne pas stresser sur la difficulté, si tu comprends pas un truc c'est normal
## Exercices
### Ex1: Ecrire une function additionnant deux nombres
- La fonction prend deux parametres (num1 et num2)
- La fonction vérifie le type de données des parametres et traite le cas ou l'un des parametre n'est pas de type 'number' en revoyant `null`
- La function renvoi la somme des deux nombres en resultat
  - Tester la fonction avec les *payloads* suivants
    - `jujuAddNumbers(1, 9)`
    - `jujuAddNumbers(1, 9 + 8)`
    - `jujuAddNumbers(1, "9")`
    - `jujuAddNumbers()`
    - `jujuAddNumbers(null, 9)`

#### Un peu d'aide
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof