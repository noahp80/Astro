import React from "react";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="error-container">
      <div className="error-glow">
        <h1>404</h1>
        <p>Looks like you lost your way.</p>
        <p>Press ⭕ to try again.</p>
      </div>
    </div>
  );
};

export default ErrorPage;
