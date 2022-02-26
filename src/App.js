import "./css/style.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import BackCare from "./screens/BackCare";
import EyeCare from "./screens/EyeCare";
import EarCare from "./screens/EarCare";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/backcare" element={<BackCare />} />
      <Route path="/eyecare" element={<EyeCare />} />
      <Route path="/earcare" element={<EarCare />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
