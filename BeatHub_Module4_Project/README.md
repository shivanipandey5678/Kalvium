# 🎵 BeatHub Backend Service

This is a production-ready backend service for BeatHub, built using Node.js, Express, MongoDB Atlas, and Docker. The application includes authentication, authorization, pagination, and rate limiting.

---

## 🚀 Deployed URL
https://kalvium-nonsql-deploy.onrender.com/

---

## 🔑 Test Credentials

### Admin User
email: admin@test.com  
password: 123456  

### Normal User
email: user1@test.com  
password: 123456  

---

## ✅ Features Implemented

- 🔐 JWT Authentication (Login/Register)
- 🛡️ Role-Based Access Control (Admin & User)
- 📄 Pagination (Users API)
- 🚦 Rate Limiting (Prevents spam requests)
- ☁️ MongoDB Atlas (Cloud Database)
- 🐳 Dockerized Application
- 🔑 Environment Variables for security

---

## 📂 Project Structure
src/
├── controllers/
├── models/
├── routes/
├── middlewares/
├── utils/
├── app.js
└── index.js


---

## 🛠️ Run Locally (Docker)

### Step 1: Build Image
docker build -t beathub .

### Step 2: Run Container

docker run -p 5000:5000 beathub


---

## 🔍 API Verification (Production Checks)

### ✅ Authentication
- User can register and login
- JWT token is generated

### ✅ Authorization (RBAC)
- Admin can access protected routes
- Normal users are restricted

### ✅ Security Checks
- 401 Unauthorized → without token
- 403 Forbidden → wrong role
- Password is never returned in API

### ✅ Performance
- Pagination implemented (`/api/users?page=1`)
- Rate limiting applied (429 after limit)

---

## ⚙️ Environment Variables

Create a `.env` file with:
PORT=5000
MONGO_URI=your_mongodb_atlas_url
JWT_SECRET=your_secret
JWT_EXPIRES_IN=1d


---

## 📦 Submission Info

- Backend is fully deployed and accessible
- No sensitive data is exposed
- Dockerized for reproducibility
- Production-ready API

---

## 💯 Conclusion

This backend service is production-ready as it ensures:
- Secure authentication & authorization
- Protection against abuse (rate limiting)
- Efficient data handling (pagination)
- Clean architecture & deployment readiness