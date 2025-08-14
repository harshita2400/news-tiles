import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, [category]);

  return (
    <div style={{ padding: "20px" }}>
      {/* Centered Heading */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h2
          style={{
            fontWeight: "bold",
            fontSize: "2rem",
            position: "relative",
            display: "inline-block",
            paddingBottom: "10px",
            color: "#222"
          }}
        >
          Latest <span className="badge bg-danger">News</span>
          <span
            style={{
              position: "absolute",
              left: 0,
              bottom: 0,
              height: "4px",
              width: "100%",
              background: "linear-gradient(90deg, #ff0000, #ffcc00)",
              borderRadius: "2px"
            }}
          ></span>
        </h2>
      </div>

      {/* Responsive Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "20px",
          justifyItems: "center"
        }}
      >
        {articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;
