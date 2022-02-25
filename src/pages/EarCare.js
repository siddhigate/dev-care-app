import React from 'react';
import { BarChart } from '../components/charts/BarChart';

const EarCare = () => {
    return (
        <div className="main-graph-wrapper">
        <main className="main">
          <h1 clasName="mb-xxl">Ear Care</h1>
          <div className="line-graph">
            <BarChart/>
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

export default EarCare;