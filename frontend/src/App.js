import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RestaurantSearch from './components/RestaurantSearch'; 
import RestaurantDetails from './components/RestaurantDetails';
import AddRestaurant from './components/AddRestaurant';
import RestaurantList from './components/RestaurantList';
import './App.css';
function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1>Discover Best Dishes</h1>
          <nav>
            <Link to="/">Search Restaurants</Link>
            <Link to="/list">All Restaurants</Link> {}
            <Link to="/add">Add Restaurant</Link>
          </nav>
        </header>
        <main className="app-content">
          <Routes>
            <Route path="/" element={<RestaurantSearch />} />
            <Route path="/restaurant/:id" element={<RestaurantDetails />} />
            <Route path="/add" element={<AddRestaurant />} />
            <Route path="/list" element={<RestaurantList />} /> {}
          </Routes>
        </main>
      </div>
    </Router>
  );
}
export default App;