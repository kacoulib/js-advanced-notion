
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



"""
1. Modifiez la liste populations pour ajouter les relations (liste relationships) de chaque user de cette population, vous pouvez par exemple ajoutez une clé "relation" ainsi qu'une liste vide dans un premier temps. Puis placez les relations de chaque user dans la liste populations en utilisant relationships.

"""

for user in populations:
    user['relation'] = []

# print(populations)

# le mot clé pass permet de ne pas mettre de code pour l'instant sans casser le code
for user in populations:
    pass

# on peut assigner les valeurs du tuple aux variables i et j de la manière suivante
for i, j in relationships:
    populations[i]['relation'].append(populations[j])
    populations[j]['relation'].append(populations[i])

# print(populations[0]["relation"])

"""
2. Calculer la moyenne des relations.
"""

def number_relation_user(user):
    return len(user['relation'])

total_relation = sum(number_relation_user(user) for user in populations)

# print("Total des relations dans le Dataset : {}".format(total_relation))

avg_relation = round(total_relation/len(populations), 2)

print(avg_relation)

"""
3. Créez une liste représentant les users (id) et le nombre de relation(s) qu'ils possèdent. Et retournez l'utilisateur qui possède le plus de relation(s).

"""

relation_user_id = [ (user['id'], number_relation_user(user)) for user in populations ]

# print(relation_user_id )

"""
sort s'utilise sur des listes et accepte une lambda permettant de préciser le calcul de l'ordre sur des sous listes de valeurs

Ici on aimerait faire le sort par rapport au deuxième élément du tuple qui est le nombre de relation
"""

relation_user_id.sort( key = lambda u : u[1], reverse=True )
max_relation = relation_user_id[0]
print(max_relation)

# Compter le nombre de personne ayant ce max au niveau des relations
"""
map est une fonction de Python permet d'appliquer un traitement sur l'ensemble des éléments de la liste, attention un map vous retournera un itérable. Donc si vous voulez voir ce qu'il y a à l'intérieur du map il faudra soit étirer soit utiliser une fonction comme list qui transforme un itérable en liste

"""
print( list( map(lambda u : u[1], relation_user_id)).count(max_relation[1]) )

"""
4. Trouvez les amis des amis de chaque utilisateur. 
"""

def relation_of_relation(user):
    return [(user['id'], r['id'], fof['id']) for r in user['relation'] for fof in r['relation']]

print(relation_of_relation(populations[0]))


## Partie 2

students = [
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

levels = [4,2,3,5,7,8,2,6,4,3,5, 7, 5]

assert len(students) == len(levels)

for name, level in zip(students, levels):
    print("Nom {} niveau {}".format(name, level))


# Partie 3

populations = [
    { "id" : 0, "name" : "Alan" },
    { "id" : 1, "name" : "Albert" },
    { "id" : 2, "name" : "Jhon" },
    { "id" : 3, "name" : "Brice" },
    { "id" : 4, "name" : "Alexendra" },
    { "id" : 5, "name" : "Brad" },
    { "id" : 6, "name" : "Carl" },
    { "id" : 7, "name" : "Dallas" },
    { "id" : 8, "name" : "Dennis" },
    { "id" : 9, "name" : "Edgar" },
    { "id" : 10, "name" : "Erika" },
    { "id" : 11, "name" : "Isaac" },
    { "id" : 13, "name" : "Brice" },
    { "id" : 14, "name" : "Alice" },
    { "id" : 15, "name" : "Sophia" },
    { "id" : 16, "name" : "Rasmus" },
    { "id" : 18, "name" : "Taylor" },
    { "id" : 19, "name" : "Olivia" },
    { "id" : 20, "name" : "Jessica" },
    { "id" : 21, "name" : "Anna" },
    { "id" : 22, "name" : "Samantha" },
    { "id" : 23, "name" : "Grace" },
    { "id" : 24, "name" : "Anna" },
    { "id" : 25, "name" : "Alexis" },
    { "id" : 26, "name" : "Madison" },
    { "id" : 27, "name" : "Nicole" },
    { "id" : 28, "name" : "Amanda" },
    { "id" : 29, "name" : "Haley" }  
]

centers = [
    (0, 'PHP'), (0, 'MySQL'), (0, 'Angular'), (1, 'MySQL'), (2, 'Python'), (3, 'PHP'), (4, 'PHP'), 
    (5, 'Angular'), (6, 'Vuejs'), (7, 'Angular'), (8, 'Big data'), (9, 'PHP'), 
    (10, 'Angular'), (10, 'NoSQL'), (11, 'NoSQL'), (12, 'Angular'), (13, 'Angular'), (14, 'Angular'), 
    (15, 'Angular'), (16, 'Angular'), (17, 'PHP'), (18, 'PHP'), (19, 'PHP'), (19,'Angular'), (19, 'Python'),
    (20, 'Python'), (21, 'Python'), (22, 'Python'), (23, 'Python'), (24, 'PHP'), 
    (25, 'NoSQL'), (26, 'NoSQL'), (27, 'Big data'), (28, 'NoSQL'), (29, 'Angular'), (29, 'PHP'), (29,'Big data')
]

def center_interest(target):
    return [ id for id, t in centers if t == target]

print(center_interest('Python'))