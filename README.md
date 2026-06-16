# ShopKart — Nike Store Fullstack App

A fullstack e-commerce web application built with **React (Vite)** on the frontend and **Spring Boot** on the backend.

## 📁 Project Structure

```
Nike/
├── Project1/
│   └── Project1/        # Frontend — React + Vite
│       ├── src/
│       │   ├── components/
│       │   ├── pages/
│       │   ├── store/      # Redux
│       │   └── styles/
│       └── package.json
│
└── nikebackend/         # Backend — Spring Boot + MySQL
    ├── src/main/java/
    │   └── com/nike/nikebackend/
    │       ├── controller/
    │       ├── model/
    │       ├── repository/
    │       ├── services/
    │       ├── security/   # JWT Auth
    │       └── dto/
    └── pom.xml
```

## 🚀 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Vite, Redux Toolkit |
| Backend | Spring Boot 3, Spring Security, JWT |
| Database | MySQL 8 |
| Auth | JWT (BCrypt password hashing) |

## ⚙️ Setup

### Backend
1. Copy `nikebackend/src/main/resources/application.properties.example` to `application.properties`
2. Fill in your MySQL credentials
3. Run: `cd nikebackend && mvn clean spring-boot:run`

### Frontend
1. `cd Project1/Project1`
2. `npm install`
3. `npm run dev`

## 🌐 API Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/auth/login` | No | Login |
| POST | `/users` | No | Register |
| GET | `/api/products` | Yes | List products |
| POST | `/api/cart/add` | Yes | Add to cart |
| GET | `/api/cart` | Yes | View cart |
| DELETE | `/api/cart/remove/{id}` | Yes | Remove item |
