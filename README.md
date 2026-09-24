# Dialog360 - Self-Care & Usage Analytics Portal 📱📊

A modern, high-performance web-based self-care portal inspired by the MyDialog App. This enterprise-grade application is designed to provide real-time usage analytics, seamless package management, and responsive customer support for telecommunication users. Built with a mobile-first PWA approach to ensure accessibility and speed across all devices[cite: 1].

## 🚀 Tech Stack

### Frontend (Angular 18+ PWA)
* **Framework:** Angular 18 (Standalone Components + Signals)[cite: 1]
* **State Management:** NgRx Signal Store[cite: 1, 2]
* **UI/UX:** Angular Material + Tailwind CSS[cite: 1, 2]
* **Visualizations:** Chart.js / ECharts for real-time data[cite: 1, 2]
* **Network/Security:** RxJS Interceptors with silent JWT auto-refresh[cite: 1, 2]
* **Performance:** Service Workers (PWA) for offline caching, FCP < 1s[cite: 1, 2]

### Backend (Java Spring Boot Modular Monolith)
* **Core:** Java 17, Spring Boot 3.2
* **Security:** Spring Security 6, JWT (15min short-lived + 7d refresh token), BCrypt[cite: 2]
* **Database:** PostgreSQL (Relational data) + Redis (OTP & Live Caching)[cite: 2]
* **ORM:** Spring Data JPA, Hibernate[cite: 2]
* **API Documentation:** Swagger / OpenAPI 3[cite: 2]

### DevOps & Architecture
* **Design Pattern:** Modular Monolith (Architected ready to be split into Microservices)[cite: 2]
* **Modules:** API Gateway (8080), Auth (8081), Billing (8082), Usage (8083), Ticket (8084), Notification (8085)[cite: 2]
* **Infrastructure:** Dockerized containers, GitHub Actions, Apache Kafka, Eureka Ready[cite: 2]

---

## ✨ Key Features

1. **Real-Time Data Usage Dashboard:** Utilizes Angular Signals and Server-Sent Events (SSE) to push live network usage updates directly to Chart.js without freezing the main thread[cite: 1, 2].
2. **Secure Bill Pay & Package Activation:** Role-Based Route Guards (CanActivate) secure the payment flows. Includes a mock PayHere/Stripe integration for end-to-end testing[cite: 1, 2].
3. **Interactive Network Coverage Checker:** Integrates Leaflet.js and the Geolocation API to pinpoint user location and visualize 4G/5G signal strength polygons[cite: 1, 2].
4. **Smart Complaint Ticket System:** A highly optimized, lazy-loaded module supporting reactive forms and multipart file (screenshot/PDF) uploads[cite: 1, 2].
5. **OTP & eSIM Flow:** Redis-backed OTP generation with a strict 2-minute expiry for secure eSIM activations[cite: 2].

---

## 🗄️ Database Schema (PostgreSQL)

* `users` (id, dialog_number, email, role)[cite: 2]
* `packages` (id, name, price, data_limit)[cite: 2]
* `data_usage` (id, user_id, date, used_mb)[cite: 2]
* `bills` (id, user_id, amount, status)[cite: 2]
* `tickets` (id, user_id, category, status)[cite: 2]

---

## 🛠️ Getting Started

### Prerequisites
* Node.js (v20+) & Angular CLI (v18+)
* Java 17 & Maven
* PostgreSQL & Redis
* Docker (Optional for containerized setup)

### Installation

1. **Clone the repository**
   ```bash
   git clone [https://github.com/yourusername/dialog360-portal.git](https://github.com/yourusername/dialog360-portal.git)
   cd dialog360-portal