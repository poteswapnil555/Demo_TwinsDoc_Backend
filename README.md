# TwinsDoc Backend

TwinsDoc Backend is the server-side application of a full-stack healthcare management system built with the MERN stack. It powers features like user authentication, appointment scheduling, medical record handling, and admin-level controls.

## 🛠️ Tech Stack

- Node.js  
- Express.js  
- MongoDB with Mongoose  
- JWT for authentication  
- bcrypt for password hashing  
- dotenv for environment configuration  

## 📁 Project Structure

/backend  
├── controllers/      # Logic for handling routes  
├── models/           # Mongoose data models  
├── routes/           # API routes  
├── middlewares/      # Auth, error handlers, etc.  
├── config/           # Database and environment setup  
├── utils/            # Helper functions  
├── .env              # Environment variables  
└── server.js         # Entry point  

## 🚀 Features

- User & Admin authentication (JWT-based)  
- Role-based access control  
- Appointment creation and management  
- Patient medical record management  
- Admin dashboard integration  
- Error handling and validations  

## 📦 Installation

Clone the repository and install dependencies:

git clone https://github.com/your-username/twinsdoc-backend.git  
cd twinsdoc-backend  
npm install  

## 🔑 Environment Variables

Create a `.env` file in the root directory and add the following variables:

PORT=5000  
MONGO_URI=your_mongo_connection_string  
JWT_SECRET=your_jwt_secret_key  

## 🏃‍♂️ Run the Server

To start the server in development mode:

npm run dev  

Or in production mode:

npm start  

## 📬 API Endpoints

Base URL: http://localhost:5000/api

### Auth  
POST /auth/register – Register a new user  
POST /auth/login – Login with credentials  

### Users  
GET /users/:id – Get user profile (Auth required)  

### Appointments  
POST /appointments – Book an appointment (Auth required)  
GET /appointments/:userId – Get user appointments  

### Admin  
GET /admin/users – Get all users (Admin only)  
GET /admin/appointments – Get all appointments  

## 🧪 Testing

Use Postman or Insomnia to interact with the API endpoints. Be sure to include the JWT token in the headers for protected routes.

## 🙌 Contributing

1. Fork this repo  
2. Create your branch: `git checkout -b feature/your-feature`  
3. Commit your changes: `git commit -am 'Add some feature'`  
4. Push to the branch: `git push origin feature/your-feature`  
5. Submit a pull request  



💡 TwinsDoc is a complete healthcare system. This is just the backend repo. Be sure to check out the Frontend and Admin Dashboard repositories for the full experience.
