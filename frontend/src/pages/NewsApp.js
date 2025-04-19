import React from "react";
import NewsList from "../components/NewsList";
import NewsHero from "../components/NewsHero";
import Footer from "../components/NewsFooter";
import NewsNavbar from "../components/NewsNavbar";



const NewsApp = ({ articles }) => (
  <div>
    <NewsNavbar />
    <NewsHero />
    <NewsList articles={articles} />
    <Footer />
  </div>
);

export default NewsApp;