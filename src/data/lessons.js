export const lessons = [
  {
    id: 1,
    title: "Configuration de votre environnement de développement",
    chapters: [
      {
        id: 1,
        title: "Installation et configuration de votre éditeur de code",
        content: `**Objectif :** Préparer votre ordinateur pour coder efficacement.

**1. Choisir un éditeur de code**
- Visual Studio Code, Sublime Text, Atom
- Critères : légèreté, extensions, personnalisation, support des langages

**2. Installation de Visual Studio Code**
- Télécharger : https://code.visualstudio.com
- Suivre les instructions selon votre OS
- Cocher "Add to PATH" pour utiliser le terminal facilement

**3. Configuration initiale**
- Installer les extensions pour votre langage (Python, JavaScript, HTML/CSS…)
- Configurer thème et police pour le confort visuel
- Paramétrer les raccourcis clavier pour les actions fréquentes

**4. Tester l'éditeur**
- Créer un fichier, écrire un programme simple ("Hello World") et exécuter
- Vérifier autocomplétion, coloration syntaxique et terminal intégré

**Astuce :** Maintenir l'éditeur à jour pour bénéficier des dernières fonctionnalités.`
      },
      {
        id: 2,
        title: "Comprendre les différents langages de programmation",
        content: `**Objectif :** Découvrir les types de langages et leurs usages.

**1. Qu'est-ce qu'un langage de programmation ?**
- Permet de communiquer avec un ordinateur pour lui donner des instructions
- Chaque langage a sa syntaxe et ses usages spécifiques

**2. Classification des langages**
- Bas niveau : proche du langage machine, rapide mais complexe (C, Assembleur)
- Haut niveau : proche du langage humain, facile à lire (Python, JavaScript, Java)

**3. Types de langages selon l'usage**
- Web : HTML, CSS, JavaScript
- Logiciel / application : Java, C#, Python
- Data / IA : Python, R
- Systèmes et matériel : C, C++

**4. Comment choisir son premier langage ?**
- Débutant : Python pour sa simplicité
- Web : HTML, CSS, JavaScript
- Objectif précis : choisir le langage le plus utilisé

**Astuce :** Apprendre un langage, c'est aussi apprendre à résoudre les problèmes.`
      }
    ]
  },
  {
    id: 2,
    title: "Concepts de base en programmation",
    chapters: [
      {
        id: 1,
        title: "Variables et types de données",
        content: `**Objectif :** Comprendre comment stocker et manipuler les données.

**1. Qu'est-ce qu'une variable ?**
- Un conteneur nommé qui stocke une valeur
- Permet de stocker des informations à réutiliser
- Exemple : let nom = "Alice"; (JavaScript)

**2. Types de données principaux**
- String (texte) : "Bonjour", "TWIGE"
- Number (nombre) : 42, 3.14
- Boolean (vrai/faux) : true, false
- Array (tableau) : [1, 2, 3, "texte"]
- Object (objet) : {nom: "Alice", age: 25}
- Null et Undefined

**3. Déclaration de variables**
- var x = 10; (ancien)
- let x = 10; (moderne, recommandé)
- const x = 10; (valeur constante)

**4. Nommage des variables**
- Commencer par une lettre ou underscore
- Pas d'espaces, utiliser camelCase : myVariable
- Être explicite : userAge au lieu de uA

**Exercice :** Déclarez 5 variables de types différents.`
      },
      {
        id: 2,
        title: "Opérateurs et expressions",
        content: `**Objectif :** Apprendre les opérateurs pour des calculs et comparaisons.

**1. Opérateurs arithmétiques**
- Addition : 5 + 3 = 8
- Soustraction : 10 - 4 = 6
- Multiplication : 4 * 3 = 12
- Division : 15 / 3 = 5
- Module (reste) : 17 % 5 = 2

**2. Opérateurs de comparaison**
- Égal : == (5 == "5" est true)
- Strictement égal : === (5 === "5" est false)
- Différent : !==
- Plus grand que : >
- Plus petit que : <

**3. Opérateurs logiques**
- ET (&&) : true && false = false
- OU (||) : true || false = true
- NON (!) : !true = false

**4. Opérateurs d'assignation**
- x = 5 (assignation)
- x += 3 (équivalent à x = x + 3)
- x -= 2 (équivalent à x = x - 2)

**Exercice :** Écrivez une expression : (10 > 5) && (3 < 8)`
      }
    ]
  },
  {
    id: 3,
    title: "Structures de contrôle",
    chapters: [
      {
        id: 1,
        title: "Instructions conditionnelles (if, else, switch)",
        content: `**Objectif :** Contrôler le flux d'exécution avec des conditions.

**1. Instruction if-else**
- Exécute du code si une condition est vraie
- Syntaxe :
  if (age >= 18) { console.log("Adulte"); } else { console.log("Mineur"); }

**2. if-else if-else (plusieurs conditions)**
- Vérifier plusieurs conditions
- La première vraie est exécutée

**3. Opérateur ternaire**
- Format court pour if-else
- Exemple : age >= 18 ? "Adulte" : "Mineur"

**4. Instruction switch**
- Pour comparer une variable à plusieurs valeurs
- switch(jour) { case 1: console.log("Lundi"); }

**5. Bonne pratique**
- Toujours utiliser des accolades {}
- Indenter le code pour la lisibilité

**Exercice :** Écrivez un système de notes (A, B, C, D, E) selon un score.`
      },
      {
        id: 2,
        title: "Boucles (for, while)",
        content: `**Objectif :** Répéter du code plusieurs fois efficacement.

**1. Boucle for**
- for (let i = 0; i < 5; i++) { console.log(i); }
- i est l'initial, condition, incrément
- Répète le code 5 fois (0, 1, 2, 3, 4)

**2. Boucle while**
- while (condition) { code }
- Répète tant que la condition est vraie
- Attention aux boucles infinies !

**3. do-while**
- Exécute le code au moins une fois
- do { code } while (condition)

**4. Boucle for-in et for-of**
- for-in : parcourt les propriétés d'un objet
- for-of : parcourt les valeurs (tableaux)

**5. Contrôle des boucles**
- break : arrête la boucle
- continue : passe à l'itération suivante

**Exercice :** Affichez les nombres de 1 à 10 avec une boucle for.`
      }
    ]
  },
  {
    id: 4,
    title: "Fonctions et méthodes",
    chapters: [
      {
        id: 1,
        title: "Définir et appeler des fonctions",
        content: `**Objectif :** Créer du code réutilisable avec les fonctions.

**1. Qu'est-ce qu'une fonction ?**
- Un bloc de code réutilisable
- Prend des entrées (paramètres) et retourne une sortie
- Organise mieux le code

**2. Définir une fonction**
- function sayHello() { console.log("Bonjour"); }
- Syntaxe moderne : const sayHello = () => { ... }

**3. Appeler une fonction**
- sayHello(); (exécute la fonction)
- Le nom doit être suivi de parenthèses ()

**4. Bonne pratique**
- Noms explicites : calculateTotal au lieu de calc
- Une fonction = une tâche
- Commenter le purpose de la fonction

**5. Types de fonction**
- Fonction nommée : function test() { }
- Fonction anonyme : function() { }
- Fonction fléchée : () => { }

**Exercice :** Écrivez une fonction greetUser() qui affiche un salut.`
      },
      {
        id: 2,
        title: "Paramètres et valeurs de retour",
        content: `**Objectif :** Créer des fonctions flexibles et dynamiques.

**1. Paramètres d'une fonction**
- function add(a, b) { return a + b; }
- a et b sont les paramètres
- Appel : add(5, 3) → 8

**2. Valeur par défaut**
- function greet(name = "Visiteur") { ... }
- Si pas de valeur passée, utilise "Visiteur"

**3. Instruction return**
- Retourne une valeur de la fonction
- Stoppe l'exécution après return
- Exemple : return a * b;

**4. Paramètres multiples et variables**
- function sum(...numbers) { } (paramètres variables)

**5. Portée des variables**
- Global : accessible partout
- Local : accessible que dans la fonction
- Éviter les variables globales

**Exercice :** Écrivez multiply(a, b) qui retourne a * b`
      }
    ]
  },
  {
    id: 5,
    title: "Structures de données",
    chapters: [
      {
        id: 1,
        title: "Tableaux et listes",
        content: `**Objectif :** Stocker et manipuler des collections de données.

**1. Qu'est-ce qu'un tableau ?**
- Collection ordonnée de valeurs
- Index commence à 0
- let fruits = ["pomme", "banane", "orange"];

**2. Accéder aux éléments**
- fruits[0] → "pomme"
- fruits[fruits.length - 1] → dernier élément

**3. Méthodes courantes**
- push() : ajouter à la fin
- pop() : supprimer le dernier
- shift() : supprimer le premier
- unshift() : ajouter au début
- slice() : copie une partie
- splice() : modifie le tableau

**4. Boucler sur un tableau**
- for (let fruit of fruits) { console.log(fruit); }
- fruits.forEach(fruit => console.log(fruit));
- fruits.map(), fruits.filter()

**5. Propriétés importantes**
- length : nombre d'éléments
- sort() : trier
- reverse() : inverser

**Exercice :** Créez un tableau, ajouter et supprimer des éléments.`
      },
      {
        id: 2,
        title: "Dictionnaires et tables de hachage",
        content: `**Objectif :** Stocker des données organisées par clé-valeur.

**1. Qu'est-ce qu'un objet ?**
- Collection de paires clé-valeur
- let personne = {nom: "Alice", age: 25};
- Accès : personne.nom ou personne["nom"]

**2. Créer et modifier un objet**
- Création : let obj = {};
- Ajouter : obj.email = "alice@example.com";
- Modifier : obj.age = 26;
- Supprimer : delete obj.age;

**3. Itérer sur un objet**
- for (let key in obj) { console.log(obj[key]); }
- Object.keys(), Object.values()

**4. Méthodes d'objet**
- Object.assign() : fusion d'objets
- JSON.stringify() : convertir en texte
- JSON.parse() : convertir depuis texte

**5. Imbrication**
- Objets à l'intérieur d'objets
- Tableaux à l'intérieur d'objets

**Exercice :** Créez un objet utilisateur avec nom, email, age`
      }
    ]
  },
  {
    id: 6,
    title: "Programmation orientée objet (POO)",
    chapters: [
      {
        id: 1,
        title: "Classes et objets",
        content: `**Objectif :** Structurer le code avec la POO.

**1. Qu'est-ce qu'une classe ?**
- Blueprint (modèle) pour créer des objets
- Regroupe données (propriétés) et fonctions (méthodes)
- Syntaxe : class User { constructor(name, age) { this.name = name; } }

**2. Créer une instance**
- let user1 = new User("Alice", 25);
- user1.name → "Alice"

**3. Méthodes**
- Fonctions à l'intérieur d'une classe
- Accès via this.propriete
- Appel : user1.method();

**4. Propriétés publiques et privées**
- Public : accessible de l'extérieur
- Privé : accessible seulement à l'intérieur (#private)

**5. Constructor**
- Méthode spéciale appelée à la création
- Initialise les propriétés

**Exercice :** Créez une classe Car avec propriétés et méthodes`
      },
      {
        id: 2,
        title: "Héritage et polymorphisme",
        content: `**Objectif :** Réutiliser et étendre des classes.

**1. Héritage avec extends**
- class Student extends User { }
- Student hérite de User
- Utilise les propriétés et méthodes de User

**2. Super**
- super() : appelle le constructor parent
- super.method() : appelle une méthode parent

**3. Polymorphisme**
- Plusieurs formes d'une même chose
- Surcharge : redéfinir une méthode
- L'enfant peut modifier le comportement du parent

**4. Encapsulation**
- Cacher les détails internes
- Utiliser getters et setters
- get name() { return this._name; }

**5. Bonnes pratiques**
- Une classe = une responsabilité
- Noms explicites
- Documenter le code

**Exercice :** Créez Student qui hérite de User`
      }
    ]
  },
  {
    id: 7,
    title: "Gestion des erreurs et débogage",
    chapters: [
      {
        id: 1,
        title: "Blocs try-catch",
        content: `**Objectif :** Gérer les erreurs sans casser le programme.

**1. Qu'est-ce qu'une erreur ?**
- Situation inattendue : division par zéro, fichier absent
- Peut arrêter le programme
- try-catch les gère

**2. Bloc try-catch**
- try { code qui peut échouer }
- catch (error) { traiter l'erreur }
- Le program continue même si erreur

**3. Paramètre error**
- error.message : description
- error.stack : où l'erreur s'est passée
- error.name : type d'erreur

**4. Bloc finally**
- finally { code qui s'exécute toujours }
- Utile pour le nettoyage

**5. Lancer une erreur**
- throw new Error("Message");
- Arrête l'exécution et va au catch

**Exercice :** Écrivez try-catch pour diviser par zéro`
      },
      {
        id: 2,
        title: "Techniques de débogage",
        content: `**Objectif :** Trouver et corriger les bugs.

**1. console.log()**
- console.log("variable:", variable);
- Affiche dans la console pour voir les valeurs

**2. Debugger du navigateur**
- F12 ou Ctrl+Shift+I (DevTools)
- Onglet "Console" pour erreurs
- Onglet "Sources" pour points d'arrêt

**3. Points d'arrêt (Breakpoints)**
- Cliquer sur la ligne dans DevTools
- Le code s'arrête là, inspect les variables
- Step over, step into, step out

**4. Autres outils**
- console.table() : affiche un tableau
- console.warn() : avertissements
- console.error() : erreurs

**5. Méthodologie**
- Isoler le problème
- Vérifier étape par étape
- Écrire des tests

**Exercice :** Déboguer une fonction qui ne retourne pas la bonne valeur`
      }
    ]
  },
  {
    id: 8,
    title: "Travail avec les fichiers",
    chapters: [
      {
        id: 1,
        title: "Lecture et écriture de fichiers",
        content: `**Objectif :** Lire et sauvegarder des données depuis des fichiers.

**1. Lecture de fichiers (Node.js)**
- const fs = require('fs');
- fs.readFile('file.txt', (err, data) => { });
- data contient le contenu

**2. Écriture de fichiers**
- fs.writeFile('file.txt', 'contenu', (err) => { });
- Crée ou remplace le fichier

**3. Formats courants**
- TXT : texte brut
- JSON : données structurées {nom: "Alice"}
- CSV : données séparées par virgule

**4. Travailler avec JSON**
- JSON.parse() : convertir de texte à objet
- JSON.stringify() : convertir d'objet à texte
- Très utilisé pour les données

**5. Gestion des erreurs**
- Toujours vérifier le paramètre err
- Utiliser try-catch

**Exercice :** Lire un fichier JSON et afficher les données`
      },
      {
        id: 2,
        title: "Techniques de gestion des fichiers",
        content: `**Objectif :** Gérer efficacement les fichiers.

**1. Opérations asynchrones**
- Les fichiers peuvent être longs à lire
- Utiliser des callbacks ou async/await
- Ne pas bloquer le program

**2. Async/await**
- async function readFile() { }
- const data = await fs.promises.readFile();
- Plus lisible que les callbacks

**3. Parcourir des répertoires**
- fs.readdirSync() : liste des fichiers
- fs.statSync() : info sur un fichier

**4. Bonnes pratiques**
- Toujours fermer les fichiers
- Utiliser des chemins relatifs
- Vérifier les erreurs de permission

**5. Alternatives à Node.js**
- En navigateur : API Fetch
- LocalStorage pour petites données
- Base de données pour gros volumes

**Exercice :** Lire tous les fichiers d'un répertoire`
      }
    ]
  },
  {
    id: 9,
    title: "Introduction au développement web",
    chapters: [
      {
        id: 1,
        title: "Bases de HTML et CSS",
        content: `**Objectif :** Créer des pages web visibles.

**1. HTML (structure)**
- Définit la structure de la page
- Tags : <h1>, <p>, <button>, <div>
- <!DOCTYPE html>, <html>, <head>, <body>

**2. Structure basique**
- <h1> : titre principal
- <p> : paragraphes
- <a href=""> : liens
- <img src=""> : images
- <form> : formulaires

**3. CSS (style)**
- Définit l'apparence
- color, background, font-size, border
- Classes : class="ma-classe"
- IDs : id="mon-id"

**4. Sélecteurs CSS**
- .classe : sélectionner une classe
- #id : sélectionner un ID
- p : sélectionner tous les paragraphes
- p.classe : combiner

**5. Flexbox et Grid**
- Flexbox : layout en ligne
- Grid : layout en grille
- Responsive design

**Exercice :** Créez une page avec titre, paragraphe et lien stylisé`
      },
      {
        id: 2,
        title: "Fondamentaux de JavaScript",
        content: `**Objectif :** Rendre les pages web interactives.

**1. DOM (Document Object Model)**
- Interface pour manipuler HTML
- document.getElementById('id')
- element.addEventListener('click', function)

**2. Sélectionner des éléments**
- document.getElementById() : par ID
- document.querySelector() : par sélecteur CSS
- document.querySelectorAll() : tous les matchs

**3. Modifier le DOM**
- element.textContent = "nouveau texte"
- element.innerHTML = "<p>HTML</p>"
- element.classList.add('classe')
- element.style.color = "blue"

**4. Événements**
- 'click', 'hover', 'submit', 'input', 'load'
- element.addEventListener('event', callback)
- event.preventDefault() : empêcher défaut

**5. Validation de formulaire**
- Vérifier les entrées
- Afficher messages d'erreur
- Envoyer les données

**Exercice :** Créez un bouton qui change la couleur du texte au clic`
      }
    ]
  },
  {
    id: 10,
    title: "API et services web",
    chapters: [
      {
        id: 1,
        title: "Qu'est-ce qu'une API REST",
        content: `**Objectif :** Comprendre les APIs et comment les utiliser.

**1. Qu'est-ce qu'une API ?**
- Interface de Programmation d'Application
- Permet à deux programmes (client et serveur) de communiquer
- Utilise des requêtes et réponses

**2. API REST (Representational State Transfer)**
- Basée sur HTTP
- Utilise des méthodes : GET, POST, PUT, DELETE
- Retourne des données (généralement en JSON)

**3. Requêtes HTTP**
- GET : récupérer les données
- POST : créer une nouvelle ressource
- PUT : modifier une ressource existante
- DELETE : supprimer une ressource

**4. Endpoints et routes**
- Une URL unique pour chaque action
- Exemple : GET /users → liste les utilisateurs
- POST /users → crée un nouvel utilisateur

**5. Réponse du serveur**
- Code de statut : 200 (OK), 404 (Not found), 500 (Erreur)
- Body : les données retournées en JSON
- Headers : informations sur la réponse

**Exercice :** Appeler une API publique et afficher les résultats`
      },
      {
        id: 2,
        title: "Fetch API et requêtes HTTP",
        content: `**Objectif :** Faire des requêtes réseau depuis JavaScript.

**1. Fetch API**
- Méthode moderne pour faire des requêtes
- Remplace XMLHttpRequest (ancien)
- fetch(url).then(response => ...)

**2. Exemple de Fetch GET**
- fetch('https://api.example.com/users')
- .then(response => response.json())
- .then(data => console.log(data))

**3. Fetch POST (envoyer des données)**
- fetch(url, { method: 'POST', body: JSON.stringify(data) })
- Envoyer un formulaire au serveur

**4. Headers et configuration**
- Headers : en-têtes comme Authorization, Content-Type
- credentials : 'include' pour les cookies
- mode : 'cors' pour les requêtes cross-origin

**5. Gestion des erreurs**
- .catch(error => console.log(error))
- Vérifier le code de statut : response.ok
- Toujours traiter les erreurs réseau

**Exercice :** Récupérez une liste de tâches depuis une API`
      }
    ]
  }
]
