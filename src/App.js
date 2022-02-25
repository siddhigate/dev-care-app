import Nav from "./components/core/Nav";
import Sidebar from "./components/core/Sidebar";
import "./css/style.css";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import BackCare from "./pages/BackCare";
import EyeCare from "./pages/EyeCare";

function App() {
  const [dashboard, setDashboard] = useState(false);

  return (
    <>
      <Nav></Nav>

      <div className="main-wrapper">
        <Sidebar setDashboard={setDashboard}></Sidebar>

        {/* {dashboard && <Dashboard />} */}

        <EyeCare/>
        {/* <BackCare/> */}
        {/* <div style={{ flexGrow: "1" }}>
          <h1>Back Care</h1>
          <div class="main-graph" style={{ flexGrow: "1", padding: "2rem" }}>
            <div style={{ maxWidth: "500px", height: "100vh" }}>
              <div style={{ margin: "auto" }}></div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default App;
