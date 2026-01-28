import { useNavigate } from "react-router-dom";

function NewsCard({ news, id }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/news/${id}`, { state: news })}
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
        cursor: "pointer"
      }}
    >
      <h4>{news.title}</h4>
      <p>{news.description}</p>
    </div>
  );
}

export default NewsCard;