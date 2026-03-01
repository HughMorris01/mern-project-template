# MERN Project Template

A professional-grade boilerplate for full-stack web applications built with the **MERN** stack (**MongoDB**, **Express**, **React**, **Node.js**). This repository is designed to streamline the transition from planning to production by incorporating a rigorous documentation and testing protocol.

## 🚀 Overview

This template provides a standardized folder structure, pre-configured development environments, and a comprehensive suite of project management documents. It is built to ensure architectural consistency, security (using **Helmet** and **CORS**), and a smooth developer experience with **Vite** and **Tailwind CSS**.

## 📁 Project Structure

The repository is organized into three primary directories to separate concerns and maintain a clean workflow:

### 1. `/docs` — Project Management
Contains the "Triple-Doc Protocol" used to manage the project lifecycle:
* **Project Requirements Document (PRD):** Defines the "what" and "why" of the project.
* **Technical Design Document (TDD):** The technical blueprint including database schemas, API endpoints, and component hierarchies.
* **Testing and QA (UAT):** A structured plan to verify functionality with screenshot evidence.

### 2. `/backend` — Server-Side
A robust Express server configured with:
* **ES6 Modules:** Using `"type": "module"` for modern JavaScript syntax.
* **Security Middleware:** Pre-integrated with **Helmet** for secure headers and **CORS**.
* **Database:** **Mongoose** for MongoDB object modeling.
* **Payments:** **Stripe** integration ready.
* **Logging:** **Morgan** for HTTP request logging.

### 3. `/frontend` — Client-Side
A modern React application powered by **Vite**:
* **Styling:** Fully integrated with **Tailwind CSS**.
* **Build Tool:** Vite for lightning-fast development and optimized production builds.
* **Architecture:** Decoupled from the backend for independent scaling.

## 🛠️ Getting Started

### Prerequisites
* Node.js (v18+)
* MongoDB (Local or Atlas)
* VS Code (Recommended)

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/HughMorris01/mern-project-template.git](https://github.com/HughMorris01/mern-project-template.git)
   ```

2. **Setup Backend:**
   ```bash
   cd backend
   npm install
   cp example.env .env
   # Update .env with your credentials
   npm run dev
   ```

3. **Setup Frontend:**
   ```bash
   cd ../frontend
   npm install
   # Configure tailwind.config.js as needed
   npm run dev
   ```

## 📜 License
This project is open-source and available under the **ISC License**.
