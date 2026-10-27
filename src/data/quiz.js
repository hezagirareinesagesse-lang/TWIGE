export const quizzes = [
  {
    lessonId: 1,
    questions: [
      {
        question: "Quel outil est utilisé pour écrire du code ?",
        options: ["Un éditeur de code", "Un navigateur", "Un moteur de recherche", "Un système d'exploitation"],
        answer: 0
      },
      {
        question: "Pourquoi configure-t-on un environnement de développement ?",
        options: ["Pour jouer", "Pour programmer efficacement", "Pour installer des jeux", "Pour naviguer sur Internet"],
        answer: 1
      },
      {
        question: "Où télécharger Visual Studio Code ?",
        options: ["code.visualstudio.com", "google.com", "github.com", "stackoverflow.com"],
        answer: 0
      }
    ]
  },
  {
    lessonId: 2,
    questions: [
      {
        question: "Une variable sert à :",
        options: ["Stocker des données", "Effacer le programme", "Fermer l'application", "Créer Internet"],
        answer: 0
      },
      {
        question: "Quel est un type de donnée ?",
        options: ["String", "Color", "Screen", "Button"],
        answer: 0
      },
      {
        question: "Quelle est la bonne syntaxe pour déclarer une variable ?",
        options: ["let nom = 'Alice';", "var nom == 'Alice';", "const nom : 'Alice';", "name = 'Alice';"],
        answer: 0
      }
    ]
  },
  {
    lessonId: 3,
    questions: [
      {
        question: "Quelle structure permet de répéter du code ?",
        options: ["if", "for", "switch", "const"],
        answer: 1
      },
      {
        question: "Que retourne l'expression : 10 > 5 ?",
        options: ["true", "false", "undefined", "error"],
        answer: 0
      },
      {
        question: "Quel est l'opérateur ET logique ?",
        options: ["||", "&&", "??", "!!"],
        answer: 1
      }
    ]
  },
  {
    lessonId: 4,
    questions: [
      {
        question: "Une fonction permet de :",
        options: ["Répéter un bloc de code", "Changer la couleur", "Supprimer un fichier", "Créer Internet"],
        answer: 0
      },
      {
        question: "Comment appeler une fonction nommée 'test' ?",
        options: ["test", "test()", "call test", "execute test"],
        answer: 1
      },
      {
        question: "Que retourne cette fonction : function add(5, 3) { return 5 + 3; } ?",
        options: ["5", "3", "8", "undefined"],
        answer: 2
      }
    ]
  },
  {
    lessonId: 5,
    questions: [
      {
        question: "Qu'est-ce qu'un tableau ?",
        options: ["Une liste ordonnée de valeurs", "Une variable simple", "Une fonction", "Un type d'erreur"],
        answer: 0
      },
      {
        question: "Quel est l'index du premier élément d'un tableau ?",
        options: ["1", "0", "-1", "undefined"],
        answer: 1
      },
      {
        question: "Quelle méthode ajoute un élément à la fin d'un tableau ?",
        options: ["pop()", "push()", "shift()", "unshift()"],
        answer: 1
      }
    ]
  },
  {
    lessonId: 6,
    questions: [
      {
        question: "Qu'est-ce qu'une classe ?",
        options: ["Un blueprint pour créer des objets", "Une variable", "Une fonction", "Un type d'erreur"],
        answer: 0
      },
      {
        question: "Quel mot-clé est utilisé pour créer une instance de classe ?",
        options: ["const", "new", "create", "make"],
        answer: 1
      },
      {
        question: "Qu'est-ce que l'héritage en POO ?",
        options: ["Une classe qui prend l'argent", "Une classe qui reprend les propriétés d'une autre", "Un objet spécial", "Une erreur"],
        answer: 1
      }
    ]
  },
  {
    lessonId: 7,
    questions: [
      {
        question: "Que fait un bloc try-catch ?",
        options: ["Crée une nouvelle variable", "Gère les erreurs", "Répète du code", "Crée une fonction"],
        answer: 1
      },
      {
        question: "Comment déboguer du code en JavaScript ?",
        options: ["Utiliser console.log()", "Utiliser DevTools", "Les deux", "Rien de cela"],
        answer: 2
      },
      {
        question: "Qu'affiche console.log('test') ?",
        options: ["Un bouton", "L'erreur du code", "Le texte 'test' dans la console", "undefined"],
        answer: 2
      }
    ]
  },
  {
    lessonId: 8,
    questions: [
      {
        question: "Quel module Node.js permet de lire des fichiers ?",
        options: ["http", "fs", "path", "os"],
        answer: 1
      },
      {
        question: "Quel format de fichier est structuré et couramment utilisé ?",
        options: ["TXT", "JSON", "XML", "CSV"],
        answer: 1
      },
      {
        question: "Que fait JSON.parse() ?",
        options: ["Convertit un objet en texte", "Convertit un texte en objet", "Crée un fichier", "Supprime un fichier"],
        answer: 1
      }
    ]
  },
  {
    lessonId: 9,
    questions: [
      {
        question: "Quel est le rôle du HTML ?",
        options: ["Définir la structure", "Définir le style", "Ajouter l'interactivité", "Gérer les données"],
        answer: 0
      },
      {
        question: "Quel sélecteur CSS cible un élément par ID ?",
        options: [".id", "#id", "@id", "id"],
        answer: 1
      },
      {
        question: "Comment sélectionner un élément en JavaScript avec son ID ?",
        options: ["select('#id')", "getElementById('id')", "querySelector('id')", "select('id')"],
        answer: 1
      }
    ]
  },
  {
    lessonId: 10,
    questions: [
      {
        question: "Qu'est-ce qu'une API REST ?",
        options: ["Un éditeur de code", "Une interface de communication entre programmes", "Un langage de programmation", "Un serveur web"],
        answer: 1
      },
      {
        question: "Quelle méthode HTTP récupère les données ?",
        options: ["POST", "PUT", "GET", "DELETE"],
        answer: 2
      },
      {
        question: "Quel code HTTP signifie 'Succès' ?",
        options: ["404", "500", "200", "301"],
        answer: 2
      }
    ]
  }
]
