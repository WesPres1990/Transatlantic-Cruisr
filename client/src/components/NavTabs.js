import React from "react";

const NavTabs = props => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <a onClick={() => props.handlePageChange("Home")} className="nav-link">
        Home
      </a>
    </li>
    <li className="nav-item">
      <a onClick={() => props.handlePageChange("About")} className="nav-link">
        About
      </a>
    </li>
    <li className="nav-item">
      <a onClick={() => props.handlePageChange("Blog")} className="nav-link">
        Blog
      </a>
    </li>
    <li className="nav-item">
      <a onClick={() => props.handlePageChange("Contact")} className="nav-link">
        Contact
      </a>
    </li>
    <li className="nav-item">
      <a onClick={() => props.handlePageChange("Cunard Line")} className="nav-link">
        Cunard Line
      </a>
    </li>
    <li className="nav-item">
      <a onClick={() => props.handlePageChange("Holland-America Line")} className="nav-link">
        Holland-America Line
      </a>
    </li>
    <li className="nav-item">
      <a onClick={() => props.handlePageChange("Royal Caribbean")} className="nav-link">
        Royal Caribbean
      </a>
    </li>
    <li className="nav-item">
      <a onClick={() => props.handlePageChange("Princess Cruises")} className="nav-link">
        Princess Cruises
      </a>
    </li>
    <li className="nav-item">
      <a onClick={() => props.handlePageChange("P&O Cruises")} className="nav-link">
        P&amp;O Cruises
      </a>
    </li>
  </ul>
);

export default NavTabs;
