# Challenge Javascript 01
## JavaScript en bref
**JavaScript (JS)** est un language de programmation interprété, principalement par les navigateurs web tel que **Firefox** ou **Google Chrome**, cela signifi que le code écrit en JavaScript est directement executé par ces interpréteur et n'a pas besoin d'être compilé.

Le code JS peut aussi être utilisé coté backend grace à **NodeJS**. On peut alors l'utiliser pour écrire des **scripts utilitaires** ou des **API**.

---

Du code JS c'est une suite de lignes qui indique des actions logiques et declarative, un peu comme une liste de trucs que le programme doit faire dans l'ordre.

```javascript
// Les commentaires ne sont pas interprétés, ils servent a la documentation du code

// Un commentaire
/* 
    Un commentaire multiligne 
*/

// Declaration de valeurs/functions
var someNumber = 3;
var someOtherNumber = 2;
var someCondition = true;

function addNumber(num1, num2) {
    return num1 + num2
}

// Conditions
if (someCondition === true) {
    // Execution
    console.log(addNumber(someNumber, someOtherNumber))
}
```

Le morceau de code *(trés inspiré)* ci dessus décrit la déclaration de trois valeurs, puis une condition indiquant si on va ecrire ou non le résultat d'une addition dans la console. Si on execute ce code à l'aide de node, on aura le nombre `5` qui s'affichera dans notre terminal.

### Variables: Déclarer des valeurs
En JavaScript on peut déclarer des valeurs de trois façons:

#### var
```javascript
/* 
    Déclare une variable pouvant être réassignée et réutilisée dans tout le contexte de la fonction ou du fichier. 
*/
var x = 5;
{ var y = 1; } // <= Block context

console.log(x); // return => 5
console.log(y); // return => 1
```

#### let
```javascript
/* 
    Déclare une variable pouvant être réassignée mais dont la portée est limitée au bloc où elle est déclarée. 
*/
let x = 5;
{ let y = 1; } // <= Block context

console.log(x); // return => 5
console.log(y); // throw => ReferenceError: y is not defined
```

#### const
```javascript
/*
    Déclare une variable immuable, dont la valeur ne peut pas être modifiée une fois assignée.
*/
const x = 1;
x = 2; // throw => Error: Assignment to constant variable.
```


Pour simplifier, on utilise jamais le keyword `var` dont la difference de *scope* avec `let` peut potentiellement generer des erreurs.

#### En gros
- On déclare une *variable* avec le keyword `let` quand on veut pouvoir ré-assigner une valeur.
- On déclare une *constante* avec le keyword `const` quand on ne veut pas muter la valeur.

Par défaut on choisira preque toujours des constantes, il est rare d'avoir besoin de ré-assigner une valeur.

### Variables: Les types de données
#### Number
```javascript
// ----------------------------------
// Number - Les nombres
// ----------------------------------
const a = 8;
const b = 9;

// Addition
const addition = a + b;

// Soustraction
const soustraction = a - b;

// Multiplication
const multiplication = a * b;

// Division
const division = a / b;

// Modulo
const modulo = a % b;

// Incrémentation
let c = 0;
c++;

// Décrémentation
let d = 0;
d--;

// Attention, ceci est une string, pas un number! Cela ne peut pas etre calculé!
const trickyStuff = "5";
```

#### String
```javascript
const nbrSaucisses = 8;

// ----------------------------------
// String - Les chaines de caracteres
// ----------------------------------
// Double quotes
const chaineDeCharactere = "J'ai mangé 8 saucisses";
// ----------------------------------
// Simple
// Dans ce format je doit "echaper" l'apostrophe à l'aide d'un "\" pour
// eviter que la string soit considérée comme terminée.
const chaineDeCharactere2 = 'J\'ai mangé 8 saucisses';
// ----------------------------------
// Template string
// Je peu ajouter une valeur dans ma chaine de caractere
const chaineDeCharactere3 = `J'ai mangé ${nbrSaucisses} saucisses`;
// Sans les templates strings on pourrait ecrire ca de la maniere suivante
const chaineDeCharactere4 = "J'ai mangé" + " " + nbrSaucisses + " " + "saucisses";
```

#### Boolean
```javascript
// ----------------------------------
// Boolean - Vrai ou faux
// ----------------------------------

const number1 = 42;
const number2 = 1337;

const booleanValue1 = true;
const booleanValue2 = false;
const booleanValue3 = number1 < number2; // true
const booleanValue4 = number1 > number2; // false
const booleanValue5 = number1 === number2; // false
```

#### Array
```javascript
// ----------------------------------
// Array - Les tableaux
// ----------------------------------

// Les tableaux sont des listes de valeurs ordonnées. 
// On peut y stocker n'importe quel type de données. 
// On y accède par leur index. (On commence a compter a partir de 0)

const fruits = ['pomme', 'banane', 'orange', 'fraise'];

console.log(fruits[0]); // pomme
console.log(fruits[1]); // banane
console.log(fruits[2]); // orange
console.log(fruits[3]); // fraise

// On peut ajouter des éléments à un tableau avec la méthode push
fruits.push('kiwi');
console.log(fruits[4]); // kiwi

// On peut supprimer le dernier élément d'un tableau avec la méthode pop
fruits.pop();
console.log(fruits[4]); // undefined

// On peut connaitre la taille d'un tableau avec la propriété length
const fruitsLength = fruits.length;
console.log(fruitsLength); // 4
```

#### Object
```javascript
// ----------------------------------
// Object - Les objets
// ----------------------------------

// Les objets sont des collections de propriétés. 
// Chaque propriété est composée d'une clé et d'une valeur.

const person = {
    name: 'John',
    age: 42,
    isAdult: true,
    hobbies: ['reading', 'cooking', 'hiking'],
    address: {
        street: '123 Main St',
        city: 'New York',
        zip: 10001
    }
};

console.log(person.name); // John
console.log(person.age); // 42
console.log(person.isAdult); // true
console.log(person.hobbies[0]); // reading
console.log(person.address.city); // New York

// On peut ajouter des propriétés à un objet
person.job = 'developer';
console.log(person.job); // developer

// On peut supprimer une propriété d'un objet avec l'opérateur delete
delete person.job;
```

### Les fonctions
Une fonction en JavaScript est un bloc de code réutilisable qui peut être appelé pour effectuer une tâche spécifique. Elle peut accepter des entrées (appelées paramètres) et retourner une sortie. Voici un exemple simple de fonction en JavaScript :

```javascript
// Définition d'une fonction nommée "addition" qui prend deux paramètres
function addition(a, b) {
  return a + b; // Retourne la somme des deux paramètres
}

// Appel de la fonction "addition" avec les valeurs 3 et 5
const resultat = addition(3, 5);
console.log(resultat); // Affiche 8
```

La fonction addition est définie avec le mot-clé function, suivie du nom de la fonction et des paramètres entre parenthèses. A l'intérieur des accolades, le code à executer est écrit.
    
Le keyword `return` est utilisée pour renvoyer une valeur en sortie de la fonction (retourner une valeur n'est pas obligatoire).

L'appel de la fonction se fait en utilisant son nom suivi des valeurs des paramètres entre parenthèses.

### Pour resumer
Le **JavaScript** se resume a la declaration de valeurs et d'actions executés ensuite par un interpreteur. Mis bout à bout, on obtient un programme qui rempli une fonction.
### *Sources*
> *les sources sont des lectures interessantes mais ne sont evidement pas a connaitre par coeur.*
- Javascript
  - *https://developer.mozilla.org/en-US/docs/Web/javascript*
  - *https://nodejs.org/en*
  - *https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number*
  - *https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String*
  - *https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean*
  - *https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array*
  - *https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object*
- Compilation VS pas-compilation
    - *https://en.wikipedia.org/wiki/Just-in-time_compilation*
    - *https://en.wikipedia.org/wiki/Compiled_language*
- Cheat sheets
  - *https://learnxinyminutes.com/docs/javascript/*

## Les types de données

https://developer.mozilla.org/en-US/docs/Web/API