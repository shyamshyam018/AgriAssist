import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import NewsApp from "./pages/NewsApp";
import PlantResearch from "./pages/PlantResearch";
import Recommendations from "./pages/Recommendations";
import Dashboard from "./pages/Recommendations/Dashboard";
import Dictionary from "./pages/Recommendations/Dictionary";
import Recommender from "./pages/Recommendations/Recommender";
import Contact from "./pages/Home/Contact";
import AboutUs from "./pages/Home/AboutUs";
import HomeContent from "./pages/Home/HomeContent";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="news" element={<NewsApp />} />
        <Route path="plant-research" element={<PlantResearch />} />

        <Route path="/" element={<Home />}>
          <Route index element={<HomeContent />} />
          <Route path="aboutus" element={<AboutUs/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Route>

        {/* Parent Route for Recommendations */}
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

export default App;
