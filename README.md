# Full - Test technique

Les tests effectués sont : "Algo" et "Backend".

## Algo

Les tests d'algorithmie peuvent être retrouvés sur la plateforme Codepen
J'ai pu réaliser les tests d'algorithmie sur la plateforme Codepen. Ci-dessous vous trouverez les tests par algo.

- Increment a custom Number type [https://codepen.io/1m70/pen/mdqNQgG?editors=1111]
- FizzBuzz [https://codepen.io/1m70/pen/XWzvyxK]

## Backend

L'ensemble des 2 projets a été réaliser sous le langage Typescript. **Aucun framework** (tel que Express) n'a été utilisé pour la création de l'API.
Les contrôles n'ont pas été poussés n'étant pas le sujet du test. Cependant, si besoin de les pousser, alors je referais une passe pour améliorer ceux-ci.

#### Pour lancer le projet en local en HotReload.

- `npm run dev`

### Part 1

L'API n'est connectée à aucune Base de Données mais a des **fichiers JSON** qui se situent dans le dossier Data.

Pour les jeux de test, j'ai utiliser l'outil Jest.

#### Commande pour lancer les jeux de tests.

- `npm run test`


### Part 2

Pour la deuxième partie du test, l'ensemble de l'API est connectée à la Base de Données, proposé par Google, **Firebase**.

Un fichier JSON est présent pour import dans **Postman** l'ensemble de l'API.

Les commandes CLI se situent dans le dosser /src/bin/fleet

#### Commandes les CLI custom.

- `npm run fleet:create`
- `npm run fleet:register-vehicule`
- `npm run fleet:localize-vehicule`