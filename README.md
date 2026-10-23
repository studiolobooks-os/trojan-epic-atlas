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

## Langues

L’application choisit le français si la langue du navigateur est le français, et l’anglais sinon. Le sélecteur EN | FR permet de changer de langue à tout moment ; le choix est conservé dans le navigateur lorsque le stockage local est disponible. Les textes anglais des lieux figurent dans `MAPS` et leurs traductions, dans le même ordre, dans `FRENCH_MAPS` dans `data.js`. Les traductions de l’interface se trouvent dans `app.js`. Les cartes restent inchangées.

Pour actualiser le site existant sans changer son adresse, remplacez dans le même dépôt et sur la même branche les fichiers modifiés `index.html`, `style.css`, `app.js` et `data.js`, puis validez les changements. GitHub Pages republiera le site à la même adresse. Les images existantes restent dans `assets/`. Les navigateurs peuvent conserver les fichiers en cache : rechargez la page si la nouvelle version n’apparaît pas immédiatement.

La consultation sans réseau dépend du cache du navigateur : elle n’est pas garantie et aucun mode hors ligne dédié n’est installé.
