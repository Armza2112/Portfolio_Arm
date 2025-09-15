// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div>
        <nav style={{ padding: "10px", background: "#f0f0f0" }}>
          <Link to="/" style={{ marginRight: "10px" }}>
            Home
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Catch-all route */}
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
