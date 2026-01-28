import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsList from "./components/NewsList";
import NewsDetails from "./components/NewsDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewsList />} />
        <Route path="/news/:id" element={<NewsDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;