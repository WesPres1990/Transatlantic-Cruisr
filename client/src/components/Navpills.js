import React from "react";

const Navpills = props => (
  <ul className="nav nav-tabs">
    <li onClick={() => props.handlePageChange("Home")} className = "new-item">
    <a className = {props.currentPage === "Home" ? "nav-link active" : "nav-link"}>Home</a>
    </li>
    <li onClick={() => props.handlePageChange("About")} className = "new-item">
      <a className = {props.currentPage === "About" ? "nav-link active" : "nav-link"}>About</a>
    </li>
    <li onClick={() => props.handlePageChange("Blog")} className = "new-item">
    <a className = {props.currentPage === "Blog" ? "nav-link active" : "nav-link"}>Blog</a>
    </li>
    <li onClick={() => props.handlePageChange("Contact")} className = "new-item">
      <a className = {props.currentPage === "Contact" ? "nav-link active" : "nav-link"}>Contact</a>
    </li>
    <li onClick={() => props.handlePageChange("Cunard Line")} className = "new-item">
      <a className = {props.currentPage === "Cunard Line" ? "nav-link active" : "nav-link"}>Cunard Line</a>
    </li>
    <li onClick={() => props.handlePageChange("Holland-America Line")} className = "new-item">
      <a className = {props.currentPage === "Holland-America Line" ? "nav-link active" : "nav-link"}>Holland-America Line</a>
    </li>
    <li onClick={() => props.handlePageChange("Royal Caribbean")} className = "new-item">
      <a className = {props.currentPage === "Royal Caribbean" ? "nav-link active" : "nav-link"}>Royal Caribbean</a>
    </li>
    <li onClick={() => props.handlePageChange("Princess Cruises")} className = "new-item">
      <a className = {props.currentPage === "Princess Cruises" ? "nav-link active" : "nav-link"}>Princess Cruises</a>
    </li>
    <li onClick={() => props.handlePageChange("P&O Cruises")} className = "new-item">
      <a className = {props.currentPage === "P&O Cruises" ? "nav-link active" : "nav-link"}>P&amp;O Cruises</a>
    </li>
  </ul>
);

export default Navpills;
