# 🗂️ AdonisJS FlashCards Project

[![Node.js](https://img.shields.io/badge/Node.js-18+-brightgreen?style=flat-square&logo=nodesot)](https://nodejs.org/)
[![Docker](https://img.shields.io/badge/Docker-Enabled-blue?style=flat-square&logo=docker)](https://www.docker.com/products/docker-desktop)
[![AdonisJS](https://img.shields.io/badge/Framework-AdonisJS-blueviolet?style=flat-square&logo=adonisjs)](https://adonisjs.com/)

Une application de FlashCards robuste propulsée par **AdonisJS**. L'environnement est entièrement conteneurisé avec **Docker**, incluant une base de données MySQL et phpMyAdmin pour la gestion simplifiée des données.

---

## 📋 Présentation

Ce projet utilise la puissance d'AdonisJS pour le backend et Docker pour garantir un environnement de développement identique, que vous soyez sur **Windows (WSL2)**, **macOS** ou **Linux**.

**Fonctionnalités incluses :**

- 🐳 Architecture multi-containers (App, DB, Admin tool).
- 🏗️ Système de migrations, seeders et factories prêt à l'emploi.
- 🔐 Authentification et sécurité configurées via Adonis.

---

## 🚀 Prérequis

Assurez-vous d'avoir installé les outils suivants :

- [Node.js](https://nodejs.org/) v18+ (inclut npm)
- [Docker Desktop](https://www.docker.com/products/docker-desktop) (WSL2 activé sur Windows)
- [Git](https://git-scm.com/)
- Un navigateur ou un client API (Postman, Insomnia)

---

## 🛠️ Installation et Configuration

### 1. Cloner le projet

```bash
git clone <url-du-repo>
cd <nom-du-projet>
```

### 2. Installer les dépendances

Rendez-vous à la racine du projet puis installez les modules Node :

```bash
npm install            # ou yarn install
```

> **Optionnel** : si vous souhaitez profiter du conteneur MySQL (et phpMyAdmin),
> lancez-le maintenant avec Docker :
>
> ```bash
> docker compose up -d db phpmyadmin
> ```
> Le service `app` n'est pas nécessaire puisque vous exécuterez le serveur en
> local.

### 3. Configuration des variables d'environnement

Copiez le fichier d'exemple et vérifiez les accès DB.

- **Linux / Mac / PowerShell :** `cp .env.example .env`
- **Windows (CMD) :** `copy .env.example .env`

**Important :** ajustez les variables selon l'environnement choisi :

- en local pur : la base doit être joignable sur `127.0.0.1:3306` (mysql natif,
  WSL, etc.)
- avec le conteneur Docker : la même configuration fonctionne car `docker
  compose` publie le port 3306 sur localhost.

```env
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=root
DB_DATABASE=db_flashCards
```

### 4. Initialisation de l'application

Générez la clé de sécurité et préparez la base de données.

```bash
# Générer la APP_KEY (remplit automatiquement le .env)
node ace generate:key

# Lancer les migrations (création des tables)
node ace migration:run

# Remplir la base avec des données de test (si le projet contient des seeders)
node ace db:seed
```
---

## 🖥️ Utilisation

### Lancer les containers Docker (optionnel)

Si vous souhaitez utiliser le conteneur MySQL/ phpMyAdmin, démarrez-les :

```bash
docker compose up -d db phpmyadmin
```

### Démarrer le serveur de développement local

```bash
npm run dev          # défini dans le package.json
# ou directement
node ace serve --watch
```

L'application sera disponible à [http://localhost:3333](http://localhost:3333).

Si vous utilisez phpMyAdmin ou un autre outil, configurez-le pour pointer vers votre
serveur MySQL local (`127.0.0.1:3306`).

### Commandes utiles

- **Arrêter le serveur :** `Ctrl+C` dans le terminal où le serveur tourne
- **Réinitialiser la base de données proprement :**
  ```bash
  node ace migration:refresh --seed
  ```
- **Gérer les containers Docker :**
  ```bash
  docker compose down          # arrêter les services
  docker compose down -v       # arrêter et supprimer les volumes
  ```

---

## 📌 Résumé des commandes (Quickstart)

```bash
git clone <url-du-repo>
cd <nom-du-projet>
npm install
cp .env.example .env
node ace generate:key
node ace migration:run
node ace db:seed
npm run dev            # ou node ace serve --watch
```
---

## 💡 Notes importantes

- **Sécurité :** Ne poussez jamais votre vrai fichier `.env` sur GitHub. Ajoutez `.env` et `node_modules/` à votre `.gitignore`.
- **Réseau Docker :** Si vous utilisez le conteneur MySQL, les ports sont exposés sur
  `localhost` grâce à la configuration du `docker-compose.yml`.
- **Commandes Node :** Les commandes `node ace` peuvent s'exécuter localement ; il
  n'est plus nécessaire de les préfixer par `docker compose exec` à moins que
  vous souhaitiez faire tourner l'application **dans le container**.
