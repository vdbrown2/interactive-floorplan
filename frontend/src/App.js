import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import FloorPlan from "./FloorPlan";
import FloorplanEditor from "./FloorplanEditor";

function App() {
  return (
    <Router>
      <nav style={{ padding: 10 }}>
        <Link to="/" style={{ marginRight: 10 }}>Viewer</Link>
        <Link to="/editor">Editor</Link>
      </nav>
      <Routes>
        <Route path="/" element={<FloorPlan />} />
        <Route path="/editor" element={<FloorplanEditor />} />
      </Routes>
    </Router>
  );
}

export default App;
