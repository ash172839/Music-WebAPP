# 🎵 Music App (MERN Stack)

This is a full-stack **Music App** built using the **MERN (MongoDB, Express, React, Node.js)** stack. It allows users to register, log in, and access music-related features securely using **JWT authentication**.

---

## 🚀 Features

- 🔐 **User Registration & Login**
- 🧠 **React Hooks** for state and form handling
- 🔒 **Password encryption** using `bcryptjs`
- 🔑 **JWT token generation** for protected routes
- 🌐 **CORS**-enabled API
- 📡 RESTful API with Express
- 🧾 Schema validation with `Zod`
- 📁 Modular folder structure

---

## 🛠️ Tech Stack

### 🔧 Backend:
- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- **JWT** (`jsonwebtoken`)
- **BcryptJS**
- **CORS**
- **Dotenv** for environment management

### 🎨 Frontend:
- **React.js**
- **React Hooks** (`useState`, `useEffect`, `useForm`)
- **Zod** for validation
- **Axios** for API calls
- **Vite** or **Create React App** (depending on setup)
- **ShadCN UI / Tailwind CSS** for styling

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/music-app.git
cd music-app

2. Setup Backend
cd back-end
npm install
Create a .env file inside back-end/ with the following:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Run the backend server:
npm start

3. Setup Frontend

cd ../front-end
npm install
Run the frontend server:

npm run dev
🔐 Authentication Flow
Register: Sends user data to /api/register → Hashes password → Saves to DB → Returns JWT.

Login: Sends credentials to /api/login → Validates user → Returns JWT.

Frontend stores token and uses it for future protected API calls via Authorization: Bearer <token>.

📂 Project Structure

music-app/
├── front-end/       # React client
├── back-end/        # Express + MongoDB API
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   └── middlewares/
├── README.md
└── .env             # Environment variables
✨ Sample .env (Backend)

PORT=5000
MONGO_URI=mongodb://localhost:27017/musicapp
JWT_SECRET=supersecurekey
✅ Dependencies (Backend)

npm install express mongoose cors dotenv bcryptjs jsonwebtoken
✅ Dependencies (Frontend)

npm install axios react-hook-form zod @hookform/resolvers
```
📬 Contact
For any queries, 
## 👤 Connect with Me

- 🔗 [GitHub Profile](https://github.com/ash172839)
- 🔗 [LinkedIn Profile](https://www.linkedin.com/in/ashish-singh-5b14642b2)
