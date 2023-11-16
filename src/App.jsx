import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { About, Header, Home, Studies, Portfolio, Skills } from "./components/Index.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/studies" element={<Studies />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
