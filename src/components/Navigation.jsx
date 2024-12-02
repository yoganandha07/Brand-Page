import React from "react";
import logoimage from '/images/brand_logo.png'
 

const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img className="logo-image" src={logoimage} alt="logo-nike" />
      </div>
      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>
      <button>Login</button>
    </nav>
  );
};

export default Navigation;
