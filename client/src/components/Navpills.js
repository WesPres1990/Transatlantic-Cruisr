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
  </ul>
);

export default Navpills;
