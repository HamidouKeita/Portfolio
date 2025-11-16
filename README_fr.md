# Portfolio - Hamidou Keita

Portfolio personnel développé en HTML5, CSS3 et JavaScript vanilla. Site web statique présentant mes compétences, projets et expériences en réseaux, systèmes et développement.

## 📋 Structure du projet

```
portfolio/
│
├── index.html              # Page principale
├── README_fr.md           # Ce fichier
│
└── assets/
    ├── css/
    │   └── styles.css     # Styles CSS (thème clair/sombre, responsive)
    │
    ├── js/
    │   └── main.js        # JavaScript (thème, menu, formulaire, animations)
    │
    ├── img/               # Images des projets
    │   ├── truenas.jpg
    │   ├── ecommerce.jpg
    │   ├── network.jpg
    │   ├── asterisk.jpg
    │   └── other.jpg
    │
    └── pdf/
        └── CV_HAMIDOU_KEITA.pdf  # CV en PDF (à ajouter)
```

## 🚀 Utilisation

### Pour visualiser le site localement

1. **Option 1 : Double-clic**
   - Ouvrez simplement le fichier `index.html` dans votre navigateur web

2. **Option 2 : Serveur local (recommandé)**
   - Utilisez un serveur HTTP local comme :
     - **Python** : `python -m http.server 8000` puis ouvrez `http://localhost:8000`
     - **Node.js** : `npx serve .` ou `npx http-server`
     - **VS Code** : Extension "Live Server"

### Déployer sur GitHub Pages

1. **Créer un dépôt GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio"
   git branch -M main
   git remote add origin https://github.com/votre-username/votre-repo.git
   git push -u origin main
   ```

2. **Activer GitHub Pages**
   - Allez dans les **Settings** de votre dépôt
   - Section **Pages**
   - Source : **main branch** (ou **master**)
   - Dossier : **/ (root)**
   - Cliquez sur **Save**

3. **Accéder à votre site**
   - Votre site sera accessible à : `https://votre-username.github.io/votre-repo/`

## ✏️ Comment modifier le contenu

### Modifier les textes (nom, descriptions, etc.)

Ouvrez `index.html` et recherchez les sections suivantes :

#### **Hero Section** (lignes ~32-44)
```html
<h1 class="hero-title">Hamidou Keita</h1>
<p class="hero-subtitle">Passionné réseaux & cloud — Futur ingénieur Big Data & IA</p>
```

#### **Section À propos** (lignes ~48-77)
- Modifiez le paragraphe de présentation
- Ajustez la liste de formation et langues

#### **Section Compétences** (lignes ~81-164)
- Modifiez les noms de compétences
- Ajustez les pourcentages dans `style="width: XX%"` (de 0 à 100)

#### **Section Projets** (lignes ~168-267)
- Modifiez les titres, descriptions, technologies
- Changez les liens GitHub (remplacez `https://github.com/hamidoukeita/...`)
- Ajoutez ou supprimez des projets en copiant la structure `<article class="project-card">`

#### **Section Expériences** (lignes ~271-309)
- Modifiez les dates, titres et descriptions

#### **Section Contact** (lignes ~313-341)
- Changez le texte d'introduction si besoin
- Pour utiliser Formspree : remplacez `YOUR_FORM_ID` dans l'attribut `action` du formulaire
  - Créez un compte sur [Formspree](https://formspree.io)
  - Obtenez votre ID de formulaire
  - Remplacez dans : `action="https://formspree.io/f/YOUR_FORM_ID"`

#### **Footer** (lignes ~345-378)
- Modifiez les liens GitHub et LinkedIn
- Changez le texte de copyright si nécessaire

### Modifier les styles CSS

Ouvrez `assets/css/styles.css` :

#### **Couleurs et thème**
- Lignes 4-26 : Variables CSS pour le thème clair/sombre
- Modifiez `--accent-color` pour changer la couleur principale
- Ajustez les couleurs de fond, texte, etc.

#### **Responsive Design**
- Lignes 669+ : Media queries pour mobile/tablette
- Ajustez les breakpoints si nécessaire

### Modifier le JavaScript

Ouvrez `assets/js/main.js` :

- Le fichier est bien commenté par section
- Les fonctionnalités principales sont organisées en modules IIFE
- Modifiez selon vos besoins

## 📄 Ajouter le CV PDF

1. **Préparez votre CV**
   - Nommez-le : `CV_HAMIDOU_KEITA.pdf`
   - Placez-le dans le dossier `assets/pdf/`

2. **Vérifiez les liens**
   - Les liens vers le CV sont déjà configurés dans :
     - Section Hero : ligne ~40
     - Footer : ligne ~374

3. **Si vous utilisez un autre nom**
   - Recherchez `CV_HAMIDOU_KEITA.pdf` dans `index.html`
   - Remplacez par le nom de votre fichier

## 🖼️ Ajouter les images des projets

1. **Préparez vos images**
   - Recommandé : format JPG ou PNG
   - Taille recommandée : 800x600px ou plus
   - Nommez-les :
     - `truenas.jpg`
     - `ecommerce.jpg`
     - `network.jpg`
     - `asterisk.jpg`
     - `other.jpg`

2. **Placez les images**
   - Copiez-les dans le dossier `assets/img/`

3. **Images manquantes**
   - Si une image ne charge pas, un placeholder SVG s'affichera automatiquement
   - Vous pouvez aussi utiliser un service comme [Placeholder.com](https://placeholder.com) ou [Unsplash](https://unsplash.com)

## 🎨 Personnalisation avancée

### Changer les couleurs principales

Dans `assets/css/styles.css`, modifiez :

```css
:root {
    --accent-color: #0d6efd;  /* Couleur principale */
    --accent-hover: #0b5ed7;  /* Couleur au survol */
}
```

### Ajouter de nouvelles sections

1. Ajoutez la section HTML dans `index.html`
2. Ajoutez le lien dans la navigation (lignes ~20-25)
3. Ajoutez les styles correspondants dans `styles.css`

### Activer Formspree pour le formulaire

1. Créez un compte sur [Formspree.io](https://formspree.io)
2. Créez un nouveau formulaire
3. Copiez votre Form ID (exemple : `xwkgzjqy`)
4. Dans `index.html`, ligne ~325, remplacez :
   ```html
   <form ... action="https://formspree.io/f/YOUR_FORM_ID" ...>
   ```
   Par :
   ```html
   <form ... action="https://formspree.io/f/xwkgzjqy" ...>
   ```

## 🔧 Technologies utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Styles personnalisés avec variables CSS, Flexbox, Grid
- **JavaScript (ES6+)** : Vanilla JS, pas de framework
- **Aucun build requis** : Fonctionne directement en ouvrant index.html

## 📱 Fonctionnalités

- ✅ Design moderne et minimaliste
- ✅ Mode clair/sombre (toggle)
- ✅ Responsive (mobile, tablette, desktop)
- ✅ Menu hamburger pour mobile
- ✅ Smooth scroll entre sections
- ✅ Animations au scroll
- ✅ Validation de formulaire côté client
- ✅ Accessibilité (ARIA labels, navigation clavier)
- ✅ Support des contrastes pour accessibilité

## 🐛 Résolution de problèmes

### Le thème ne se sauvegarde pas
- Vérifiez que les cookies/localStorage ne sont pas désactivés dans votre navigateur

### Les images ne s'affichent pas
- Vérifiez que les fichiers sont bien dans `assets/img/`
- Vérifiez les noms de fichiers (sensible à la casse)
- Ouvrez la console du navigateur (F12) pour voir les erreurs

### Le formulaire ne fonctionne pas
- Si vous n'utilisez pas Formspree, le formulaire utilisera `mailto:` par défaut
- Vérifiez que vous avez bien configuré votre Formspree ID si vous l'utilisez

### Styles qui ne s'appliquent pas
- Vérifiez que le chemin vers `assets/css/styles.css` est correct
- Videz le cache du navigateur (Ctrl+F5 ou Cmd+Shift+R)

## 📝 Licence

Ce projet est libre d'utilisation et de modification pour votre usage personnel.

## 👤 Auteur

**Hamidou Keita**
- GitHub: [@hamidoukeita](https://github.com/hamidoukeita)
- LinkedIn: [Hamidou Keita](https://linkedin.com/in/hamidoukeita)

---

**Note** : N'oubliez pas de remplacer les liens GitHub et LinkedIn par vos propres profils, et d'ajouter votre CV PDF dans le dossier `assets/pdf/`.

