## Exercice Redux

Reprendre le code de la TodoList.

Le state de Redux devra avoir la forme suivante :

```
{
  newTodo: 'Acheter de',
  todos: [
    'Faire les courses',
    'Acheter du pain',
  ]
}
```

### 1 - Créer le store comme dans l'exemple précédent

Ajouter en preloaded state le state ci-dessus.

Créer un reducer qui retourne le state reçu en entrée.

### 2 - Créer des versions connectées de TodoForm et TodoList

Avec mapStateToProps afficher dans chaque composants les éléments du state (faire la selection via des sélecteurs)

### 3 - Créer 2 constantes TODO_ADD et TODO_CHANGE

### 4 - Créer 2 reducers, un qui change la valeur de la todo sur le type TODO_CHANGE, l'autre qui ajouter une todo au tableau sur TODO_ADD

### 5 - Créer 2 actions creators

### 6 - Connecter TodoForm avec mapDispatchToProps