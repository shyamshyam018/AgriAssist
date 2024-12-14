import { Outlet } from "react-router-dom";
import RecommenderNavbar from "../components/RecommenderNavbar";

const Recommendations = () => {
  return (
    <div>
      <RecommenderNavbar />
      <div className="container mx-auto px-4 py-6">
        <Outlet /> 
      </div>
    </div>
  );
};

export default Recommendations;
