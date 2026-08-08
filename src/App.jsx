import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Landing Page */}
        <Route path="/" element={<Landing />} />

        {/* Student Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Challenge Day */}
        <Route
          path="/day/12"
          element={<div>Day 12 coming soon...</div>}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;