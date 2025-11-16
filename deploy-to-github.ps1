# Script PowerShell pour déployer le portfolio sur GitHub
# Utilisation : .\deploy-to-github.ps1

Write-Host "=== Déploiement du Portfolio sur GitHub ===" -ForegroundColor Cyan
Write-Host ""

# Vérifier si Git est installé
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "ERREUR : Git n'est pas installé!" -ForegroundColor Red
    Write-Host "Veuillez installer Git depuis : https://git-scm.com/download/win" -ForegroundColor Yellow
    Read-Host "Appuyez sur Entrée pour quitter"
    exit 1
}

Write-Host "✓ Git est installé" -ForegroundColor Green
Write-Host ""

# Demander le nom d'utilisateur GitHub
$username = Read-Host "Entrez votre nom d'utilisateur GitHub"
if ([string]::IsNullOrWhiteSpace($username)) {
    Write-Host "Nom d'utilisateur requis!" -ForegroundColor Red
    exit 1
}

# Demander le nom du dépôt
$repoName = Read-Host "Entrez le nom du dépôt GitHub (par défaut: portfolio)"
if ([string]::IsNullOrWhiteSpace($repoName)) {
    $repoName = "portfolio"
}

$repoUrl = "https://github.com/$username/$repoName.git"

Write-Host ""
Write-Host "Configuration:" -ForegroundColor Cyan
Write-Host "  Utilisateur: $username"
Write-Host "  Dépôt: $repoName"
Write-Host "  URL: $repoUrl"
Write-Host ""

$confirm = Read-Host "Avez-vous créé le dépôt '$repoName' sur GitHub? (o/n)"
if ($confirm -ne "o" -and $confirm -ne "O") {
    Write-Host ""
    Write-Host "Veuillez d'abord créer le dépôt sur GitHub:" -ForegroundColor Yellow
    Write-Host "1. Allez sur https://github.com/new" -ForegroundColor White
    Write-Host "2. Nommez-le: $repoName" -ForegroundColor White
    Write-Host "3. Choisissez Public" -ForegroundColor White
    Write-Host "4. NE cochez PAS 'Initialize with README'" -ForegroundColor White
    Write-Host "5. Cliquez sur 'Create repository'" -ForegroundColor White
    Write-Host ""
    Read-Host "Appuyez sur Entrée après avoir créé le dépôt, puis relancez ce script"
    exit 0
}

Write-Host ""
Write-Host "Initialisation de Git..." -ForegroundColor Cyan
git init

Write-Host "Ajout des fichiers..." -ForegroundColor Cyan
git add .

Write-Host "Création du commit..." -ForegroundColor Cyan
git commit -m "Initial commit - Portfolio Hamidou Keita"

Write-Host "Renommage de la branche en 'main'..." -ForegroundColor Cyan
git branch -M main

Write-Host "Ajout du dépôt distant..." -ForegroundColor Cyan
git remote add origin $repoUrl 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "Le dépôt distant existe déjà, mise à jour de l'URL..." -ForegroundColor Yellow
    git remote set-url origin $repoUrl
}

Write-Host "Envoi des fichiers sur GitHub..." -ForegroundColor Cyan
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✓ Portfolio déployé avec succès!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Prochaines étapes pour activer GitHub Pages:" -ForegroundColor Cyan
    Write-Host "1. Allez sur: https://github.com/$username/$repoName/settings/pages" -ForegroundColor White
    Write-Host "2. Sous 'Source', sélectionnez:" -ForegroundColor White
    Write-Host "   - Branch: main" -ForegroundColor White
    Write-Host "   - Folder: / (root)" -ForegroundColor White
    Write-Host "3. Cliquez sur 'Save'" -ForegroundColor White
    Write-Host ""
    Write-Host "Votre site sera accessible à:" -ForegroundColor Cyan
    Write-Host "https://$username.github.io/$repoName/" -ForegroundColor Yellow
} else {
    Write-Host ""
    Write-Host "ERREUR lors de l'envoi sur GitHub!" -ForegroundColor Red
    Write-Host "Vérifiez:" -ForegroundColor Yellow
    Write-Host "  - Que le dépôt existe bien sur GitHub" -ForegroundColor White
    Write-Host "  - Vos identifiants GitHub (vous devrez peut-être vous authentifier)" -ForegroundColor White
    Write-Host "  - Votre connexion internet" -ForegroundColor White
}

Write-Host ""
Read-Host "Appuyez sur Entrée pour quitter"

