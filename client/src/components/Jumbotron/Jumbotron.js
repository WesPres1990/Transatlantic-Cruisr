import React from "react";

const Jumbotron = ({ children }) => (
  <div style={{ height: 700, width: 1300, clear: "both" }} className="jumbotron">
    {children}
  </div>
);

export default Jumbotron;
