import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import NewsApp from "./pages/NewsApp";
import NewsPage from "./pages/NewsApp/NewsPage"; 
import PlantResearch from "./pages/PlantResearch";
import Recommendations from "./pages/Recommendations";
import Dashboard from "./pages/Recommendations/Dashboard";
import Dictionary from "./pages/Recommendations/Dictionary";
import Recommender from "./pages/Recommendations/Recommender";
import Contact from "./pages/Home/Contact";
import AboutUs from "./pages/Home/AboutUs";
import HomeContent from "./pages/Home/HomeContent";
import axios from "axios";

const App = () => {
  const [articles, setArticles] = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:5000/api/news")
      .then(res => {
        setArticles(res.data);
      })
      .catch(err => {
        console.error("Error loading articles", err);
        console.log("API is not available or there was an error connecting.");
      });
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="news" element={<NewsApp articles={articles} />}>
            <Route index element={<NewsApp articles={articles} />} />
            <Route path="aboutus" element={<AboutUs />} />
          </Route>         
          <Route path="news/:id" element={<NewsPage articles={articles} />} />
          <Route path="plant-research" element={<PlantResearch />} />
          <Route path="/" element={<Home />}>
            <Route index element={<HomeContent />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="recommendations" element={<Recommendations />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="dictionary" element={<Dictionary />} />
            <Route path="recommender" element={<Recommender />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
