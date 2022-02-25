import React from 'react';
import { LineChart } from '../components/charts/LineChart';
import PieChart from '../components/charts/PieChart';

const EyeCare = () => {
    return (
        <div className="main-graph-wrapper">
        <main className="main">
          <h1 clasName="mb-xxl">Eye Care</h1>
          <div className="line-graph">
            <LineChart> </LineChart>
          </div>
        </main>
        <div className="cards-container">
            <div className="card">
              <p className="fw-bold fs-lg">How it works?</p>
              <p className="fs-sm mb-md">Find out how this feature works</p>
              <button className="btn btn-primary">Find out</button>
            </div>
            <div className="card">
              <p className="fw-bold fs-lg">Eye Exercises</p>
              <p className="fs-sm mb-md">Get to know some eye exercises to relax your eyes.</p>
              <button className="btn btn-primary">Find out</button>
            </div>
        </div>
      </div>

    );
};

export default EyeCare;