import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import NewsApp from "./pages/NewsApp";
import PlantResearch from "./pages/PlantResearch";
import Recommendations from "./pages/Recommendations";
import Home from "./pages/Home";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="news" element={<NewsApp />} />
        <Route path="recommendations" element={<Recommendations />} />
        <Route path="plant-research" element={<PlantResearch />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
