Le projet Sie est une application SPA basé sur les frameworks Django de python et la librairie reactJs 
fonctionnant sur une architecture basé entièrement sur des services.
Le projet contient plusieurs modules 

Pour lancer le projet chez vous!!!

### Côté serveur ###

1. Créer un environnement virtuel
    
2. Se rendre dans le dossier de notre choix puis git clône du projet 
    puis taper la commande "pip install -r requirements.txt"
    attendre qu'il installe toutes dépendances côté python
    
3. configurer le fichier settings.py dans le dossier minepded qui se trouve dans backend/Minepded/minepded/settings.py
    nommer la bd "sie" et mettez les bons identifiants pour votre bdd postgres
    
4. Puis rendez-vous dans le dossier backend/Minepded ou se trouve le manage.py et lancer la commande "python manage.py migrate" une fois les migrations terminer, veuillez executer generer des fixtures via la commande python fixtures.py , 
    lancer le serveur django avec "python manage.py runserver"
    
### Côté FrontEnd React ###
 
 1. Se rendre dans le dossier frontend/gui puis lancer la commande "npm install" ou "yarn" pour installer les dépendances 
 2. Ensuite Taper "npm run dev" ou "yarn dev" pour lancer le projet sur le port 3000
