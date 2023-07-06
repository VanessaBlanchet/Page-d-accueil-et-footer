## Démarrer un nouveau fichier html

## Installer Emmet sur VSCode

Aller dans les composants de VSCode et entrer : @builtin emmet dans la barre de recherche.

Normalement il est déjà installé et actif dans VSCode.
A la création d'un nouveau fichier, il ne faut pas oublier de sélectionner le type de fichier afin qu'Emmet connaisse quels raccourcis il doit utiliser.

## Créer une navbar avec Bootstrap

lien vers la doc Bootstrap : 
https://getbootstrap.com/docs/5.3/getting-started/introduction/#cdn-links

Il faut inclure dans le document HTML à la fois la balise <link> et inclure le lien de Bootstrap pour CSS mais aussi la balise <script> pour ajouter le lien JS

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">

et 

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>

En ne mettant que la balise <link> sans le JS, le dropdown ne fonctionne pas. 

