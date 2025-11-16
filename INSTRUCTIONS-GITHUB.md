# 📤 Instructions pour mettre le portfolio sur GitHub

## Option 1 : Utiliser le script automatique (RECOMMANDÉ)

1. **Installer Git** (si pas déjà fait) :
   - Téléchargez : https://git-scm.com/download/win
   - Installez-le en suivant les étapes
   - Redémarrez PowerShell après l'installation

2. **Lancer le script** :
   ```powershell
   .\deploy-to-github.ps1
   ```

3. **Suivre les instructions** affichées par le script

---

## Option 2 : Commandes manuelles

### 1. Créer le dépôt sur GitHub

1. Allez sur : https://github.com/new
2. Nommez votre dépôt (ex: `portfolio`)
3. Choisissez **Public**
4. **NE cochez PAS** "Initialize with README"
5. Cliquez sur **"Create repository"**

### 2. Exécuter ces commandes dans PowerShell

```powershell
# Aller dans le dossier du portfolio
cd "C:\Users\Lenovo\OneDrive\Bureau\portfolio"

# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Créer un commit
git commit -m "Initial commit - Portfolio Hamidou Keita"

# Renommer la branche en 'main'
git branch -M main

# Ajouter le dépôt GitHub (REMPLACEZ par votre URL)
git remote add origin https://github.com/VOTRE-USERNAME/VOTRE-REPO.git

# Envoyer sur GitHub
git push -u origin main
```

### 3. Activer GitHub Pages

1. Allez sur : `https://github.com/VOTRE-USERNAME/VOTRE-REPO/settings/pages`
2. Sous **"Source"**, sélectionnez :
   - **Branch** : `main`
   - **Folder** : `/ (root)`
3. Cliquez sur **"Save"**
4. Attendez 1-2 minutes
5. Votre site sera accessible à : `https://VOTRE-USERNAME.github.io/VOTRE-REPO/`

---

## 🔐 Authentification GitHub

Lors du premier `git push`, GitHub vous demandera de vous authentifier :

### Option A : Token d'accès personnel (recommandé)

1. Allez sur : https://github.com/settings/tokens
2. Cliquez sur **"Generate new token"** → **"Generate new token (classic)"**
3. Donnez un nom (ex: "Portfolio")
4. Cochez la case **"repo"** (permissions de dépôt)
5. Cliquez sur **"Generate token"**
6. **COPIEZ le token** (vous ne le reverrez plus !)
7. Utilisez ce token comme mot de passe lors de `git push`

### Option B : GitHub Desktop

1. Téléchargez : https://desktop.github.com/
2. Installez et connectez-vous à votre compte GitHub
3. Utilisez GitHub Desktop pour faire le commit et push

---

## ✅ Vérification

Une fois déployé, vérifiez que votre site fonctionne :

- URL GitHub Pages : `https://VOTRE-USERNAME.github.io/VOTRE-REPO/`
- Le bouton "Télécharger le CV" doit fonctionner
- Tous les styles et animations doivent fonctionner

---

## 🔄 Mettre à jour le site

Quand vous modifiez des fichiers localement :

```powershell
git add .
git commit -m "Description de vos modifications"
git push
```

Les modifications apparaîtront sur votre site GitHub Pages après quelques minutes.

---

## ❓ Problèmes courants

### Git n'est pas reconnu
- Réinstallez Git : https://git-scm.com/download/win
- Redémarrez PowerShell

### Erreur d'authentification
- Utilisez un token d'accès personnel (voir ci-dessus)
- Ou utilisez GitHub Desktop

### Le site ne s'affiche pas
- Vérifiez que GitHub Pages est activé dans Settings → Pages
- Attendez 2-3 minutes pour la mise en ligne
- Vérifiez que le fichier `index.html` est à la racine du dépôt

