import Nav from "./components/core/Nav";
import Sidebar from "./components/core/Sidebar";
import "./css/style.css";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import PieChart from "./components/charts/PieChart";

function App() {
  const [dashboard, setDashboard] = useState(false);

  return (
    <>
      <Nav></Nav>

      <div className="main-wrapper">
        <Sidebar setDashboard={setDashboard}></Sidebar>

        {dashboard && <Dashboard />}

        <div className="main-graph-wrapper">
          <main className="main">
            <h1>Back Care</h1>
            <div className="graph">
              <PieChart></PieChart>
            </div>
          </main>
          <div className="cards-container">
              <div className="card">
                <p className="fw-bold fs-lg">How it works?</p>
                <p className="fs-sm mb-md">Find out how this feature works</p>
                <button className="btn btn-primary">Find out</button>
              </div>
              <div className="card">
                <p className="fw-bold fs-lg">Take new pics</p>
                <p className="fs-sm mb-md">Will help the app to determine whether you are sitting in correct posture or not</p>
                <button className="btn btn-primary">Take pics</button>
              </div>
          </div>
        </div>

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
