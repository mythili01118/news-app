import { useState } from "react";
import NewsCard from "./NewsCard";
import "./App.css"; 

const API_URL = "https://newsapi.org/v2/everything?q=tesla&from=2025-12-28&sortBy=publishedAt&apiKey=7a93c95108c7474eb3976512a59a27e0";

function NewsList() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showNews, setShowNews] = useState(false);

  const handleClick = async () => {
    setShowNews(true);
    setLoading(true); 

    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setNews(data.articles || []);
    } catch (err) {
      console.error(err);
      setNews([]);
    } finally {
      setLoading(false);
    }
  };

 
  const isCentered = !showNews || (showNews && loading);

  return (
    <div className={`news-list-page ${isCentered ? "centered-page" : ""}`}>
     
      {!showNews ? (
        <div className="top-news-box" onClick={handleClick}>
          Top News
        </div>
      ) : loading ? (
        <div className="top-news-box">Loading news...</div>
      ) : (
        <h2 className="top-news-title">Top News</h2>
      )}

    
      {showNews && !loading && news.length > 0 && (
        <div className="news-cards-wrapper-full">
          {news.map((item, index) => (
            <NewsCard key={index} news={item} id={index} />
          ))}
        </div>
      )}

  
      {showNews && !loading && news.length === 0 && <p>No news available</p>}
    </div>
  );
}

export default NewsList;