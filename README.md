# 🍴 The Local Gourmet - Restaurant Recommendation Web App

## 🌐 Project Overview

**The Local Gourmet** is a modern and visually engaging web application designed to help users discover the best dishes and restaurants across various cities. Built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**, the platform provides interactive restaurant search, detailed profiles, and a dynamic interface for both users and administrators to manage restaurant data.

## ✨ Features

- 🔍 **Restaurant Discovery by Name, Cuisine, or City**
- 🏙️ **Filter Restaurants by City**
- 🍱 **Detailed Pages** for Restaurants with Photos and Descriptions
- ⭐ **Ratings, Cuisine Types, and Best Food Items**
- 📸 **High-Quality Image Display for Each Restaurant**
- 🧾 **Admin Option to Add New Restaurants**
- 📱 **Responsive Design** for Desktop and Mobile Devices

## 🛠️ Technologies Used

### 💻 Frontend
- React.js
- CSS3

### 🔧 Backend
- Node.js
- Express.js

### 🗃️ Database
- MongoDB
- Mongoose

### 🔄 Middleware & Others
- CORS
- Express JSON Parser
- Axios for HTTP Requests

## 🧑‍💻 Setup Instructions

1. **Clone the Repository**<br>
git clone https://github.com/VankayalaJabili/Restaurant-Recommendation.git<br>
cd Restaurant-Recommendation<br>
2.**Install Frontend Dependencies**<br>
cd client<br>
npm install<br>
3. **Install Backend Dependencies**<br>
cd ../server<br>
npm install<br>
4. **Setup Environment Variables**<br>
Create a .env file in the server directory:<br>
PORT=5000<br>
MONGODB_URI=mongodb://localhost:27017/restaurantDB<br>
5. **Run the App**<br>
Start Backend:npm start<br>
Start Frontend:<br>
cd ../client<br>
npm start<br>
6.**Open your browser and go to: http://localhost:3000**<br>

## 📁 Project Structure
```
the-local-gourmet/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddRestaurant.js
│   │   │   ├── RestaurantDetails.js
│   │   │   ├── RestaurantList.js
│   │   │   └── RestaurantSearch.js
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── App.css
│   │   └── index.css
│   └── public/
├── server/
│   ├── models/
│   │   └── restaurant.model.js
│   ├── routes/
│   │   └── restaurants.js
│   ├── .env
│   └── index.js
└── README.md
```
