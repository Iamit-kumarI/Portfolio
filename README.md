
---

# 🌐 Portfolio Frontend

![Portfolio Frontend](https://img.shields.io/badge/Portfolio-Frontend-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge)
![Firebase](https://img.shields.io/badge/Firebase-Hosting-orange?style=for-the-badge)

---

## 📖 Overview

This is the **frontend** of your personal portfolio.
It is built with **React** and consumes APIs from the **Portfolio Backend** to display:

* Coding stats (**LeetCode**, **CodeChef**)
* Projects & skills
* Contact form with email service integration

> The app is fully responsive and you can do deployment on **Firebase Hosting**.

---

## 👤 Author

**Amit Kumar**
📧 [amitkumaramitkumar15351@gmail.com](mailto:amitkumaramitkumar15351@gmail.com)

---

## ✨ Features

* ⚛️ Built with **React 18**
* 📊 Display coding stats from **LeetCode** and **CodeChef**
* 🖥️ Showcase projects and skills
* 📩 Contact form integrated with backend email service
* ☁️ Deployable on **Firebase Hosting**

---

## 🛠 Tech Stack

![React](https://img.shields.io/badge/React-18-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![CSS](https://img.shields.io/badge/CSS-Modern-purple)
![Firebase](https://img.shields.io/badge/Firebase-Hosting-orange)

---

## ⚙️ Setup & Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/portfolio-frontend.git
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root and add your backend URL:

```env
VITE_API_BASE_URL=https://portfolio-backend-ogn1.onrender.com
```

4. Run the app locally:

```bash
npm run dev
```

> Visit `http://localhost:5173` to see the app in action.

---

## 🔧 Build & Deploy to Firebase

1. Build the production version:

```bash
npm run build
```

2. Install Firebase CLI (if not installed):

```bash
npm install -g firebase-tools
```

3. Login to Firebase:

```bash
firebase login
```

4. Initialize Firebase hosting (only first time):

```bash
firebase init
```

* Select **Hosting**
* Choose existing project or create new
* Set `build` as public directory
* Configure as a single-page app: **Yes**

5. Deploy to Firebase:

```bash
firebase deploy
```

Your portfolio will be live at your Firebase hosting URL. Use it as you domain

---

## 🔗 Available Pages / Sections

* **Home / About Me**
* **Skills**
* **Projects**
* **Achievements / Coding Stats**
* **Contact / Email Form**

All API calls are connected to the backend at:

```
https://portfolio-backend-ogn1.onrender.com
```

---

## 🤝 Contributing

* Fork the repository & add features

---

## 📝 License

Iamit-kumarI License © 2026 Amit Kumar

---
