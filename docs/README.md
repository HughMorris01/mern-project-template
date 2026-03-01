# 🚀 MERN Project Template

This is a standardized, production-grade boilerplate for full-stack web applications built with the **MERN** stack (**MongoDB**, **Express**, **React**, **Node.js**). This repository is designed to eliminate architectural overhead and provide a rigid, documentation-first framework for high-quality software delivery.

---

## ⚡ Quick Start: Using This Template

This repository uses a **Manual Swap** protocol for documentation. Once you have created your new repository from this template, follow these steps immediately to initialize your project:

1. **Initialize the README:** Delete this file (`README.md`) and rename `example.README.md` to `README.md`.
2. **Setup Your Docs:** Navigate to the `/docs` directory and begin filling out the `01-prd.md` to define your project scope.
3. **Configure Environments:** Create `.env` files in both the `/frontend` and `/backend` directories based on the provided `example.env` files.

---

## 📁 Repository Structure

The project is strictly organized into three primary modules to maintain clean separation of concerns:

### 1. `/docs` — Project Management
Contains the "Triple-Doc Protocol" for managing the project lifecycle:
* **PRD (01-prd.md):** Business goals and user personas.
* **TDD (02-tdd.md):** Technical blueprint, schemas, and API routing.
* **UAT (03-uat-plan.md):** Manual testing plan with screenshot evidence.
* **README.md:** A dedicated documentation guide for stakeholders.

### 2. `/backend` — Server-Side
* **Architecture:** Modular Express server featuring dedicated `/controllers`, `/models`, and `/routes`.
* **Security:** Integrated **Helmet.js** for secure headers and **CORS** for origin management.
* **Data:** Mongoose ODM for MongoDB object modeling.

### 3. `/frontend` — Client-Side
* **Build Tool:** Powered by **Vite** for lightning-fast HMR and optimized builds.
* **Styling:** Fully integrated with **Tailwind CSS**.
* **Organization:** Clean directory structure featuring `/components`, `/screens`, and `/store` for state management.

---

## 🛠️ Core Stack
* **Database:** MongoDB & Mongoose
* **Backend:** Express.js & Node.js
* **Frontend:** React.js (Vite)
* **Styling:** Tailwind CSS
* **Planning:** Standardized SDLC Documentation

---

## 📜 License
This template is open-source and available under the **ISC License**.