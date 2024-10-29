# 🌦️ Weather_app
Weather_app est une application mobile de météo réalisée avec **React Native** et **Expo**, permettant aux utilisateurs de visualiser les conditions météorologiques en temps réel pour différents lieux. L'application utilise **WeatherAPI** pour obtenir les données météorologiques.

---

## 📑 Table des matières
- [Aperçu](#🔍-aperçu)
- [Fonctionnalités](#✨-fonctionnalités)
- [Prérequis](#⚙️-prérequis)
- [Installation](#🛠️-installation)
- [Utilisation](#🚀-utilisation)
- [Dépendances](#📦-dépendances)
- [API Météo](#🌐-api-météo)
- [Capture d'écran](#📸-capture-décran)
- [Contribution](#🤝-contribution)
- [Licence](#📄-licence)

---

## 🔍 Aperçu
**Weather_app** permet aux utilisateurs de rechercher et d’afficher en temps réel la météo de différentes villes pendant **7 jours**, offrant des informations détaillées comme :
- Température actuelle
- Humidité
- Vitesse du vent
- Description des conditions (ensoleillé, nuageux, etc.)

---

## ✨ Fonctionnalités
- **Recherche de météo en temps réel** par nom de ville
- **Affichage des informations météorologiques** :
    - Température
    - Humidité
    - Vitesse du vent
    - Description des conditions météorologiques

---

## ⚙️ Prérequis
- **Node.js** (version >= 14)
- **Expo CLI** pour gérer et tester l’application
- **Clé API** de [WeatherAPI](https://www.weatherapi.com/) (créez un compte gratuit pour obtenir votre clé)

---

## 🛠️ Installation

1. **Clonez ce dépôt** :
   ```bash
   git clone https://github.com/votre-utilisateur/weather_app.git
   cd weather_app
   ```
2. **Installez les dépendances** :
   ```bash
   npm install
   ```
3. **Créez un fichier `.env`** pour stocker votre clé API WeatherAPI :
   ```plaintext
   API_KEY=VotreCleAPI
   ```
4. **Lancez l'application** :
    - 
    - **Avec Expo** :
      ```bash
      npm start
      ```
    - **Pour Android** :
      ```bash
      npm run android
      ```
    - **Pour iOS** :
      ```bash
      npm run ios
      ```
---

## 🚀 Utilisation
Une fois l'application lancée, vous pouvez :
- Rechercher la météo d'une ville en entrant son nom dans la barre de recherche.
- Afficher les informations météorologiques actuelles et prévisionnelles pour 7 jours.

---
## 📦 Dépendances
Ce projet utilise plusieurs bibliothèques, notamment :
- `@expo/vector-icons` : Icônes vectorielles pour l'application.
- `axios` : Pour effectuer des requêtes HTTP vers l'API météo.
- `@react-navigation/native` & `@react-navigation/stack` : Pour la navigation entre les différentes pages de l'application.
- `@react-native-async-storage/async-storage` : Pour le stockage asynchrone.
- `tailwindcss` : Pour le style basé sur les classes de Tailwind.

Vous pouvez consulter le fichier `package.json` pour une liste complète des dépendances.

---

## 🌐 API Météo
L'application utilise **WeatherAPI** pour récupérer les données météorologiques. Voici un exemple de requête pour obtenir la météo actuelle d'une ville :

```bash
https://api.weatherapi.com/v1/current.json?key=VOTRE_CLE_API&q=Paris
```
Pour obtenir les prévisions sur 7 jours, utilisez la requête suivante :
```bash
https://api.weatherapi.com/v1/forecast.json?key=VOTRE_CLE_API&q=Paris&days=7
```
---

## 📸 Capture d'écran
Voici quelques captures d'écran de l'application pour illustrer l'interface utilisateur et les fonctionnalités :

### Page d'accueil avec recherche de ville
<<<<<<< HEAD
<div style="display: flex; flex-wrap: wrap; gap: 2px">
    <img src="https://imgur.com/ypBuC0P.jpg" alt="Page d'accueil" style="width: 200px; margin: 10px;"> 
    <img src="https://imgur.com/uaZ5e65.jpeg" alt="Page d'accueil" style="width: 200px; margin: 10px;">
    <img src="https://imgur.com/oSL8b2j.jpeg" alt="Page d'accueil" style="width: 200px; margin: 10px;">
    <img src="https://imgur.com/bu0Ko7Z.jpeg" alt="Page d'accueil" style="width: 200px; margin: 10px;">
</div>
=======
![Page d'accueil](https://i.imgur.com/6pPMjZg.jpeg) <!-- Remplacez par l'URL de votre capture d'écran -->

### Détails de la météo
![Détails de la météo](url_de_votre_capture_ecran_details) <!-- Remplacez par l'URL de votre capture d'écran -->

>>>>>>> 9d4b4c406175d6efc5afe0235d0b83deefea87e2
---

## 🤝 Contribution
Les contributions sont les bienvenues ! Si vous souhaitez contribuer à ce projet, veuillez suivre ces étapes :
1. Forkez le dépôt.
2. Créez une nouvelle branche (`git checkout -b feature/nouvelle-fonctionnalité`).
3. Faites vos modifications et validez-les (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`).
4. Poussez la branche (`git push origin feature/nouvelle-fonctionnalité`).
5. Ouvrez une pull request pour discuter des modifications.

---

## 📄 Licence
Ce projet est open source et peut être utilisé, modifié et distribué librement. Il n'y a pas de licence formelle associée à ce projet, mais nous encourageons la contribution et l'utilisation de ce code.

---

## Remerciements
Merci à tous ceux qui ont contribué au développement de cette application et à ceux qui ont partagé leurs idées et commentaires. Un remerciement spécial à l'équipe de **WeatherAPI** pour fournir une API fiable et facile à utiliser.
