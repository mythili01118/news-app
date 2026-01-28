import { useLocation } from "react-router-dom";

function NewsDetails() {
  const { state } = useLocation();

  if (!state) return <p>No data available</p>;

  return (
    <div style={{ padding: "16px" }}>
      <h2>{state.title}</h2>
      <p>{state.content}</p>

      {state.urlToImage && (
        <img src={state.urlToImage} width="300" />
      )}

      <p>
        <a href={state.url} target="_blank">Read more</a>
      </p>
    </div>
  );
}

export default NewsDetails;