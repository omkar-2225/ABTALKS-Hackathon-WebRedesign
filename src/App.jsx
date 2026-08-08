import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Challenge from "./pages/ChallengeDay";

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
          path="/day/:dayNumber"
          element={<Challenge />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;