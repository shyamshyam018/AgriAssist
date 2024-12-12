const NewsNavbar = () => (
    <nav className="bg-green-600 text-white px-6 py-4 mb-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">AgriAssist Home</h1>
        <ul className="flex space-x-4 ">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#news" className="hover:underline">About Us</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
  export default NewsNavbar;