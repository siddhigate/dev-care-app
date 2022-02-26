import Nav from "./components/core/Nav";
import Sidebar from "./components/core/Sidebar";
import "./css/style.css";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import BackCare from "./pages/BackCare";
import EyeCare from "./pages/EyeCare";
import EarCare from "./pages/EarCare";

function App() {
  const [dashboard, setDashboard] = useState(true);
  const [backcare, setBackcare] = useState(false);
  const [eyecare, setEyecare] = useState(false);
  const [earcare, setEarcare] = useState(false);

  const navigate = (id) => {
    const components = [setDashboard, setBackcare, setEyecare, setEarcare];

    for(let i = 0; i < components.length; i++) {
      if(i !== id){
        components[i](false);
      }
    }

    components[id](true);
  }

  return (
    <>
      <Nav></Nav>

      <div className="main-wrapper">
        <Sidebar navigate={navigate} ></Sidebar>

        {dashboard && <Dashboard />}

        {earcare && <EarCare/>}
        
        {eyecare && <EyeCare />}

        {backcare && <BackCare/>}

      </div>
    </>
  );
}

export default App;
