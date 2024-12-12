import React from "react";
import NewsList from "../components/NewsList";
import NewsHero from "../components/NewsHero";
import Footer from "../components/NewsFooter";

import NewsNavbar from "../components/NewsNavbar";

const NewsApp = () => {
  const articles = [
    { title: "News 1", description: "Description 1", imageUrl: "https://tinyurl.com/picpic018", link: "#" },
    { title: "News 1", description: "Description 1", imageUrl: "https://tinyurl.com/picpic018", link: "#" },
    { title: "News 1", description: "Description 1", imageUrl: "https://tinyurl.com/picpic018", link: "#" },
    { title: "News 1", description: "Description 1", imageUrl: "https://tinyurl.com/picpic018", link: "#" },
    { title: "News 1", description: "Description 1", imageUrl: "https://tinyurl.com/picpic018", link: "#" },
    { title: "News 1", description: "Description 1", imageUrl: "https://tinyurl.com/picpic018", link: "#" },
    // Add more articles
  ];

  return (
    <div>
      <NewsNavbar />
      <NewsHero />
      <NewsList articles={articles} />
      <Footer />
    </div>
  );
};

export default NewsApp;