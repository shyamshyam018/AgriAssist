import { Outlet } from "react-router-dom"; 
import HomeNavbar from "../components/HomeNavbar";
import Footer from "../components/NewsFooter";


const Home = () => {
  return (
    <div className="relative bg-gray-100">
      <HomeNavbar />
      
      <div >
        <Outlet /> 
      </div>

      <Footer />
    </div>
  );
};

export default Home;
