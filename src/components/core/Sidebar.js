import React from "react";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-links">
        <li>
          <i className="fa-solid fa-house-chimney"></i>
          <span className="fw-bold">Dashboard</span>
        </li>
        <li>
          <i className="fa-solid fa-child"></i>
          <span>Back care</span>
        </li>
        <li>
          <i className="fa-solid fa-eye"></i>
          <span>Eye Care</span>
        </li>
        <li>
          <i className="fa-solid fa-ear-listen"></i>
          <span>Ear Care</span>
        </li>
        <li>
          <i className="fa-regular fa-face-smile-beam"></i>
          <span>Settings</span>
        </li>
        <li>
          <i className="fa-solid fa-gear"></i>
          <span>Settings</span>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
