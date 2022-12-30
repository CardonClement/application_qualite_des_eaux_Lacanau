Vous trouverez dans ce répertoire une application React.js exploitant trois APIs directement ou indirectement (2 Express et une NestJS, qui elle même exploite une base de donnée postgres publiée sur AWS) 
Le but de cet exercice était de réaliser un site pour les agents du syndicats d'initiative de Lacanau, que ces derniers afficheront sur leur vitrine en grand écran. Ce site permet à ces agents de rentrer le taux de pollution du jour à Lacanau, ainsi qu'à afficher celles des villes voisines (récupérée via une API Express changeant la valeur en fonction de la requête pour Hourtin, et via une API NestJS associée à une base de donnée publiée sur AWS pour les 4 autres villes).

Contenu du répertoire : 

- Une API Express fournissant des valeurs différentes en fonction des valeurs dans la requête (voir ./API_Pollution_Express)

- Une API NestJS fournissant des valeurs provenant d'une base de donnée upload sur Amazon AWS (voir ./API_PollutionVillesVoisines_NestJS)
/!\ Voir ././API_PollutionVillesVoisines_NestJS/villes_voisines/src/app.module.ts pour voir détail de connexion sur la base de donnée

- Une API Express fusionnant les deux API mentionnées précedemment, renvoyant leur données dans un seul JSON (voir ./API_Fusion_Express)

- Une application React.js exploitant les données de cette dernière, dont les données changent en fonction des valeurs entrées. (voir ./APP_Lacanau_React)

Une vidéo de présentation du projet plus en détail est disponible à l'adresse suivante : [vidéo à finaliser]

à la racine de ce projet, vous trouverez la maquette de base de la page faite en tout début de projet, un fichier TODO dont je me suis servi pour décomposer les tâches et actualiser l'avancement du projet (Remplaçable par un Trello, en vérité) ainsi que le schéma technique des flux (ports, urls...) du projet. 