import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import FeaturedProjects from "./FeaturedProjects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
