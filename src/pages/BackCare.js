import React from 'react';
import PieChart from '../components/charts/PieChart';

const BackCare = () => {
    return (
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

    );
};

export default BackCare;