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

- [Docker Desktop](https://www.docker.com/products/docker-desktop) (obligatoire, avec WSL2 activé sur Windows)
- [Git](https://git-scm.com/)
- Un navigateur ou un client API (Postman, Insomnia)

---

## 🛠️ Installation et Configuration

### 1. Cloner le projet

```bash
git clone <url-du-repo>
cd <nom-du-projet>
```

### 2. Lancer l'environnement Docker

Cette commande télécharge les images et lance les services Node, MySQL et phpMyAdmin en arrière-plan.

```bash
docker compose up -d
```

> _Note : Attendez environ 10-15 secondes lors du premier lancement pour que MySQL initialise la base._

### 3. Configuration des variables d'environnement

Copiez le fichier d'exemple et vérifiez les accès DB.

- **Linux / Mac / PowerShell :** `cp .env.example .env`
- **Windows (CMD) :** `copy .env.example .env`

**Important :** Vérifiez que votre `.env` contient ces valeurs pour Docker :

```env
DB_HOST=db
DB_PORT=3306
DB_USER=root
DB_PASSWORD=root
DB_DATABASE=db_flashCards
```

_(Où `db` correspond au nom du service MySQL dans votre `docker-compose.yml`)_

### 4. Initialisation de l'application

Générez la clé de sécurité et préparez la base de données.

```bash
# Générer la APP_KEY (remplit automatiquement le .env)
docker compose exec app node ace generate:key

# Lancer les migrations (création des tables)
docker compose exec app node ace migration:run

# Remplir la base avec des données de test (si le projet contient des seeders)
docker compose exec app node ace db:seed
```

---

## 🖥️ Utilisation

### Accès aux services

| Service            | URL                                            | Identifiants par défaut (si applicables)    |
| :----------------- | :--------------------------------------------- | :------------------------------------------ |
| **🚀 Application** | [http://localhost:3333](http://localhost:3333) | -                                           |
| **🗃️ phpMyAdmin**  | [http://localhost:8080](http://localhost:8080) | User: `root` / Pass: `root` (Serveur: `db`) |

### Démarrer le serveur de développement

Si Node n'est pas déjà lancé par Docker Compose, exécutez :

```bash
docker compose exec app node ace serve --watch
```

### Commandes utiles

- **Arrêter le projet :** `docker compose down`
- **Arrêter et supprimer les volumes (Reset complet) :** `docker compose down -v`
- **Réinitialiser la base de données proprement :** ```bash
  docker compose exec app node ace migration:refresh --seed

````

---

## 📌 Résumé des commandes (Quickstart)

```bash
docker compose up -d
docker compose exec app node ace generate:key
docker compose exec app node ace migration:run
docker compose exec app node ace db:seed
docker compose exec app node ace serve --watch
````

---

## 💡 Notes importantes

- **Sécurité :** Ne poussez jamais votre vrai fichier `.env` sur GitHub. Ajoutez `.env` et `node_modules/` à votre `.gitignore`.
- **Réseau Docker :** Tout tourne dans Docker, Node et MySQL communiquent via le même réseau interne.
- **Commandes Node :** Pour toute commande Node/Adonis, utilisez toujours le préfixe `docker compose exec app <commande>`.
