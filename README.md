# The Trojan Epic — Interactive Atlas

Prototype statique pour Studiolo. Les trois fichiers dans `assets/` sont les illustrations originales, sans modification. Aucun compte, serveur applicatif, API, base de données ou dépendance externe n'est nécessaire.

## Lancer sur ordinateur

Ouvrez `index.html` dans un navigateur moderne. Pour tester aussi sur un smartphone connecté au même réseau Wi-Fi, ouvrez un terminal dans ce dossier et lancez :

```bash
python3 -m http.server 8000 --bind 0.0.0.0
```

Sur le téléphone, ouvrez `http://ADRESSE-IP-DE-L-ORDINATEUR:8000/`, en remplaçant l'adresse par l'adresse locale de l'ordinateur. Le pare-feu doit autoriser la connexion. Arrêtez le serveur avec Ctrl+C. Les boutons +/−, le déplacement et le pincement fonctionnent dans la carte ; « Places » fournit une liste accessible des fiches.

## Publier sur GitHub Pages

1. Créez un dépôt GitHub et importez **le contenu** de ce dossier à sa racine : `index.html`, `style.css`, `app.js`, `data.js` et le dossier `assets`.
2. Dans le dépôt, ouvrez **Settings → Pages**.
3. Sous **Build and deployment**, sélectionnez **Deploy from a branch**, choisissez la branche `main` et le dossier `/ (root)`, puis sauvegardez.
4. Après quelques minutes, l'adresse du site apparaît dans les réglages Pages. Ouvrez-la sur votre téléphone.

Les chemins relatifs fonctionnent également pour un dépôt de projet GitHub Pages. Seuls les fichiers nécessaires à la publication doivent être ajoutés au dépôt. Vérifiez que vous détenez les droits nécessaires sur les images avant une publication publique.

## Modifier les contenus

Dans `data.js`, chaque entrée a le format `[titre, x, y, description]` : `x` et `y` sont les coordonnées du centre du pictogramme en pourcentage de la largeur et de la hauteur de l'image originale. Les descriptions anglaises sont provisoires et modifiables. Les cartes sont des représentations interprétatives, pas des reconstitutions archéologiques. Le pictogramme commun à Scylla et Charybdis ouvre une fiche commune.
