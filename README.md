# ⚡ Flashcards

Une application web pour créer et réviser des **flashcards** organisées par **Decks**.

---

## 📝 Description

L'objectif de ce projet est de proposer un outil simple et élégant pour gérer des
jeux de cartes de révision. Chaque "deck" contient un ensemble de cartes
question/réponse. L'interface offre un retour visuel en 3D (effet `flip`) pour
passer de la question à la réponse, et permet de naviguer rapidement entre les
éléments.



---

## 🛠️ Installation

1. **Cloner le dépôt**

```bash
    git clone https://github.com/StepCode3630/flashcards.git
    cd flashcards/src
```

2. **Installer les dépendances**

```bash
    npm install
```

3. **Configuration du fichier `.env`**

   Copiez l'exemple et ajustez les valeurs. La base MySQL écoute le port
   **6033**.

  ```bash
cp .env.example .env   # linux/mac/PowerShell
# ou
copy .env.example .env # cmd.exe
```

   Exemple de configuration :

   ```env
DB_HOST=127.0.0.1
DB_PORT=6033
DB_USER=root
DB_PASSWORD=root
DB_DATABASE=flashcards
```

4. **Démarrer la base de données**

```bash
    docker compose up -d
```

5. **Exécuter les migrations**

```bash
  node ace migration:run
```

6. **Lancer le serveur de développement**

```bash
  npm run dev
```

   L'application sera accessible sur <http://localhost:3333>.

---

## ⚡ Commandes utiles

```bash
# Démarrer les containers (MySQL, phpMyAdmin...)
docker compose up -d

# Arrêter et supprimer les containers
docker compose down

docker compose down -v  # supprime aussi les volumes

# Régénérer la base de données
db=migration:refresh --seed
node ace migration:fresh --seed
node ace migration:refresh --seed
```

---

## 📝 Résumé rapide

```bash
git clone https://github.com/StepCode3630/flashcards.git
cd flashcards/src
npm install
cp .env.example .env
# configurer .env avec port 6033
docker compose up -d
node ace migration:run
npm run dev
```
