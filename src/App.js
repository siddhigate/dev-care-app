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
import Exercise from "./screens/Exercise";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/backcare" element={<BackCare />} />
      <Route path="/eyecare" element={<EyeCare />} />
      <Route path="/earcare" element={<EarCare />} />
      <Route path="/exercise" element={<Exercise />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
