# 🏥 Health Zone  - Backend API

> **Ecosistema de Salud Preventiva e Inclusiva para Nicaragua**  
> Desarrollado por **Zonai Engineers** | *Hackathon Nicaragua*

---

## 📌 Descripción General

El **Backend de Health Zone** es una API RESTful construida con una **arquitectura en capas (Layered Architecture)**, diseñada bajo el principio **Offline-First**.
Su objetivo es servir como motor central para la gestión de constantes vitales (presión arterial y glucosa),
cálculo del semáforo de riesgo médico, vinculación de cuidadores y procesamiento de consultas de salud en lenguaje natural multilingüe (**Español, Miskito y Criollo**).

---

## 🛠️ Tech Stack & Herramientas

* **Runtime:** Node.js (v18+)
* **Lenguaje:** TypeScript
* **Framework:** Express.js
* **ORM:** Prisma ORM
* **Base de Datos:** PostgreSQL (Alojada en Supabase)
* **Seguridad:** Row Level Security (RLS) en base de datos + JWT / Middlewares
* **Inteligencia Artificial:** LLM Integrado para respuestas multilingües
* **Push Notifications:** Expo Server SDK

---

## 📂 Arquitectura del Proyecto

```text
src/
├── config/           # Configuración de servicios externos, BD y variables de entorno
├── controllers/      # Controladores de peticiones HTTP
├── middlewares/      # Middlewares de autenticación, validación y manejo de errores
├── routes/           # Rutas organizadas por módulos de trabajo
├── services/         # Lógica de negocio (Algoritmo de semáforo, servicio de IA)
├── types/            # Definiciones de interfaces y tipos en TypeScript
└── app.ts            # Servidor principal Express
