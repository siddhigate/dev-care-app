import React from "react";

const Toggles = () => {
  return (
    <div className="options">
      <div className="option">
        <div>Back Care:</div>
        <div>
          <label className="switch">
            <input type="checkbox"></input>
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      <div className="option">
        <div>Eye Care:</div>
        <div>
          <label className="switch">
            <input type="checkbox"></input>
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      <div className="option">
        <div>Ear Care:</div>
        <div>
          <label className="switch">
            <input type="checkbox"></input>
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Toggles;
