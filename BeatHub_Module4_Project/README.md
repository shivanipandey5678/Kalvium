- Docker

---

## ✅ Features Implemented

- 🔐 JWT Authentication (Login/Register)
- 🛡️ Role-Based Access Control (Admin & User)
- 📄 Pagination (Users API)
- 🚦 Rate Limiting
- ☁️ MongoDB Atlas
- 🐳 Dockerized Application
- 🔑 Environment Variables

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

docker run -p 5000:5000 --env-file .env beathub


---

## 🔍 API Verification

- 401 Unauthorized → without token
- 403 Forbidden → wrong role
- 429 Too Many Requests → rate limiting
- Pagination working (`/api/users?page=1`)
- Password is never returned

---

## ⚙️ Environment Variables


PORT=5000
MONGO_URI=your_mongodb_atlas_url
JWT_SECRET=your_secret
JWT_EXPIRES_IN=1d


---

## 📦 Submission Info

- Fully deployed backend
- Secure API
- Dockerized service
- Production-ready

---

## 💯 Conclusion

This backend ensures:
- Secure authentication & authorization
- Protection via rate limiting
- Efficient pagination
- Clean and scalable architecture