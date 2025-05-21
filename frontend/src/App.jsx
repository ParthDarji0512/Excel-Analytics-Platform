import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./SignIn";
import ExcelVisualizer from "./ExcelVisualizer";
import ChartBuilder from "./ChartBuilder"; // <-- make sure you import this

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ExcelVisualizer />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/chart" element={<ChartBuilder />} /> {/* ✅ target page */}
      </Routes>
    </Router>
  );
}

export default App;