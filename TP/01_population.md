# Examen JS 


```js
const populations = [
    {"id": 0, "name": "Alan"},
    {"id": 1, "name": "Albert"},
    {"id": 2, "name": "Jhon"},
    {"id": 3, "name": "Brice"},
    {"id": 4, "name": "Alexendra"},
    {"id": 5, "name": "Brad"},
    {"id": 6, "name": "Carl"},
    {"id": 7, "name": "Dallas"},
    {"id": 8, "name": "Dennis"},
    {"id": 9, "name": "Edgar"},
    {"id": 10, "name": "Erika"},
    {"id": 11, "name": "Isaac"},
    {"id": 12, "name": "Ian"}
]

const relationships = [
    [0, 1], [0, 2], [1, 2], [1, 4], [2, 3], [2, 5],
    [3, 4], [3, 7], [4, 5], [4, 8], [4, 9], [5, 7],
    [5, 9], [6, 7], [6, 8], [7, 1], [7, 8], [8, 9],
    [10, 1], [10, 2], [10, 3], [11, 12], [11, 2], [11, 5]
]

```

1. Modifiez la liste populations pour ajouter les relations (liste relationships) de chaque user de cette population, vous pouvez par exemple ajoutez une clé "relation" ainsi qu'une liste vide dans un premier temps. Puis placez les relations de chaque user dans la liste populations en utilisant relationships.


2. Calculer la moyenne des relations.

3. Créez une liste représentant les users (id) et le nombre de relation(s) qu'ils possèdent. Et retournez l'utilisateur qui possède le plus de relation(s).


## Compter le nombre de personne ayant ce max au niveau des relations

4. Trouvez les amis des amis de chaque utilisateur. 



### Partie 2

Chaque étudiant à un niveau, ordonnez les étudiants par niveau dans un tableau students modidifé.

```js
const students = [
    "Alan",
    "Albert",
    "Jhon",
    "Brice",
    "Alexendra",
    "Brad",
    "Carl",
    "Dallas",
    "Dennis",
    "Edgar",
     "Erika",
     "Isaac",
    "Ian" 
]

const levels = [4,2,3,5,7,8,2,6,4,3,5, 7, 5]
``` 

### Partie 3

Créez un jeu de 3 dés et claculez la chance d'obtenir trois fois de suite un as. Simulez l'expérience de jeu et comparez le résultat avec le résultat théorique.